import { readFile } from 'node:fs/promises';
import { expect, test, type Page } from '@playwright/test';

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

/** Every layer's themed values on the canvas or an exported page, by layer id. */
const THEMED_PROPS = ['backgroundColor', 'color', 'borderTopColor', 'fontFamily'] as const;
function themedValues(page: Page, scope: 'canvas' | 'page') {
  return page.evaluate(
    ([scope, props]) => {
      const roots: ParentNode[] =
        scope === 'page' ? [document] : [...document.querySelectorAll('.gf-artboard-host')].map((host) => host.shadowRoot!);
      const out: Record<string, string[]> = {};
      for (const root of roots) {
        for (const el of root.querySelectorAll('[data-gf-id]')) {
          const style = getComputedStyle(el);
          out[el.getAttribute('data-gf-id')!] = props.map((prop) => style[prop as 'color']);
        }
      }
      return out;
    },
    [scope, THEMED_PROPS as readonly string[]] as const,
  );
}

test('an exported page shows themes exactly as the canvas does, nested ones and fonts included', async ({ page, context }) => {
  // Fonts are stubbed: the computed family is what's compared, and tests stay offline.
  await context.route(/fonts\.googleapis\.com|fonts\.css\?/, (route) => route.fulfill({ contentType: 'text/css', body: '/* fonts */' }));
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const [board, section, card] = await page.evaluate(() => {
    const { doc } = window.weft;
    doc.addFonts([{ family: 'Fraunces' }, { family: 'Inter' }]);
    doc.setTokens({ 'color.ember-500': '#c2410c', 'font-family.body': '{font-family.inter}' });
    // An alias, an alias of an alias (color.accent → color.primary) and a font role all change.
    doc.setTheme('ember', {
      'color.primary': '{color.ember-500}',
      'color.surface-container': '#ffedd5',
      'color.on-surface': '#431407',
      'font-family.body': '{font-family.fraunces}',
    });
    const board = doc.getChildren(null)[0]!.id;
    const features = doc.getDescendantIds(board).find((id) => doc.getNode(id)!.name === 'Features')!;
    const card = doc.getChildren(features)[0]!.id;
    doc.updateNode(board, { theme: 'dark' });
    doc.updateNode(features, { theme: 'ember' });
    // Dark inside ember inside dark: each level must win over the one around it.
    doc.updateNode(card, { theme: 'dark', styles: { backgroundColor: 'var(--color-accent)' } });
    return [board, features, card];
  });
  await page.evaluate((id) => window.weft.editor.getState().select([id]), board);

  const exporting = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export HTML' }).click();
  const html = await readFile(await (await exporting).path(), 'utf8');
  const canvas = await themedValues(page, 'canvas');

  const exported = await context.newPage();
  await exported.setContent(html, { waitUntil: 'load' });
  const values = await themedValues(exported, 'page');

  // The themes really differ here, so matching means something.
  expect(canvas[board]![0]).toBe('rgb(17, 19, 27)');
  expect(canvas[section]![1]).toBe('rgb(67, 20, 7)');
  expect(canvas[section]![3]).toMatch(/^"?Fraunces"?,/);
  expect(canvas[card]![0]).not.toBe('rgb(194, 65, 12)');
  // Every layer of the artboard is exported, with the same values.
  const expected = Object.fromEntries(Object.keys(values).map((id) => [id, canvas[id]]));
  expect(Object.keys(values).length).toBeGreaterThan(5);
  expect(values).toEqual(expected);
  await exported.screenshot({ path: 'test-results/m4-theme-export.png' });
});

test('a theme reaches other open editors and survives a reload; undo and removal do too', async ({ page, context }) => {
  const url = `/?doc=themes-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await page.goto(url);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const other = await context.newPage();
  await other.goto(url);
  await other.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const board = await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id);
  const background = (p: Page) => p.locator(`[data-gf-id="${board}"]`).first().evaluate((el) => getComputedStyle(el).backgroundColor);
  const light = await background(other);

  // A new theme pair from the Colors panel shows up in the other editor's picker.
  await page.evaluate(() => window.weft.editor.getState().select([]));
  const panel = page.getByTestId('document-colors');
  await panel.getByLabel('Seed color').fill('#3f7d4e');
  await panel.getByLabel('New theme name').fill('forest');
  await panel.getByRole('button', { name: 'Create forest and forest-dark' }).click();
  await other.evaluate((id) => window.weft.editor.getState().select([id]), board);
  await expect(other.getByLabel('Theme').locator('option')).toHaveText(['Default', 'Dark', 'Forest', 'Forest dark']);

  // Picked there, it restyles the artboard here.
  await other.getByLabel('Theme').selectOption('forest-dark');
  await expect.poll(() => background(page)).not.toBe(light);
  const themed = await background(other);
  await expect.poll(() => background(page)).toBe(themed);

  await page.reload();
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  await expect.poll(() => background(page)).toBe(themed);

  // Undo stays with the editor that made the change, and reaches the other one.
  await other.evaluate(() => window.weft.history.undo());
  await expect.poll(() => background(page)).toBe(light);
  await other.evaluate(() => window.weft.history.redo());
  await expect.poll(() => background(page)).toBe(themed);

  // Removing the theme clears it from the frame, in every editor.
  await page.evaluate(() => window.weft.doc.removeTheme('forest-dark'));
  await expect.poll(() => background(other)).toBe(light);
  await expect(other.getByLabel('Theme')).toHaveValue('');
  await expect(other.getByLabel('Theme').locator('option')).toHaveText(['Default', 'Dark', 'Forest']);
});

test('a frame naming a theme that no longer exists renders with its surroundings and can pick another', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const board = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const id = doc.getChildren(null)[0]!.id;
    doc.setTheme('ember', { 'color.surface': '#fff7ed' });
    doc.updateNode(id, { theme: 'ember' });
    editor.getState().select([id]);
    return id;
  });
  const background = () => page.locator(`[data-gf-id="${board}"]`).first().evaluate((el) => getComputedStyle(el).backgroundColor);
  await expect.poll(background).toBe('rgb(255, 247, 237)');

  // What merging one client's removal with another's pick leaves behind.
  await page.evaluate(() => window.weft.doc.themes.delete('ember'));
  await expect.poll(background).toBe('rgb(250, 248, 255)');
  const picker = page.getByLabel('Theme');
  await expect(picker).toHaveValue('');
  await picker.selectOption('dark');
  await expect.poll(background).toBe('rgb(17, 19, 27)');
});
