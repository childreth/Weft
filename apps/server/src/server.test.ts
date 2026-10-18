import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { GridDocument } from '@weft/core';
import { startGridServer, type GridServer } from './server';

let server: GridServer;
let client: Client;
const dataDir = mkdtempSync(join(tmpdir(), 'weft-test-'));

async function call<T = any>(name: string, args: Record<string, unknown> = {}): Promise<{ data: T; isError: boolean; text: string }> {
  const res = (await client.callTool({ name, arguments: args })) as { content: Array<{ text: string }>; isError?: boolean };
  const text = res.content[0]!.text;
  let data: T;
  try {
    data = JSON.parse(text);
  } catch {
    data = text as T;
  }
  return { data, isError: !!res.isError, text };
}

function until(check: () => boolean, ms = 3000): Promise<void> {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      if (check()) return resolve();
      if (Date.now() - start > ms) return reject(new Error('timed out'));
      setTimeout(tick, 20);
    };
    tick();
  });
}

beforeAll(async () => {
  server = await startGridServer({ port: 0, dataDir });
  client = new Client({ name: 'test', version: '1.0.0' });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${server.httpUrl}/mcp`)));
});

afterAll(async () => {
  await client.close();
  await server.close();
});

describe('MCP tools', () => {
  it('lists the tool set with instructions', async () => {
    const { tools } = await client.listTools();
    expect(tools.map((t) => t.name).sort()).toEqual(
      [
        'create_nodes', 'delete_nodes', 'get_canvas', 'get_layout', 'get_selection',
        'list_tokens', 'move_node', 'select_nodes', 'undo_agent_change', 'update_nodes',
      ].sort(),
    );
    expect(client.getInstructions()).toContain('real HTML + CSS');
    const create = tools.find((t) => t.name === 'create_nodes')!;
    expect(JSON.stringify(create.inputSchema)).toContain('children');
  });

  it('seeds new documents and reads the tree', async () => {
    const { data } = await call('get_canvas', { doc: 'read', maxDepth: 1 });
    expect(data.nodes).toHaveLength(1);
    expect(data.nodes[0].name).toBe('Landing — Desktop');
    expect(data.nodes[0].children[0].childCount).toBeGreaterThan(0);
  });

  it('creates nested subtrees atomically and auto-places artboards', async () => {
    const { data, isError } = await call('create_nodes', {
      doc: 'create',
      nodes: [
        {
          type: 'frame',
          tag: 'main',
          name: 'Pricing',
          frame: { width: 800, height: 600 },
          children: [
            { type: 'text', tag: 'h1', text: 'Pricing' },
            {
              type: 'frame',
              tag: 'section',
              styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' },
              children: [{ type: 'text', tag: 'h2', text: 'Free' }],
            },
          ],
        },
      ],
    });
    expect(isError).toBe(false);
    const pricing = data.created[0];
    expect(pricing.children).toHaveLength(2);
    const room = server.rooms.get('create');
    expect(room.doc.getNode(pricing.id)!.frame).toEqual({ x: 1400, y: 0, width: 800, height: 600 });
    expect(room.doc.getNode(pricing.children[1].children[0].id)!.text).toBe('Free');
  });

  it('creates, updates and reads back breakpoint overrides', async () => {
    const { data } = await call('create_nodes', {
      doc: 'bp',
      nodes: [
        {
          type: 'frame',
          name: 'Cards',
          frame: { width: 1200, height: 400 },
          styles: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' },
          breakpoints: { tablet: { gridTemplateColumns: 'repeat(2, 1fr)' }, mobile: { gridTemplateColumns: '1fr' } },
        },
      ],
    });
    const id = data.created[0].id;
    await call('update_nodes', { doc: 'bp', updates: [{ id, breakpoints: { mobile: { gap: 'var(--space-2)' }, tablet: null } }] });
    const { data: canvas } = await call('get_canvas', { doc: 'bp', rootId: id });
    expect(canvas.nodes[0].breakpoints).toEqual({ mobile: { gridTemplateColumns: '1fr', gap: 'var(--space-2)' } });
    const bad = await call('update_nodes', { doc: 'bp', updates: [{ id, breakpoints: { watch: { gap: '1px' } } }] });
    expect(bad.isError).toBe(true);
  });

  it('rolls back a batch that fails validation partway', async () => {
    const room = server.rooms.get('atomic');
    const before = room.doc.nodes.size;
    const res = await call('create_nodes', {
      doc: 'atomic',
      nodes: [
        { type: 'frame', name: 'ok' },
        { type: 'frame', name: 'bad', styles: { colour: 'red' } },
      ],
    });
    expect(res.isError).toBe(true);
    expect(res.text).toMatch(/Unknown style property "colour".*no changes were applied/);
    expect(room.doc.nodes.size).toBe(before);
  });

  it('updates, moves, deletes and undoes agent changes', async () => {
    const room = server.rooms.get('edit');
    const [page] = room.doc.getTree();
    const hero = page!.children.find((c) => c.name === 'Hero')!;
    const features = page!.children.find((c) => c.name === 'Features')!;

    await call('update_nodes', { doc: 'edit', updates: [{ id: hero.id, styles: { gap: 'var(--space-4)', alignItems: null } }] });
    expect(room.doc.getNode(hero.id)!.styles).toMatchObject({ gap: 'var(--space-4)' });
    expect(room.doc.getNode(hero.id)!.styles.alignItems).toBeUndefined();

    await call('move_node', { doc: 'edit', id: features.id, parentId: page!.id, beforeId: hero.id });
    expect(room.doc.getChildren(page!.id).map((n) => n.name)).toEqual(['Header', 'Features', 'Hero']);

    await call('undo_agent_change', { doc: 'edit' });
    expect(room.doc.getChildren(page!.id).map((n) => n.name)).toEqual(['Header', 'Hero', 'Features']);

    await call('delete_nodes', { doc: 'edit', ids: [features.id] });
    expect(room.doc.has(features.id)).toBe(false);
    const missing = await call('delete_nodes', { doc: 'edit', ids: ['nope'] });
    expect(missing.isError).toBe(true);
  });

  it('lists tokens as ready-to-use CSS values', async () => {
    const { data } = await call('list_tokens', { group: 'space' });
    expect(data.tokens).toContainEqual(expect.objectContaining({ name: 'space.4', use: 'var(--space-4)', value: '16px' }));
  });

  it('reports a helpful error when no editor is open for layout', async () => {
    const res = await call('get_layout', { doc: 'nolayout' });
    expect(res.isError).toBe(true);
    expect(res.text).toMatch(/No Weft editor is open/);
  });
});

describe('sync relay', () => {
  it('streams agent edits to connected editors and reports activity', async () => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(server.wsUrl, 'sync', ydoc);
    provider.awareness.setLocalState({ kind: 'human', user: { name: 'Tester', color: '#0af' }, selection: [] });
    const replica = new GridDocument(ydoc);
    await until(() => provider.synced && replica.nodes.size > 0);

    const root = replica.getChildren(null)[0]!;
    provider.awareness.setLocalStateField('selection', [root.id]);
    await until(() => server.rooms.get('sync').humans()[0]?.selection.length === 1);
    const sel = await call('get_selection', { doc: 'sync', maxDepth: 0 });
    expect(sel.data.users[0]).toMatchObject({ user: 'Tester', selection: [{ id: root.id, name: 'Landing — Desktop' }] });

    const { data } = await call('create_nodes', {
      doc: 'sync',
      parentId: root.id,
      nodes: [{ type: 'text', tag: 'p', text: 'from the agent' }],
    });
    const id = data.created[0].id;
    await until(() => replica.getNode(id)?.text === 'from the agent');

    const agentState = () => [...provider.awareness.getStates().values()].find((s) => s.kind === 'agent');
    await until(() => agentState()?.activity?.ids?.includes(id));
    expect(agentState()).toMatchObject({
      user: { name: 'Drift' },
      client: 'test',
      action: 'Adding 1 node to Landing — Desktop',
      focus: { ids: [id], kind: 'create', roots: [id] },
    });

    // Editor-side edits reach the server too.
    replica.updateNode(id, { text: 'edited by a person' });
    await until(() => server.rooms.get('sync').doc.getNode(id)?.text === 'edited by a person');
    provider.destroy();
  });

  it('gives each agent session its own cursor, model label and undo stack', async () => {
    const ydoc = new Y.Doc();
    const provider = new WebsocketProvider(server.wsUrl, 'multi', ydoc);
    await until(() => provider.synced);
    const agents = () =>
      [...provider.awareness.getStates().values()].filter((s) => s.kind === 'agent').sort((a, b) => a.user.name.localeCompare(b.user.name));

    const second = new Client({ name: 'qwen-host', version: '1.0.0' });
    const secondTransport = new StreamableHTTPClientTransport(new URL(`${server.httpUrl}/mcp`));
    await second.connect(secondTransport);
    const room = server.rooms.get('multi');
    const root = room.doc.getChildren(null)[0]!;

    await call('update_nodes', { doc: 'multi', updates: [{ id: root.id, name: 'by first' }] });
    await second.callTool({
      name: 'create_nodes',
      arguments: { doc: 'multi', parentId: root.id, nodes: [{ type: 'text', text: 'by second' }], model: 'Qwen3 Coder 30B' },
    });
    await until(() => agents().length === 2);
    const [a, b] = agents();
    expect(a.user.name).not.toBe(b.user.name);
    expect(a.user.color).not.toBe(b.user.color);
    expect(agents().map((s) => s.model)).toContain('Qwen3 Coder 30B');

    // Undo is per agent: the first agent's undo leaves the second agent's text alone.
    await call('undo_agent_change', { doc: 'multi' });
    expect(room.doc.getNode(root.id)!.name).not.toBe('by first');
    expect(room.doc.getChildren(root.id).some((n) => n.text === 'by second')).toBe(true);

    // Ending a session removes that agent's cursor.
    await secondTransport.terminateSession();
    await second.close();
    await until(() => agents().length === 1);
    expect(room.agentCount).toBe(1);
    provider.destroy();
  });

  it('persists documents as CRDT state and a JSON snapshot', async () => {
    const room = server.rooms.get('persist');
    room.flush();
    const snapshot = JSON.parse(readFileSync(join(dataDir, 'persist.weft.json'), 'utf8'));
    expect(snapshot).toMatchObject({ format: 'weft', version: 1 });
    expect(snapshot.nodes.length).toBe(room.doc.nodes.size);
  });

  it('rejects sockets from non-local origins and bad paths', async () => {
    const tryOpen = (url: string, headers?: Record<string, string>) =>
      new Promise<string>((resolve) => {
        // Node's WebSocket cannot set Origin; use the ws client for this check.
        import('ws').then(({ WebSocket }) => {
          const ws = new WebSocket(url, { headers });
          ws.on('open', () => (ws.close(), resolve('open')));
          ws.on('unexpected-response', (_req, res) => resolve(String(res.statusCode)));
          ws.on('error', () => resolve('error'));
        });
      });
    expect(await tryOpen(`${server.wsUrl}/ok`, { origin: 'http://localhost:5173' })).toBe('open');
    expect(await tryOpen(`${server.wsUrl}/ok`, { origin: 'https://evil.example' })).toBe('403');
    expect(await tryOpen(`${server.wsUrl}/a/b`)).toBe('404');
  });
});
