import { expect, test, type Page } from '@playwright/test';

async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.gridforge?.scene.nodes.size > 0);
  // Pin the camera so screen coordinates are predictable: artboard at (0,0), 50%.
  await page.evaluate(() => window.gridforge.editor.getState().setCamera({ x: 40, y: 40, zoom: 0.5 }));
  return (await page.getByTestId('canvas').boundingBox())!;
}

const rootIds = (page: Page) =>
  page.evaluate(() => window.gridforge.doc.getChildren(null).map((n) => n.id));

test('renders the seeded artboard as real DOM inside a shadow root', async ({ page }) => {
  await open(page);
  const h1 = page.locator('h1');
  await expect(h1).toHaveText("Design in the browser's own layout engine.");
  const info = await h1.evaluate((el) => ({
    inShadow: el.getRootNode() instanceof ShadowRoot,
    columns: getComputedStyle(el.closest('section')!).gridTemplateColumns,
    accent: getComputedStyle(el.getRootNode() instanceof ShadowRoot ? (el.getRootNode() as ShadowRoot).host : el)
      .getPropertyValue('--color-accent')
      .trim(),
  }));
  expect(info.inShadow).toBe(true);
  expect(info.columns.split(' ')).toHaveLength(2);
  expect(info.accent).toBe('#2563eb');
  await expect(page.locator('button', { hasText: 'Get started' })).toHaveCSS('background-color', 'rgb(37, 99, 235)');
});

test('frame tool drag creates an artboard; undo and redo', async ({ page }) => {
  const box = await open(page);
  await page.keyboard.press('f');
  await page.mouse.move(box.x + 760, box.y + 100);
  await page.mouse.down();
  await page.mouse.move(box.x + 860, box.y + 250, { steps: 5 });
  await page.mouse.up();
  const ids = await rootIds(page);
  expect(ids).toHaveLength(2);
  const created = await page.evaluate((id) => window.gridforge.doc.getNode(id)!.frame, ids[1]!);
  expect(created).toEqual({ x: 1440, y: 120, width: 200, height: 300 });
  await expect(page.locator('.gf-size-badge')).toHaveText('200 × 300');

  await page.keyboard.press('Meta+z');
  expect(await rootIds(page)).toHaveLength(1);
  await page.keyboard.press('Meta+Shift+z');
  expect(await rootIds(page)).toHaveLength(2);
});

test('text tool inserts editable text into the clicked container', async ({ page }) => {
  await open(page);
  const nav = page.locator('nav');
  await page.keyboard.press('t');
  await nav.click();
  await page.keyboard.type('Blog');
  await page.keyboard.press('Enter');
  await expect(nav.locator('p')).toHaveText('Blog');
  const parentTag = await page.evaluate(() => {
    const { doc, editor } = window.gridforge;
    const node = doc.getNode(editor.getState().selection[0]!)!;
    return doc.getNode(node.parentId!)!.tag;
  });
  expect(parentTag).toBe('nav');

  // Insert + typing is a single undo step.
  await page.keyboard.press('Meta+z');
  await expect(nav.locator('p')).toHaveCount(0);
});

test('double-click edits existing text', async ({ page }) => {
  await open(page);
  const title = page.locator('h3', { hasText: 'Governed tokens' });
  await title.dblclick();
  await page.keyboard.press('Meta+a');
  await page.keyboard.type('Token governance');
  await page.keyboard.press('Escape');
  await expect(page.locator('h3', { hasText: 'Token governance' })).toBeVisible();
});

test('drag artboard label to move it; resize with a handle', async ({ page }) => {
  const box = await open(page);
  const label = page.locator('.gf-artboard-label').first();
  const lb = (await label.boundingBox())!;
  await page.mouse.move(lb.x + 10, lb.y + lb.height / 2);
  await page.mouse.down();
  await page.mouse.move(lb.x + 110, lb.y + lb.height / 2 + 50, { steps: 5 });
  await page.mouse.up();
  const frame = () => page.evaluate(() => window.gridforge.doc.getChildren(null)[0]!.frame!);
  expect(await frame()).toMatchObject({ x: 200, y: 100 });

  const handle = page.locator('[data-handle="e"]');
  const hb = (await handle.boundingBox())!;
  await page.mouse.move(hb.x + hb.width / 2, hb.y + hb.height / 2);
  await page.mouse.down();
  await page.mouse.move(hb.x + hb.width / 2 - 160, hb.y + hb.height / 2, { steps: 5 });
  await page.mouse.up();
  expect((await frame()).width).toBe(960);
  expect(box.width).toBeGreaterThan(0);
});

test('inspector edits styles and rejects unknown values', async ({ page }) => {
  await open(page);
  await page.locator('figure').click();
  const inspector = page.getByTestId('inspector');
  await expect(inspector.getByLabel('Name')).toHaveValue('Hero visual');
  const bg = inspector.getByLabel('backgroundColor', { exact: true });
  await bg.fill('var(--color-accent)');
  await bg.press('Enter');
  await expect(page.locator('figure')).toHaveCSS('background-color', 'rgb(37, 99, 235)');
  await expect(inspector.locator('[data-style-prop="backgroundColor"] .gf-badge')).toHaveText('token');

  await bg.fill('#ff0000');
  await bg.press('Enter');
  await expect(inspector.locator('[data-style-prop="backgroundColor"] .gf-badge')).toHaveText('raw');
});

test('agent API edits show up live on the canvas', async ({ page }) => {
  await open(page);
  await page.evaluate(() => {
    const { agent } = window.gridforge;
    const [page] = agent.getTree();
    const features = page!.children.find((c) => c.name === 'Features')!;
    agent.updateNode(features.id, { styles: { gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' } });
    const card = agent.createNode({ type: 'frame', tag: 'article', parentId: features.id, name: 'Agent card' });
    agent.createNode({ type: 'text', tag: 'h3', parentId: card, text: 'Added by an agent' });
  });
  await expect(page.locator('h3', { hasText: 'Added by an agent' })).toBeVisible();
  // Agent edits are not on the user's undo stack.
  expect(await page.evaluate(() => window.gridforge.history.canUndo())).toBe(false);
});

test('wheel pans and pinch zooms around the cursor', async ({ page }) => {
  const box = await open(page);
  await page.mouse.move(box.x + 200, box.y + 200);
  await page.mouse.wheel(0, 100);
  expect(await page.evaluate(() => window.gridforge.editor.getState().camera.y)).toBe(-60);

  await page.keyboard.down('Control');
  await page.mouse.wheel(0, -50);
  await page.keyboard.up('Control');
  const cam = await page.evaluate(() => window.gridforge.editor.getState().camera);
  expect(cam.zoom).toBeGreaterThan(0.5);
  // Canvas point under the cursor stays put: (200-40)/0.5 = 320 before the zoom.
  expect((200 - cam.x) / cam.zoom).toBeCloseTo(320, 3);
});

test('screenshot', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.gridforge?.scene.nodes.size > 0);
  await page.keyboard.press('Shift+Digit1');
  await page.locator('h1').click();
  await page.screenshot({ path: 'test-results/m1-editor.png' });
});
