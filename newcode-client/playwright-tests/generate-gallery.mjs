// Generates a single self-contained HTML gallery of every screenshot
// captured by full-site-screenshots.spec.js, grouped by page.
//
// Usage:  node playwright-tests/generate-gallery.mjs
// Output: playwright-tests/screenshots-gallery.html

import fs from 'fs';
import path from 'path';
import { routes } from './routes.js';

const SCREENSHOTS_DIR = path.join(process.cwd(), 'playwright-tests', 'screenshots');
const OUTPUT_FILE = path.join(process.cwd(), 'playwright-tests', 'screenshots-gallery.html');

function humanize(name) {
  return name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildSection(route) {
  const dir = path.join(SCREENSHOTS_DIR, route.name);
  if (!fs.existsSync(dir)) {
    return `
    <section class="page-card missing" id="${route.name}">
      <div class="page-head">
        <h2>${humanize(route.name)}</h2>
        <span class="route-path">${route.path}</span>
      </div>
      <p class="missing-note">No screenshots found — run the test suite first.</p>
    </section>`;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png'));
  const fullPage = files.find((f) => f.includes('full-page'));
  const scrolls = files
    .filter((f) => f.includes('-scroll-'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const rel = (f) => `screenshots/${route.name}/${f}`;

  const fullPageHtml = fullPage
    ? `
      <figure class="shot shot-full">
        <img src="${rel(fullPage)}" alt="${route.name} full page" loading="lazy" onclick="openLightbox(this.src)" />
        <figcaption>Full page</figcaption>
      </figure>`
    : '';

  const scrollHtml = scrolls
    .map((f, i) => `
      <figure class="shot">
        <img src="${rel(f)}" alt="${route.name} scroll ${i + 1}" loading="lazy" onclick="openLightbox(this.src)" />
        <figcaption>Scroll ${i + 1}</figcaption>
      </figure>`)
    .join('');

  return `
    <section class="page-card" id="${route.name}">
      <div class="page-head">
        <h2>${humanize(route.name)}</h2>
        <span class="route-path">${route.path}</span>
        <span class="shot-count">${files.length} screenshot${files.length === 1 ? '' : 's'}</span>
      </div>
      <div class="shot-grid">
        ${fullPageHtml}
        ${scrollHtml}
      </div>
    </section>`;
}

const navItems = routes
  .map((r) => `<a href="#${r.name}">${humanize(r.name)}</a>`)
  .join('');

const sections = routes.map(buildSection).join('\n');

const totalShots = routes.reduce((sum, r) => {
  const dir = path.join(SCREENSHOTS_DIR, r.name);
  if (!fs.existsSync(dir)) return sum;
  return sum + fs.readdirSync(dir).filter((f) => f.endsWith('.png')).length;
}, 0);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>BOIT Website — Full Site Screenshot Gallery</title>
<style>
  :root {
    --bg: #0b0e14;
    --card-bg: #12161f;
    --border: #232838;
    --text: #e6e9f0;
    --muted: #8b93a7;
    --accent: #14b8a6;
    --accent2: #8b5cf6;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    background: var(--bg);
    color: var(--text);
  }
  header {
    padding: 32px 24px 20px;
    background: linear-gradient(120deg, rgba(20,184,166,0.15), rgba(139,92,246,0.15));
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
  }
  header h1 {
    margin: 0 0 4px;
    font-size: 22px;
  }
  header p {
    margin: 0;
    color: var(--muted);
    font-size: 13px;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 14px;
    max-height: 84px;
    overflow-y: auto;
  }
  nav a {
    font-size: 12px;
    color: var(--text);
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 5px 12px;
    text-decoration: none;
    white-space: nowrap;
  }
  nav a:hover { border-color: var(--accent); color: var(--accent); }
  main { padding: 24px; max-width: 1400px; margin: 0 auto; }
  .page-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px 20px 22px;
    margin-bottom: 24px;
    scroll-margin-top: 140px;
  }
  .page-head {
    display: flex;
    align-items: baseline;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }
  .page-head h2 { margin: 0; font-size: 17px; }
  .route-path {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px;
    color: var(--accent);
    background: rgba(20,184,166,0.08);
    padding: 2px 8px;
    border-radius: 6px;
  }
  .shot-count { font-size: 12px; color: var(--muted); margin-left: auto; }
  .missing-note { color: var(--muted); font-size: 13px; }
  .shot-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px;
  }
  .shot {
    margin: 0;
    background: #0d1017;
    border: 1px solid var(--border);
    border-radius: 10px;
    overflow: hidden;
  }
  .shot img {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
    object-position: top;
    cursor: zoom-in;
    transition: transform 0.2s ease;
  }
  .shot.shot-full img { height: 220px; }
  .shot img:hover { transform: scale(1.03); }
  .shot figcaption {
    font-size: 11px;
    color: var(--muted);
    padding: 6px 10px;
    text-align: center;
  }
  .shot-full figcaption { color: var(--accent2); font-weight: 600; }

  #lightbox {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    z-index: 999;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;
    padding: 24px;
  }
  #lightbox.open { display: flex; }
  #lightbox img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  }
  .summary-bar {
    display: flex;
    gap: 18px;
    font-size: 13px;
    color: var(--muted);
    margin-top: 10px;
  }
  .summary-bar b { color: var(--text); }
</style>
</head>
<body>
  <header>
    <h1>🩻 BOIT Website — Full Site Screenshot Gallery</h1>
    <p>Auto-generated from Playwright test screenshots. Click any image to zoom.</p>
    <div class="summary-bar">
      <span><b>${routes.length}</b> pages</span>
      <span><b>${totalShots}</b> screenshots</span>
      <span>Generated ${new Date().toLocaleString()}</span>
    </div>
    <nav>${navItems}</nav>
  </header>
  <main>
    ${sections}
  </main>

  <div id="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img" src="" alt="zoomed screenshot" />
  </div>

  <script>
    function openLightbox(src) {
      const lb = document.getElementById('lightbox');
      document.getElementById('lightbox-img').src = src;
      lb.classList.add('open');
    }
    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('open');
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(OUTPUT_FILE, html, 'utf-8');
console.log(`Gallery written to ${OUTPUT_FILE}`);
console.log(`${routes.length} pages, ${totalShots} screenshots total.`);
