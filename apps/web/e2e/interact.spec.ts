import { expect, test, type Page } from '@playwright/test';

const nextFrames = (page: Page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

/** Two artboards: a sign-up form with a link to "Welcome", and the Welcome page. */
async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    for (const a of doc.getChildren(null)) doc.deleteNodes([a.id]);
    const card = { display: 'flex', flexDirection: 'column', gap: '12px', padding: '32px', backgroundColor: 'var(--color-surface)', color: 'var(--color-on-surface)' };
    const form = doc.createNode({ type: 'frame', name: 'Sign up', frame: { x: 0, y: 0, width: 480, height: 420 }, styles: card });
    const title = doc.createNode({ type: 'text', tag: 'h2', parentId: form, text: 'Create an account' });
    doc.createNode({ type: 'frame', tag: 'input', parentId: form, name: 'Email', attributes: { type: 'email', placeholder: 'you@example.com' }, styles: { padding: '8px' } });
    const list = doc.createNode({ type: 'frame', parentId: form, name: 'Scroller', styles: { height: '80px', overflowY: 'auto', backgroundColor: 'var(--color-surface-container)' } });
    for (let i = 1; i <= 8; i++) doc.createNode({ type: 'text', tag: 'p', parentId: list, text: `Plan ${i}` });
    const link = doc.createNode({ type: 'text', tag: 'a', parentId: form, text: 'Continue', attributes: { href: '#welcome' } });
    const welcome = doc.createNode({ type: 'frame', name: 'Welcome', frame: { x: 1400, y: 0, width: 480, height: 420 }, styles: card });
    doc.createNode({ type: 'text', tag: 'h2', parentId: welcome, text: 'Welcome!' });
    editor.getState().setCamera({ x: 120, y: 120, zoom: 1 });
    return { form, title, list, link, welcome };
  });
  await nextFrames(page);
  return ids;
}

const shadow = (page: Page, artboard: string, selector: string) => page.locator(`[data-testid="artboard-${artboard}"]`).locator(selector);
const selection = (page: Page) => page.evaluate(() => window.weft.editor.getState().selection);

test('interact mode: the artboard works like a page, links pan to another artboard, off edits again', async ({ page }) => {
  const { form, title, list, link, welcome } = await open(page);
  const toggle = page.getByTestId(`interact-${form}`);

  // Shown for a selected artboard (or on hover), hidden otherwise.
  await expect(toggle).toHaveCSS('opacity', '0');
  await page.evaluate((id) => window.weft.editor.getState().select([id]), title);
  await nextFrames(page);
  await expect(toggle).toHaveCSS('opacity', '0');
  await page.evaluate((id) => window.weft.editor.getState().select([id]), form);
  await expect(toggle).toHaveCSS('opacity', '1');

  // On: a layer selected inside moves up to the artboard.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), title);
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await expect(toggle).toHaveText('Interacting');
  expect(await selection(page)).toEqual([form]);

  // Clicking content doesn't select; the input takes focus and typing (Backspace too) stays in it.
  await shadow(page, form, 'h2').click();
  expect(await selection(page)).toEqual([form]);
  await shadow(page, form, 'input').click();
  await page.keyboard.type('ada@example.comx');
  await page.keyboard.press('Backspace');
  await expect(shadow(page, form, 'input')).toHaveValue('ada@example.com');
  expect(await page.evaluate((id) => window.weft.doc.has(id), form)).toBe(true);
  expect(await page.evaluate(() => window.weft.editor.getState().hoveredId)).toBeNull();

  // The wheel scrolls a scrollable box inside instead of panning the canvas.
  const camera = await page.evaluate(() => window.weft.editor.getState().camera);
  const scroller = shadow(page, form, `[data-gf-id="${list}"]`);
  await scroller.hover();
  await page.mouse.wheel(0, 60);
  await expect.poll(() => scroller.evaluate((el) => el.scrollTop)).toBeGreaterThan(0);
  expect(await page.evaluate(() => window.weft.editor.getState().camera)).toEqual(camera);
  await page.screenshot({ path: 'test-results/m4-interact.png' });

  // A link to another artboard pans there (same zoom) and turns interact on for it; the editor doesn't navigate.
  await shadow(page, form, `[data-gf-id="${link}"]`).click();
  await expect(page.getByTestId(`interact-${welcome}`)).toHaveAttribute('aria-pressed', 'true');
  expect(page.url()).not.toContain('#welcome');
  const moved = await page.evaluate(() => window.weft.editor.getState().camera);
  expect(moved.zoom).toBe(1);
  expect(moved.x).toBeLessThan(camera.x - 1000);

  // Off: clicks select layers again, and links still don't navigate.
  await page.evaluate((id) => window.weft.editor.getState().setInteracting(id, false), form);
  await page.evaluate(() => window.weft.editor.getState().setCamera({ x: 120, y: 120, zoom: 1 }));
  await nextFrames(page);
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await shadow(page, form, 'h2').click();
  expect(await selection(page)).toEqual([title]);
  await shadow(page, form, `[data-gf-id="${link}"]`).click();
  expect(page.url()).not.toContain('#welcome');
  expect(await selection(page)).toEqual([link]);
});
