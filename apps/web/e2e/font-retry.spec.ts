import { expect, test, type Page } from '@playwright/test';
import { SERVER_PORT } from '../playwright.config';

/** A fresh document with an icon in Material Symbols Rounded. */
async function addIcon(page: Page) {
  await page.goto(`/?doc=font-retry-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  await page.evaluate(() => {
    const { doc } = window.weft;
    doc.addFonts([{ family: 'Material Symbols Rounded' }]);
    const [board] = doc.getChildren(null);
    doc.createNode({ type: 'text', tag: 'span', parentId: board!.id, text: 'add', styles: { fontFamily: 'var(--font-family-material-symbols-rounded)' } });
  });
}

const iconLoaded = (page: Page, timeout: number) =>
  page
    .waitForFunction(() => [...document.fonts].some((f) => f.family.includes('Material Symbols Rounded') && f.status === 'loaded'), undefined, { timeout })
    .then(() => true)
    .catch(() => false);

for (const what of ['stylesheet', 'font file'] as const) {
  test(`a ${what} that fails to load is retried, so icons don't stay as text`, async ({ page }) => {
    // Needs Google once, through the server's cache.
    const css = await (await page.request.get(`http://127.0.0.1:${SERVER_PORT}/fonts.css?q=${encodeURIComponent('Material Symbols Rounded:400')}`)).text();
    test.skip(!css.includes('@font-face'), 'Material Symbols could not be fetched (offline)');
    let failures = 0;
    const pattern = what === 'stylesheet' ? '**/fonts.css?*' : '**/fonts/files/**';
    await page.route(pattern, (route) => (failures++ === 0 ? route.abort() : route.continue()));
    await addIcon(page);
    await expect.poll(() => failures, { timeout: 15_000 }).toBeGreaterThan(0);
    expect(await iconLoaded(page, 20_000)).toBe(true);
    expect(failures).toBeGreaterThanOrEqual(2);
  });
}
