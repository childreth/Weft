import { expect, test, type Page } from '@playwright/test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { SERVER_PORT } from '../playwright.config';

let client: Client;

async function connectAgent(name: string) {
  const agent = new Client({ name, version: '1.0.0' });
  await agent.connect(new StreamableHTTPClientTransport(new URL(`http://127.0.0.1:${SERVER_PORT}/mcp`)));
  return agent;
}

test.beforeAll(async () => {
  client = await connectAgent('e2e-agent');
});
test.afterAll(async () => client.close());

async function call(name: string, args: Record<string, unknown>, agent = client) {
  const res = (await agent.callTool({ name, arguments: args })) as { content: Array<{ text: string }>; isError?: boolean };
  if (res.isError) throw new Error(res.content[0]!.text);
  return JSON.parse(res.content[0]!.text);
}

async function openLive(page: Page, doc: string) {
  await page.goto(`/?doc=${doc}`);
  await expect(page.getByTestId('connection')).toHaveText('Live');
  await page.waitForFunction(() => window.weft.scene.nodes.size > 0);
}

test('agent edits stream onto the canvas with a highlight', async ({ page }, info) => {
  const doc = `e2e-${info.workerIndex}-${Date.now()}`;
  await openLive(page, doc);

  // The agent reads the user's selection...
  await page.locator('nav a', { hasText: 'Docs' }).click();
  await page.keyboard.press('Escape'); // select the parent <nav>
  await expect
    .poll(async () => (await call('get_selection', { doc })).users[0]?.selection[0]?.tag)
    .toBe('nav');

  // ...and builds into it.
  const nav = (await call('get_selection', { doc })).users[0].selection[0];
  const { created } = await call('create_nodes', {
    doc,
    parentId: nav.id,
    nodes: [{ type: 'text', tag: 'a', text: 'Changelog', styles: { color: 'var(--color-accent)' }, attributes: { href: '/changelog' } }],
  });
  const link = page.locator('nav a', { hasText: 'Changelog' });
  await expect(link).toHaveCSS('color', 'rgb(0, 74, 198)');
  await expect(page.getByTestId('agent-highlight')).toHaveCount(1);
  await expect(page.getByTestId('agent-activity')).toContainText('Adding 1 node to Nav');
  await expect(page.locator('.gf-avatar[data-kind="agent"]')).toBeVisible();

  // Real rendered layout comes back from the browser.
  const { nodes } = await call('get_layout', { doc, ids: [created[0].id, nav.id] });
  expect(nodes[0]).toMatchObject({ tag: 'a', visible: true, overflowing: false });
  expect(nodes[0].box.width).toBeGreaterThan(20);
  expect(nodes[1].computed.display).toBe('flex');
  expect(nodes[0].box.x).toBeGreaterThan(nodes[1].box.x);

  // The agent can point the user at its work.
  await call('select_nodes', { doc, ids: [created[0].id] });
  await expect.poll(() => page.evaluate(() => window.weft.editor.getState().selection)).toEqual([created[0].id]);

  // Agent undo reverts only the agent's change.
  await call('undo_agent_change', { doc });
  await expect(link).toHaveCount(0);
  await expect(page.locator('nav a')).toHaveCount(3);
});

