import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logoPath = path.join(__dirname, '..', 'assets', 'boit-logo-email.png');

export const LOGO_PNG = fs.readFileSync(logoPath);
export const LOGO_DATA_URI = `data:image/png;base64,${LOGO_PNG.toString('base64')}`;

/** Public https URL for email clients (Gmail blocks data: URIs). */
export function logoPublicUrl() {
  const explicit = process.env.EMAIL_LOGO_URL?.trim();
  if (explicit) return explicit;

  const api = process.env.PUBLIC_API_URL?.trim().replace(/\/+$/, '');
  if (api) return `${api}/email/boit-logo.png`;

  const vercel = process.env.VERCEL_URL?.trim().replace(/^https?:\/\//, '');
  if (vercel) return `https://${vercel}/email/boit-logo.png`;

  return '';
}
