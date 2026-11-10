import { expect, test } from '@playwright/test';

test('mobile overrides apply when the artboard is at most 600px wide', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const section = page.locator('.gf-artboard-host section').first();
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
  const section = page.locator('.gf-artboard-host section').first();
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

test('desktop overrides apply only above 1024px, and the Inspector has a Desktop section', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const section = page.locator('.gf-artboard-host section').first();
  const gap = () => section.evaluate((el) => getComputedStyle(el).columnGap);
  const setWidth = (width: number) => page.evaluate((w) => window.weft.doc.updateNode(window.weft.doc.getChildren(null)[0]!.id, { frame: { width: w } }), width);
  const hero = await page.evaluate(() => window.weft.doc.getNodes().find((n) => n.tag === 'section' && n.styles.display === 'grid')!.id);

  // Added in the Inspector: Desktop sits above Tablet and Mobile, after the styles that apply at every width.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), hero);
  await expect(page.locator('.gf-section-header h2').filter({ hasText: /^(Desktop|Tablet|Mobile) / })).toHaveText(['Desktop > 1024px', 'Tablet ≤ 1024px', 'Mobile ≤ 600px']);
  await page.getByRole('button', { name: 'Add desktop override' }).click();
  await page.getByLabel('Add desktop override: search').fill('gap');
  await page.getByLabel('Add desktop override: search').press('Enter');
  await expect.poll(() => page.evaluate((id) => Object.keys(window.weft.doc.getNode(id)!.breakpoints?.desktop ?? {}), hero)).toEqual(['gap']);

  await setWidth(1025);
  const base = await gap();
  await page.evaluate((id) => window.weft.doc.updateNode(id, { breakpoints: { desktop: { gap: '72px' }, tablet: { gap: '10px' } } }), hero);
  await expect.poll(gap).toBe('72px');
  await page.screenshot({ path: 'test-results/m3-breakpoints-desktop.png' });
  // At tablet width and below it's gone without anything undoing it.
  await setWidth(1024);
  await expect.poll(gap).toBe('10px');
  await page.evaluate((id) => window.weft.doc.updateNode(id, { breakpoints: { tablet: null } }), hero);
  await expect.poll(gap).toBe(base);
  await setWidth(390);
  await expect.poll(gap).toBe(base);
});
