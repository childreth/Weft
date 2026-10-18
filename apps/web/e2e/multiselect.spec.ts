import { expect, test, type Page } from '@playwright/test';

/** Three artboards at a 20% camera: A (seeded) left, B and C stacked on the right. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const a = doc.getChildren(null)[0]!.id;
    const make = (name: string, y: number) =>
      doc.createNode({ type: 'frame', name, frame: { x: 1400, y, width: 400, height: 300 }, styles: { backgroundColor: '#fff' } });
    const b = make('B', 0);
    const c = make('C', 400);
    editor.getState().setCamera({ x: 40, y: 40, zoom: 0.2 });
    editor.getState().select([]);
    return { a, b, c };
  });
  const box = (await page.getByTestId('canvas').boundingBox())!;
  return { ids, at: (x: number, y: number) => ({ x: box.x + x, y: box.y + y }) };
}

const selection = (page: Page) => page.evaluate(() => window.weft.editor.getState().selection);
const frames = (page: Page) =>
  page.evaluate(() => Object.fromEntries(window.weft.doc.getChildren(null).map((n) => [n.name, n.frame!])));

test('marquee on empty canvas selects the artboards it touches', async ({ page }) => {
  const { ids, at } = await open(page);
  const from = at(440, 220);
  const to = at(310, 50);
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(to.x, to.y, { steps: 6 });
  await expect(page.locator('.gf-box-draft')).toBeVisible();
  await page.mouse.up();
  await expect(page.locator('.gf-box-draft')).toHaveCount(0);
  expect(new Set(await selection(page))).toEqual(new Set([ids.b, ids.c]));
  await expect(page.getByTestId('group-box')).toBeVisible();
});

test('dragging one selected artboard moves the whole selection as one undo step', async ({ page }) => {
  const { ids, at } = await open(page);
  await page.evaluate(([b, c]) => window.weft.editor.getState().select([b!, c!]), [ids.b, ids.c]);
  const before = await frames(page);
  const grab = at(360, 70); // inside B
  await page.mouse.move(grab.x, grab.y);
  await page.mouse.down();
  await page.mouse.move(grab.x + 40, grab.y + 20, { steps: 5 });
  await page.mouse.up();
  const after = await frames(page);
  expect(after.B).toMatchObject({ x: before.B!.x + 200, y: before.B!.y + 100 });
  expect(after.C).toMatchObject({ x: before.C!.x + 200, y: before.C!.y + 100 });
  expect(new Set(await selection(page))).toEqual(new Set([ids.b, ids.c]));
  await page.evaluate(() => window.weft.history.undo());
  expect(await frames(page)).toEqual(before);
});

test('a plain click inside a multi-selection narrows it; shift-click toggles; ⌘A selects siblings', async ({ page }) => {
  const { ids, at } = await open(page);
  await page.evaluate(([b, c]) => window.weft.editor.getState().select([b!, c!]), [ids.b, ids.c]);
  const p = at(360, 70);
  await page.mouse.click(p.x, p.y);
  expect(await selection(page)).toEqual([ids.b]);

  const q = at(360, 140); // inside C
  await page.keyboard.down('Shift');
  await page.mouse.click(q.x, q.y);
  await page.keyboard.up('Shift');
  expect(new Set(await selection(page))).toEqual(new Set([ids.b, ids.c]));

  await page.keyboard.press('ControlOrMeta+a');
  expect(new Set(await selection(page))).toEqual(new Set([ids.a, ids.b, ids.c]));
});
