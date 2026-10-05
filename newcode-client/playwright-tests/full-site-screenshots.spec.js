import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { routes } from './routes.js';

const SCREENSHOTS_DIR = path.join(process.cwd(), 'playwright-tests', 'screenshots');

test.beforeAll(() => {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
});

for (const route of routes) {
  test(`capture ${route.name} (${route.path})`, async ({ page }, testInfo) => {
    const consoleErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => consoleErrors.push(String(err)));

    const response = await page.goto(route.path, { waitUntil: 'networkidle' });

    // The 404 route is intentionally checked but shouldn't hard-fail the whole suite.
    if (route.name !== 'not-found') {
      expect(response?.status(), `HTTP status for ${route.path}`).toBeLessThan(400);
    }

    // Let animations / lazy content settle.
    await page.waitForTimeout(600);

    const routeDir = path.join(SCREENSHOTS_DIR, route.name);
    fs.mkdirSync(routeDir, { recursive: true });

    // 1) Full-page screenshot (stitches the whole scrollable page).
    await page.screenshot({
      path: path.join(routeDir, `${route.name}-full-page.png`),
      fullPage: true,
    });
    await testInfo.attach(`${route.name}-full-page`, {
      path: path.join(routeDir, `${route.name}-full-page.png`),
      contentType: 'image/png',
    });

    // 2) Viewport-by-viewport screenshots while scrolling down the page,
    //    so long pages are also captured as a sequence of "screen" shots.
    const viewportHeight = page.viewportSize()?.height ?? 900;
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const totalSteps = Math.max(1, Math.ceil(scrollHeight / viewportHeight));

    for (let step = 0; step < totalSteps; step += 1) {
      await page.evaluate((y) => window.scrollTo(0, y), step * viewportHeight);
      await page.waitForTimeout(250);
      const shotPath = path.join(routeDir, `${route.name}-scroll-${String(step + 1).padStart(2, '0')}.png`);
      await page.screenshot({ path: shotPath });
      await testInfo.attach(`${route.name}-scroll-${step + 1}`, {
        path: shotPath,
        contentType: 'image/png',
      });
    }

    // Scroll back to top for cleanliness / consistent state for next assertions.
    await page.evaluate(() => window.scrollTo(0, 0));

    if (consoleErrors.length) {
      testInfo.annotations.push({
        type: 'console-errors',
        description: consoleErrors.join('\n'),
      });
    }
  });
}
