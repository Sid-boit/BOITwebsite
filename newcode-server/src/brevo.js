import { LOGO_DATA_URI, logoPublicUrl } from './logo.js';

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

function logoSrc() {
  // Prefer public https (best Gmail support). Else embed bytes so the image
  // cannot 404 like a missing hosted file.
  const pub = logoPublicUrl();
  if (pub && /^https:\/\//i.test(pub)) return pub;
  return LOGO_DATA_URI;
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
    'We have received your message and will get back to you within one business day.',
    '',
    'Warm regards,',
    'The BOIT Global team',
    'marcom@boitglobal.com',
  ].join('\n');
}

function thankYouHtml(lead) {
  const firstName = escapeHtml(lead.name.split(/\s+/)[0] || lead.name);
  const logo = escapeHtml(logoSrc());

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#f1f4f3;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f4f3;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e8e6;">
          <tr>
            <td style="height:6px;background:linear-gradient(90deg,#4931bd,#2f6f8f,#13a99b);"></td>
          </tr>
          <tr>
            <td style="padding:36px 36px 12px;font-family:Helvetica,Arial,sans-serif;color:#0c1512;">
              <p style="margin:0 0 20px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#13a99b;font-weight:700;">BOIT Global</p>
              <h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;letter-spacing:-0.03em;font-weight:700;">Thanks for reaching out, ${firstName}.</h1>
              <p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#414b47;">
                We have received your message and appreciate your interest in BOIT Global.
              </p>
              <p style="margin:0 0 14px;font-size:16px;line-height:1.65;color:#414b47;">
                Our team will get back to you within <strong style="color:#0c1512;">one business day</strong>.
              </p>
              <p style="margin:28px 0 0;font-size:15px;line-height:1.6;color:#414b47;">
                Warm regards,<br />
                <strong style="color:#0c1512;">The BOIT Global team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 36px 32px;border-top:1px solid #eef2f1;" align="left">
              <img src="${logo}" alt="BOIT Global" width="140" height="60" style="display:block;width:140px;height:auto;border:0;outline:none;text-decoration:none;" />
              <p style="margin:14px 0 0;font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#6b7671;">
                AI-native transformation for insurance and banking<br />
                <a href="mailto:marcom@boitglobal.com" style="color:#4931bd;text-decoration:none;">marcom@boitglobal.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
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
