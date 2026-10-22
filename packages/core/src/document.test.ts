import { describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { GridDocument, GridError, ORIGIN_AGENT, compileBreakpointCSS, readClipboard, readWeftFile, styleIssues, treeIssues } from './document';
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

describe('artboard heightMode', () => {
  it('defaults new artboards without a frame to hug; explicit frames stay fixed', () => {
    const doc = new GridDocument();
    expect(doc.getNode(doc.createNode({ type: 'frame' }))?.frame?.heightMode).toBe('hug');
    expect(doc.getNode(artboard(doc))?.frame).toEqual({ x: 0, y: 0, width: 100, height: 100 });
  });

  it('setting a height without a mode makes the artboard fixed; width keeps hug', () => {
    const doc = new GridDocument();
    const a = doc.createNode({ type: 'frame' });
    doc.updateNode(a, { frame: { width: 390 } });
    expect(doc.getNode(a)?.frame?.heightMode).toBe('hug');
    doc.updateNode(a, { frame: { height: 640, heightMode: 'hug' } });
    expect(doc.getNode(a)?.frame).toMatchObject({ height: 640, heightMode: 'hug' });
    doc.updateNode(a, { frame: { height: 500 } });
    expect(doc.getNode(a)?.frame?.heightMode).toBeUndefined();
    expect(() => doc.updateNode(a, { frame: { heightMode: 'auto' as never } })).toThrow(/heightMode/);
  });

  it('clones at another width hug their content unless a height is given', () => {
    const doc = new GridDocument();
    const a = artboard(doc);
    expect(doc.getNode(doc.duplicateNode(a, { frame: { width: 390 } }))?.frame?.heightMode).toBe('hug');
    expect(doc.getNode(doc.duplicateNode(a, { frame: { width: 390, height: 700 } }))?.frame?.heightMode).toBeUndefined();
    expect(doc.getNode(doc.duplicateNode(a))?.frame?.heightMode).toBeUndefined();
  });
});

describe('clipboard', () => {
  it('copies outermost subtrees in document order and pastes them with fresh ids, as one undo step', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const root = artboard(doc);
    const a = doc.createNode({ type: 'frame', parentId: root, name: 'A1', styles: { gap: '4px' } });
    const inner = doc.createNode({ type: 'text', parentId: a, text: 'inner' });
    const b = doc.createNode({ type: 'text', parentId: root, text: 'b' });

    const trees = doc.copyNodes([b, inner, a]);
    expect(trees.map((t) => t.id)).toEqual([a, b]);
    const json = JSON.stringify({ format: 'weft-clipboard', version: 1, nodes: trees });

    const pasted = doc.insertTrees(readClipboard(json), { parentId: root, beforeId: b });
    expect(pasted).toHaveLength(2);
    expect(pasted).not.toContain(a);
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([a, ...pasted, b]);
    expect(doc.getTree(pasted[0]!)[0]).toMatchObject({ name: 'A1', styles: { gap: '4px' }, children: [{ text: 'inner' }] });

    history.undo();
    expect(doc.getChildren(root).map((n) => n.id)).toEqual([a, b]);
  });

  it('pastes artboards beside their row and refuses loose elements on the page', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const el = doc.createNode({ type: 'text', parentId: root, text: 'x' });
    const [copy] = doc.insertTrees(doc.copyNodes([root]), { parentId: null });
    expect(doc.getNode(copy!)).toMatchObject({ parentId: null, frame: { x: 200, y: 0, width: 100 } });
    expect(() => doc.insertTrees(doc.copyNodes([el]), { parentId: null })).toThrow(/paste into/);
  });

  it('validates pasted content like any create, atomically', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const payload = (nodes: unknown[]) => JSON.stringify({ format: 'weft-clipboard', version: 1, nodes });
    expect(() => readClipboard('plain text')).toThrow(GridError);
    expect(() => readClipboard(payload([{ type: 'script', children: [] }]))).toThrow(/Malformed/);
    expect(() => readClipboard(payload([{ type: 'text', text: 42, children: [] }]))).toThrow(/Malformed/);
    const evil = readClipboard(
      payload([
        { type: 'text', text: 'ok', children: [] },
        { type: 'frame', attributes: { onclick: 'alert(1)' }, children: [] },
      ]),
    );
    const before = doc.getNodes().length;
    expect(() => doc.insertTrees(evil, { parentId: root })).toThrow(/Event handler/);
    expect(doc.getNodes()).toHaveLength(before);
    expect(() => doc.insertTrees(readClipboard(payload([{ type: 'text', styles: { color: 'red; x: url(y)' }, children: [] }])), { parentId: root })).toThrow(/forbidden/);
  });
});

