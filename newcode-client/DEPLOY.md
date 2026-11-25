# Deploy BOIT website (Vercel + GitHub)

Vite React SPA. GitHub auto-deploy on every push. SPA rewrites live in `vercel.json`.
Contact form calls a **separate** API project via `VITE_API_URL`.

## One-time setup — frontend

1. **Push latest code** to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New / Project** → Import the repo (or open existing `boi-twebsite`).
3. Project settings:
   - **Root Directory:** `newcode-client`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Environment Variables** (Project → Settings → Environment Variables):

   | Name | Value | Environments |
   |---|---|---|
   | `VITE_API_URL` | Backend origin, e.g. `https://your-api.vercel.app` (no trailing slash) | Production, Preview |

5. Redeploy after adding/changing `VITE_API_URL` (Vite bakes env into the build).
6. Spot-check:
   - `/`, `/product`, `/platform/insurance`, `/about`, `/contact`
   - Submit the contact form and confirm the API receives it

## One-time setup — backend (separate Vercel project)

On the API project, set at least:

| Name | Notes |
|---|---|
| `CORS_ORIGINS` | Must include `https://boi-twebsite.vercel.app` (and custom domain if any), comma-separated with local origins if needed |
| `BREVO_API_KEY` | Brevo secret |
| `BREVO_SENDER_EMAIL` | Verified sender |
| `BREVO_SENDER_NAME` | e.g. `BOIT Global` |
| `BREVO_RECIPIENT_EMAIL` | Inbox for leads |

If previews should hit the API too, also add each preview frontend origin, or use a pattern your CORS setup supports.

## Local development

1. Copy `newcode-client/.env.example` → leave `VITE_API_URL` empty.
2. Run API on `:3001` and `npm run dev` in `newcode-client`.
3. Vite proxies `/api` → `http://localhost:3001` (see `vite.config.js`).

Optional: set `VITE_API_URL` in `.env.local` to the deployed API to test against production backend from local UI.

## Every code change after that

1. Commit and push to `main`.
2. Vercel builds and deploys automatically.
3. PRs get a Preview URL — set `VITE_API_URL` for Preview if forms must work there.

## Checklist before first public launch

- [ ] `npm run build` succeeds locally inside `newcode-client`
- [ ] `VITE_API_URL` set on the frontend Vercel project
- [ ] Backend `CORS_ORIGINS` includes `https://boi-twebsite.vercel.app`
- [ ] Contact form succeeds on production (check Network → `/api/contact`)
- [ ] Deep links work after hard refresh (SPA rewrite)
- [ ] Dark / light mode OK on Product + Platform
- [ ] Custom domain + HTTPS (optional)

## Notes

- `vercel.json` rewrites unknown paths to `index.html` so React Router works.
- Never put Brevo / LinkedIn secrets in the Vite app — only `VITE_*` public values.
- Changing `VITE_API_URL` always requires a new frontend deploy.
