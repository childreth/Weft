import { expect, test, type Page } from '@playwright/test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { SERVER_PORT } from '../playwright.config';

let client: Client;

test.beforeAll(async () => {
  client = new Client({ name: 'e2e-agent', version: '1.0.0' });
  await client.connect(new StreamableHTTPClientTransport(new URL(`http://127.0.0.1:${SERVER_PORT}/mcp`)));
});
test.afterAll(async () => client.close());

async function call(name: string, args: Record<string, unknown>) {
  const res = (await client.callTool({ name, arguments: args })) as { content: Array<{ text: string }>; isError?: boolean };
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
  await expect(page.locator('.gf-avatar', { hasText: 'AI' })).toBeVisible();

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
  await expect(link).toHaveCSS('color', 'rgb(37, 99, 235)');
  await expect(page.getByTestId('agent-highlight')).toHaveCount(1);
  await expect(page.getByTestId('agent-activity')).toContainText('create nodes · 1 node');

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