describe('weft files', () => {
  it('round-trips a document: artboards beside the existing ones, fonts, one undo step', () => {
    const source = new GridDocument();
    seedLandingPage(source);
    source.addFonts([{ family: 'Inter', weights: [400, 700] }]);
    const [page] = source.getTree();
    const json = JSON.stringify(source.toSnapshot());

    const doc = new GridDocument();
    const history = new History(doc);
    const mine = artboard(doc);
    const [id] = doc.importFile(readWeftFile(json));
    const [copy] = doc.getTree(id!);
    expect(copy!.id).not.toBe(page!.id);
    expect(copy!.name).toBe(page!.name);
    expect(JSON.stringify(copy!.children.map((c) => c.name))).toBe(JSON.stringify(page!.children.map((c) => c.name)));
    expect(copy!.frame!.x).toBeGreaterThan(doc.getNode(mine)!.frame!.x);
    expect(doc.getFonts()).toEqual([{ family: 'Inter', weights: [400, 700] }]);

    history.undo();
    expect(doc.getChildren(null).map((n) => n.id)).toEqual([mine]);
    expect(doc.getFonts()).toEqual([]);
  });

  it('rejects bad files without changing anything, and drops unknown fonts', () => {
    const doc = new GridDocument();
    const file = (nodes: unknown[], fonts?: unknown[]) => JSON.stringify({ format: 'weft', version: 1, nodes, fonts });
    const board = { id: 'a', type: 'frame', tag: 'main', name: 'A', parentId: null, index: 'a0', styles: {}, attributes: {}, frame: { x: 0, y: 0, width: 100, height: 100 } };
    expect(() => readWeftFile('nope')).toThrow(/Not a Weft file/);
    expect(() => readWeftFile(JSON.stringify({ format: 'weft-clipboard', version: 1, nodes: [] }))).toThrow(/Not a Weft file/);
    expect(() => readWeftFile(file([{ ...board, frame: undefined }]))).toThrow(/not an artboard/);
    expect(() => readWeftFile(file([{ ...board, type: 'script' }]))).toThrow(/Malformed/);
    const evil = readWeftFile(file([board, { ...board, id: 'b', parentId: 'a', type: 'text', tag: 'p', frame: undefined, styles: { color: 'red; x: url(y)' } }]));
    expect(() => doc.importFile(evil)).toThrow(/forbidden/);
    expect(doc.getChildren(null)).toEqual([]);
    // A cycle is never reached from the roots.
    expect(readWeftFile(file([board, { ...board, id: 'x', parentId: 'y', frame: undefined }, { ...board, id: 'y', parentId: 'x', frame: undefined }])).artboards).toHaveLength(1);
    expect(readWeftFile(file([board], [{ family: 'Not A Font' }, { family: 'inter', weights: [400, 999] }])).fonts).toEqual([{ family: 'Inter', weights: [400] }]);
  });
});

describe('validation', () => {
  it('suggests the property to use for unknown styles', () => {
    expect(styleIssues({ 'padding-left': '4px' })).toEqual(['Unknown style property "padding-left" (use "paddingLeft")']);
    expect(styleIssues({ colour: 'red' })[0]).toContain('did you mean "color"?');
    expect(styleIssues({ background: 'red' })[0]).toContain('use backgroundColor, or backgroundImage for a gradient');
    expect(styleIssues({ marginTop: '4px', whiteSpace: 'nowrap', textDecoration: 'underline', borderLeft: '2px solid red' })).toEqual([]);
  });

  it('allows gradients but nothing the browser would fetch', () => {
    expect(styleIssues({ backgroundImage: 'linear-gradient(90deg, #fff, var(--color-accent))' })).toEqual([]);
    for (const value of ['url(https://x.example/a.png)', 'image-set("a.png" 1x)', 'linear-gradient(red, blue), URL( x )', 'u\\72l(x)']) {
      expect(styleIssues({ backgroundImage: value })[0]).toMatch(/external resources/);
    }
    expect(styleIssues({ boxShadow: '0 0 0 1px url(x)' })[0]).toMatch(/external resources/);
  });

  it('lets headings and paragraphs hold inline spans', () => {
    const doc = new GridDocument();
    const h1 = doc.createNode({ type: 'frame', tag: 'h1', parentId: artboard(doc) });
    doc.createNode({ type: 'text', tag: 'span', parentId: h1, text: 'Hi' });
    expect(() => doc.createNode({ type: 'text', tag: 'section' as never, parentId: h1 })).toThrow(/use type "frame"/);
  });

  it('lists every problem in a tree with its path, and throws them together', () => {
    const issues = treeIssues([{ type: 'frame', styles: { colr: 'x' }, children: [{ type: 'text', children: [{ type: 'text' }] }] }]);
    expect(issues).toEqual([
      'nodes[0]: Unknown style property "colr" (did you mean "color"?)',
      'nodes[0].children[0]: Text nodes cannot have children (make it a frame with the same tag and span text children)',
    ]);
    const doc = new GridDocument();
    expect(() => doc.createNode({ type: 'frame', styles: { colr: 'x', bg: 'y' } as never, attributes: { onclick: 'x' } })).toThrow(/3 problems/);
  });
});

