import { describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { GridDocument, GridError, ORIGIN_AGENT, compileBreakpointCSS } from './document';
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

  it('stores, merges and compiles breakpoint overrides', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const grid = doc.createNode({
      type: 'frame',
      parentId: root,
      styles: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
      breakpoints: { mobile: { gridTemplateColumns: '1fr' } },
    });
    expect(doc.getNode(grid)?.breakpoints).toEqual({ mobile: { gridTemplateColumns: '1fr' } });
    doc.updateNode(grid, { breakpoints: { mobile: { gap: 'var(--space-4)', gridTemplateColumns: null } } });
    expect(doc.getNode(grid)?.breakpoints).toEqual({ mobile: { gap: 'var(--space-4)' } });
    expect(compileBreakpointCSS(doc.getNodes())).toBe(
      `@media (max-width: 600px) {\n  [data-gf-id="${grid}"] { gap: var(--space-4) !important; }\n}`,
    );
    expect(() => doc.updateNode(grid, { breakpoints: { watch: {} } as never })).toThrow(/Unknown breakpoint/);
    expect(() => doc.updateNode(grid, { breakpoints: { mobile: { gap: '1px} *{color:red' } } })).toThrow(/forbidden/);
    doc.updateNode(grid, { breakpoints: { mobile: null } });
    expect(doc.getNode(grid)?.breakpoints).toBeUndefined();
    expect(compileBreakpointCSS(doc.getNodes())).toBe('');
  });

  it('emits wider breakpoints first so narrower ones win the cascade', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const box = doc.createNode({
      type: 'frame',
      parentId: root,
      breakpoints: { mobile: { gap: '1px' }, tablet: { gap: '2px' } },
    });
    const css = compileBreakpointCSS(doc.getNodes());
    expect(css.indexOf('max-width: 1024px')).toBeGreaterThanOrEqual(0);
    expect(css.indexOf('max-width: 1024px')).toBeLessThan(css.indexOf('max-width: 600px'));
    expect(css).toContain(`[data-gf-id="${box}"] { gap: 2px !important; }`);
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

describe('align and distribute', () => {
  const board = (doc: GridDocument, x: number, y: number, width: number, height: number) =>
    doc.createNode({ type: 'frame', frame: { x, y, width, height } });

  it('aligns and distributes artboards by frame, as one undo step', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const a = board(doc, 0, 0, 100, 100);
    const b = board(doc, 300, 40, 200, 50);
    const c = board(doc, 900, 10, 100, 80);
    const xs = () => [a, b, c].map((id) => doc.getNode(id)!.frame!.x);
    const ys = () => [a, b, c].map((id) => doc.getNode(id)!.frame!.y);

    expect(doc.alignNodes([a, b, c], 'bottom')).toEqual([b, c]);
    expect(ys()).toEqual([0, 50, 20]);
    history.undo();
    expect(ys()).toEqual([0, 40, 10]);

    doc.alignNodes([a, b, c], 'middle');
    expect(ys()).toEqual([0, 25, 10]);
    doc.alignNodes([a, b], 'right');
    expect(xs()).toEqual([400, 300, 900]);

    // b (0..200), a, c (900..1000): 600px of space left over makes 300px gaps; the outer two stay put.
    doc.updateNode(a, { frame: { x: 300 } });
    doc.updateNode(b, { frame: { x: 0 } });
    doc.distributeNodes([a, b, c], 'horizontal');
    expect(xs()).toEqual([500, 0, 900]);

    expect(() => doc.alignNodes([a], 'left')).toThrow(/at least two/);
    expect(() => doc.distributeNodes([a, b], 'vertical')).toThrow(/at least three/);
  });

  it('maps element alignment to flex and grid CSS on the child or parent', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const row = doc.createNode({ type: 'frame', parentId: root, styles: { display: 'flex' } });
    const col = doc.createNode({ type: 'frame', parentId: root, styles: { display: 'flex', flexDirection: 'column' } });
    const grid = doc.createNode({ type: 'frame', parentId: root, styles: { display: 'grid' } });
    const block = doc.createNode({ type: 'frame', parentId: root, name: 'Plain' });
    const inRow = doc.createNode({ type: 'text', parentId: row });
    const inCol = doc.createNode({ type: 'text', parentId: col });
    const inGrid = doc.createNode({ type: 'text', parentId: grid });
    const inBlock = doc.createNode({ type: 'text', parentId: block });
    const styles = (id: string) => doc.getNode(id)!.styles;

    expect(doc.alignNodes([inRow], 'center')).toEqual([row]);
    expect(styles(row).justifyContent).toBe('center');
    doc.alignNodes([inRow], 'bottom');
    expect(styles(inRow).alignSelf).toBe('end');
    doc.alignNodes([inCol], 'right');
    expect(styles(inCol).alignSelf).toBe('end');
    doc.alignNodes([inCol], 'top');
    expect(styles(col).justifyContent).toBe('start');
    doc.alignNodes([inGrid], 'center');
    doc.alignNodes([inGrid], 'middle');
    expect(styles(inGrid)).toMatchObject({ justifySelf: 'center', alignSelf: 'center' });
    expect(() => doc.alignNodes([inBlock], 'left')).toThrow(/"Plain" isn't a flex or grid/);

    doc.distributeNodes([inRow], 'horizontal');
    expect(styles(row).justifyContent).toBe('space-between');
    expect(() => doc.distributeNodes([inRow], 'vertical')).toThrow(/in a row/);
    expect(() => doc.distributeNodes([inGrid], 'horizontal')).toThrow(/grid/);
    // planning never mutates
    expect(doc.planAlign([inCol], 'bottom')).toEqual([{ id: col, patch: { styles: { justifyContent: 'end' } } }]);
    expect(styles(col).justifyContent).toBe('start');
  });
});

