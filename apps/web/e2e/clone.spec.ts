import { expect, test, type Page } from '@playwright/test';

/** Seeded artboard with a mobile override on the hero: one column at ≤ 600px. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  return page.evaluate(() => {
    const { doc, editor } = window.weft;
    const page = doc.getChildren(null)[0]!;
    const hero = doc.getNodes().find((n) => n.name === 'Hero')!;
    doc.updateNode(hero.id, { breakpoints: { mobile: { gridTemplateColumns: 'minmax(0, 1fr)' } } });
    editor.getState().select([page.id]);
    return { page: page.id, frame: page.frame! };
  });
}

const heroColumns = (page: Page, artboard: string) =>
  page
    .getByTestId(`artboard-${artboard}`)
    .locator('section')
    .first()
    .evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length);

test('clone an artboard at mobile width beside the original; breakpoints preview on the copy', async ({ page }) => {
  const { page: original, frame } = await open(page);
  await page.getByRole('group', { name: 'Clone at width' }).getByRole('button', { name: '+ Mobile' }).click();

  const copy = await page.evaluate(() => window.weft.editor.getState().selection[0]!);
  expect(copy).not.toBe(original);
  const node = await page.evaluate((id) => window.weft.doc.getNode(id)!, copy);
  expect(node.name).toBe('Landing — Mobile');
  expect(node.frame).toMatchObject({ width: 390, y: frame.y, height: frame.height });
  expect(node.frame!.x).toBeGreaterThan(frame.x + frame.width);

  expect(await heroColumns(page, original)).toBe(2);
  expect(await heroColumns(page, copy)).toBe(1);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  await page.screenshot({ path: 'test-results/m3-clone.png' });

  await page.evaluate(() => window.weft.history.undo());
  expect(await page.evaluate((id) => window.weft.doc.has(id), copy)).toBe(false);
});

test('⌘D duplicates the selection', async ({ page }) => {
  await open(page);
  const nav = await page.evaluate(() => {
    const id = window.weft.doc.getNodes().find((n) => n.name === 'Nav')!.id;
    window.weft.editor.getState().select([id]);
    return id;
  });
  await page.keyboard.press('ControlOrMeta+d');
  const names = await page.evaluate(
    (id) => window.weft.doc.getChildren(window.weft.doc.getNode(id)!.parentId).map((n) => n.name),
    nav,
  );
  expect(names).toEqual(['Weft', 'Nav', 'Nav']);
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).not.toContain(nav);
});
