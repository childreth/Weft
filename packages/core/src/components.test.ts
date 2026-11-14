import { describe, expect, it } from 'vitest';
import * as Y from 'yjs';
import { GridDocument, GridError, compileBreakpointCSS, compileStateCSS, readClipboard, readWeftFile } from './document';
import { componentProps, flattenTree } from './components';
import { exportArtboardHTML } from './export';
import type { SceneTree } from './schema';

const artboard = (doc: GridDocument, name = 'Page') => doc.createNode({ type: 'frame', name, frame: { x: 0, y: 0, width: 1200, height: 800 } });

/** A card component: a frame holding a bound title and a fixed caption. */
function card(doc: GridDocument, parentId: string) {
  const id = doc.createNode({
    type: 'frame',
    tag: 'article',
    name: 'Card',
    parentId,
    component: true,
    styles: { padding: '16px', display: 'grid' },
    states: { hover: { backgroundColor: 'var(--color-surface-container)' } },
  });
  const title = doc.createNode({
    type: 'text',
    tag: 'h3',
    parentId: id,
    text: 'Title',
    bind: { text: 'title' },
    breakpoints: { mobile: { fontSize: '14px' } },
  });
  const caption = doc.createNode({ type: 'text', parentId: id, text: 'Read more' });
  return { id, title, caption };
}

const texts = (tree: SceneTree): string[] => [...(tree.text !== undefined ? [tree.text] : []), ...tree.children.flatMap(texts)];

