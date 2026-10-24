import { expect, test, type Page } from '@playwright/test';

/** Seeded landing page; returns ids of its top-level sections by name. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  return page.evaluate(() => {
    const { doc } = window.weft;
    const artboard = doc.getChildren(null)[0]!;
    const byName = Object.fromEntries(doc.getNodes().map((n) => [n.name, n.id]));
    return { artboard: artboard.id, ...byName } as Record<string, string>;
  });
}

const row = (page: Page, id: string) => page.locator(`[data-layer-id="${id}"]`);
const selection = (page: Page) => page.evaluate(() => window.weft.editor.getState().selection);
const childNames = (page: Page, id: string) =>
  page.evaluate((p) => window.weft.doc.getChildren(p).map((n) => n.name), id);

test('double-click renames a layer; Escape cancels', async ({ page }) => {
  const ids = await open(page);
  await row(page, ids.Header!).dblclick();
  const input = page.getByLabel('Layer name');
  await input.fill('Top bar');
  await input.press('Enter');
  await expect(row(page, ids.Header!)).toContainText('Top bar');
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.name, ids.Header!)).toBe('Top bar');

  await row(page, ids.Header!).dblclick();
  await page.getByLabel('Layer name').fill('Nope');
  await page.getByLabel('Layer name').press('Escape');
  await expect(row(page, ids.Header!)).toContainText('Top bar');

  await page.evaluate(() => window.weft.history.undo());
  await expect(row(page, ids.Header!)).toContainText('Header');
});

test('collapse hides children; selecting a hidden child expands its ancestors', async ({ page }) => {
  const ids = await open(page);
  await expect(row(page, ids.Nav!)).toBeVisible();
  await page.getByTestId(`twisty-${ids.Header}`).click();
  await expect(row(page, ids.Nav!)).toHaveCount(0);
  expect(await selection(page)).toEqual([]); // the twisty doesn't select
  await page.evaluate((id) => window.weft.editor.getState().select([id]), ids.Nav!);
  await expect(row(page, ids.Nav!)).toBeVisible();
});

test('⌥L collapses every layer', async ({ page }) => {
  const ids = await open(page);
  await expect(row(page, ids.Nav!)).toBeVisible();
  await page.keyboard.press('Alt+KeyL');
  await expect(row(page, ids.artboard!)).toBeVisible();
  await expect(row(page, ids.Header!)).toHaveCount(0);
  await page.getByTestId(`twisty-${ids.artboard}`).click();
  await expect(row(page, ids.Header!)).toBeVisible();
  await expect(row(page, ids.Nav!)).toHaveCount(0);
});

test('hide and lock toggles; locked layers are click-through on the canvas', async ({ page }) => {
  const ids = await open(page);
  const hero = row(page, ids.Hero!);
  await hero.hover();
  await hero.getByRole('button', { name: 'Hide' }).click();
  await expect(page.locator('h1')).toBeHidden();
  await hero.getByRole('button', { name: 'Show' }).click();
  await expect(page.locator('h1')).toBeVisible();

  await hero.getByRole('button', { name: 'Lock' }).click();
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.locked, ids.Hero!)).toBe(true);
  await page.evaluate(() => window.weft.editor.getState().select([]));
  await page.locator('h1').click();
  expect(await selection(page)).toEqual([ids.artboard]);
});

test('drag reorders and reparents layers as one undo step', async ({ page }) => {
  const ids = await open(page);
  const before = await childNames(page, ids.artboard!);
  expect(before).toEqual(['Header', 'Hero', 'Features']);

  // Collapse so rows are adjacent, then drop Features on the top edge of Header.
  for (const name of ['Header', 'Hero', 'Features']) await page.getByTestId(`twisty-${ids[name]}`).click();
  await row(page, ids.Features!).dragTo(row(page, ids.Header!), { targetPosition: { x: 60, y: 2 } });
  expect(await childNames(page, ids.artboard!)).toEqual(['Features', 'Header', 'Hero']);

  // Drop Nav into the middle of Hero: reparent.
  await page.getByTestId(`twisty-${ids.Header}`).click();
  await row(page, ids.Nav!).dragTo(row(page, ids.Hero!), { targetPosition: { x: 60, y: 13 } });
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.parentId, ids.Nav!)).toBe(ids.Hero);
  expect(await selection(page)).toEqual([ids.Nav]);

  await page.evaluate(() => window.weft.history.undo());
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.parentId, ids.Nav!)).toBe(ids.Header);
  await page.evaluate(() => window.weft.history.undo());
  expect(await childNames(page, ids.artboard!)).toEqual(before);
});

test('shift-click selects a range; ⌘-click toggles', async ({ page }) => {
  const ids = await open(page);
  for (const name of ['Header', 'Hero']) await page.getByTestId(`twisty-${ids[name]}`).click();
  await row(page, ids.Header!).click();
  await row(page, ids.Features!).click({ modifiers: ['Shift'] });
  expect(await selection(page)).toEqual([ids.Header, ids.Hero, ids.Features]);
  await row(page, ids.Hero!).click({ modifiers: ['ControlOrMeta'] });
  expect(await selection(page)).toEqual([ids.Header, ids.Features]);
});

test('layers screenshot', async ({ page }) => {
  const ids = await open(page);
  await page.keyboard.press('Shift+Digit1');
  await page.evaluate(([hero, nav]) => {
    window.weft.doc.updateNode(nav!, { hidden: true });
    window.weft.doc.updateNode(hero!, { locked: true });
  }, [ids.Hero, ids.Nav]);
  await page.getByTestId(`twisty-${ids.Features}`).click();
  await row(page, ids.Header!).click();
  await row(page, ids['Hero copy']!).hover();
  await page.screenshot({ path: 'test-results/m3-layers.png' });
});

test('layers panel resizes by dragging its edge, clamped to 240–340px', async ({ page }) => {
  await open(page);
  const panel = page.getByTestId('layers');
  const handle = (await page.getByTestId('layers-resizer').boundingBox())!;
  const width = async () => (await panel.boundingBox())!.width;
  expect(await width()).toBe(240);

  const drag = async (dx: number) => {
    const box = (await page.getByTestId('layers-resizer').boundingBox())!;
    await page.mouse.move(box.x + box.width / 2, box.y + 200);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + dx, box.y + 200, { steps: 4 });
    await page.mouse.up();
  };
  expect(handle.x + handle.width / 2).toBeCloseTo(240, 0);
  await drag(60);
  expect(await width()).toBe(300);
  await page.screenshot({ path: 'test-results/m3-layers-resize.png' });
  await drag(200);
  expect(await width()).toBe(340);
  await drag(-500);
  expect(await width()).toBe(240);
});
