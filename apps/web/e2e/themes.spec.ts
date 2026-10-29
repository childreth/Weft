import { expect, test } from '@playwright/test';

test('a theme restyles a copy of an artboard from the Inspector, a section can take its own, and undo resets it', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const original = await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id);
  const copy = await page.evaluate((id) => window.weft.doc.duplicateNode(id), original);
  const color = (id: string, prop: 'backgroundColor' | 'color' = 'backgroundColor') =>
    page.evaluate(
      ([id, prop]) => {
        const el = [...document.querySelectorAll('[data-artboard-id]')]
          .map((a) => a.querySelector('.gf-artboard-host')!.shadowRoot!.querySelector(`[data-gf-id="${id}"]`))
          .find(Boolean)!;
        return getComputedStyle(el)[prop];
      },
      [id, prop] as const,
    );
  const white = await color(copy);
  expect(white).toBe('rgb(255, 255, 255)');

  // The built-in Dark theme, picked in the Inspector, restyles everything in the copy that uses the color roles.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), copy);
  const picker = page.getByLabel('Theme');
  await expect(picker).toHaveValue('');
  await picker.selectOption('dark');
  await expect.poll(() => color(copy)).toBe('rgb(2, 6, 23)');
  expect(await color(original)).toBe(white);

  // A document theme shows up in the picker; a section inside can use it.
  await page.evaluate(() => {
    window.weft.doc.setTokens({ 'color.ember-500': '#c2410c', 'color.ember-50': '#fff7ed' });
    window.weft.doc.setTheme('ember', { 'color.surface': '{color.ember-50}', 'color.surface-subtle': '#ffedd5', 'color.accent': '{color.ember-500}' });
  });
  const features = await page.evaluate(
    (id) => window.weft.doc.getDescendantIds(id).find((d) => window.weft.doc.getNode(d)!.name === 'Features')!,
    copy,
  );
  await page.evaluate((id) => window.weft.editor.getState().select([id]), features);
  await expect(picker.locator('option')).toHaveText(['Inherit', 'Dark', 'Ember']);
  await picker.selectOption('ember');
  const card = await page.evaluate((id) => window.weft.doc.getChildren(id)[0]!.id, features);
  await expect.poll(() => color(card)).toBe('rgb(255, 237, 213)');
  // Text inside takes the section theme's text color, not the dark artboard's inherited one.
  const heading = await page.evaluate((id) => window.weft.doc.getChildren(id)[0]!.id, card);
  expect(await color(heading, 'color')).toBe('rgb(15, 23, 42)');
  // The Inspector's swatches resolve tokens in the selection's theme.
  await expect(page.getByTestId('inspector')).toHaveAttribute('data-theme', 'ember');

  await page.evaluate((id) => window.weft.editor.getState().select([id]), copy);
  await page.keyboard.press('Shift+2');
  await page.screenshot({ path: 'test-results/m4-themes.png' });

  // Each change is one undo step: the section's theme, the ember theme, its tokens, then the Dark pick.
  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+z');
  await expect.poll(() => color(card)).toBe('rgb(30, 41, 59)');
  for (let i = 0; i < 3; i++) await page.keyboard.press('Meta+z');
  await expect.poll(() => color(copy)).toBe(white);
});