describe('duplicateNode', () => {
  it('deep-copies a subtree with fresh ids right after the original, as one undo step', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const root = artboard(doc);
    const card = doc.createNode({ type: 'frame', parentId: root, name: 'Card', styles: { gap: '4px' }, breakpoints: { mobile: { gap: '2px' } } });
    doc.createNode({ type: 'text', parentId: card, text: 'hi', attributes: { title: 't' } });
    const last = doc.createNode({ type: 'text', parentId: root, text: 'end' });
    doc.updateNode(card, { hidden: true });

    const copy = doc.duplicateNode(card);
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([card, copy, last]);
    const [tree] = doc.getTree(copy);
    expect(tree).toMatchObject({ name: 'Card', hidden: true, styles: { gap: '4px' }, breakpoints: { mobile: { gap: '2px' } } });
    expect(tree!.children[0]).toMatchObject({ text: 'hi', attributes: { title: 't' } });
    expect(tree!.children[0]!.id).not.toBe(doc.getChildren(card)[0]!.id);
    expect(() => doc.duplicateNode(card, { frame: { width: 10 } })).toThrow(/Only artboards/);

    history.undo();
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([card, last]);
  });

  it('clones an artboard at another width, beside the artboards on its row', () => {
    const doc = new GridDocument();
    const a = doc.createNode({ type: 'frame', name: 'Page', frame: { x: 0, y: 0, width: 1440, height: 900 } });
    doc.createNode({ type: 'frame', name: 'Other row', frame: { x: 5000, y: 2000, width: 100, height: 100 } });
    doc.createNode({ type: 'frame', name: 'Same row', frame: { x: 1600, y: 400, width: 400, height: 900 } });
    const mobile = doc.duplicateNode(a, { name: 'Page — Mobile', frame: { width: 390 } });
    expect(doc.getNode(mobile)).toMatchObject({ name: 'Page — Mobile', frame: { x: 2100, y: 0, width: 390, height: 900 } });
  });
});
