import { expect, test } from '@playwright/test';

test('instances draw their component, follow its edits, and select as one layer', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(() => {
    const { doc } = window.weft;
    const root = doc.getChildren(null)[0]!.id;
    const row = doc.createNode({
      type: 'frame',
      tag: 'section',
      name: 'Plans',
      parentId: root,
      styles: { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--space-4)', padding: 'var(--space-6)' },
    });
    const main = doc.createNode({
      type: 'frame',
      tag: 'article',
      name: 'Plan card',
      parentId: row,
      component: true,
      styles: { display: 'grid', gap: 'var(--space-2)', padding: 'var(--space-4)', backgroundColor: 'var(--color-surface-container)', borderRadius: 'var(--radius-md)' },
    });
    const title = doc.createNode({ type: 'text', tag: 'h3', parentId: main, text: 'Starter', bind: { text: 'name' }, breakpoints: { mobile: { fontSize: '13px' } } });
    const price = doc.createNode({ type: 'text', parentId: main, text: 'Free forever' });
    const pro = doc.createNode({ type: 'frame', name: 'Pro', parentId: row, instance: { component: main, props: { name: 'Pro' } } });
    const team = doc.createNode({ type: 'frame', name: 'Team', parentId: row, instance: { component: main } });
    return { root, row, main, title, price, pro, team };
  });

  const layer = (id: string) => page.locator(`.gf-artboard-host [data-gf-id="${id}"]`);
  const drawn = (instance: string, source: string) => layer(instance).locator(`[data-gf-src="${source}"]`);
  await expect(drawn(ids.pro, ids.title)).toHaveText('Pro');
  await expect(drawn(ids.team, ids.title)).toHaveText('Starter');
  await expect(layer(ids.pro)).toHaveJSProperty('tagName', 'ARTICLE');
  // The component's layers are on the canvas once; an instance's layers have no id of their own.
  await expect(page.locator(`.gf-artboard-host [data-gf-id="${ids.title}"]`)).toHaveCount(1);
  await expect(layer(ids.pro).locator('[data-gf-id]')).toHaveCount(0);
  const size = (id: string) => layer(id).evaluate((el) => ({ w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) }));
  expect(await size(ids.pro)).toEqual(await size(ids.main));

  // Edits to the component show in every instance at once; a prop keeps its own value.
  await page.evaluate(({ title, price, main }) => {
    const { doc } = window.weft;
    doc.updateNode(title, { text: 'Basic' });
    doc.updateNode(price, { text: '$0 a month' });
    doc.updateNode(main, { styles: { padding: 'var(--space-6)' } });
  }, ids);
  await expect(drawn(ids.team, ids.title)).toHaveText('Basic');
  await expect(drawn(ids.pro, ids.title)).toHaveText('Pro');
  await expect(drawn(ids.pro, ids.price)).toHaveText('$0 a month');
  expect(await size(ids.team)).toEqual(await size(ids.main));

  // A click anywhere in an instance selects the instance; the Layers panel marks both kinds.
  await drawn(ids.pro, ids.title).click();
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([ids.pro]);
  await expect(page.locator('.gf-layer-icon', { hasText: '◆' })).toHaveCount(1);
  await expect(page.locator('.gf-layer-icon', { hasText: '◇' })).toHaveCount(2);
  // An instance is the component's element: Layers and the Inspector say so, in place of a tag to pick.
  await expect(page.locator('.gf-layer').filter({ has: page.locator('.gf-layer-name', { hasText: /^Pro$/ }) }).locator('.gf-layer-tag')).toHaveText('article');
  await expect(page.getByLabel('Instance of')).toHaveValue('Plan card <article>');
  await expect(page.getByLabel('Tag', { exact: true })).toHaveCount(0);
  await page.evaluate(() => window.weft.editor.getState().setCamera({ x: 40, y: -260, zoom: 0.7 }));
  await page.screenshot({ path: 'test-results/m5-components.png' });

  // The component's breakpoint rules reach what instances draw.
  await page.evaluate((root) => window.weft.doc.updateNode(root, { frame: { width: 390 } }), ids.root);
  await expect.poll(() => drawn(ids.team, ids.title).evaluate((el) => getComputedStyle(el).fontSize)).toBe('13px');

  // Detached, it's ordinary layers that can be picked one by one; undo makes it an instance again.
  await page.evaluate((pro) => window.weft.doc.updateNode(pro, { instance: null }), ids.pro);
  await expect(layer(ids.pro).locator('[data-gf-id]')).toHaveCount(2);
  await expect(layer(ids.pro).locator('h3')).toHaveText('Pro');
  await page.evaluate(() => window.weft.history.undo());
  await expect(layer(ids.pro).locator('[data-gf-id]')).toHaveCount(0);
  await expect(drawn(ids.pro, ids.title)).toHaveText('Pro');
});

