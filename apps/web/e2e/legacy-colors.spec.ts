import { expect, test } from '@playwright/test';

test('old color names are explained in the Inspector and move onto the roles without changing a color', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  // A document from before the roles: a theme that sets color.text, and a heading that uses it.
  const { board, heading } = await page.evaluate(() => {
    const { doc } = window.weft;
    doc.loadSnapshot({ ...doc.toSnapshot(), themes: { smoky: { 'color.text': '#3d2e1f', 'color.accent': '#b85c38', 'color.surface': '#faf5ee' } } });
    const board = doc.getChildren(null)[0]!.id;
    const heading = doc.getDescendantIds(board).find((id) => doc.getNode(id)!.tag === 'h1')!;
    doc.updateNode(board, { theme: 'smoky' });
    doc.updateNode(heading, { styles: { color: 'var(--color-text)' } });
    return { board, heading };
  });
  const color = () =>
    page.evaluate((id) => {
      const el = document.querySelector('.gf-artboard-host')!.shadowRoot!.querySelector(`[data-gf-id="${id}"]`)!;
      return getComputedStyle(el).color;
    }, heading);
  await expect.poll(color).toBe('rgb(61, 46, 31)');

  // The Inspector says what the old name is, and what this theme sets it to.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), heading);
  await expect(page.getByTestId('color-token-hint')).toHaveText('Old name for on-surface; Smoky sets it to #3d2e1f');
  // The picker lists the current color first, though the old names stay out of the list.
  await page.getByRole('button', { name: 'Token: choose a token for color' }).click();
  const first = page.getByTestId('token-picker').getByRole('option').first();
  await expect(first).toContainText('text');
  await expect(first).toContainText('old name for on-surface');
  await page.screenshot({ path: 'test-results/m4-legacy-colors.png' });
  await page.keyboard.press('Escape');

  // Agents and people can't set an old name any more.
  const refused = await page.evaluate(() => {
    try {
      window.weft.doc.setTheme('smoky', { 'color.text': '#000000' });
      return '';
    } catch (err) {
      return (err as Error).message;
    }
  });
  expect(refused).toContain('"color.text" is an old name for color.on-surface');

  // The Colors section offers the move; colors stay the same, and it's one undo step.
  await page.evaluate(() => window.weft.editor.getState().select([]));
  const legacy = page.getByTestId('legacy-colors');
  await expect(legacy).toContainText('use old color names');
  await legacy.getByRole('button', { name: 'Update color names' }).click();
  await expect(page.getByTestId('legacy-colors-result')).toContainText('onto the roles');
  // The seed page's Get started button already used primary: it now takes smoky's accent.
  await expect(page.getByTestId('legacy-colors-result')).toContainText("already using a role now take the theme's color");
  await expect(legacy).toHaveCount(0);
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.styles.color, heading)).toBe('var(--color-on-surface)');
  expect(await page.evaluate(() => window.weft.doc.getThemes().smoky)).toEqual({
    'color.surface': '#faf5ee',
    'color.on-surface': '#3d2e1f',
    'color.primary': '#b85c38',
  });
  expect(await color()).toBe('rgb(61, 46, 31)');
  await page.evaluate((id) => window.weft.editor.getState().select([id]), board);
  await page.keyboard.press('Shift+2');
  await page.evaluate(() => window.weft.editor.getState().select([]));
  await page.screenshot({ path: 'test-results/m4-legacy-colors-updated.png' });

  await page.keyboard.press('Meta+z');
  await expect.poll(() => page.evaluate((id) => window.weft.doc.getNode(id)!.styles.color, heading)).toBe('var(--color-text)');
  await expect.poll(color).toBe('rgb(61, 46, 31)');
});
