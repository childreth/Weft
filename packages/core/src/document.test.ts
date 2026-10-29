import { describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { GridDocument, GridError, ORIGIN_AGENT, compileBreakpointCSS, readClipboard, readWeftFile, styleIssues, treeIssues } from './document';
import { exportArtboardHTML } from './export';
import { History } from './history';
import { seedLandingPage } from './seed';
import { compileTokensCSS, flattenTokens, modeChangedVars } from './tokens';
import { DEFAULT_ARTBOARD_STYLES } from './defaults';
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
  it("adds and overrides a document's own tokens, undoably, for every consumer", () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const board = artboard(doc);
    doc.setTokens({ 'color.ember-500': '#c2410c', 'color.accent': '{color.ember-500}', 'space.18': '72px' });
    const flat = flattenTokens(doc.tokenSet().tokens);
    expect(flat.find((t) => t.name === 'color.ember-500')).toMatchObject({ cssVar: '--color-ember-500', type: 'color', value: '#c2410c' });
    expect(flat.find((t) => t.name === 'color.accent')?.value).toBe('var(--color-ember-500)');
    expect(flat.find((t) => t.name === 'space.18')?.type).toBe('dimension');
    // Defaults aren't changed, and export ships the document's tokens.
    expect(flattenTokens(defaultTokens.tokens).find((t) => t.name === 'color.accent')?.value).toBe('var(--color-blue-600)');
    expect(exportArtboardHTML(doc, board)).toContain('--color-ember-500: #c2410c;');

    doc.setTokens({ 'color.accent': null });
    expect(flattenTokens(doc.tokenSet().tokens).find((t) => t.name === 'color.accent')?.value).toBe('var(--color-blue-600)');
    history.undo();
    expect(doc.getTokens()['color.accent']).toBe('{color.ember-500}');

    const copy = new GridDocument();
    copy.loadSnapshot(doc.toSnapshot());
    expect(copy.getTokens()).toEqual(doc.getTokens());
  });

  it('checks document tokens and changes nothing when one is wrong', () => {
    const doc = new GridDocument();
    const issues = (entries: Record<string, string | null>) => {
      try {
        doc.setTokens(entries);
        return '';
      } catch (err) {
        return (err as Error).message;
      }
    };
    expect(issues({ 'color.ok': '#fff', 'color.bad': 'linear-gradient(red, blue)' })).toContain('"color.bad": expected a color');
    expect(doc.getTokens()).toEqual({});
    expect(issues({ 'color.x': 'red; background: url(x)' })).toContain('expected a color');
    expect(issues({ 'space.x': '12' })).toContain('expected a length');
    expect(issues({ 'font-family.x': 'Inter' })).toContain('add_fonts');
    expect(issues({ 'colour.x': '#fff' })).toContain('unknown group');
    expect(issues({ 'color.Ember': '#fff' })).toContain('kebab-case');
    expect(issues({ 'color.neutral': '#fff' })).toContain('is a group');
    expect(issues({ 'color.accent.soft': '#fff' })).toContain('is a token, not a group');
    expect(issues({ 'color.x': '{color.nope}' })).toContain("isn't a token");
    expect(issues({ 'color.x': '{space.4}' })).toContain('another color token');
    expect(issues({ 'color.a': '{color.b}', 'color.b': '{color.a}' })).toContain('in a circle');
    expect(issues({ 'color.white': null })).toContain('nothing to remove');
    expect(issues({ 'color.mix': 'color-mix(in oklab, var(--color-accent) 40%, white)', 'font-size.hero': 'clamp(40px, 6vw, 72px)' })).toBe('');
  });

  it("imports a file's tokens without overriding the document's own", () => {
    const doc = new GridDocument();
    doc.setTokens({ 'color.brand': '#111111' });
    const board = { id: 'a', type: 'frame', tag: 'main', name: 'A', parentId: null, index: 'a0', styles: {}, attributes: {}, frame: { x: 0, y: 0, width: 100, height: 100 } };
    const file = JSON.stringify({
      format: 'weft',
      version: 1,
      nodes: [board],
      tokens: { 'color.brand': '#222222', 'color.ember': '#c2410c', 'color.glow': '{color.ember}', 'color.bad': 'url(x)', 'color.lost': '{color.bad}' },
    });
    doc.importFile(readWeftFile(file));
    expect(doc.getTokens()).toEqual({ 'color.brand': '#111111', 'color.ember': '#c2410c', 'color.glow': '{color.ember}' });
  });
});

