import { describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { GridDocument, GridError, ORIGIN_AGENT } from './document';
import { History } from './history';
import { seedLandingPage } from './seed';
import { compileTokensCSS, flattenTokens } from './tokens';
import { defaultTokens } from './default-tokens';

function artboard(doc: GridDocument) {
  return doc.createNode({ type: 'frame', name: 'A', frame: { x: 0, y: 0, width: 100, height: 100 } });
}

describe('GridDocument', () => {
  it('creates nodes and orders siblings', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const a = doc.createNode({ type: 'text', parentId: root, text: 'a' });
    const c = doc.createNode({ type: 'text', parentId: root, text: 'c' });
    const b = doc.createNode({ type: 'text', parentId: root, text: 'b', beforeId: c });
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([a, b, c]);
    expect(doc.getNode(root)?.frame).toEqual({ x: 0, y: 0, width: 100, height: 100 });
  });

  it('validates tags, styles, attributes and containment', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const t = doc.createNode({ type: 'text', parentId: root });
    expect(() => doc.createNode({ type: 'text' })).toThrow(GridError);
    expect(() => doc.createNode({ type: 'frame', parentId: t })).toThrow(/cannot contain/);
    expect(() => doc.createNode({ type: 'text', parentId: root, tag: 'section' })).toThrow(/not valid/);
    expect(() => doc.updateNode(root, { styles: { colour: 'red' } as never })).toThrow(/Unknown style/);
    expect(() => doc.updateNode(root, { styles: { color: 'red; background: url(x)' } })).toThrow(/forbidden/);
    expect(() => doc.updateNode(root, { attributes: { onclick: 'x()' } })).toThrow(/Event handler/);
    expect(() => doc.updateNode(t, { attributes: { href: 'javascript:alert(1)' } })).toThrow(/Unsafe/);
    doc.createNode({ type: 'frame', parentId: root, tag: 'ds-card' });
  });

  it('updates and removes styles', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    doc.updateNode(root, { styles: { display: 'grid', gap: 'var(--space-4)' } });
    doc.updateNode(root, { styles: { gap: null } });
    expect(doc.getNode(root)?.styles).toEqual({ display: 'grid' });
  });

  it('moves nodes and prevents cycles', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const outer = doc.createNode({ type: 'frame', parentId: root });
    const inner = doc.createNode({ type: 'frame', parentId: outer });
    expect(() => doc.moveNode(outer, inner)).toThrow(/itself/);
    doc.moveNode(inner, root, outer);
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([inner, outer]);
    doc.moveNode(inner, null);
    expect(doc.getNode(inner)?.frame).toBeDefined();
  });

  it('deletes descendants', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const f = doc.createNode({ type: 'frame', parentId: root });
    doc.createNode({ type: 'text', parentId: f });
    doc.deleteNodes([root]);
    expect(doc.nodes.size).toBe(0);
  });

  it('round-trips snapshots and builds trees', () => {
    const doc = new GridDocument();
    seedLandingPage(doc);
    const copy = new GridDocument();
    copy.loadSnapshot(JSON.parse(JSON.stringify(doc.toSnapshot())));
    expect(copy.getTree()).toEqual(doc.getTree());
    expect(doc.getTree()[0]?.children.length).toBe(3);
  });

  it('syncs between replicas', () => {
    const a = new GridDocument();
    const b = new GridDocument(new Y.Doc());
    a.ydoc.on('update', (u: Uint8Array) => Y.applyUpdate(b.ydoc, u));
    const root = artboard(a);
    expect(b.getNode(root)?.name).toBe('A');
  });
});

describe('History', () => {
  it('makes each command one step and gestures one step', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const root = artboard(doc);
    doc.updateNode(root, { name: 'B' });
    history.beginGesture();
    for (let x = 1; x <= 5; x++) doc.updateNode(root, { frame: { x } });
    history.endGesture();
    history.undo();
    expect(doc.getNode(root)?.frame?.x).toBe(0);
    expect(doc.getNode(root)?.name).toBe('B');
    history.undo();
    expect(doc.getNode(root)?.name).toBe('A');
    history.redo();
    expect(doc.getNode(root)?.name).toBe('B');
  });

  it('does not track agent edits on the local stack', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const root = artboard(doc);
    doc.updateNode(root, { name: 'agent' }, ORIGIN_AGENT);
    history.undo();
    expect(doc.has(root)).toBe(false);
  });
});

describe('tokens', () => {
  it('flattens and resolves aliases', () => {
    const flat = flattenTokens(defaultTokens.tokens);
    expect(flat.find((t) => t.name === 'color.accent')).toMatchObject({
      cssVar: '--color-accent',
      value: 'var(--color-blue-600)',
      type: 'color',
    });
    expect(flat.find((t) => t.name === 'font-family.sans')?.value).toContain('system-ui, -apple-system');
  });

  it('compiles modes', () => {
    const css = compileTokensCSS(defaultTokens, ':host', (m) => `:host([data-theme="${m}"])`);
    expect(css).toContain('--space-4: 16px;');
    expect(css).toContain(':host([data-theme="dark"])');
  });
});
