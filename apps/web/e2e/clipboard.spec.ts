import { expect, test, type Page } from '@playwright/test';

/** Seeded landing page; returns node ids by name. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  return page.evaluate(() => Object.fromEntries(window.weft.doc.getNodes().map((n) => [n.name, n.id])) as Record<string, string>);
}

const select = (page: Page, ids: string[]) => page.evaluate((s) => window.weft.editor.getState().select(s), ids);
const childNames = (page: Page, id: string | null) => page.evaluate((p) => window.weft.doc.getChildren(p).map((n) => n.name), id);
const selection = (page: Page) => page.evaluate(() => window.weft.editor.getState().selection);

/** Fires a clipboard event the way the browser's Edit menu does, returning what was put on the clipboard. */
function menu(page: Page, type: 'copy' | 'cut' | 'paste', data: Record<string, string> = {}) {
  return page.evaluate(
    ({ type, data }) => {
      const clipboardData = new DataTransfer();
      for (const [k, v] of Object.entries(data)) clipboardData.setData(k, v);
      document.body.dispatchEvent(new ClipboardEvent(type, { clipboardData, bubbles: true, cancelable: true }));
      return Object.fromEntries(clipboardData.types.map((t) => [t, clipboardData.getData(t)]));
    },
    { type, data },
  );
}

test('⌘C/⌘V duplicates a card after itself; paste into a selected container; one undo step each', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  const ids = await open(page);
  const order = ['Native CSS Grid', 'Governed tokens', 'Agent-native'];

  const card = await page.evaluate(() => window.weft.doc.getNodes().find((n) => n.tag === 'article' && n.name === 'Governed tokens')!.id);
  await select(page, [card]);
  await page.keyboard.press('ControlOrMeta+c');
  await page.keyboard.press('ControlOrMeta+v');
  expect(await childNames(page, ids.Features!)).toEqual(['Native CSS Grid', 'Governed tokens', 'Governed tokens', 'Agent-native']);
  const [pasted] = await selection(page);
  expect(pasted).not.toBe(card);
  await page.screenshot({ path: 'test-results/m3-clipboard.png' });

  await page.evaluate(() => window.weft.history.undo());
  expect(await childNames(page, ids.Features!)).toEqual(order);

  // Selecting a container pastes into it, at the end.
  await select(page, [ids.Actions!]);
  await page.keyboard.press('ControlOrMeta+v');
  expect(await childNames(page, ids.Actions!)).toEqual(['Get started', 'Read the docs', 'Governed tokens']);
});

test('cut moves layers; artboards paste beside their row; the Edit menu works too', async ({ page }) => {
  const ids = await open(page);
  const board = (await page.evaluate(() => window.weft.doc.getChildren(null).map((n) => n.id)))[0]!;

  await select(page, [ids.Nav!]);
  const copied = await menu(page, 'cut');
  expect(copied['text/plain']).toBe('Product\nDocs\nPricing');
  expect(JSON.parse(copied['application/x-weft+json']!)).toMatchObject({ format: 'weft-clipboard', nodes: [{ name: 'Nav' }] });
  expect(await childNames(page, ids.Header!)).toEqual(['Weft']);
  expect(await selection(page)).toEqual([]);

  await select(page, [ids.Features!]);
  await menu(page, 'paste', copied);
  expect((await childNames(page, ids.Features!)).at(-1)).toBe('Nav');

  await select(page, [board]);
  await menu(page, 'copy');
  await menu(page, 'paste', await menu(page, 'copy'));
  const boards = await page.evaluate(() => window.weft.doc.getChildren(null).map((n) => n.frame!));
  expect(boards).toHaveLength(2);
  expect(boards[1]!.x).toBeGreaterThanOrEqual(boards[0]!.x + boards[0]!.width);
});

test('plain text pastes as a paragraph; bad clipboard data is refused; text fields keep native paste', async ({ page }) => {
  const ids = await open(page);
  await select(page, [ids.Actions!]);
  await menu(page, 'paste', { 'text/plain': '  Hello from elsewhere  ' });
  const added = await page.evaluate((p) => window.weft.doc.getChildren(p).at(-1), ids.Actions!);
  expect(added).toMatchObject({ type: 'text', tag: 'p', text: 'Hello from elsewhere' });

  const before = await page.evaluate(() => window.weft.doc.getNodes().length);
  const evil = JSON.stringify({ format: 'weft-clipboard', version: 1, nodes: [{ type: 'frame', attributes: { onclick: 'x()' }, children: [] }] });
  await menu(page, 'paste', { 'application/x-weft+json': evil, 'text/plain': 'x' });
  expect(await page.evaluate(() => window.weft.doc.getNodes().length)).toBe(before);
  await expect(page.locator('.gf-notice')).toContainText('Event handler');

  // Nothing selected: an element has nowhere to go.
  await select(page, []);
  await menu(page, 'paste', { 'text/plain': 'loose' });
  await expect(page.locator('.gf-notice')).toContainText('Select a layer or artboard to paste into');

  // In a text field the browser handles paste.
  await select(page, [ids.Actions!]);
  const input = page.getByLabel('Ask the local model');
  if (await input.count()) {
    await input.focus();
    const n = await page.evaluate(() => window.weft.doc.getNodes().length);
    await input.evaluate((el) => el.dispatchEvent(new ClipboardEvent('paste', { clipboardData: new DataTransfer(), bubbles: true })));
    expect(await page.evaluate(() => window.weft.doc.getNodes().length)).toBe(n);
  }
});