describe('themes', () => {
  it('declares every token in a theme block, so aliases follow an overridden primitive', () => {
    const css = compileTokensCSS({ tokens: defaultTokens.tokens, modes: { ember: { color: { blue: { 600: { $value: '#c2410c' } } } } } }, ':host', (m) => `[data-theme="${m}"]`);
    const block = css.slice(css.indexOf('[data-theme="ember"]'));
    expect(block).toContain('--color-blue-600: #c2410c;');
    expect(block).toContain('--color-accent: var(--color-blue-600);');
    expect(block).toContain('--space-4: 16px;');
  });

  it('creates themes over existing tokens, applies them to frames, and undoes', () => {
    const doc = new GridDocument();
    const history = new History(doc);
    const board = artboard(doc);
    const section = doc.createNode({ type: 'frame', parentId: board, tag: 'section' });
    const title = doc.createNode({ type: 'text', parentId: section, text: 'Hi' });
    expect(doc.getThemeNames()).toEqual(['dark']);

    doc.setTokens({ 'color.ember-500': '#c2410c' });
    doc.setTheme('ember', { 'color.accent': '{color.ember-500}', 'color.surface': '#fff7ed' });
    expect(doc.getThemeNames()).toEqual(['dark', 'ember']);
    const ember = flattenTokens(doc.tokenSet().modes!.ember!);
    expect(ember.find((t) => t.name === 'color.accent')?.value).toBe('var(--color-ember-500)');

    // The document can override the built-in dark theme too; its other overrides stay.
    doc.setTheme('dark', { 'color.accent': '#f97316' });
    const dark = flattenTokens(doc.tokenSet().modes!.dark!);
    expect(dark.find((t) => t.name === 'color.accent')?.value).toBe('#f97316');
    expect(dark.find((t) => t.name === 'color.surface')?.value).toBe('var(--color-neutral-950)');

    doc.updateNode(board, { theme: 'ember' });
    doc.updateNode(section, { theme: 'dark' });
    expect(doc.getNode(board)?.theme).toBe('ember');
    expect(() => doc.updateNode(title, { theme: 'dark' })).toThrow('Only frames take a theme');
    expect(() => doc.updateNode(board, { theme: 'nope' })).toThrow('Unknown theme "nope"');

    const html = exportArtboardHTML(doc, board);
    expect(html).toContain(`data-gf-id="${board}" data-theme="ember"`);
    expect(html).toContain('[data-theme="ember"] {');
    expect(html).toContain('[data-theme="dark"] {');

    doc.updateNode(section, { theme: null });
    expect(doc.getNode(section)?.theme).toBeUndefined();
    expect(exportArtboardHTML(doc, board)).not.toContain('[data-theme="dark"]');
    history.undo();
    expect(doc.getNode(section)?.theme).toBe('dark');

    // Removing a theme clears it from frames, as one step; the built-in dark stays.
    doc.removeTheme('ember');
    expect(doc.getNode(board)?.theme).toBeUndefined();
    history.undo();
    expect(doc.getNode(board)?.theme).toBe('ember');
    doc.removeTheme('dark');
    expect(doc.getNode(section)?.theme).toBe('dark');
    expect(doc.getThemes()).toEqual({ ember: { 'color.accent': '{color.ember-500}', 'color.surface': '#fff7ed' } });
  });

  it('checks theme names and overrides, and changes nothing when one is wrong', () => {
    const doc = new GridDocument();
    const issues = (name: string, entries: Record<string, string | null>) => {
      try {
        doc.setTheme(name, entries);
        return '';
      } catch (err) {
        return (err as Error).message;
      }
    };
    expect(issues('Ember', {})).toContain('kebab-case');
    expect(issues('default', {})).toContain('without a theme');
    expect(issues('ember', { 'color.surface': '#000', 'color.brand': '#111' })).toContain(`"color.brand" isn't a token`);
    expect(doc.getThemes()).toEqual({});
    expect(issues('ember', { 'space.4': 'red' })).toContain('expected a length');
    expect(issues('ember', { 'font-family.sans': 'Inter' })).toContain('through their roles');
    expect(issues('ember', { 'font-family.heading': 'Inter' })).toContain('a reference to a font');
    expect(issues('ember', { 'font-family.heading': '{color.accent}' })).toContain('another font-family token');
    expect(issues('ember', { 'color.surface': '{color.nope}' })).toContain("isn't a token");
    expect(issues('ember', { 'color.blue.600': '{color.accent}' })).toContain('in a circle');
    expect(issues('ember', { 'color.surface': null })).toContain('nothing to remove');
    expect(issues('ember', { 'color.surface': '{color.neutral.900}', 'space.4': '20px' })).toBe('');
  });

  it('points the font roles at document fonts, per document and per theme', () => {
    const doc = new GridDocument();
    const board = artboard(doc);
    doc.addFonts([{ family: 'Fraunces' }, { family: 'Inter' }]);
    doc.setTokens({ 'font-family.heading': '{font-family.fraunces}', 'font-family.body': '{font-family.inter}' });
    expect(() => doc.setTokens({ 'font-family.inter': '{font-family.fraunces}' })).toThrow('font-family.heading and font-family.body');
    doc.setTheme('plain', { 'font-family.heading': '{font-family.inter}' });
    doc.updateNode(board, { theme: 'plain' });

    const css = compileTokensCSS(doc.tokenSet());
    expect(css).toContain('--font-family-heading: var(--font-family-fraunces);');
    expect(css).toMatch(/\[data-theme="plain"\] \{[^}]*--font-family-heading: var\(--font-family-inter\);/);
    expect([...modeChangedVars(doc.tokenSet(), 'plain')]).toEqual(['--font-family-heading']);
    expect(DEFAULT_ARTBOARD_STYLES.fontFamily).toBe('var(--font-family-body)');

    // A font a role points at can't be removed out from under it.
    expect(() => doc.removeFonts(['Fraunces'])).toThrow('font-family.heading uses {font-family.fraunces}');
    expect(() => doc.removeFonts(['Inter'])).toThrow('in the plain theme');
    doc.setTokens({ 'font-family.heading': null });
    doc.removeFonts(['Fraunces']);
    expect(doc.getFonts().map((f) => f.family)).toEqual(['Inter']);
  });

  it('round-trips themes through snapshots and files, and drops themes a document lacks from pasted layers', () => {
    const doc = new GridDocument();
    const board = artboard(doc);
    doc.setTheme('ember', { 'color.surface': '#fff7ed' });
    doc.updateNode(board, { theme: 'ember' });

    const copy = new GridDocument();
    copy.loadSnapshot(doc.toSnapshot());
    expect(copy.getThemes()).toEqual(doc.getThemes());
    expect(copy.getNode(board)?.theme).toBe('ember');

    // Opening the file elsewhere brings its themes; the document's own win.
    const other = new GridDocument();
    other.setTheme('ember', { 'color.surface': '#000000' });
    other.importFile(readWeftFile(JSON.stringify({ ...doc.toSnapshot(), themes: { ember: { 'color.surface': '#fff7ed' }, sea: { 'color.accent': '#0ea5e9', 'color.bad': '#fff' } } })));
    expect(other.getThemes()).toEqual({ ember: { 'color.surface': '#000000' }, sea: { 'color.accent': '#0ea5e9' } });

    const bare = new GridDocument();
    const [pasted] = bare.insertTrees(doc.getTree(board), { parentId: null });
    expect(bare.getNode(pasted!)?.theme).toBeUndefined();
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

  it('repairs gradients saved in color properties when opening a file', () => {
    const doc = new GridDocument();
    const gradient = 'linear-gradient(180deg, #fff 0%, #f9fafb 100%)';
    const board = {
      id: 'a', type: 'frame', tag: 'main', name: 'A', parentId: null, index: 'a0', attributes: {}, frame: { x: 0, y: 0, width: 100, height: 100 },
      styles: { backgroundColor: gradient, color: 'linear-gradient(red, blue)' },
      breakpoints: { mobile: { backgroundColor: 'radial-gradient(red, blue)' } },
    };
    const [id] = doc.importFile(readWeftFile(JSON.stringify({ format: 'weft', version: 1, nodes: [board] })));
    const node = doc.getNode(id!)!;
    expect(node.styles).toEqual({ backgroundImage: gradient });
    expect(node.breakpoints).toEqual({ mobile: { backgroundImage: 'radial-gradient(red, blue)' } });
  });

  it('repairs gradients stored in a document, and copies layers that still have them', () => {
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', name: 'Board', frame: { x: 0, y: 0, width: 400, height: 300 } });
    const card = doc.createNode({ type: 'frame', parentId: board, styles: { backgroundImage: 'linear-gradient(#000, #111)' } });
    // Saved before color properties rejected gradients.
    const stored = (id: string) => doc.nodes.get(id)!.get('styles') as Y.Map<string>;
    stored(board).set('backgroundColor', 'linear-gradient(#fff, #eee)');
    stored(card).set('backgroundColor', 'linear-gradient(#fff, #eee)');

    const copy = doc.duplicateNode(board);
    expect(doc.getNode(copy)!.styles).toEqual({ backgroundImage: 'linear-gradient(#fff, #eee)' });
    expect(doc.getTree(copy)[0]!.children[0]!.styles).toEqual({ backgroundImage: 'linear-gradient(#000, #111)' });

    expect(doc.repairGradients()).toBe(2);
    expect(doc.getNode(board)!.styles).toEqual({ backgroundImage: 'linear-gradient(#fff, #eee)' });
    expect(doc.getNode(card)!.styles).toEqual({ backgroundImage: 'linear-gradient(#000, #111)' });
    expect(doc.repairGradients()).toBe(0);
  });
});

describe('validation', () => {
  it('suggests the property to use for unknown styles', () => {
    expect(styleIssues({ 'padding-left': '4px' })).toEqual(['Unknown style property "padding-left" (use "paddingLeft")']);
    expect(styleIssues({ colour: 'red' })[0]).toContain('did you mean "color"?');
    expect(styleIssues({ background: 'red' })[0]).toContain('use backgroundColor, or backgroundImage for a gradient');
    expect(styleIssues({ marginTop: '4px', whiteSpace: 'nowrap', textDecoration: 'underline', borderLeft: '2px solid red' })).toEqual([]);
  });

  it('takes standard CSS beyond the basics, still without external resources', () => {
    expect(
      styleIssues({
        textWrap: 'balance',
        borderTopLeftRadius: 'var(--radius-lg)',
        backgroundClip: 'text',
        backdropFilter: 'blur(12px)',
        clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        WebkitLineClamp: '3',
        fontVariationSettings: '"FILL" 1',
        placeItems: 'center',
      }),
    ).toEqual([]);
    expect(styleIssues({ clipPath: 'url(#shape)' })[0]).toContain("can't load external resources");
    expect(styleIssues({ float: 'left' })[0]).toContain('use flex or grid');
    expect(styleIssues({ transition: 'all 0.2s' })[0]).toContain('no hover states');
    expect(styleIssues({ borderTopLeftRadious: '4px' })[0]).toContain('did you mean "borderTopLeftRadius"?');
    expect(styleIssues({ textDecorationColor: 'linear-gradient(red, blue)' })[0]).toContain('takes a color, not a gradient');
  });

  it('allows gradients but nothing the browser would fetch', () => {
    expect(styleIssues({ backgroundImage: 'linear-gradient(90deg, #fff, var(--color-accent))' })).toEqual([]);
    for (const value of ['url(https://x.example/a.png)', 'image-set("a.png" 1x)', 'linear-gradient(red, blue), URL( x )', 'u\\72l(x)']) {
      expect(styleIssues({ backgroundImage: value })[0]).toMatch(/external resources/);
    }
    expect(styleIssues({ boxShadow: '0 0 0 1px url(x)' })[0]).toMatch(/external resources/);
  });

  it('rejects gradients in color properties, which CSS would drop', () => {
    expect(styleIssues({ backgroundColor: 'linear-gradient(180deg, #fff, #f9fafb)' })).toEqual([
      'Style "backgroundColor" takes a color, not a gradient: put the gradient in backgroundImage',
    ]);
    expect(styleIssues({ color: 'conic-gradient(red, blue)' })).toEqual(['Style "color" takes a color, not a gradient']);
    expect(styleIssues({ backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)' })).toEqual([]);
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

describe('icons', () => {
  it('finds Material Symbols names by name and meaning, and adds the icon fonts to the catalog', async () => {
    const { searchIcons, isIconName, ICON_FONTS } = await import('./icons');
    const { findFont, defaultWeights, fontStack } = await import('./fonts');
    expect(searchIcons('search')[0]!.name).toBe('search');
    expect(searchIcons('heart').map((i) => i.name)).toContain('favorite');
    expect(searchIcons('pin', 5).map((i) => i.name)).toContain('location_on');
    expect(searchIcons('chevron down', 10).map((i) => i.name)).toContain('expand_more');
    expect(searchIcons('', 3)).toHaveLength(3);
    expect(isIconName('expand_more')).toBe(true);
    expect(isIconName('chevron_down')).toBe(false);
    for (const family of ICON_FONTS) expect(findFont(family)?.category).toBe('icons');
    expect(defaultWeights(findFont('Material Symbols Rounded')!)).toEqual([400]);
    expect(fontStack('Material Symbols Outlined')).toEqual(['"Material Symbols Outlined"']);
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

describe('images', () => {
  const hash = 'a'.repeat(64);
  const src = `asset:${hash}.png`;

  it('sniffs image types from their bytes', async () => {
    const { sniffImage } = await import('./assets');
    expect(sniffImage(new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0]))).toBe('png');
    expect(sniffImage(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe('jpg');
    expect(sniffImage(new TextEncoder().encode('RIFF\0\0\0\0WEBPVP8 '))).toBe('webp');
    expect(sniffImage(new TextEncoder().encode('GIF89a'))).toBe('gif');
    expect(sniffImage(new TextEncoder().encode('\0\0\0\x1cftypavif'))).toBe('avif');
    expect(sniffImage(new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg"/>'))).toBeNull();
  });

  it('takes uploaded assets and small data URIs as src, never remote URLs, and needs alt text', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    const img = doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src, alt: 'A dog' } });
    doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src: 'data:image/svg+xml,%3Csvg%2F%3E', alt: '' } });
    expect(() => doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src: 'https://x.example/a.png', alt: 'x' } })).toThrow(/remote URLs/);
    expect(() => doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src: `asset:${hash}.svg`, alt: 'x' } })).toThrow(/uploaded image/);
    expect(() => doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src, srcset: `${src} 2x`, alt: 'x' } })).toThrow(/srcset/);
    expect(() => doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src } })).toThrow(/alt/);
    expect(() => doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src: `data:image/png;base64,${'A'.repeat(100_001)}`, alt: '' } })).toThrow(/too large/);
    expect(() => doc.updateNode(img, { attributes: { alt: null } })).toThrow(/alt/);
    const div = doc.createNode({ type: 'frame', parentId: root });
    expect(() => doc.updateNode(div, { tag: 'img' })).toThrow(/alt/);
    doc.updateNode(div, { tag: 'img', attributes: { alt: '' } });
    expect(treeIssues([{ type: 'frame', tag: 'img', attributes: { src } }])).toEqual([expect.stringMatching(/alt/)]);
  });

  it('repairs images from older files: remote sources dropped, missing alt made decorative', () => {
    const board = { id: 'a', type: 'frame', tag: 'div', name: 'A', parentId: null, index: 'a0', styles: {}, attributes: {}, frame: { x: 0, y: 0, width: 100, height: 100 } };
    const img = { ...board, id: 'i', parentId: 'a', tag: 'img', frame: undefined, attributes: { src: 'https://x.example/a.png', srcset: 'b.png 2x' } };
    const kept = { ...img, id: 'k', index: 'a1', attributes: { src, alt: 'Kept' } };
    const file = readWeftFile(JSON.stringify({ format: 'weft', version: 1, nodes: [board, img, kept], assets: { [`${hash}.png`]: 'iVBO', 'bad.png': 'x', [`${hash}.jpg`]: 7 } }));
    expect(file.artboards[0]!.children.map((c) => c.attributes)).toEqual([{ alt: '' }, { src, alt: 'Kept' }]);
    expect(file.assets).toEqual({ [`${hash}.png`]: 'iVBO' });
    new GridDocument().importFile(file);
  });

  it('export resolves asset refs, keeps data URIs and drops sources that would load remotely', () => {
    const doc = new GridDocument();
    const root = artboard(doc);
    doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { src, alt: 'A dog' } });
    // An old document synced before src was checked.
    doc.createNode({ type: 'frame', tag: 'img', parentId: root, attributes: { alt: 'Remote' } });
    const remote = doc.getChildren(root)[1]!.id;
    ((doc as unknown as { nodes: Y.Map<Y.Map<unknown>> }).nodes.get(remote)!.get('attributes') as Y.Map<string>).set('src', 'https://x.example/a.png');
    expect(exportArtboardHTML(doc, root)).toContain(`src="assets/${hash}.png" alt="A dog"`);
    const html = exportArtboardHTML(doc, root, { assetUrl: (name) => `data:image/png;base64,${name.slice(0, 4)}` });
    expect(html).toContain('src="data:image/png;base64,aaaa"');
    expect(html).not.toContain('x.example');
    expect(html).toContain('<img data-gf-id');
  });
});
