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
  // The default light surface, from Weft's Material scheme.
  const white = await color(copy);
  expect(white).toBe('rgb(250, 248, 255)');

  // The built-in Dark theme, picked in the Inspector, restyles everything in the copy that uses the color roles.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), copy);
  const picker = page.getByLabel('Theme');
  await expect(picker).toHaveValue('');
  await picker.selectOption('dark');
  await expect.poll(() => color(copy)).toBe('rgb(17, 19, 27)');
  expect(await color(original)).toBe(white);

  // A document theme shows up in the picker; a section inside can use it.
  await page.evaluate(() => {
    window.weft.doc.setTokens({ 'color.ember-500': '#c2410c', 'color.ember-50': '#fff7ed' });
    window.weft.doc.setTheme('ember', { 'color.surface': '{color.ember-50}', 'color.surface-container': '#ffedd5', 'color.primary': '{color.ember-500}' });
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
  expect(await color(heading, 'color')).toBe('rgb(25, 27, 35)');
  // The Inspector's swatches resolve tokens in the selection's theme.
  await expect(page.getByTestId('inspector')).toHaveAttribute('data-theme', 'ember');

  await page.evaluate((id) => window.weft.editor.getState().select([id]), copy);
  await page.keyboard.press('Shift+2');
  await page.screenshot({ path: 'test-results/m4-themes.png' });

  // Each change is one undo step: the section's theme, the ember theme, its tokens, then the Dark pick.
  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+z');
  await expect.poll(() => color(card)).toBe('rgb(29, 31, 39)');
  for (let i = 0; i < 3; i++) await page.keyboard.press('Meta+z');
  await expect.poll(() => color(copy)).toBe(white);
});

test('the font roles are set in the Fonts panel, and a theme can swap one', async ({ page }) => {
  await page.route('**/fonts.css?*', (route) => route.fulfill({ contentType: 'text/css', body: '/* fonts */' }));
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const [board, heading] = await page.evaluate(() => {
    const { doc } = window.weft;
    doc.addFonts([{ family: 'Fraunces' }, { family: 'Inter' }]);
    const board = doc.getChildren(null)[0]!.id;
    const h1 = doc.getNodes().find((n) => n.tag === 'h1')!.id;
    doc.updateNode(h1, { styles: { fontFamily: 'var(--font-family-heading)' } });
    return [board, h1];
  });
  const family = () => page.locator(`[data-gf-id="${heading}"]`).first().evaluate((el) => getComputedStyle(el).fontFamily);
  expect(await family()).toContain('system-ui');

  // With nothing selected, the Inspector shows the document's fonts and the roles.
  await page.evaluate(() => window.weft.editor.getState().select([]));
  await page.getByLabel('Headings font').selectOption({ label: 'Fraunces' });
  await expect.poll(family).toMatch(/^"?Fraunces"?, Georgia/);
  expect(await page.evaluate(() => window.weft.doc.getTokens()['font-family.heading'])).toBe('{font-family.fraunces}');

  // A theme points the role at another font, only inside frames that use it.
  await page.evaluate((id) => {
    window.weft.doc.setTheme('plain', { 'font-family.heading': '{font-family.inter}' });
    window.weft.doc.updateNode(id, { theme: 'plain' });
  }, board);
  await expect.poll(family).toMatch(/^"?Inter"?,/);
  await page.screenshot({ path: 'test-results/m4-font-roles.png' });

  // On a section, a theme's body font reaches text that only inherits it.
  const [section, body] = await page.evaluate((id) => {
    const { doc } = window.weft;
    doc.updateNode(id, { theme: null });
    doc.setTokens({ 'font-family.body': '{font-family.fraunces}' });
    doc.setTheme('plain', { 'font-family.body': '{font-family.inter}' });
    const p = doc.getNodes().find((n) => n.tag === 'p' && !n.styles.fontFamily)!;
    doc.updateNode(p.parentId!, { theme: 'plain' });
    return [p.parentId!, p.id];
  }, board);
  const bodyFamily = () => page.locator(`[data-gf-id="${body}"]`).first().evaluate((el) => getComputedStyle(el).fontFamily);
  await expect.poll(bodyFamily).toMatch(/^"?Inter"?,/);
  await page.evaluate((id) => window.weft.doc.updateNode(id, { theme: null }), section);
  await expect.poll(bodyFamily).toMatch(/^"?Fraunces"?,/);
  await page.evaluate(() => window.weft.doc.setTokens({ 'font-family.body': null }));

  // Back to the default: the document token is removed, not set to the default value.
  await page.evaluate((id) => window.weft.doc.updateNode(id, { theme: null }), board);
  await page.getByLabel('Headings font').selectOption({ label: 'System sans' });
  expect(await page.evaluate(() => 'font-family.heading' in window.weft.doc.getTokens())).toBe(false);
});

test('the Colors panel generates Material roles from a seed, for the document or a new theme pair', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const board = await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id);
  const background = () =>
    page.locator(`[data-gf-id="${board}"]`).first().evaluate((el) => getComputedStyle(el).backgroundColor);
  await page.evaluate(() => window.weft.editor.getState().select([]));
  const panel = page.getByTestId('document-colors');

  await panel.getByLabel('Seed color').fill('#b85c38');
  await panel.getByRole('button', { name: 'Apply to document' }).click();
  await expect.poll(background).toBe('rgb(255, 248, 246)');
  expect(await page.evaluate(() => window.weft.doc.getThemes().dark!['color.primary'])).toBe('#ffb59a');
  await page.screenshot({ path: 'test-results/m4-material-colors.png' });

  // A name makes a theme pair instead; the document's colors stay.
  await panel.getByLabel('Seed color').fill('#3f7d4e');
  await panel.getByLabel('Scheme variant').selectOption('fidelity');
  await panel.getByLabel('New theme name').fill('forest');
  await panel.getByRole('button', { name: 'Create forest and forest-dark' }).click();
  await expect.poll(() => page.evaluate(() => window.weft.doc.getThemeNames())).toEqual(['dark', 'forest', 'forest-dark']);
  expect(await background()).toBe('rgb(255, 248, 246)');

  // Each is one undo step.
  await page.keyboard.press('Meta+z');
  await expect.poll(() => page.evaluate(() => window.weft.doc.getThemeNames())).toEqual(['dark']);
  await page.keyboard.press('Meta+z');
  await expect.poll(background).toBe('rgb(250, 248, 255)');
});
