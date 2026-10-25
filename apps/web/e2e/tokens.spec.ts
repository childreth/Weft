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
  await page.evaluate(() => window.weft.doc.setTokens({ 'color.ember-500': '#c2410c', 'color.accent': '{color.ember-500}' }));
  await expect.poll(background).toBe('rgb(194, 65, 12)');
  // A step that changes only tokens still enables Undo.
  await expect(page.getByTitle('Undo (⌘Z)')).toBeEnabled();
  await page.evaluate((id) => window.weft.editor.getState().select([id]), button);
  const row = page.locator('[data-style-prop="backgroundColor"]').first();
  await expect(row).toBeVisible();
  await page.screenshot({ path: 'test-results/m4-tokens.png' });
  const suggestions = await row.locator('input').first().evaluate((input) => {
    const list = (input as HTMLInputElement).list;
    return list ? [...list.options].map((o) => o.value) : [];
  });
  expect(suggestions).toContain('var(--color-ember-500)');

  await page.keyboard.press('Escape');
  await page.keyboard.press('Meta+z');
  await expect.poll(background).toBe(blue);
  await expect(page.getByTitle('Undo (⌘Z)')).toBeDisabled();
});
