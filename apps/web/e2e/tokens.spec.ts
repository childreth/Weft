import { expect, test } from '@playwright/test';

test("a document token restyles the canvas live, shows in the Inspector, and undoes", async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const button = await page.evaluate(() => window.weft.doc.getNodes().find((n) => n.text === 'Get started')!.id);
  const background = () =>
    page.evaluate((id) => {
      const el = [...document.querySelectorAll('[data-artboard-id]')]
        .map((a) => a.querySelector('.gf-artboard-host')!.shadowRoot!.querySelector(`[data-gf-id="${id}"]`))
        .find(Boolean)!;
      return getComputedStyle(el).backgroundColor;
    }, button);
  const blue = await background();

  // Overriding a role restyles everything that uses it; a new token joins the Inspector's suggestions.
  await page.evaluate(() => window.weft.doc.setTokens({ 'color.ember-500': '#c2410c', 'color.primary': '{color.ember-500}' }));
  await expect.poll(background).toBe('rgb(194, 65, 12)');
  // A step that changes only tokens still enables Undo.
  await expect(page.getByTitle('Undo (⌘Z)')).toBeEnabled();
  await page.evaluate((id) => window.weft.editor.getState().select([id]), button);
  const row = page.locator('[data-style-prop="backgroundColor"]').first();
  await expect(row).toBeVisible();
  await page.screenshot({ path: 'test-results/m4-tokens.png' });
  // The new token joins the token picker, after the roles.
  await row.getByRole('button', { name: /choose a token/ }).click();
  await page.getByTestId('token-picker').getByLabel('Search tokens').fill('ember');
  await expect(page.getByTestId('token-picker').getByRole('option')).toHaveText(['ember-500', 'Use “ember”raw value']);
  await page.getByTestId('token-picker').getByLabel('Search tokens').press('Escape');

  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+z');
  await expect.poll(background).toBe(blue);
  await expect(page.getByTitle('Undo (⌘Z)')).toBeDisabled();
});

test('the token picker binds a style to a role, a spacing token or a raw value, each one undo step', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const button = await page.evaluate(() => window.weft.doc.getNodes().find((n) => n.text === 'Get started')!.id);
  const styles = () => page.evaluate((id) => window.weft.doc.getNode(id)!.styles, button);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), button);
  const row = page.locator('[data-style-prop="backgroundColor"]').first();
  const picker = page.getByTestId('token-picker');
  const before = (await styles()).backgroundColor;

  // The swatch opens the picker: Material roles in order, the old names hidden, other colors folded away.
  await row.getByRole('button', { name: 'Choose a background color token' }).click();
  const names = picker.locator('.gf-font-name');
  await expect(names.first()).toHaveText('primary');
  const listed = await names.allTextContents();
  expect(listed).not.toContain('accent');
  expect(listed).not.toContain('neutral.50');
  await expect(picker.getByRole('option', { name: /^primary-container/ })).toContainText('text: on-primary-container');
  await page.screenshot({ path: 'test-results/m4-token-picker.png' });
  await picker.getByRole('button', { name: /Other colors/ }).click();
  await expect(picker.getByRole('option', { name: 'neutral.50' })).toBeVisible();

  // Search and the keyboard pick a role.
  await picker.getByLabel('Search tokens').fill('tertiary-con');
  await picker.getByLabel('Search tokens').press('Enter');
  await expect(picker).toBeHidden();
  expect((await styles()).backgroundColor).toBe('var(--color-tertiary-container)');
  await expect(row.locator('.gf-badge')).toHaveText('token');

  // Swatches resolve in the selection's theme.
  await page.evaluate(() => {
    const { doc } = window.weft;
    doc.updateNode(doc.getChildren(null)[0]!.id, { theme: 'dark' });
  });
  await row.getByRole('button', { name: 'Choose a background color token' }).click();
  const swatch = (role: string) => picker.getByRole('option', { name: new RegExp(`^${role}`) }).first().locator('.gf-swatch').evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(await swatch('surface')).toBe('rgb(17, 19, 27)');

  // A value that isn't a token is offered as a raw value.
  await picker.getByLabel('Search tokens').fill('#ff0000');
  await picker.getByRole('option', { name: /Use “#ff0000”/ }).click();
  expect((await styles()).backgroundColor).toBe('#ff0000');
  await expect(row.locator('.gf-badge')).toHaveText('raw');

  // Other token groups list their values.
  await page.evaluate((id) => window.weft.doc.updateNode(id, { styles: { gap: '3px' } }), button);
  const gap = page.locator('[data-style-prop="gap"]').first();
  await gap.getByRole('button', { name: /choose a token for gap/ }).click();
  await expect(picker.getByRole('option', { name: /^4/ })).toContainText('16px');
  await picker.getByRole('option', { name: /^4/ }).click();
  expect((await styles()).gap).toBe('var(--space-4)');

  // Each pick is one undo step.
  await page.keyboard.press('Escape');
  const undo = async (expected: Partial<Record<string, string>>) => {
    await page.keyboard.press('Meta+z');
    await expect.poll(styles).toMatchObject(expected);
  };
  await undo({ gap: '3px' });
  await undo({ backgroundColor: '#ff0000' }); // the gap row
  await undo({ backgroundColor: 'var(--color-tertiary-container)' });
  await undo({ backgroundColor: 'var(--color-tertiary-container)' }); // the theme
  await undo({ backgroundColor: before! });
});
