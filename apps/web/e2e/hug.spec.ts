import { expect, test, type Page } from '@playwright/test';

const ZOOM = 0.25;

/** Seeded landing page (a hugging artboard), selected, at a 25% camera. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const id = await page.evaluate((zoom) => {
    const { doc, editor } = window.weft;
    const a = doc.getChildren(null)[0]!;
    editor.getState().setCamera({ x: 40, y: 80, zoom });
    editor.getState().select([a.id]);
    return a.id;
  }, ZOOM);
  await nextFrames(page);
  return id;
}

const nextFrames = (page: Page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const frameOf = (page: Page, id: string) => page.evaluate((i) => window.weft.doc.getNode(i)!.frame!, id);
/** Rendered artboard height and its content height, in canvas px. */
const rendered = (page: Page, id: string) =>
  page.evaluate((i) => {
    const box = document.querySelector<HTMLElement>(`[data-artboard-id="${i}"]`)!;
    const root = document.querySelector(`[data-testid="artboard-${i}"]`)!.shadowRoot!.querySelector('main')!;
    return { height: box.offsetHeight, content: root.scrollHeight };
  }, id);

async function dragHandle(page: Page, id: string, handle: string, dx: number, dy: number) {
  const box = (await page.locator(`[data-handle="${handle}"][data-handle-node="${id}"]`).boundingBox())!;
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + dx * ZOOM, y + dy * ZOOM, { steps: 6 });
  await page.mouse.up();
  await nextFrames(page);
}

test('a hugging artboard grows with its content while the width shrinks; one undo step', async ({ page }) => {
  const id = await open(page);
  expect((await frameOf(page, id)).heightMode).toBe('hug');
  const before = await rendered(page, id);
  expect(before.height).toBe(before.content);

  await dragHandle(page, id, 'e', -760, 0);
  const frame = await frameOf(page, id);
  expect(frame.width).toBe(520);
  expect(frame.heightMode).toBe('hug');
  const after = await rendered(page, id);
  expect(after.height).toBeGreaterThan(before.height);
  expect(after.height).toBe(after.content); // nothing clipped
  expect(frame.height).toBe(after.height); // measured height recorded at gesture end
  await expect(page.getByTestId('artboard-clipped')).toHaveCount(0);
  await page.screenshot({ path: 'test-results/m3-hug.png' });

  await page.keyboard.press('ControlOrMeta+z');
  expect((await frameOf(page, id)).width).toBe(1280);
  await nextFrames(page);
  expect((await rendered(page, id)).height).toBe(before.height);
});

test('dragging the bottom edge makes the artboard fixed and marks clipped content', async ({ page }) => {
  const id = await open(page);
  await dragHandle(page, id, 's', 0, -300);
  const frame = await frameOf(page, id);
  expect(frame.heightMode).toBeUndefined();
  const { height, content } = await rendered(page, id);
  expect(height).toBe(frame.height);
  expect(content).toBeGreaterThan(height);
  await expect(page.getByTestId('artboard-clipped')).toBeVisible();
  await expect(page.getByRole('group', { name: 'Height' }).getByRole('button', { name: 'Fixed height' })).toHaveAttribute('aria-pressed', 'true');
  await page.screenshot({ path: 'test-results/m3-clipped.png' });

  await page.getByRole('group', { name: 'Height' }).getByRole('button', { name: 'Hug height' }).click();
  await nextFrames(page);
  expect((await frameOf(page, id)).heightMode).toBe('hug');
  await expect(page.getByTestId('artboard-clipped')).toHaveCount(0);
  const hugged = await rendered(page, id);
  expect(hugged.height).toBe(hugged.content);
});

test('a clone at mobile width hugs its own content height', async ({ page }) => {
  const id = await open(page);
  await page.getByRole('group', { name: 'Clone at width' }).getByRole('button', { name: '+ Mobile' }).click();
  const copy = await page.evaluate(() => window.weft.editor.getState().selection[0]!);
  await nextFrames(page);
  const frame = await frameOf(page, copy);
  expect(frame).toMatchObject({ width: 390, heightMode: 'hug' });
  const box = await rendered(page, copy);
  expect(box.height).toBe(box.content);
  expect(box.height).toBeGreaterThan((await rendered(page, id)).height);
  expect(frame.height).toBe(box.height);
});
