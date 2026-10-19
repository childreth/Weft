import { expect, test, type Locator, type Page } from '@playwright/test';

/** Seeded landing page; returns node ids by name. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  return page.evaluate(() => {
    const { doc, editor } = window.weft;
    editor.getState().select([]);
    return Object.fromEntries(doc.getNodes().map((n) => [n.name, n.id])) as Record<string, string>;
  });
}

const childNames = (page: Page, id: string) =>
  page.evaluate((p) => window.weft.doc.getChildren(p).map((n) => n.name), id);

/** A point inside `locator`'s box, as fractions of its width and height. */
async function point(locator: Locator, fx = 0.5, fy = 0.5) {
  const b = (await locator.boundingBox())!;
  return { x: b.x + b.width * fx, y: b.y + b.height * fy };
}

/** Presses on `from`, drags in steps to `to` and, unless told to hold, releases. */
async function drag(page: Page, from: { x: number; y: number }, to: { x: number; y: number }, hold = false) {
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(to.x, to.y, { steps: 8 });
  if (!hold) await page.mouse.up();
}

test('dragging an element reorders it in a column, with a drop line, as one undo step', async ({ page }) => {
  const ids = await open(page);
  const copy = ids['Hero copy']!;
  expect(await childNames(page, copy)).toEqual([expect.stringMatching(/^Design/), expect.stringMatching(/^Every/), 'Actions']);

  const paragraph = page.locator('[data-gf-id] p', { hasText: 'Every artboard' });
  await drag(page, await point(paragraph), await point(page.locator('h1'), 0.5, 0.25), true);
  await expect(page.getByTestId('drag-ghost')).toBeVisible();
  await expect(page.getByTestId('drop-line')).toBeVisible();
  await expect(page.getByTestId('drop-parent')).toBeVisible();
  // Horizontal line for a column, spanning the parent's content width.
  const line = (await page.getByTestId('drop-line').boundingBox())!;
  expect(line.width).toBeGreaterThan(line.height * 20);
  await page.screenshot({ path: 'test-results/m3-reorder.png' });
  await page.mouse.up();
  await expect(page.getByTestId('drop-line')).toHaveCount(0);

  expect(await childNames(page, copy)).toEqual([expect.stringMatching(/^Every/), expect.stringMatching(/^Design/), 'Actions']);
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([ids['Every artboard is real D']]);

  await page.evaluate(() => window.weft.history.undo());
  expect(await childNames(page, copy)).toEqual([expect.stringMatching(/^Design/), expect.stringMatching(/^Every/), 'Actions']);
});

test('dragging reorders along a row and reparents into another container', async ({ page }) => {
  const ids = await open(page);
  const nav = ids.Nav!;
  const link = (name: string) => page.locator('a', { hasText: name });

  // Pricing to the left half of Product: a vertical line, first in the row.
  await drag(page, await point(link('Pricing')), await point(link('Product'), 0.2), true);
  const line = (await page.getByTestId('drop-line').boundingBox())!;
  expect(line.height).toBeGreaterThan(line.width * 4);
  await page.mouse.up();
  expect(await childNames(page, nav)).toEqual(['Pricing', 'Product', 'Docs']);

  // A hero button into the nav, after Docs.
  await drag(page, await point(page.locator('button', { hasText: 'Get started' })), await point(link('Docs'), 0.8));
  expect(await childNames(page, nav)).toEqual(['Pricing', 'Product', 'Docs', 'Get started']);
  expect(await childNames(page, ids.Actions!)).toEqual(['Read the docs']);
});

test('grid cards reorder; Escape cancels a drag; a click without moving only selects', async ({ page }) => {
  const ids = await open(page);
  const features = ids.Features!;
  const card = (name: string) => page.locator('article', { hasText: name });
  const order = ['Native CSS Grid', 'Governed tokens', 'Agent-native'];

  // Grab the last card by its padding (the card itself, not its text) and drop it before the first.
  await drag(page, await point(card('Agent-native'), 0.5, 0.95), await point(card('Native CSS Grid'), 0.2));
  expect(await childNames(page, features)).toEqual(['Agent-native', 'Native CSS Grid', 'Governed tokens']);
  await page.evaluate(() => window.weft.history.undo());
  expect(await childNames(page, features)).toEqual(order);

  await drag(page, await point(card('Agent-native'), 0.5, 0.95), await point(card('Native CSS Grid'), 0.2), true);
  await expect(page.getByTestId('drop-line')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByTestId('drop-line')).toHaveCount(0);
  await page.mouse.up();
  expect(await childNames(page, features)).toEqual(order);
  // The dimmed original is restored.
  expect(await card('Agent-native').evaluate((el) => (el as HTMLElement).style.opacity)).toBe('');

  await page.locator('h3', { hasText: 'Governed tokens' }).click();
  const selected = await page.evaluate(() => window.weft.editor.getState().selection.map((id) => window.weft.doc.getNode(id)!.tag));
  expect(selected).toEqual(['h3']);
  expect(await childNames(page, features)).toEqual(order);
});
