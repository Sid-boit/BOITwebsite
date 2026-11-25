/**
 * Backend base URL.
 * - Production / preview: set VITE_API_URL to the API Vercel origin
 *   (e.g. https://your-api.vercel.app) — no trailing slash.
 * - Local: leave unset and Vite proxies /api → http://localhost:3001.
 */
export function apiUrl(path = '') {
  const base = String(import.meta.env.VITE_API_URL || '')
    .trim()
    .replace(/\/+$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;
  return `${base}${suffix}`;
}