test('a row the design already repeats becomes an instance where it stands', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate(() => {
    const { doc } = window.weft;
    const root = doc.getChildren(null)[0]!.id;
    const list = doc.createNode({ type: 'frame', tag: 'ul', name: 'Order', parentId: root, styles: { display: 'grid', gap: 'var(--space-2)', padding: 'var(--space-6)' } });
    const row = (name: string, status: string, styles: Record<string, string> = {}) => {
      const id = doc.createNode({
        type: 'frame',
        tag: 'li',
        name,
        parentId: list,
        styles: { display: 'flex', justifyContent: 'space-between', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-surface-container)', ...styles },
      });
      const title = doc.createNode({ type: 'text', tag: 'span', parentId: id, text: name });
      const state = doc.createNode({ type: 'text', tag: 'span', parentId: id, text: status });
      return { id, title, state };
    };
    const vex = row('Vex', 'Ready');
    const boss = row('Goblin Boss', 'Acting now', { backgroundColor: 'var(--color-primary-container)' });
    doc.updateNode(vex.id, { component: true, name: 'Initiative row' });
    doc.updateNode(vex.title, { bind: { text: 'name' } });
    doc.updateNode(vex.state, { bind: { text: 'status' } });
    return { list, vex, boss };
  });

  const layer = (id: string) => page.locator(`.gf-artboard-host [data-gf-id="${id}"]`);
  const box = async (id: string) => layer(id).evaluate((el) => JSON.stringify(el.getBoundingClientRect()));
  const look = async (id: string) => layer(id).evaluate((el) => getComputedStyle(el).backgroundColor);
  await expect(layer(ids.boss.title)).toHaveText('Goblin Boss');
  const before = { box: await box(ids.boss.id), look: await look(ids.boss.id) };

  // Converted while it's on screen, through the same call an in-page agent makes.
  const match = await page.evaluate(({ boss, vex }) => window.weft.agent.convertToInstance(boss.id, { component: vex.id }), ids);
  expect(match).toEqual({ props: { name: 'Goblin Boss', status: 'Acting now' }, defaulted: [], droppedText: [], changedLayers: [] });

  // Same place, size, highlight and words; its layers are now the component's.
  await expect(layer(ids.boss.id).locator(`[data-gf-src="${ids.vex.title}"]`)).toHaveText('Goblin Boss');
  await expect(layer(ids.boss.id).locator(`[data-gf-src="${ids.vex.state}"]`)).toHaveText('Acting now');
  await expect(layer(ids.boss.title)).toHaveCount(0);
  expect({ box: await box(ids.boss.id), look: await look(ids.boss.id) }).toEqual(before);
  await expect(page.locator('.gf-layer', { has: page.locator('.gf-layer-name', { hasText: /^Goblin Boss$/ }) }).locator('.gf-layer-tag')).toHaveText('li');

  // It follows the component from here on.
  await page.evaluate((vex) => window.weft.doc.updateNode(vex.id, { styles: { padding: 'var(--space-6)' } }), ids.vex);
  await expect.poll(() => layer(ids.boss.id).evaluate((el) => getComputedStyle(el).paddingTop)).toBe(await layer(ids.vex.id).evaluate((el) => getComputedStyle(el).paddingTop));
  await page.screenshot({ path: 'test-results/m5-convert.png' });
});
