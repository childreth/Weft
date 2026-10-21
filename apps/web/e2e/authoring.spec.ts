import { expect, test } from '@playwright/test';

test('a heading frame with span children, a gradient and longhand spacing renders on the canvas', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const heading = await page.evaluate(() => {
    const { doc, editor } = window.weft;
    const hero = doc.getNodes().find((n) => n.name === 'Hero copy')!.id;
    const h1 = doc.getChildren(hero)[0]!.id;
    doc.deleteNodes([h1]);
    const id = doc.createNode({
      type: 'frame',
      tag: 'h1',
      name: 'Welcome',
      parentId: hero,
      beforeId: doc.getChildren(hero)[0]!.id,
      styles: {
        margin: '0',
        marginBottom: '8px',
        paddingTop: '12px',
        fontSize: '48px',
        lineHeight: '1.1',
        backgroundImage: 'linear-gradient(90deg, #eef2ff, #ffffff)',
      },
    });
    doc.createNode({ type: 'text', tag: 'span', parentId: id, text: 'Welcome back to ' });
    doc.createNode({ type: 'text', tag: 'span', parentId: id, text: 'CarGurus!', styles: { color: '#3b82f6', textDecoration: 'underline', whiteSpace: 'nowrap' } });
    editor.getState().select([id]);
    return id;
  });

  const h1 = page.locator(`[data-gf-id="${heading}"]`);
  await expect(h1).toHaveText('Welcome back to CarGurus!');
  const styles = await h1.evaluate((el) => {
    const cs = getComputedStyle(el);
    const span = getComputedStyle(el.lastElementChild!);
    return { tag: el.tagName, bg: cs.backgroundImage, padTop: cs.paddingTop, color: span.color, deco: span.textDecorationLine };
  });
  expect(styles).toMatchObject({ tag: 'H1', padTop: '12px', color: 'rgb(59, 130, 246)', deco: 'underline' });
  expect(styles.bg).toContain('linear-gradient');
  // The Inspector picks the new properties up from the schema.
  await expect(page.locator('[data-style-prop="backgroundImage"]')).toBeVisible();
  await expect(page.locator('[data-style-prop="marginBottom"]')).toBeVisible();
  await page.screenshot({ path: 'test-results/m3-authoring.png' });
});
