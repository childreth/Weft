import { readFile } from 'node:fs/promises';
import { expect, test, type Page } from '@playwright/test';

async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
}
const computed = (page: Page, id: string) =>
  page.locator(`[data-gf-id="${id}"]`).first().evaluate((el) => {
    const s = getComputedStyle(el);
    return { size: s.fontSize, weight: s.fontWeight, line: s.lineHeight, track: s.letterSpacing };
  });

test('a layer takes a text style from the Inspector, as one undo step, and a hand-set size makes it custom', async ({ page }) => {
  await open(page);
  const id = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const board = doc.getChildren(null)[0]!.id;
    const id = doc.createNode({ type: 'text', tag: 'p', parentId: board, text: 'A line of text', styles: { fontSize: '13px' } });
    editor.getState().select([id]);
    return id;
  });
  const picker = page.getByLabel('Text style');
  await expect(picker).toHaveValue('');
  await expect(picker.locator('option:checked')).toHaveText('Custom');
  await expect(picker.locator('option')).toHaveText(['Custom', 'H1 · 56px', 'H2 · 40px', 'H3 · 30px', 'H4 · 24px', 'H5 · 20px', 'H6 · 18px', 'Body lg · 18px', 'Body md · 16px', 'Body sm · 14px', 'Label · 14px', 'Caption · 12px']);

  await picker.selectOption('h2');
  await expect.poll(() => computed(page, id)).toEqual({ size: '40px', weight: '700', line: '46px', track: '-0.8px' });
  // Everything in the role is an ordinary token-backed style.
  await expect(page.locator('[data-style-prop="fontSize"]').getByRole('button', { name: /choose/i }).first()).toHaveText('token');

  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+z');
  await expect.poll(() => computed(page, id).then((c) => c.size)).toBe('13px');
  await page.evaluate((id) => window.weft.editor.getState().select([id]), id);
  await page.getByLabel('Text style').selectOption('caption');
  await expect.poll(() => computed(page, id).then((c) => c.size)).toBe('12px');
  await expect(page.getByLabel('Text style')).toHaveValue('caption');

  await page.evaluate((id) => window.weft.doc.updateNode(id, { styles: { fontSize: '99px' } }), id);
  await expect(page.getByLabel('Text style')).toHaveValue('');
});

test('changing a tag brings its role along, unless the type was set by hand', async ({ page }) => {
  await open(page);
  const [plain, custom] = await page.evaluate(() => {
    const { doc } = window.weft;
    const board = doc.getChildren(null)[0]!.id;
    return [
      doc.createNode({ type: 'text', tag: 'p', parentId: board, text: 'Plain' }),
      doc.createNode({ type: 'text', tag: 'p', parentId: board, text: 'Custom', styles: { fontSize: '13px' } }),
    ];
  });
  const select = (id: string) => page.evaluate((id) => window.weft.editor.getState().select([id]), id);
  await select(plain!);
  await page.getByLabel('Tag', { exact: true }).selectOption('h3');
  await expect.poll(() => computed(page, plain!).then((c) => c.size)).toBe('30px');
  await expect(page.getByLabel('Text style')).toHaveValue('h3');
  await page.getByLabel('Tag', { exact: true }).selectOption('h4');
  await expect.poll(() => computed(page, plain!).then((c) => c.size)).toBe('24px');
  // Tag and role are one undo step.
  await page.keyboard.press('Meta+z');
  await expect.poll(() => computed(page, plain!).then((c) => c.size)).toBe('30px');

  await select(custom!);
  await page.getByLabel('Tag', { exact: true }).selectOption('h1');
  expect((await computed(page, custom!)).size).toBe('13px');
});

