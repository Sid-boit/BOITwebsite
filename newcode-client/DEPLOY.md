# Deploy BOIT website (Vercel + GitHub)

Vite React SPA. GitHub auto-deploy on every push. SPA rewrites live in `vercel.json`.

## One-time setup

1. **Push latest code** to GitHub (`Sid-boit/BOITwebsite` or your working remote).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import the GitHub repo.
3. Project settings:
   - **Root Directory:** `newcode-client`
   - **Framework Preset:** Vite (auto)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. Confirm the production URL loads.
5. Spot-check SPA routes (hard refresh on each):
   - `/`
   - `/product`
   - `/platform/insurance`
   - `/about`
   - `/contact`
6. **Custom domain** (optional): Vercel → Project → Settings → Domains → add `boitglobal.com` / `www` → update DNS as shown.

## Every code change after that

1. Commit and push to `main` (or your production branch).
2. Vercel builds and deploys automatically.
3. Pull requests get a **Preview URL** — share before merging.

## Checklist before first public launch

- [ ] `npm run build` succeeds locally inside `newcode-client`
- [ ] Production URL opens home + deep links without 404 on refresh
- [ ] Dark / light mode looks correct on Product + Platform
- [ ] Contact form path is clear (mailto / backend / Formspree — no secrets in frontend)
- [ ] Favicon and `boIT` branding look correct in the browser tab
- [ ] Custom domain + HTTPS attached (if using company domain)
- [ ] LinkedIn Media cards still use screenshots (manual for now)

## Notes

- `vercel.json` rewrites unknown paths to `index.html` so React Router works.
- Hashed `/assets/*` files get long-cache headers; HTML stays fresh each deploy.
- Do not put LinkedIn / API tokens in the Vite app — use a backend or serverless function later if needed.
