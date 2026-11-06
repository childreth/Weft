import { expect, test, type Page } from '@playwright/test';

const nextFrames = (page: Page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

/** One artboard with details, a popover menu, a modal dialog, a select and a textarea. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    for (const a of doc.getChildren(null)) doc.deleteNodes([a.id]);
    const panel = { backgroundColor: '#fff', padding: '16px', borderRadius: '12px', border: '1px solid #ccc' };
    const board = doc.createNode({ type: 'frame', name: 'Settings', frame: { x: 0, y: 0, width: 640, height: 520 }, styles: { display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px', backgroundColor: '#f4f4f4' } });
    const details = doc.createNode({ type: 'frame', tag: 'details', parentId: board, name: 'FAQ' });
    doc.createNode({ type: 'text', tag: 'summary', parentId: details, text: 'What is Weft?' });
    const answer = doc.createNode({ type: 'text', tag: 'p', parentId: details, text: 'A canvas that is the browser.' });
    const menuButton = doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Menu button', text: 'Menu', attributes: { popovertarget: 'menu' } });
    const menu = doc.createNode({ type: 'frame', parentId: board, name: 'Menu', attributes: { popover: '', id: 'menu' }, styles: { ...panel, display: 'flex', flexDirection: 'column', gap: '8px' } });
    doc.createNode({ type: 'text', tag: 'button', parentId: menu, text: 'Rename' });
    const openDialog = doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Delete button', text: 'Delete…', attributes: { commandfor: 'confirm', command: 'show-modal' } });
    const select = doc.createNode({ type: 'frame', tag: 'select', parentId: board, name: 'Size' });
    for (const [value, label] of [['s', 'Small'], ['m', 'Medium'], ['l', 'Large']]) doc.createNode({ type: 'text', tag: 'option', parentId: select, text: label, attributes: { value, ...(value === 'm' && { selected: '' }) } });
    const notes = doc.createNode({ type: 'text', tag: 'textarea', parentId: board, name: 'Notes', text: 'First line', attributes: { rows: '3' } });
    const disabled = doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Disabled', text: 'Off', attributes: { disabled: '' } });
    const dialog = doc.createNode({ type: 'frame', tag: 'dialog', parentId: board, name: 'Confirm', attributes: { id: 'confirm' }, styles: { ...panel, width: '320px' } });
    doc.createNode({ type: 'text', tag: 'p', parentId: dialog, text: 'Delete this project?' });
    const close = doc.createNode({ type: 'text', tag: 'button', parentId: dialog, name: 'Cancel', text: 'Cancel', attributes: { commandfor: 'confirm', command: 'close' } });
    editor.getState().setCamera({ x: 200, y: 120, zoom: 0.75 });
    return { board, details, answer, menuButton, menu, openDialog, select, notes, disabled, dialog, close };
  });
  await nextFrames(page);
  return ids;
}

test('native behaviors: edit mode reveals and stays inert; interact mode runs them inside the artboard', async ({ page }) => {
  const ids = await open(page);
  const el = (id: string) => page.locator(`[data-testid="artboard-${ids.board}"]`).locator(`[data-gf-id="${id}"]`);
  const select = (id: string) => page.evaluate((i) => window.weft.editor.getState().select([i]), id);

  // Attributes React would drop arrive: disabled, selected, the textarea's text.
  await expect(el(ids.disabled)).toBeDisabled();
  await expect(el(ids.select)).toHaveValue('m');
  await expect(el(ids.notes)).toHaveValue('First line');

  // Editing: closed things stay closed until a layer in them is selected; clicks only select.
  await expect(el(ids.answer)).toBeHidden();
  await expect(el(ids.menu)).toBeHidden();
  await expect(el(ids.dialog)).toBeHidden();
  await select(ids.answer);
  await expect(el(ids.answer)).toBeVisible();
  await select(ids.dialog);
  await expect(el(ids.dialog)).toBeVisible();
  await select(ids.board);
  await expect(el(ids.dialog)).toBeHidden();
  // Clicking the summary selects it (which shows the content, as selecting inside does), not a native toggle.
  await el(ids.details).locator('summary').click();
  await expect(el(ids.answer)).toBeVisible();
  expect(await page.evaluate((id) => document.querySelector(`[data-testid="artboard-${id}"]`)!.shadowRoot!.querySelector('details')!.open, ids.board)).toBe(true);
  await select(ids.board);
  await expect(el(ids.answer)).toBeHidden();
  await el(ids.menuButton).click();
  await expect(el(ids.menu)).toBeHidden();
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([ids.menuButton]);

  // Interacting.
  await page.getByTestId(`interact-${ids.board}`).click();
  await el(ids.details).locator('summary').click();
  await expect(el(ids.answer)).toBeVisible();

  // The popover opens inside the artboard, scaled with it; outside clicks and Escape close it.
  await el(ids.menuButton).click();
  await expect(el(ids.menu)).toBeVisible();
  const board = (await page.getByTestId(`artboard-${ids.board}`).boundingBox())!;
  const menu = (await el(ids.menu).boundingBox())!;
  expect(menu.x).toBeGreaterThan(board.x);
  expect(menu.x + menu.width).toBeLessThan(board.x + board.width);
  expect(menu.y).toBeGreaterThan(board.y);
  await expect(el(ids.menuButton)).toHaveAttribute('aria-expanded', 'true');
  await el(ids.answer).click();
  await expect(el(ids.menu)).toBeHidden();
  await el(ids.menuButton).click();
  await expect(el(ids.menu)).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(el(ids.menu)).toBeHidden();

  // The dialog opens modal in the artboard: the page behind ignores clicks; Cancel closes it.
  await el(ids.openDialog).click();
  await expect(el(ids.dialog)).toBeVisible();
  await expect(el(ids.dialog)).toHaveAttribute('data-gf-open', 'modal');
  await expect(el(ids.close)).toBeFocused();
  const dialog = (await el(ids.dialog).boundingBox())!;
  expect(dialog.x).toBeGreaterThan(board.x);
  await page.screenshot({ path: 'test-results/m4-native.png' });
  await el(ids.close).click();
  await expect(el(ids.dialog)).toBeHidden();

  // Form controls work.
  await el(ids.select).selectOption('l');
  await expect(el(ids.select)).toHaveValue('l');
  await el(ids.notes).fill('Typed');
  await expect(el(ids.notes)).toHaveValue('Typed');
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.text, ids.notes)).toBe('First line');

  // Off: the page goes back to what the document says.
  await page.getByTestId(`interact-${ids.board}`).click();
  await expect(el(ids.answer)).toBeHidden();
  await expect(el(ids.select)).toHaveValue('m');
  await expect(el(ids.notes)).toHaveValue('First line');
});
