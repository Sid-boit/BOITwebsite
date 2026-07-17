# BOIT Global — Web Platform

A dark, high-performance marketing SPA for **BOIT Global** (enterprise IT & Fintech), built with the
[Vectr](https://www.vectrfl.com/) design language reinterpreted in a dark, electric-blue theme.

## Tech stack

| Concern     | Choice                                             |
| ----------- | -------------------------------------------------- |
| Framework   | React 18 + Vite                                    |
| Routing     | React Router DOM v6                                |
| Styling     | Tailwind CSS (dark-mode, custom design tokens)     |
| Animation   | Framer Motion (scroll-linked, page transitions)    |
| 3D          | `@react-three/fiber` + `@react-three/drei` + three |

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Design system

- **Palette** — deep blacks (`ink.*`), off-whites (`bone.*`), electric-blue accent (`electric.*`).
- **Type** — Space Grotesk (display, tight tracking) + Inter (body).
- **Motion** — `ease-expo` `cubic-bezier(0.16,1,0.3,1)` across entrances, page transitions, and
  scroll-linked narratives.
- Tokens live in `tailwind.config.js`; global primitives (`.eyebrow`, `.glass`, `.hairline`,
  `.text-gradient`) in `src/styles/index.css`.

## Folder structure

```
boit-global/
├── index.html                 # Fonts, meta, root mount
├── tailwind.config.js         # Design tokens (color, type, animation)
├── postcss.config.js
├── vite.config.js             # @ alias + manual chunks (three / motion)
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # Entry — wraps <App/> in <BrowserRouter>
    ├── App.jsx                # Routes + AnimatePresence page transitions
    ├── styles/
    │   └── index.css          # Tailwind layers + base + component primitives
    ├── data/
    │   └── content.js         # Approved copy (single source of truth)
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx         # Global chrome wrapper
    │   │   ├── Navbar.jsx         # Transparent → blur nav, centered links, mobile drawer
    │   │   ├── Footer.jsx         # CTA band + meta row
    │   │   ├── ScrollProgress.jsx # Top scroll-progress bar
    │   │   └── PageHero.jsx       # Shared inner-page hero
    │   ├── ui/
    │   │   ├── Button.jsx         # Pill button (primary / ghost / minimal)
    │   │   ├── Accordion.jsx      # Borderless accordion for dense features
    │   │   ├── HoverList.jsx      # Interactive hover-list
    │   │   ├── Reveal.jsx         # Reveal + word-staggered TextReveal
    │   │   ├── SectionHeading.jsx # Eyebrow + display title
    │   │   └── PageTransition.jsx # Per-route enter/exit + scroll reset
    │   └── three/
    │       ├── HeroCanvas.jsx     # R3F <Canvas> host (pointer parallax, fog)
    │       ├── NodeField.jsx      # Node network + data-stream particles
    │       └── LazyHeroCanvas.jsx # Code-split wrapper + CSS fallback
    └── pages/
        ├── Home.jsx           # Hero (Canvas) + scroll-linked roadmap + testimonial
        ├── Product.jsx        # Accelerate platform pillars (accordion + hover-list)
        ├── Services.jsx       # Fintech services (accordion)
        ├── CaseStudies.jsx
        ├── Media.jsx
        ├── About.jsx
        ├── Contact.jsx        # Form stub (wire to Express API later)
        └── NotFound.jsx
```

## Backend integration (later)

`src/pages/Contact.jsx` currently short-circuits submission to a success state. Point its
`handleSubmit` at the Node/Express endpoint when the API is ready. `src/data/content.js` is
structured so it can be swapped for a CMS/API response with minimal changes.

## Performance notes

- The Three.js scene is lazy-loaded (`LazyHeroCanvas`) with a CSS-only fallback so it never blocks
  first paint; three/framer-motion are split into their own chunks.
- Canvas `dpr` is capped and pointer tracking uses refs (no per-frame re-renders).
- `prefers-reduced-motion` is respected globally.
