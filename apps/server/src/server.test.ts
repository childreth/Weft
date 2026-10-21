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
        'align_nodes', 'create_nodes', 'delete_nodes', 'distribute_nodes', 'duplicate_node', 'get_canvas', 'get_layout', 'get_screenshot',
        'get_selection', 'list_tokens', 'move_node', 'read_skill', 'select_nodes', 'undo_agent_change', 'update_nodes',
        'search_fonts', 'add_fonts', 'remove_fonts',
      ].sort(),
    );
    expect(client.getInstructions()).toContain('real HTML + CSS');
    const create = tools.find((t) => t.name === 'create_nodes')!;
    expect(JSON.stringify(create.inputSchema)).toContain('children');
  });

  it('serves the design skill as a tool and as resources, with schema lists filled in', async () => {
    const skill = await call('read_skill');
    expect(skill.text).toContain('# Designing in Weft');
    expect(skill.text).toContain('marginTop');
    expect(skill.text).not.toMatch(/\{\{\w+\}\}/);
    expect((await call('read_skill', { path: 'layout.md' })).text).toContain('# Layout recipes');
    const bad = await call('read_skill', { path: '../server.ts' });
    expect(bad.isError).toBe(true);
    expect(bad.text).toContain('Available: SKILL.md');
    const { resources } = await client.listResources();
    expect(resources.map((r) => r.uri)).toContain('weft://skill/style.md');
    const read = await client.readResource({ uri: 'weft://skill/verify.md' });
    expect((read.contents[0] as { text: string }).text).toContain('# Checking your work');
  });

  it('screenshots an artboard or a node with no editor open, at another width too', async () => {
    const room = server.rooms.get('shot');
    const [page] = room.doc.getTree();
    const features = page!.children.find((c) => c.name === 'Features')!;
    type Shot = { content: Array<{ type: string; data?: string; mimeType?: string; text?: string }> };
    const png = (r: Shot) => Buffer.from(r.content.find((c) => c.type === 'image')!.data!, 'base64');
    const info = (r: Shot) => JSON.parse(r.content.find((c) => c.type === 'text')!.text!);

    const full = (await client.callTool({ name: 'get_screenshot', arguments: { doc: 'shot' } })) as Shot;
    expect(png(full).subarray(1, 4).toString()).toBe('PNG');
    expect(info(full)).toMatchObject({ id: page!.id, renderWidth: page!.frame!.width, size: { width: page!.frame!.width } });
    expect(info(full).boxes.map((b: { name: string }) => b.name)).toContain('Features');

    const mobile = (await client.callTool({ name: 'get_screenshot', arguments: { doc: 'shot', width: 390 } })) as Shot;
    expect(info(mobile).size.width).toBe(390);
    expect(info(mobile).size.height).toBeGreaterThan(info(full).size.height);

    const node = (await client.callTool({ name: 'get_screenshot', arguments: { doc: 'shot', id: features.id, depth: 1 } })) as Shot;
    expect(info(node).boxes[0]).toMatchObject({ id: features.id, x: 0, y: 0 });
    expect(info(node).boxes.every((b: { depth: number }) => b.depth <= 1)).toBe(true);

    expect((await call('get_screenshot', { doc: 'shot', id: 'nope' })).text).toContain('not found');
  });

  it('never lets a render reach the network', async () => {
    let hits = 0;
    const { createServer } = await import('node:http');
    const bait = createServer((_req, res) => (hits++, res.end('x')));
    await new Promise<void>((r) => bait.listen(0, '127.0.0.1', r));
    const url = `http://127.0.0.1:${(bait.address() as { port: number }).port}/pixel.png`;
    const room = server.rooms.get('shot-net');
    const [page] = room.doc.getTree();
    room.doc.createNode({ type: 'frame', tag: 'img', parentId: page!.id, attributes: { src: url, alt: 'x' } });
    room.doc.createNode({ type: 'text', tag: 'a', parentId: page!.id, text: 'link', attributes: { href: url } });
    const res = (await client.callTool({ name: 'get_screenshot', arguments: { doc: 'shot-net' } })) as { isError?: boolean };
    expect(res.isError).toBeFalsy();
    expect(hits).toBe(0);
    bait.close();
  });

  it('reads the canvas as a compact outline', async () => {
    const full = await call('get_canvas', { doc: 'outline' });
    const brief = await call('get_canvas', { doc: 'outline', detail: 'outline' });
    expect(brief.text.length).toBeLessThan(full.text.length / 2);
    expect(brief.text).not.toContain('styles');
    const [page] = brief.data.nodes;
    expect(page).toMatchObject({ tag: 'main', frame: { width: expect.any(Number) } });
    expect(JSON.stringify(page)).toContain('Design in the browser');
  });

  it('accepts definition lists and tables', async () => {
    const room = server.rooms.get('tags');
    const [page] = room.doc.getTree();
    const res = await call('create_nodes', {
      doc: 'tags',
      parentId: page!.id,
      nodes: [
        { type: 'frame', tag: 'dl', children: [{ type: 'text', tag: 'dt', text: 'Age' }, { type: 'text', tag: 'dd', text: '41' }] },
        {
          type: 'frame',
          tag: 'table',
          children: [
            { type: 'frame', tag: 'thead', children: [{ type: 'frame', tag: 'tr', children: [{ type: 'text', tag: 'th', text: 'Metric' }] }] },
            { type: 'frame', tag: 'tbody', children: [{ type: 'frame', tag: 'tr', children: [{ type: 'text', tag: 'td', text: '62 bpm' }] }] },
          ],
        },
      ],
    });
    expect(res.isError).toBe(false);
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

  it('reports every problem in a batch at once, with paths and hints', async () => {
    const room = server.rooms.get('atomic');
    const before = room.doc.nodes.size;
    const res = await call('create_nodes', {
      doc: 'atomic',
      nodes: [
        {
          type: 'frame',
          styles: { 'margin-top': '4px', backgroundImage: 'url(https://x.example/a.png)' },
          children: [{ type: 'frame', tag: 'h7' }, { type: 'text', tag: 'section', text: 'x' }],
        },
        { type: 'text', text: 'y', styles: { colour: 'red' } },
      ],
    });
    expect(res.isError).toBe(true);
    for (const line of [
      '5 problems',
      'nodes[0]: Unknown style property "margin-top" (use "marginTop")',
      'nodes[0]: Style "backgroundImage" can\'t load external resources',
      'nodes[0].children[0]: Tag <h7> is not valid for a frame node (allowed:',
      'nodes[0].children[1]: Tag <section> is not valid for a text node (use type "frame")',
      'nodes[1]: Unknown style property "colour" (did you mean "color"?)',
      'Allowed style properties: display,',
    ]) {
      expect(res.text).toContain(line);
    }
    expect(room.doc.nodes.size).toBe(before);

    const update = await call('update_nodes', { doc: 'atomic', updates: [{ id: 'missing', styles: { textDecor: 'none' } }] });
    expect(update.text).toContain('updates[0]: Node missing not found');
    expect(update.text).toContain('updates[0]: Unknown style property "textDecor"');
  });

  it('builds a heading with a colored word, gradients and longhand spacing', async () => {
    const room = server.rooms.get('authoring');
    const [page] = room.doc.getTree();
    const res = await call('create_nodes', {
      doc: 'authoring',
      parentId: page!.id,
      nodes: [
        {
          type: 'frame',
          tag: 'h1',
          name: 'Welcome',
          styles: { marginTop: '16px', paddingBottom: '8px', backgroundImage: 'linear-gradient(180deg, #f5f7fb, #fff)' },
          children: [
            { type: 'text', tag: 'span', text: 'Welcome back to ' },
            { type: 'text', tag: 'span', text: 'CarGurus!', styles: { color: '#3b82f6' } },
          ],
        },
        { type: 'text', tag: 'a', text: '01886', styles: { textDecoration: 'underline', whiteSpace: 'nowrap' } },
      ],
    });
    expect(res.isError).toBe(false);
    const heading = room.doc.getNodes().find((n) => n.name === 'Welcome')!;
    expect(heading.tag).toBe('h1');
    expect(room.doc.getChildren(heading.id).map((n) => n.text)).toEqual(['Welcome back to ', 'CarGurus!']);
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

  it('aligns artboards by frame and elements through CSS, undoably', async () => {
    const room = server.rooms.get('arrange');
    const [page] = room.doc.getTree();
    const nav = room.doc.getTree(page!.id)[0]!.children.find((c) => c.name === 'Header')!.children.find((c) => c.name === 'Nav')!;
    const header = room.doc.getNode(nav.id)!.parentId!;

    const { data } = await call('align_nodes', { doc: 'arrange', ids: [nav.id], align: 'top' });
    expect(data.changed).toEqual([nav.id]);
    expect(room.doc.getNode(nav.id)!.styles.alignSelf).toBe('start');
    await call('align_nodes', { doc: 'arrange', ids: [nav.id], align: 'center' });
    expect(room.doc.getNode(header)!.styles.justifyContent).toBe('center');
    await call('undo_agent_change', { doc: 'arrange' });
    expect(room.doc.getNode(header)!.styles.justifyContent).toBe('space-between');

    const bad = await call('distribute_nodes', { doc: 'arrange', ids: [nav.id], axis: 'vertical' });
    expect(bad.isError).toBe(true);
    expect(bad.text).toMatch(/in a row.*no changes were applied/);

    const { data: created } = await call('create_nodes', {
      doc: 'arrange',
      nodes: [0, 1].map((i) => ({ type: 'frame', frame: { x: 3000 + i * 500, y: i * 100, width: 400, height: 300 } })),
    });
    const ids = [page!.id, ...created.created.map((c: { id: string }) => c.id)];
    await call('align_nodes', { doc: 'arrange', ids, align: 'top' });
    expect(ids.map((id) => room.doc.getNode(id)!.frame!.y)).toEqual([0, 0, 0]);
  });

  it('clones an artboard at mobile width beside the original', async () => {
    const room = server.rooms.get('clone');
    const [page] = room.doc.getTree();
    const { data } = await call('duplicate_node', { doc: 'clone', id: page!.id, name: 'Mobile', frame: { width: 390 } });
    const copy = room.doc.getNode(data.id)!;
    expect(copy).toMatchObject({ name: 'Mobile', frame: { width: 390, y: page!.frame!.y, height: page!.frame!.height } });
    expect(copy.frame!.x).toBeGreaterThan(page!.frame!.x + page!.frame!.width);
    expect(room.doc.getDescendantIds(copy.id)).toHaveLength(room.doc.getDescendantIds(page!.id).length);
    // Every original node maps to its copy, with matching names and tags.
    const pairs = Object.entries(data.ids as Record<string, string>);
    expect(pairs).toHaveLength(room.doc.getDescendantIds(page!.id).length + 1);
    expect(data.ids[page!.id]).toBe(copy.id);
    for (const [from, to] of pairs) {
      expect(room.doc.getNode(to)!.tag).toBe(room.doc.getNode(from)!.tag);
      if (from !== page!.id) expect(room.doc.getNode(to)!.name).toBe(room.doc.getNode(from)!.name);
    }
    await call('undo_agent_change', { doc: 'clone' });
    expect(room.doc.has(copy.id)).toBe(false);
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