describe('exportArtboardHTML', () => {
  it('renders the tree with tokens, reset, escaped content and @media breakpoints', async () => {
    const { exportArtboardHTML } = await import('./export');
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', tag: 'main', name: 'Page <1>', frame: { x: 0, y: 0, width: 800, height: 600, heightMode: 'hug' } });
    const h1 = doc.createNode({ type: 'frame', tag: 'h1', parentId: board, styles: { fontSize: '40px' }, breakpoints: { mobile: { fontSize: '28px' } } });
    doc.createNode({ type: 'text', tag: 'span', parentId: h1, text: '<script>alert(1)</script> & co' });
    doc.createNode({ type: 'text', tag: 'a', parentId: board, text: 'x', attributes: { href: '/a?b="c"' } });
    const gone = doc.createNode({ type: 'text', parentId: board, text: 'hidden' });
    doc.updateNode(gone, { hidden: true });

    const html = exportArtboardHTML(doc, board);
    expect(html).toContain('<title>Page &lt;1&gt;</title>');
    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt; &amp; co');
    expect(html).not.toContain('<script>');
    expect(html).toContain('href="/a?b=&quot;c&quot;"');
    expect(html).toContain(`<h1 data-gf-id="${h1}" style="font-size: 40px">`);
    expect(html).toMatch(/@media \(max-width: 600px\)[\s\S]*font-size: 28px !important/);
    expect(html).toContain('.weft-artboard { width: 800px; height: auto;');
    expect(html).toMatch(/--space-4:/);
    expect(html).toContain('display: none');
    expect(exportArtboardHTML(doc, board, { width: 390 })).toContain('width: 390px');
    expect(() => exportArtboardHTML(doc, h1)).toThrow(/not an artboard/);
  });
});

describe('fonts', () => {
  it('searches the bundled catalog and builds tokens and Google URLs', async () => {
    const { searchFonts, findFont, fontSlug, withFontTokens, googleFontsCSSUrl, encodeFontQuery, decodeFontQuery } = await import('./fonts');
    const { defaultTokens } = await import('./default-tokens');
    const { flattenTokens } = await import('./tokens');
    expect(searchFonts('inter')[0]!.family).toBe('Inter');
    expect(searchFonts('playfair').map((f) => f.family)).toContain('Playfair Display');
    expect(searchFonts('', { category: 'monospace', limit: 3 }).every((f) => f.category === 'monospace')).toBe(true);
    expect(findFont('PLAYFAIR display')?.category).toBe('serif');
    expect(fontSlug('Playfair Display')).toBe('playfair-display');

    const fonts = [{ family: 'Playfair Display', weights: [700, 400] }, { family: 'Inter', weights: [400] }];
    const tokens = flattenTokens(withFontTokens(defaultTokens, fonts).tokens);
    expect(tokens.find((t) => t.cssVar === '--font-family-playfair-display')!.value).toBe('"Playfair Display", Georgia, serif');
    expect(tokens.find((t) => t.cssVar === '--font-family-sans')).toBeDefined();
    expect(googleFontsCSSUrl(fonts)).toBe('https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Playfair+Display:wght@400;700&display=swap');
    expect(decodeFontQuery(encodeFontQuery(fonts))).toEqual([{ family: 'Inter', weights: [400] }, { family: 'Playfair Display', weights: [400, 700] }]);
    expect(decodeFontQuery('Nope:400|Inter:999|<x>')).toEqual([{ family: 'Inter', weights: [400, 500, 600, 700] }]);
  });

  it('adds and removes document fonts as undoable, validated commands', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    expect(doc.addFonts([{ family: 'inter' }])).toEqual([{ family: 'Inter', weights: [400, 500, 600, 700] }]);
    doc.addFonts([{ family: 'Inter', weights: [800] }]);
    expect(doc.getFonts()).toEqual([{ family: 'Inter', weights: [400, 500, 600, 700, 800] }]);
    expect(() => doc.addFonts([{ family: 'Comic Sans MS' }, { family: 'Inter', weights: [450] }])).toThrow(/2 problems[\s\S]*Unknown font[\s\S]*no weight 450/);
    history.undo();
    expect(doc.getFonts()[0]!.weights).not.toContain(800);
    doc.removeFonts(['inter']);
    expect(doc.getFonts()).toEqual([]);
    expect(() => doc.removeFonts(['Lora'])).toThrow(/Not in this document/);
  });

  it('round-trips fonts through snapshots and exports them', async () => {
    const { exportArtboardHTML } = await import('./export');
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', name: 'A', frame: { x: 0, y: 0, width: 400, height: 300 } });
    doc.addFonts([{ family: 'Lora', weights: [400] }]);
    const copy = new GridDocument();
    copy.loadSnapshot(doc.toSnapshot());
    expect(copy.getFonts()).toEqual([{ family: 'Lora', weights: [400] }]);
    const html = exportArtboardHTML(doc, board);
    expect(html).toContain('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@400&amp;display=swap">');
    expect(html).toContain('--font-family-lora: "Lora", Georgia, serif;');
    expect(exportArtboardHTML(doc, board, { fontCSSUrl: null })).not.toContain('<link rel="stylesheet"');
  });
});
