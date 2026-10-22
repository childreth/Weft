import { expect, test } from '@playwright/test';

test('Material Symbols icons draw on the canvas and preview in the document font list', async ({ page }) => {
  await page.goto(`/?doc=icons-${Date.now()}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const row = await page.evaluate(() => {
    const { doc } = window.weft;
    doc.addFonts([{ family: 'Material Symbols Outlined' }]);
    const [page] = doc.getChildren(null);
    const row = doc.createNode({ type: 'frame', tag: 'div', name: 'Icons', parentId: page!.id, beforeId: doc.getChildren(page!.id)[0]!.id, styles: { display: 'flex', gap: '16px' } });
    for (const name of ['search', 'favorite', 'location_on', 'expand_more', 'close']) {
      doc.createNode({
        type: 'text',
        tag: 'span',
        name,
        text: name,
        parentId: row,
        attributes: { 'aria-hidden': 'true' },
        styles: { fontFamily: 'var(--font-family-material-symbols-outlined)', fontSize: '32px', lineHeight: '1', letterSpacing: 'normal', whiteSpace: 'nowrap' },
      });
    }
    return row;
  });

  // The font comes from Google through the server's cache; without a network the names show as text.
  const loaded = await page
    .waitForFunction(() => [...document.fonts].some((f) => f.family.includes('Material Symbols Outlined') && f.status === 'loaded'), undefined, { timeout: 15_000 })
    .then(() => true)
    .catch(() => false);
  test.skip(!loaded, 'Material Symbols could not be fetched (offline)');

  // A ligature draws one square glyph, so the icon is about as wide as it is tall, not a word wide.
  const width = await page.evaluate(() => {
    const roots = [...document.querySelectorAll('*')].flatMap((el) => (el.shadowRoot ? [el.shadowRoot] : []));
    const icon = roots.flatMap((r) => [...r.querySelectorAll('span')]).find((el) => el.textContent === 'search')!;
    const box = icon.getBoundingClientRect();
    return box.width / box.height;
  });
  expect(width).toBeLessThan(1.5);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), row);
  await page.screenshot({ path: 'test-results/m4-icons.png' });

  await page.evaluate(() => window.weft.editor.getState().select([]));
  await expect(page.getByTestId('document-font')).toHaveText(/Material Symbols Outlined/);
  await page.getByTestId('document-fonts').screenshot({ path: 'test-results/m4-icon-font.png' });
});