describe('components', () => {
  it("draws an instance from its component, with its props and its own root styles", () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = card(doc, page);
    expect(doc.getComponents()).toEqual([{ id: main.id, name: 'Card', props: { title: 'Title' }, instances: 0 }]);

    const instance = doc.createNode({
      type: 'frame',
      name: 'News card',
      parentId: page,
      instance: { component: main.id, props: { title: 'News' } },
      styles: { padding: '32px', gridColumn: 'span 2' },
      attributes: { 'aria-label': 'News' },
    });
    // Stored as one node with no children: what it draws is worked out when read.
    expect(doc.getNode(instance)).toMatchObject({ instance: { component: main.id, props: { title: 'News' } } });
    expect(doc.getDescendantIds(instance)).toEqual([]);
    expect(doc.getTree(instance)[0]!.children).toEqual([]);

    const drawn = doc.getExpandedTree(instance);
    expect(drawn).toMatchObject({
      id: instance,
      tag: 'article',
      name: 'News card',
      styles: { padding: '32px', display: 'grid', gridColumn: 'span 2' },
      attributes: { 'aria-label': 'News' },
      states: { hover: { backgroundColor: 'var(--color-surface-container)' } },
    });
    expect(drawn.source).toBeUndefined();
    expect(texts(drawn)).toEqual(['News', 'Read more']);
    expect(drawn.children.map((c) => c.source)).toEqual([main.title, main.caption]);
    // Drawn layers have ids of their own, never the component's (those are on the canvas already).
    const ids = flattenTree(doc.getExpandedTree(page)).map((n) => n.id);
    expect(ids).toHaveLength(7);
    expect(new Set(ids).size).toBe(7);

    // Editing the component changes what every instance draws; a prop left out follows the component.
    const plain = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id } });
    doc.updateNode(main.title, { text: 'Headline' });
    doc.updateNode(main.caption, { text: 'More' });
    expect(texts(doc.getExpandedTree(instance))).toEqual(['News', 'More']);
    expect(texts(doc.getExpandedTree(plain))).toEqual(['Headline', 'More']);
    expect(doc.getComponents()[0]).toMatchObject({ props: { title: 'Headline' }, instances: 2 });

    doc.updateNode(instance, { props: { title: null } });
    expect(texts(doc.getExpandedTree(instance))).toEqual(['Headline', 'More']);
  });

  it('makes a text layer a component too: a button whose label is a prop', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const button = doc.createNode({ type: 'text', tag: 'button', parentId: page, text: 'Save', component: true, bind: { text: 'label' }, styles: { padding: '8px' } });
    const cancel = doc.createNode({ type: 'frame', parentId: page, instance: { component: button, props: { label: 'Cancel' } } });
    expect(doc.getExpandedTree(cancel)).toMatchObject({ id: cancel, type: 'text', tag: 'button', text: 'Cancel', styles: { padding: '8px' }, children: [] });
    expect(exportArtboardHTML(doc, page)).toContain(`<button data-gf-id="${cancel}" style="padding: 8px">Cancel</button>`);
  });

  it('exports instances as their layers, with one override rule per component layer', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = card(doc, page);
    const a = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id, props: { title: 'A & B' } } });
    doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id, props: { title: 'C' } }, states: { hover: { opacity: '0.8' } } });
    const html = exportArtboardHTML(doc, page);
    expect(html).toContain(`<article data-gf-id="${a}" style="padding: 16px; display: grid"><h3 data-gf-src="${main.title}"`);
    expect(html).toContain('>A &amp; B</h3>');
    // The component's own layers keep their ids; an id never appears twice.
    expect(html.match(new RegExp(`<h3 data-gf-id="${main.title}"`, 'g'))).toHaveLength(1);
    expect(html.match(new RegExp(`<h3 data-gf-src="${main.title}"`, 'g'))).toHaveLength(2);

    const nodes = flattenTree(doc.getExpandedTree(page));
    const breakpoints = compileBreakpointCSS(nodes);
    expect(breakpoints).toContain(`[data-gf-id="${main.title}"] { font-size: 14px !important; }`);
    expect(breakpoints.match(new RegExp(`\\[data-gf-src="${main.title}"\\]`, 'g'))).toHaveLength(1);
    // An instance's root is a real layer: the component's rules and its own, merged under its id.
    const states = compileStateCSS(nodes);
    expect(states).toContain(`[data-gf-id="${a}"]:hover { background-color: var(--color-surface-container) !important; }`);
    expect(states).toMatch(/\[data-gf-id="f_\w+"\]:hover \{ background-color: var\(--color-surface-container\) !important; opacity: 0\.8 !important; \}/);
  });

  it('checks what a component, a binding and an instance can be', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = card(doc, page);
    const plain = doc.createNode({ type: 'frame', parentId: page, name: 'Plain' });
    const instance = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id } });

    expect(() => doc.updateNode(page, { component: true })).toThrow(/artboard can't be a component/);
    expect(() => doc.createNode({ type: 'frame', parentId: main.id, component: true })).toThrow(/can't be nested/);
    expect(() => doc.updateNode(page, { component: true })).toThrow(GridError);
    const outer = doc.createNode({ type: 'frame', parentId: page, name: 'Outer' });
    doc.moveNode(plain, outer);
    doc.updateNode(plain, { component: true });
    expect(() => doc.updateNode(outer, { component: true })).toThrow(/a layer inside this one is already a component/);
    expect(() => doc.moveNode(plain, main.id)).toThrow(/can't be nested/);
    expect(() => doc.moveNode(plain, null)).toThrow(/can't become an artboard/);

    expect(() => doc.updateNode(main.id, { bind: { text: 'label' } })).toThrow(/Only a text layer/);
    // The error names the fix, so a model that guessed another naming style gets it right on the next call.
    expect(() => doc.updateNode(main.title, { bind: { text: 'Title Case' } })).toThrow(/must be camelCase.*Use "titleCase"/);
    expect(() => doc.updateNode(main.title, { bind: { text: 'date_label' } })).toThrow(/Use "dateLabel"/);
    expect(() => doc.updateNode(main.title, { bind: { text: 'DATE-LABEL' } })).toThrow(/Use "dateLabel"/);
    // Nothing sensible to suggest (dropping the digit would change the name): the rule and examples stand alone.
    expect(() => doc.updateNode(main.title, { bind: { text: '2nd_line' } })).toThrow(/\(label, iconName\)/);
    expect(() => doc.updateNode(main.title, { bind: { text: '___' } })).toThrow(/\(label, iconName\)/);
    expect(() => doc.updateNode(main.title, { bind: { href: 'link' } as never })).toThrow(/Can't bind "href"/);
    doc.updateNode(main.caption, { bind: { text: 'cta' } });
    expect(componentProps(main.id, doc.scene())).toEqual({ title: 'Title', cta: 'Read more' });
    doc.updateNode(main.caption, { bind: null });
    expect(doc.getNode(main.caption)?.bind).toBeUndefined();

    expect(() => doc.createNode({ type: 'frame', parentId: page, instance: { component: outer } })).toThrow(/"Outer" .* isn't a component/);
    expect(() => doc.createNode({ type: 'frame', parentId: page, instance: { component: 'f_missing' } })).toThrow(/not found/);
    expect(() => doc.createNode({ type: 'text', parentId: page, instance: { component: main.id } })).toThrow(/An instance is a frame/);
    expect(() => doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id, props: { heading: 'x' } } })).toThrow(/"Card" has no prop "heading" \(its props: title\)/);
    expect(() => doc.updateNode(instance, { props: { heading: 'x' } })).toThrow(/no prop "heading"/);
    expect(() => doc.updateNode(plain, { props: { title: 'x' } })).toThrow(/isn't an instance/);

    // An instance is opaque: nothing goes inside it, and its tag and text are the component's.
    expect(() => doc.createNode({ type: 'text', parentId: instance, text: 'x' })).toThrow(/is an instance: its layers come from its component/);
    expect(() => doc.moveNode(outer, instance)).toThrow(/is an instance/);
    expect(() => doc.updateNode(instance, { tag: 'section' })).toThrow(/takes its tag from its component/);
    expect(() => doc.updateNode(instance, { component: true })).toThrow(/can't be a component/);
    doc.updateNode(instance, { styles: { width: '50%' }, name: 'Half card', hidden: true });
    expect(doc.getExpandedTree(instance)).toMatchObject({ name: 'Half card', hidden: true, styles: { width: '50%' } });
  });

  it("keeps a component while something uses it, and never lets one contain itself", () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const library = artboard(doc, 'Components');
    const main = card(doc, library);
    const instance = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id } });

    expect(() => doc.deleteNodes([main.id])).toThrow(/"Card" is a component with an instance elsewhere/);
    expect(() => doc.deleteNodes([library])).toThrow(/delete or detach it first/);
    expect(() => doc.updateNode(main.id, { component: false })).toThrow(/has an instance/);
    // Together, or once the instance is gone, it's fine.
    doc.deleteNodes([instance]);
    doc.updateNode(main.id, { component: false });
    doc.updateNode(main.id, { component: true });

    // Card can hold a Badge; Badge can't then hold a Card, directly or through a move.
    const badge = doc.createNode({ type: 'frame', parentId: library, name: 'Badge', component: true });
    doc.createNode({ type: 'frame', parentId: main.id, instance: { component: badge } });
    expect(() => doc.createNode({ type: 'frame', parentId: badge, instance: { component: main.id } })).toThrow(/"Card" can't go inside "Badge": the component would contain itself/);
    expect(() => doc.createNode({ type: 'frame', parentId: badge, instance: { component: badge } })).toThrow(/would contain itself/);
    const loose = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id } });
    expect(() => doc.moveNode(loose, badge)).toThrow(/would contain itself/);
    // The inner instance is drawn inside every card.
    expect(doc.getExpandedTree(loose).children.at(-1)).toMatchObject({ instance: { component: badge }, children: [] });

    // Merged edits can still make a circle; it draws nothing instead of never finishing.
    const y = (doc.ydoc.getMap('nodes') as Y.Map<Y.Map<unknown>>).get(doc.createNode({ type: 'frame', parentId: badge }))!;
    y.set('instance', main.id);
    expect(doc.getExpandedTree(loose).children.at(-1)!.children).toEqual([]);
    expect(() => exportArtboardHTML(doc, page)).not.toThrow();
  });

  it('copies: a copy of a component is an instance of it, and a copy of an instance stays one', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = card(doc, page);
    const instance = doc.createNode({ type: 'frame', parentId: page, instance: { component: main.id, props: { title: 'One' } }, styles: { width: '50%' } });

    const again = doc.duplicateNode(instance);
    expect(doc.getNode(again)).toMatchObject({ instance: { component: main.id, props: { title: 'One' } }, styles: { width: '50%' } });
    const ofMain = doc.duplicateNode(main.id);
    expect(doc.getNode(ofMain)).toMatchObject({ name: 'Card', instance: { component: main.id, props: {} } });
    expect(doc.getNode(ofMain)?.component).toBeUndefined();
    expect(doc.getDescendantIds(ofMain)).toEqual([]);

    // A dark or mobile copy of the artboard keeps one definition: everything in the copy follows it.
    const copy = doc.duplicateNode(page, { name: 'Page — Mobile', frame: { width: 390 } });
    const copied = doc.getChildren(copy);
    expect(copied.map((n) => n.instance?.component)).toEqual([main.id, main.id, main.id, main.id]);
    expect(doc.getComponents()).toHaveLength(1);
    expect(doc.getComponents()[0]!.instances).toBe(7);
    doc.updateNode(main.title, { text: 'Changed' });
    expect(texts(doc.getExpandedTree(copy))).toEqual(['Changed', 'Read more', 'Changed', 'Read more', 'One', 'Read more', 'One', 'Read more']);
  });

  it('pastes into another document: with its component when that comes along, as plain layers when it does not', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = card(doc, page);
    const instance = doc.createNode({ type: 'frame', name: 'Hello card', parentId: page, instance: { component: main.id, props: { title: 'Hello' } } });
    const clipboard = (ids: string[]) => readClipboard(JSON.stringify({ format: 'weft-clipboard', version: 1, nodes: doc.copyNodes(ids) }));

    // Just the instance: the other document has no Card, so it gets the layers.
    const other = new GridDocument();
    const otherPage = artboard(other);
    const [pasted] = other.insertTrees(clipboard([instance]), { parentId: otherPage });
    expect(other.getNode(pasted!)).toMatchObject({ name: 'Hello card', tag: 'article', styles: { padding: '16px', display: 'grid' } });
    expect(other.getNode(pasted!)?.instance).toBeUndefined();
    expect(texts(other.getTree(pasted!)[0]!)).toEqual(['Hello', 'Read more']);
    expect(other.getNodes().some((n) => n.bind || n.component || n.source)).toBe(false);
    // Without what it draws there's nothing to paste, and nothing changes.
    const bare = clipboard([instance]).map(({ expanded: _expanded, ...tree }) => tree);
    expect(() => other.insertTrees(bare, { parentId: otherPage })).toThrow(/its component isn't in this document/);

    // The component and the instance together: the component comes along, and the instance points at it.
    const third = new GridDocument();
    const thirdPage = artboard(third);
    const [instanceCopy, mainCopy] = third.insertTrees(clipboard([instance, main.id]).reverse(), { parentId: thirdPage });
    expect(third.getNode(mainCopy!)).toMatchObject({ component: true, name: 'Card' });
    expect(mainCopy).not.toBe(main.id);
    expect(third.getNode(instanceCopy!)?.instance).toEqual({ component: mainCopy, props: { title: 'Hello' } });
    expect(third.getComponents()).toMatchObject([{ props: { title: 'Title' }, instances: 1 }]);
    expect(texts(third.getExpandedTree(instanceCopy!))).toEqual(['Hello', 'Read more']);

    // Back in the first document, the same clipboard makes instances: one definition, however often it's pasted.
    const back = doc.insertTrees(clipboard([instance, main.id]), { parentId: page });
    expect(back.map((id) => doc.getNode(id)?.instance?.component)).toEqual([main.id, main.id]);
    expect(() => doc.insertTrees(clipboard([instance]), { parentId: main.id })).toThrow(/"Card" can't go inside "Card"/);
    expect(() => readClipboard(JSON.stringify({ format: 'weft-clipboard', version: 1, nodes: [{ type: 'frame', children: [], instance: { component: 7 } }] }))).toThrow(/Malformed/);
  });

  it('saves and opens: files and snapshots keep components, instances and their links', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    // The instance sits before its component in the file.
    const hole = doc.createNode({ type: 'frame', parentId: page, name: 'Placeholder' });
    const main = card(doc, page);
    const instance = doc.createNode({ type: 'frame', parentId: page, beforeId: main.id, instance: { component: main.id, props: { title: 'Saved' } } });
    doc.deleteNodes([hole]);
    const snapshot = JSON.parse(JSON.stringify(doc.toSnapshot()));

    const reloaded = new GridDocument();
    reloaded.loadSnapshot(snapshot);
    expect(reloaded.getNode(main.id)).toMatchObject({ component: true });
    expect(reloaded.getNode(main.title)?.bind).toEqual({ text: 'title' });
    expect(texts(reloaded.getExpandedTree(instance))).toEqual(['Saved', 'Read more']);

    // Opened into another document, everything gets new ids and the instance follows its component.
    const other = new GridDocument();
    artboard(other, 'Existing');
    const [imported] = other.importFile(readWeftFile(JSON.stringify(snapshot)));
    const [instanceCopy, mainCopy] = other.getChildren(imported!);
    expect(mainCopy).toMatchObject({ component: true });
    expect(instanceCopy!.instance).toEqual({ component: mainCopy!.id, props: { title: 'Saved' } });
    expect(mainCopy!.id).not.toBe(main.id);
    expect(texts(other.getExpandedTree(imported!))).toEqual(['Saved', 'Read more', 'Title', 'Read more']);

    // A snapshot with an instance of something that's gone still loads; the instance is an empty frame.
    const broken = { ...snapshot, nodes: snapshot.nodes.filter((n: { id: string; parentId: string | null }) => n.id !== main.id && n.parentId !== main.id) };
    const partial = new GridDocument();
    partial.loadSnapshot(broken);
    expect(partial.getExpandedTree(instance)).toMatchObject({ id: instance, children: [] });
    expect(() => exportArtboardHTML(partial, page)).not.toThrow();
  });

  it('detaches an instance into its layers under the same id, one level down, as one undo step', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const badge = doc.createNode({ type: 'text', tag: 'span', parentId: page, text: 'New', component: true, bind: { text: 'label' } });
    const main = card(doc, page);
    doc.createNode({ type: 'frame', parentId: main.id, instance: { component: badge, props: { label: 'Hot' } } });
    const instance = doc.createNode({ type: 'frame', name: 'Loose card', parentId: page, instance: { component: main.id, props: { title: 'Mine' } }, styles: { width: '50%' } });
    const undo = new Y.UndoManager(doc.undoScope, { trackedOrigins: new Set(['local']), captureTimeout: 0 });

    expect(() => doc.updateNode(instance, { instance: null, name: 'x' })).toThrow(/on its own/);
    doc.updateNode(instance, { instance: null });
    const detached = doc.getNode(instance)!;
    expect(detached).toMatchObject({ name: 'Loose card', tag: 'article', styles: { padding: '16px', display: 'grid', width: '50%' }, states: { hover: {} } });
    expect(detached.instance).toBeUndefined();
    const [title, caption, inner] = doc.getChildren(instance);
    expect(title).toMatchObject({ tag: 'h3', text: 'Mine', breakpoints: { mobile: { fontSize: '14px' } } });
    expect(title!.bind).toBeUndefined();
    expect(caption!.text).toBe('Read more');
    expect(inner!.instance).toEqual({ component: badge, props: { label: 'Hot' } });
    // It no longer follows the component, and can be edited like any layers.
    doc.updateNode(main.title, { text: 'Changed' });
    doc.updateNode(title!.id, { text: 'Edited' });
    expect(texts(doc.getExpandedTree(instance))).toEqual(['Edited', 'Read more', 'Hot']);
    expect(() => doc.updateNode(instance, { instance: null })).toThrow(/isn't an instance/);

    undo.undo();
    undo.undo();
    undo.undo();
    expect(doc.getNode(instance)?.instance).toEqual({ component: main.id, props: { title: 'Mine' } });
    expect(doc.getDescendantIds(instance)).toEqual([]);
  });

  it('merges prop edits made at the same time by two people', () => {
    const a = new GridDocument();
    const page = artboard(a);
    const main = card(a, page);
    a.updateNode(main.caption, { bind: { text: 'cta' } });
    const instance = a.createNode({ type: 'frame', parentId: page, instance: { component: main.id } });
    const b = new GridDocument();
    Y.applyUpdate(b.ydoc, Y.encodeStateAsUpdate(a.ydoc));

    a.updateNode(instance, { props: { title: 'From A' } });
    b.updateNode(instance, { props: { cta: 'From B' } });
    Y.applyUpdate(b.ydoc, Y.encodeStateAsUpdate(a.ydoc));
    Y.applyUpdate(a.ydoc, Y.encodeStateAsUpdate(b.ydoc));
    for (const doc of [a, b]) expect(texts(doc.getExpandedTree(instance))).toEqual(['From A', 'From B']);
  });
});