test('the Type panel changes a role for the document or one theme, and clearing goes back', async ({ page, context }) => {
  await context.route(/fonts\.googleapis\.com/, (route) => route.fulfill({ contentType: 'text/css', body: '/* fonts */' }));
  await open(page);
  const [lightBoard, posterBoard, lightH1, posterH1] = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const light = doc.getChildren(null)[0]!.id;
    const poster = doc.duplicateNode(light);
    const h1 = (board: string) => doc.getDescendantIds(board).find((id) => doc.getNode(id)!.tag === 'h1')!;
    doc.setTheme('poster', {});
    doc.updateNode(poster, { theme: 'poster' });
    editor.getState().select([]);
    return [light, poster, h1(light), h1(poster)];
  });
  const panel = page.getByTestId('document-type');
  // With nothing selected, no section scrolls the Inspector sideways.
  expect(await page.getByTestId('inspector').evaluate((el) => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(0);
  const size = panel.getByLabel('H1 size');
  await expect(size).toHaveValue('56px');
  await expect(panel.getByLabel('H1 weight')).toHaveValue('700');
  await expect(panel.getByLabel('Caption track')).toHaveValue('0.02em');
  await expect(panel.getByLabel('Body lg size')).toHaveValue('18px');
  await expect(panel.getByLabel('Label weight')).toHaveValue('500');

  // For the document: every layer using the role follows, themed or not.
  await size.fill('64px');
  await size.press('Enter');
  await expect.poll(() => computed(page, lightH1!).then((c) => c.size)).toBe('64px');
  expect((await computed(page, posterH1!)).size).toBe('64px');

  // For one theme: only frames in that theme change, and the rest comes from the document.
  await panel.getByLabel('Text roles for').selectOption('poster');
  await expect(size).toHaveValue('64px');
  await size.fill('80px');
  await size.press('Enter');
  await panel.getByLabel('H1 weight').fill('400');
  await panel.getByLabel('H1 weight').press('Enter');
  await expect.poll(() => computed(page, posterH1!)).toMatchObject({ size: '80px', weight: '400' });
  expect(await computed(page, lightH1!)).toMatchObject({ size: '64px', weight: '700' });
  expect(await page.evaluate(() => window.weft.doc.getThemes().poster)).toEqual({ 'font-size.h1': '80px', 'font-weight.h1': '400' });

  // Role names and values show in full, so similar roles can be told apart.
  const cutOff = await panel.evaluate((el) => {
    const names = [...el.querySelectorAll<HTMLElement>('.gf-type-row .gf-row-label')].filter((n) => n.scrollWidth > n.clientWidth).map((n) => n.textContent);
    const measure = document.createElement('canvas').getContext('2d')!;
    const values = [...el.querySelectorAll<HTMLInputElement>('.gf-type-cell input')].filter((input) => {
      const style = getComputedStyle(input);
      measure.font = `${style.fontSize} ${style.fontFamily}`;
      return measure.measureText(input.value).width > input.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    }).map((input) => input.getAttribute('aria-label'));
    return [...names, ...values];
  });
  expect(cutOff).toEqual([]);

  // The table fits the panel.
  const inspector = page.getByTestId('inspector');
  expect(await inspector.evaluate((el) => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(0);
  await panel.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/m4-text-roles.png' });

  // A bad value is reported and changes nothing.
  await size.fill('huge');
  await size.press('Enter');
  await expect(page.getByRole('status').filter({ hasText: 'expected a length' })).toBeVisible();
  expect(await page.evaluate(() => window.weft.doc.getThemes().poster!['font-size.h1'])).toBe('80px');

  // Clearing an override goes back to the document's value; clearing nothing changes nothing.
  await size.fill('');
  await size.press('Enter');
  await expect.poll(() => computed(page, posterH1!).then((c) => c.size)).toBe('64px');
  await expect(size).toHaveValue('64px');
  await size.fill('');
  await size.press('Enter');
  await expect(size).toHaveValue('64px');

  // The exported page uses the same values as the canvas.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), posterBoard!);
  const exporting = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export HTML' }).click();
  const html = await readFile(await (await exporting).path(), 'utf8');
  const exported = await context.newPage();
  await exported.setContent(html, { waitUntil: 'load' });
  expect(await computed(exported, posterH1!)).toEqual(await computed(page, posterH1!));
  expect(lightBoard).toBeTruthy();
});
