import { expect, test } from '@playwright/test';

test('+ Add searches style properties: grouped list, type-ahead, keyboard, Esc', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const features = await page.evaluate(() => {
    const id = window.weft.doc.getNodes().find((n) => n.name === 'Features')!.id;
    window.weft.editor.getState().select([id]);
    return id;
  });
  const styles = (id: string) => page.evaluate((i) => window.weft.doc.getNode(i)!.styles, id);

  const add = page.getByRole('button', { name: 'Add style property' });
  await add.click();
  const picker = page.getByTestId('style-picker');
  await expect(picker.locator('.gf-picker-group').first()).toHaveText('Layout');
  // Properties the layer already has aren't offered.
  await expect(picker.getByRole('option', { name: 'Display', exact: true })).toHaveCount(0);
  await page.screenshot({ path: 'test-results/m3-style-picker.png' });

  // Initials find a long name; Enter adds the best match.
  const search = page.getByLabel('Add style property: search');
  await search.fill('ar');
  await expect(picker.getByRole('option').first()).toContainText('Aspect Ratio');
  await search.fill('gaf');
  await expect(picker.getByRole('option').first()).toContainText('Grid Auto Flow');
  await search.press('Enter');
  await expect(picker).toHaveCount(0);
  expect(await styles(features)).toHaveProperty('gridAutoFlow');

  // Arrow keys move; Escape closes without adding, and keeps the selection.
  await add.click();
  await search.fill('pad');
  await search.press('ArrowDown');
  await expect(picker.getByRole('option', { selected: true })).toContainText('Padding Inline');
  await search.press('Escape');
  await expect(picker).toHaveCount(0);
  expect(await styles(features)).not.toHaveProperty('paddingInline');
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([features]);

  // Breakpoint sections use the same picker.
  await page.getByRole('button', { name: 'Add mobile override' }).click();
  await page.getByLabel('Add mobile override: search').fill('gap');
  await page.getByTestId('style-picker').getByRole('option').first().click();
  expect(await page.evaluate((i) => window.weft.doc.getNode(i)!.breakpoints?.mobile, features)).toHaveProperty('gap');
});
