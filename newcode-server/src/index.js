import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendContactEmail } from './brevo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const PORT = Number(process.env.PORT) || 3001;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map();

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);

const origins = (process.env.CORS_ORIGINS || 'http://localhost:5180,http://127.0.0.1:5180')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({ origin: origins }));
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  const configured = Boolean(
    process.env.BREVO_API_KEY?.trim() && process.env.BREVO_SENDER_EMAIL?.trim(),
  );
  res.json({ ok: true, email: configured ? 'ready' : 'missing-credentials' });
});

app.post('/api/contact', async (req, res) => {
  if (!allow(req.ip)) {
    return res.status(429).json({ error: 'Too many messages. Please try again in a little while.' });
  }

  const lead = readLead(req.body);
  if (lead.error) {
    return res.status(400).json({ error: lead.error });
  }

  try {
    await sendContactEmail(lead.value);
    return res.json({ ok: true });
  } catch (error) {
    if (error.code === 'BREVO_NOT_CONFIGURED') {
      console.error(error.message);
      return res.status(503).json({
        error: 'Email is not set up yet. Please write to us directly in the meantime.',
      });
    }
    console.error('Contact email failed:', error.status || '', error.detail || error.message);
    return res.status(502).json({
      error: 'We could not send your message. Please try again, or email us directly.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`BOIT API listening on http://localhost:${PORT}`);
});

function allow(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function readLead(body) {
  const name = clean(body?.name, 120);
  const email = clean(body?.email, 254);
  const company = clean(body?.company, 160);
  const phone = clean(body?.phone, 40);
  const message = clean(body?.message, 4000);

  if (!name) return { error: 'Please enter your name.' };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid work email.' };
  }
  if (!message) return { error: 'Please tell us how we can help.' };

  return { value: { name, email, company, phone, message } };
}

function clean(value, max) {
  return String(value ?? '').trim().slice(0, max);
}
