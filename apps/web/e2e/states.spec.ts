import { expect, test, type Page } from '@playwright/test';

const nextFrames = (page: Page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const REST = 'rgb(37, 99, 235)';
const HOVER = 'rgb(29, 78, 216)';
const PRESSED = 'rgb(30, 64, 175)';

/** An artboard with one button that has hover and pressed states, the button selected. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(
    ({ REST, HOVER, PRESSED }) => {
      const { doc, editor } = window.weft;
      for (const a of doc.getChildren(null)) doc.deleteNodes([a.id]);
      const board = doc.createNode({ type: 'frame', name: 'Card', frame: { x: 0, y: 0, width: 480, height: 240 }, styles: { padding: '48px', backgroundColor: '#fff' } });
      const button = doc.createNode({
        type: 'text',
        tag: 'button',
        parentId: board,
        name: 'Save',
        text: 'Save',
        styles: { backgroundColor: REST, color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '8px' },
        states: { hover: { backgroundColor: HOVER }, active: { backgroundColor: PRESSED } },
      });
      editor.getState().setCamera({ x: 120, y: 120, zoom: 1 });
      editor.getState().select([button]);
      return { board, button };
    },
    { REST, HOVER, PRESSED },
  );
  await nextFrames(page);
  return ids;
}

test('states: Preview shows one on the canvas, real hover only while interacting', async ({ page }) => {
  const { board, button } = await open(page);
  const el = page.locator(`[data-testid="artboard-${board}"]`).locator('button');
  const bg = () => el.evaluate((b) => getComputedStyle(b).backgroundColor);

  // Editing: hovering the button doesn't restyle it.
  await el.hover();
  expect(await bg()).toBe(REST);

  // The Inspector lists the state's styles; tabs with styles carry a dot.
  await expect(page.getByTestId('state-tab-hover')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('[data-state="hover"] [data-style-prop="backgroundColor"]')).toHaveCount(1);
  await expect(page.getByTestId('state-tab-hover').locator('.gf-state-dot')).toHaveCount(1);
  await expect(page.getByTestId('state-tab-focus').locator('.gf-state-dot')).toHaveCount(0);

  // Preview forces the state; switching tabs previews that one; selecting elsewhere ends it.
  await page.getByTestId('state-preview').click();
  await expect.poll(bg).toBe(HOVER);
  await page.screenshot({ path: 'test-results/m4-states.png' });
  await page.getByTestId('state-tab-active').click();
  await expect.poll(bg).toBe(PRESSED);
  await expect(page.locator('[data-state="active"] [data-style-prop="backgroundColor"]')).toHaveCount(1);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), board);
  await expect.poll(bg).toBe(REST);

  // Adding a style to a state from the Inspector.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), button);
  await page.getByTestId('state-tab-focus').click();
  await page.getByRole('button', { name: 'Add focus style' }).click();
  await page.getByLabel('Add focus style: search').fill('outline offset');
  await page.getByLabel('Add focus style: search').press('Enter');
  await expect.poll(() => page.evaluate((id) => window.weft.doc.getNode(id)!.states?.focus, button)).toHaveProperty('outlineOffset');

  // Interacting: the real :hover applies.
  await page.getByTestId(`interact-${board}`).click();
  await page.mouse.move(10, 10);
  await el.hover();
  await expect.poll(bg).toBe(HOVER);
  await page.mouse.move(10, 10);
  await expect.poll(bg).toBe(REST);

});
