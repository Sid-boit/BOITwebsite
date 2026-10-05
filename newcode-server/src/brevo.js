const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

function requiredEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    const error = new Error(`Missing ${name}`);
    error.code = 'BREVO_NOT_CONFIGURED';
    throw error;
  }
  return value;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label, value) {
  if (!value) return '';
  return `<tr>
    <td style="padding:8px 12px 8px 0;color:#5c6570;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
    <td style="padding:8px 0;color:#121417;">${escapeHtml(value)}</td>
  </tr>`;
}

export function brevoConfig() {
  return {
    apiKey: requiredEnv('BREVO_API_KEY'),
    senderEmail: requiredEnv('BREVO_SENDER_EMAIL'),
    senderName: process.env.BREVO_SENDER_NAME?.trim() || 'BOIT Global',
    recipientEmail: process.env.BREVO_RECIPIENT_EMAIL?.trim() || 'hello@boitglobal.com',
  };
}

export async function sendContactEmail(lead) {
  const { apiKey, senderEmail, senderName, recipientEmail } = brevoConfig();
  const sender = { email: senderEmail, name: senderName };

  await Promise.all([
    deliver(apiKey, {
      sender,
      to: [{ email: recipientEmail, name: 'BOIT Global' }],
      replyTo: { email: lead.email, name: lead.name },
      subject: `New website enquiry from ${lead.name}`,
      htmlContent: operationsHtml(lead),
      textContent: operationsText(lead),
    }),
    deliver(apiKey, {
      sender,
      to: [{ email: lead.email, name: lead.name }],
      replyTo: { email: senderEmail, name: senderName },
      subject: 'Thank you for contacting BOIT Global',
      htmlContent: thankYouHtml(lead),
      textContent: thankYouText(lead),
    }),
  ]);
}

function operationsText(lead) {
  return [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : null,
    lead.phone ? `Phone: ${lead.phone}` : null,
    '',
    lead.message,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

function operationsHtml(lead) {
  return `<div style="font-family:Georgia,serif;font-size:15px;line-height:1.5;color:#121417;">
    <p style="margin:0 0 16px;">A new message came in from the BOIT Global website.</p>
    <table style="border-collapse:collapse;">
      ${row('Name', lead.name)}
      ${row('Email', lead.email)}
      ${row('Company', lead.company)}
      ${row('Phone', lead.phone)}
    </table>
    <p style="margin:20px 0 8px;color:#5c6570;">Message</p>
    <p style="margin:0;white-space:pre-wrap;">${escapeHtml(lead.message)}</p>
  </div>`;
}

function thankYouText(lead) {
  return [
    `Hi ${lead.name},`,
    '',
    'Thank you for contacting BOIT Global and for your interest.',
    'We have received your message and will get back to you soon.',
    '',
    'BOIT Global',
  ].join('\n');
}

function thankYouHtml(lead) {
  return `<div style="font-family:Georgia,serif;font-size:15px;line-height:1.6;color:#121417;">
    <p style="margin:0 0 14px;">Hi ${escapeHtml(lead.name)},</p>
    <p style="margin:0 0 14px;">Thank you for contacting BOIT Global and for your interest.</p>
    <p style="margin:0 0 14px;">We have received your message and will get back to you soon.</p>
    <p style="margin:24px 0 0;">BOIT Global</p>
  </div>`;
}

async function deliver(apiKey, payload) {
  const response = await fetch(BREVO_URL, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    const error = new Error(`Brevo rejected the message (${response.status})`);
    error.code = 'BREVO_REJECTED';
    error.status = response.status;
    error.detail = body.slice(0, 500);
    throw error;
  }

  return response.json().catch(() => ({}));
}
