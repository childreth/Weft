import { expect, test } from '@playwright/test';

test('mobile overrides apply when the artboard is at most 600px wide', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const section = page.locator('section').first();
  const columns = () => section.evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length);
  expect(await columns()).toBe(2);

  await page.evaluate(() => {
    const { doc } = window.weft;
    const root = doc.getChildren(null)[0]!;
    const hero = doc.getNodes().find((n) => n.tag === 'section' && n.styles.display === 'grid')!;
    doc.updateNode(hero.id, { breakpoints: { mobile: { gridTemplateColumns: 'minmax(0, 1fr)' } } });
    doc.updateNode(root.id, { frame: { width: 600 } });
  });
  await expect.poll(columns).toBe(1);
  await page.evaluate(() => window.weft.editor.getState().setCamera({ x: 40, y: 40, zoom: 0.5 }));
  await page.screenshot({ path: 'test-results/m3-breakpoints.png' });

  await page.evaluate(() => {
    const root = window.weft.doc.getChildren(null)[0]!;
    window.weft.doc.updateNode(root.id, { frame: { width: 601 } });
  });
  await expect.poll(columns).toBe(2);
});

test('tablet overrides apply up to 1024px and mobile wins below 600px; presets resize the artboard', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const section = page.locator('section').first();
  const gap = () => section.evaluate((el) => getComputedStyle(el).columnGap);
  const base = await gap();
  await page.evaluate(() => {
    const { doc } = window.weft;
    const hero = doc.getNodes().find((n) => n.tag === 'section' && n.styles.display === 'grid')!;
    doc.updateNode(hero.id, { breakpoints: { tablet: { gap: '10px' }, mobile: { gap: '4px' } } });
    doc.updateNode(doc.getChildren(null)[0]!.id, { frame: { width: 1024 } });
  });
  await expect.poll(gap).toBe('10px');
  await page.evaluate(() => window.weft.doc.updateNode(window.weft.doc.getChildren(null)[0]!.id, { frame: { width: 500 } }));
  await expect.poll(gap).toBe('4px');
  await page.evaluate(() => window.weft.doc.updateNode(window.weft.doc.getChildren(null)[0]!.id, { frame: { width: 1025 } }));
  await expect.poll(gap).toBe(base);

  const root = await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), root);
  await page.getByRole('button', { name: 'Mobile', exact: true }).click();
  await expect.poll(() => page.evaluate((id) => window.weft.doc.getNode(id)!.frame!.width, root)).toBe(390);
});
