import { expect, test } from '@playwright/test';

test('pick a Google Font for a heading: added to the document, used as a token, loaded once, one undo', async ({ page }) => {
  // Stub the server's font stylesheet: tests stay offline.
  const requested: string[] = [];
  await page.route('**/fonts.css?*', (route) => {
    requested.push(new URL(route.request().url()).searchParams.get('q')!);
    return route.fulfill({ contentType: 'text/css', body: '/* fonts */' });
  });
  await page.goto(`/?doc=fonts-${Date.now()}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);

  const h1 = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const id = doc.getNodes().find((n) => n.tag === 'h1')!.id;
    doc.updateNode(id, { styles: { fontFamily: 'var(--font-family-sans)' } });
    editor.getState().select([id]);
    return id;
  });

  const row = page.locator('[data-style-prop="fontFamily"]').first();
  await row.getByRole('button', { name: 'Choose a font' }).click();
  const search = page.getByLabel('Search fonts');
  await search.fill('playfair d');
  await expect(page.getByTestId('font-picker').getByRole('option').first()).toContainText('Playfair Display');
  await page.screenshot({ path: 'test-results/m3-fonts.png' });
  await search.press('Enter');

  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.styles.fontFamily, h1)).toBe('var(--font-family-playfair-display)');
  expect(await page.evaluate(() => window.weft.doc.getFonts())).toEqual([{ family: 'Playfair Display', weights: [400, 500, 600, 700] }]);
  // The canvas resolves the token to the family with its fallback stack.
  const family = await page.locator(`[data-gf-id="${h1}"]`).evaluate((el) => getComputedStyle(el).fontFamily);
  expect(family).toBe('"Playfair Display", Georgia, serif');
  await expect(page.locator('link[data-weft-fonts]')).toHaveAttribute('href', /fonts\.css\?q=Playfair%20Display%3A400%2C500%2C600%2C700$/);
  expect(requested).toEqual(['Playfair Display:400,500,600,700']);

  // Adding the font and using it is one undo step.
  await page.evaluate(() => window.weft.history.undo());
  expect(await page.evaluate((id) => window.weft.doc.getNode(id)!.styles.fontFamily, h1)).toBe('var(--font-family-sans)');
  expect(await page.evaluate(() => window.weft.doc.getFonts())).toEqual([]);
  await expect(page.locator('link[data-weft-fonts]')).toHaveCount(0);
});

test('the document font list adds and removes fonts', async ({ page }) => {
  await page.route('**/fonts.css?*', (route) => route.fulfill({ contentType: 'text/css', body: '' }));
  await page.goto(`/?doc=fonts-list-${Date.now()}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  await page.evaluate(() => window.weft.editor.getState().select([]));

  const section = page.getByTestId('document-fonts');
  await section.getByRole('button', { name: '+ Add' }).click();
  await section.getByLabel('Add a font').fill('lora');
  await section.getByRole('option', { name: /^Lora/ }).click();
  await expect(section.getByTestId('document-font')).toHaveText(/Lora/);
  await section.getByRole('button', { name: 'Remove Lora' }).click();
  await expect(section.getByTestId('document-font')).toHaveCount(0);
});