test('each agent gets a labelled cursor that follows its work', async ({ page }, info) => {
  const doc = `e2e-${info.workerIndex}-${Date.now()}-cursor`;
  await openLive(page, doc);
  const tree = (await call('get_canvas', { doc, maxDepth: 2, model: 'Claude Opus 5.5' })).nodes[0];
  const [header, hero, features] = tree.children;
  const cursors = page.getByTestId('agent-cursor');

  // An edit moves the cursor to the node, labelled with model and action, outlined while working.
  await call('update_nodes', { doc, updates: [{ id: hero.id, styles: { gap: 'var(--space-6)' } }] });
  await expect(cursors).toHaveCount(1);
  await expect(cursors).toHaveAttribute('data-state', 'working');
  await expect(cursors.locator('.gf-agent-name')).toHaveText(/· Claude Opus 5\.5$/);
  await expect(cursors.locator('.gf-agent-action')).toHaveText('Styling Hero');
  await expect(page.getByTestId('agent-focus')).toHaveCount(1);
  // It arrives at the node, then wanders over its content (locally, no tool calls) without leaving it.
  const heroBox = (await page.locator(`[data-gf-id="${hero.id}"]`).boundingBox())!;
  const tipOf = async () => {
    const b = (await cursors.locator('svg').boundingBox())!; // the arrow tip sits 2px inside its box
    return { x: b.x + 2, y: b.y + 2 };
  };
  const inside = (p: { x: number; y: number }) =>
    p.x >= heroBox.x - 1 && p.x <= heroBox.x + heroBox.width + 1 && p.y >= heroBox.y - 1 && p.y <= heroBox.y + heroBox.height + 1;
  await expect.poll(async () => inside(await tipOf())).toBe(true);
  const samples: Array<{ x: number; y: number }> = [];
  for (let i = 0; i < 12; i++) {
    samples.push(await tipOf());
    await page.waitForTimeout(200);
  }
  expect(samples.every(inside)).toBe(true);
  expect(new Set(samples.map((p) => `${Math.round(p.x / 8)},${Math.round(p.y / 8)}`)).size).toBeGreaterThan(2);

  // A create visits each new node in document order (parents before children).
  await page.evaluate(() => {
    const visits: string[] = ((window as any).__visits = []);
    new MutationObserver((records) => {
      for (const r of records)
        for (const n of r.addedNodes) {
          const id = n instanceof HTMLElement ? n.dataset.visitId : undefined;
          if (id && visits.at(-1) !== id) visits.push(id);
        }
    }).observe(document.querySelector('.gf-overlay')!, { childList: true, subtree: true });
  });
  const { created } = await call('create_nodes', {
    doc,
    parentId: features.id,
    nodes: [
      {
        type: 'frame',
        tag: 'article',
        name: 'Card',
        children: [
          { type: 'text', tag: 'h3', text: 'Plan' },
          { type: 'text', tag: 'p', text: 'Details' },
        ],
      },
    ],
  });
  const expected = [created[0].id, ...created[0].children.map((c: { id: string }) => c.id)];
  await expect.poll(() => page.evaluate(() => (window as any).__visits as string[])).toEqual(expected);
  await expect(cursors.locator('.gf-agent-action')).toHaveText('Adding 3 nodes to Features');

  // A second model gets its own cursor, color and label.
  const qwen = await connectAgent('lmstudio');
  await call('update_nodes', { doc, model: 'Qwen3 Coder 30B', updates: [{ id: header.id, styles: { gap: 'var(--space-2)' } }] }, qwen);
  await expect(cursors).toHaveCount(2);
  await expect(page.locator('.gf-agent-name', { hasText: /Qwen3 Coder 30B$/ })).toBeVisible();
  const colors = await cursors.evaluateAll((els) => els.map((el) => getComputedStyle(el).getPropertyValue('--agent-color')));
  expect(new Set(colors).size).toBe(2);
  await page.screenshot({ path: 'test-results/m2-cursors.png' });
  await qwen.close();
});

test('idle agent cursors go to thinking, then fade away, and come back on the next call', async ({ page }, info) => {
  const doc = `e2e-${info.workerIndex}-${Date.now()}-idle`;
  await openLive(page, doc);
  await page.evaluate(() => Object.assign(window.weft.agentTiming, { workingMs: 400, thinkingMs: 1200, fadeMs: 200 }));
  const agent = await connectAgent('idle-agent');
  const root = (await call('get_canvas', { doc, maxDepth: 0, model: 'Qwen3 Coder 30B' }, agent)).nodes[0];
  await call('update_nodes', { doc, updates: [{ id: root.id, name: 'Renamed' }] }, agent);

  const cursor = page.getByTestId('agent-cursor');
  await expect(cursor).toHaveAttribute('data-state', 'working');
  await expect(cursor).toHaveAttribute('data-state', 'thinking');
  await expect(cursor.locator('.gf-agent-thinking')).toBeVisible();
  await expect(cursor).toHaveCount(0);

  await call('get_layout', { doc, ids: [root.id] }, agent);
  await expect(cursor).toHaveAttribute('data-state', 'working');
  await expect(cursor.locator('.gf-agent-action')).toHaveText('Measuring Renamed');
  await agent.close();
});

test('a new artboard from the agent and an edit from the person both sync', async ({ page }, info) => {
  const doc = `e2e-${info.workerIndex}-${Date.now()}-b`;
  await openLive(page, doc);
  const { created } = await call('create_nodes', {
    doc,
    nodes: [
      {
        type: 'frame',
        tag: 'main',
        name: 'Agent artboard',
        frame: { width: 640, height: 400 },
        styles: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--space-4)',
          padding: 'var(--space-8)',
          backgroundColor: 'var(--color-surface)',
        },
        children: [1, 2, 3].map((n) => ({
          type: 'frame',
          tag: 'article',
          name: `Tile ${n}`,
          styles: { minHeight: '120px', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-lg)' },
        })),
      },
    ],
  });
  const artboardId = created[0].id;
  await expect(page.locator('.gf-artboard-label', { hasText: 'Agent artboard' })).toBeVisible();
  const { nodes } = await call('get_layout', { doc, ids: [artboardId] });
  expect(nodes[0].computed.gridTemplateColumns.split(' ')).toHaveLength(3);

  // Person renames it in the inspector; the server sees it.
  await page.locator('.gf-artboard-label', { hasText: 'Agent artboard' }).click();
  const name = page.getByTestId('inspector').getByLabel('Name');
  await name.fill('Reviewed by a human');
  await name.press('Enter');
  await expect
    .poll(async () => (await call('get_canvas', { doc, rootId: artboardId, maxDepth: 0 })).nodes[0].name)
    .toBe('Reviewed by a human');

  // Overlay must track the camera in the same frame (no stale boxes after zoom).
  await page.keyboard.press('Shift+Digit1');
  await expect(page.locator('.gf-size-badge')).toHaveText('640 × 400');
  await page.screenshot({ path: 'test-results/m2-agent.png' });
});
