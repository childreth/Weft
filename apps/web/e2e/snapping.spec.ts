import { expect, test, type Page } from '@playwright/test';

const ZOOM = 0.25;

/** Seeded artboard A plus B to its right, 200px lower, at a 25% camera. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const setup = await page.evaluate((zoom) => {
    const { doc, editor } = window.weft;
    const a = doc.getChildren(null)[0]!;
    const right = a.frame!.x + a.frame!.width;
    const b = doc.createNode({ type: 'frame', name: 'B', frame: { x: right + 300, y: a.frame!.y + 200, width: 400, height: 300 }, styles: { backgroundColor: '#fff' } });
    editor.getState().setCamera({ x: 40, y: 80, zoom });
    editor.getState().select([b]);
    return { a: a.frame!, b };
  }, ZOOM);
  const box = (await page.getByTestId('canvas').boundingBox())!;
  const screen = (x: number, y: number) => ({ x: box.x + 40 + x * ZOOM, y: box.y + 80 + y * ZOOM });
  return { ...setup, screen };
}

const frameOf = (page: Page, id: string) => page.evaluate((i) => window.weft.doc.getNode(i)!.frame!, id);

test('dragging an artboard snaps its edges to other artboards and shows a guide', async ({ page }) => {
  const { a, b, screen } = await open(page);
  const start = screen(a.x + a.width + 500, a.y + 350); // inside B
  await page.mouse.move(start.x, start.y);
  await page.mouse.down();
  // 196 canvas px up leaves B's top 4px below A's: inside the snap distance.
  await page.mouse.move(start.x, start.y - 196 * ZOOM, { steps: 6 });
  await expect(page.getByTestId('snap-guides')).toBeVisible();
  await page.mouse.up();
  await expect(page.getByTestId('snap-guides')).toHaveCount(0);
  expect((await frameOf(page, b)).y).toBe(a.y);

  // Holding ⌘/Ctrl moves freely.
  const from = screen(a.x + a.width + 500, a.y + 150);
  await page.keyboard.down('ControlOrMeta');
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(from.x, from.y + 20 * ZOOM, { steps: 4 });
  await page.mouse.up();
  await page.keyboard.up('ControlOrMeta');
  expect((await frameOf(page, b)).y).toBe(a.y + 20);
});

test('resizing snaps the moving edge only', async ({ page }) => {
  const { a, b } = await open(page);
  await page.evaluate(([id, y]) => window.weft.doc.updateNode(id as string, { frame: { y: y as number } }), [b, a.y] as const);
  const before = await frameOf(page, b);
  // Handles follow on the overlay's next animation frame.
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const handle = (await page.locator(`[data-handle="s"][data-handle-node="${b}"]`).boundingBox())!;
  const hx = handle.x + handle.width / 2;
  const hy = handle.y + handle.height / 2;
  // Bottom edge to 5px short of A's bottom.
  const dy = (a.y + a.height - (before.y + before.height) - 5) * ZOOM;
  await page.mouse.move(hx, hy);
  await page.mouse.down();
  await page.mouse.move(hx, hy + dy, { steps: 6 });
  await expect(page.getByTestId('snap-guides')).toBeVisible();
  await page.screenshot({ path: 'test-results/m3-snapping.png' });
  await page.mouse.up();
  const after = await frameOf(page, b);
  expect(after.y).toBe(before.y);
  expect(after.y + after.height).toBe(a.y + a.height);
});
