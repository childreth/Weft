import { expect, test, type Page } from '@playwright/test';

async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  return page.evaluate(() => {
    const { doc, editor } = window.weft;
    const byName = Object.fromEntries(doc.getNodes().map((n) => [n.name, n.id]));
    const make = (name: string, x: number, y: number) =>
      doc.createNode({ type: 'frame', name, frame: { x, y, width: 400, height: 300 }, styles: { backgroundColor: '#fff' } });
    const b = make('B', 1500, 120);
    const c = make('C', 2400, 40);
    editor.getState().setCamera({ x: 40, y: 40, zoom: 0.25 });
    editor.getState().select([]);
    return { ...byName, B: b, C: c } as Record<string, string>;
  });
}

const frames = (page: Page) =>
  page.evaluate(() => Object.fromEntries(window.weft.doc.getChildren(null).map((n) => [n.name, n.frame!])));
const styles = (page: Page, id: string) => page.evaluate((i) => window.weft.doc.getNode(i)!.styles, id);

test('aligns and distributes artboards by frame', async ({ page }) => {
  const ids = await open(page);
  const page0 = (await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id))!;
  await page.evaluate((all) => window.weft.editor.getState().select(all), [page0, ids.B!, ids.C!]);
  const before = await frames(page);

  await page.getByRole('button', { name: 'Align top' }).click();
  const top = await frames(page);
  expect(new Set(Object.values(top).map((f) => f.y))).toEqual(new Set([0]));

  // ⌥⇧H: the middle artboard moves to even out the gaps.
  await page.keyboard.press('Alt+Shift+KeyH');
  const after = await frames(page);
  const sorted = Object.values(after).sort((a, b) => a.x - b.x);
  expect(sorted[1]!.x - (sorted[0]!.x + sorted[0]!.width)).toBeCloseTo(sorted[2]!.x - (sorted[1]!.x + sorted[1]!.width), -1);

  await page.evaluate(() => window.weft.history.undo());
  await page.evaluate(() => window.weft.history.undo());
  expect(await frames(page)).toEqual(before);
});

test('aligning an element in a flex row sets CSS on the child or parent', async ({ page }) => {
  const ids = await open(page);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), ids.Nav!);

  await page.getByRole('button', { name: 'Align horizontal centers' }).click();
  expect((await styles(page, ids.Header!)).justifyContent).toBe('center');
  await page.keyboard.press('Alt+KeyW');
  expect((await styles(page, ids.Nav!)).alignSelf).toBe('start');

  const vertical = page.getByRole('button', { name: 'Distribute vertically' });
  await expect(vertical).toBeDisabled();
  await expect(vertical).toHaveAttribute('title', /lays its children out in a row/);

  // A child of a plain block container can't be aligned.
  await page.evaluate((id) => window.weft.doc.updateNode(id, { styles: { display: null } }), ids.Header!);
  await expect(page.getByRole('button', { name: 'Align left' })).toBeDisabled();
});

test('align screenshot', async ({ page }) => {
  const ids = await open(page);
  const page0 = (await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id))!;
  await page.evaluate((id) => window.weft.editor.getState().select([id]), page0);
  await page.keyboard.press('Shift+Digit2');
  await page.evaluate((id) => window.weft.editor.getState().select([id]), ids.Nav!);
  await page.getByRole('button', { name: 'Align horizontal centers' }).click();
  // The overlay re-measures on the next animation frame.
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  await page.screenshot({ path: 'test-results/m3-align.png' });
});
