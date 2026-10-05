# BOIT Global — website (React frontend)

Frontend-only React implementation of the BOIT Global site. The visual language,
motion system and the scroll-driven card deck are ported from the Claude Design
project (`Home.dc.html` / `Products.dc.html`); all copy and data come from
`WEBSITE-CONTENT.md`.

## Run

```bash
npm install
```

```bash
npm run dev
```

Dev server: http://localhost:5180 · build with `npm run build`.

## Structure

```
src/
  data/          all page copy, transcribed from WEBSITE-CONTENT.md
    site.js      nav, mega-menus, Home, About, Case Studies, Media, Contact, footer, cookie, 404
    services.js  services overview + the six category detail pages
    products.js  product hub, insurance/banking platforms, AI capabilities
  components/
    ScrollDeck   the scroll-driven horizontal card deck (see below)
    Header       sticky header with Product / Services mega-menus + mobile drawer
    Footer, CtaBand, Commitment, Marquee, PageHero, CookieConsent
    motion/      Cursor, ScrollProgress, Reveal, SplitText, Magnetic, TorusCanvas
  pages/         one file per route
  styles/global.css  design tokens + motion primitives
  assets/        images copied from boit-global/src/assets
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About — offices, leadership, commitments |
| `/services` | Services overview |
| `/services/:slug` | 6 category pages (life/health/general insurance, retail/corporate/investment banking) |
| `/product` | Product hub |
| `/product/insurance`, `/product/banking` | Platform pillars |
| `/product/capabilities` | AI-powered capabilities |
| `/case-studies`, `/media`, `/contact` | — |
| `*` | 404 |

## The scroll deck

`ScrollDeck` is the horizontal effect from the Home design, generalised to any
number of cards and reused on **Home, Services, service category pages, Product
and both platform pages**.

A tall section (`100 + n × 120` vh) pins a viewport-height stage. As you scroll:

1. cards sit side by side as collapsed tabs,
2. they blend into a single-file track,
3. the track moves right-to-left, holding one card at full size at a time,

with progress dots and a `01 / 03 — … · keep scrolling` label tracking position.
The deck is a pure function of scroll offset, driven by a coalesced scroll
listener rather than a permanent rAF loop.

Below 900px wide — or when `prefers-reduced-motion: reduce` is set — the deck
renders as a plain stacked card list instead.

## Notes

- Frontend only. The contact form validates and shows its success state; wire
  `onSubmit` in `src/pages/Contact.jsx` to a backend when one exists.
- Client logos ship as text chips in the marquee, matching the design. The files
  in `src/assets/clients/` are mostly unlabelled screenshots, so they are not
  mapped to the 18 client names in the content doc — swap them in once the
  filenames are disambiguated.
