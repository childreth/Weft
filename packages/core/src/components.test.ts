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

    expect(() => doc.deleteNodes([main.id])).toThrow(/"Card" is a component with an instance elsewhere \(on Page\): delete or detach it first/);
    // Deleting what holds it says so by name: a person may not know a component sits layers deep in an artboard.
    expect(() => doc.deleteNodes([library])).toThrow('"Components" holds the component "Card", which has an instance elsewhere (on Page). Move the component to another artboard, or delete or detach it first');
    const shelf = doc.createNode({ type: 'frame', parentId: library, name: 'Shelf' });
    doc.moveNode(main.id, shelf);
    expect(() => doc.deleteNodes([library])).toThrow('holds the component "Card" (inside Shelf), which has an instance elsewhere (on Page)');
    doc.moveNode(main.id, library);
    doc.deleteNodes([shelf]);
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

describe('turning existing layers into instances', () => {
  /** A list of rows built by hand, each a name and a status, the way a design repeats something before it has components. */
  function rows(doc: GridDocument) {
    const page = artboard(doc);
    const list = doc.createNode({ type: 'frame', tag: 'ul', parentId: page, name: 'List' });
    const row = (name: string, status: string, styles: Record<string, string> = {}) => {
      const id = doc.createNode({ type: 'frame', tag: 'li', parentId: list, name, styles: { display: 'grid', padding: '8px', ...styles } });
      const title = doc.createNode({ type: 'text', tag: 'span', parentId: id, text: name, name: 'Name' });
      const state = doc.createNode({ type: 'text', tag: 'span', parentId: id, text: status, name: 'Status' });
      return { id, title, state };
    };
    return { page, list, vex: row('Vex', 'Ready'), boss: row('Goblin Boss', 'Acting now', { backgroundColor: 'var(--color-primary-container)' }), wolf: row('Wolf', 'Ready') };
  }

  it('converts a look-alike in place: same id and position, its text as props, its own root styles kept', () => {
    const doc = new GridDocument();
    const { list, vex, boss, wolf } = rows(doc);
    doc.updateNode(vex.id, { component: true });
    doc.updateNode(vex.title, { bind: { text: 'name' } });
    doc.updateNode(vex.state, { bind: { text: 'status' } });

    const match = doc.convertToInstance(boss.id, { component: vex.id });
    expect(match).toEqual({ props: { name: 'Goblin Boss', status: 'Acting now' }, defaulted: [], droppedText: [], changedLayers: [], addedAttributes: [] });
    // One node where three were, still second in the list.
    expect(doc.getChildren(list).map((n) => n.id)).toEqual([vex.id, boss.id, wolf.id]);
    expect(doc.getDescendantIds(boss.id)).toEqual([]);
    expect(doc.has(boss.title)).toBe(false);
    // Only what differed from the component's root stays on the instance, so it follows the component and keeps its highlight.
    expect(doc.getNode(boss.id)).toMatchObject({ name: 'Goblin Boss', styles: { backgroundColor: 'var(--color-primary-container)' }, instance: { component: vex.id } });
    expect(doc.getNode(boss.id)!.styles).not.toHaveProperty('padding');
    const drawn = doc.getExpandedTree(boss.id);
    expect(drawn).toMatchObject({ tag: 'li', styles: { display: 'grid', padding: '8px', backgroundColor: 'var(--color-primary-container)' } });
    expect(texts(drawn)).toEqual(['Goblin Boss', 'Acting now']);

    // Text equal to the component's isn't stored: that instance follows the component's default. Through updateNode too.
    doc.updateNode(wolf.id, { instance: { component: vex.id }, styles: { opacity: '0.5' } });
    expect(doc.getNode(wolf.id)).toMatchObject({ instance: { component: vex.id, props: { name: 'Wolf' } }, styles: { opacity: '0.5' } });
    doc.updateNode(vex.state, { text: 'Waiting' });
    expect(texts(doc.getExpandedTree(wolf.id))).toEqual(['Wolf', 'Waiting']);
    expect(texts(doc.getExpandedTree(boss.id))).toEqual(['Goblin Boss', 'Acting now']);
  });

  it('says what a conversion loses, and what a differently built layer would get wrong', () => {
    const doc = new GridDocument();
    const { vex, boss, wolf } = rows(doc);
    doc.updateNode(vex.id, { component: true });
    doc.updateNode(vex.title, { bind: { text: 'name' } });
    // Status isn't a prop, a chip has no counterpart, and one inner layer is restyled.
    const chip = doc.createNode({ type: 'frame', parentId: boss.id, name: 'Chips' });
    doc.createNode({ type: 'text', tag: 'span', parentId: chip, text: 'Frightened' });
    doc.updateNode(boss.title, { styles: { fontWeight: '700' } });
    const match = doc.convertToInstance(boss.id, { component: vex.id });
    expect(match.props).toEqual({ name: 'Goblin Boss' });
    expect(match.droppedText).toEqual(['Acting now', 'Frightened']);
    expect(match.changedLayers).toEqual(['Name', 'Chips']);

    // Built differently (the name is wrapped): nothing supplies the prop, unless it's passed.
    const odd = doc.createNode({ type: 'frame', tag: 'li', parentId: doc.getNode(wolf.id)!.parentId!, name: 'Odd' });
    const wrap = doc.createNode({ type: 'frame', parentId: odd, name: 'Wrap' });
    doc.createNode({ type: 'text', parentId: wrap, text: 'Mirelle' });
    expect(doc.convertToInstance(odd, { component: vex.id }, 'test')).toMatchObject({ defaulted: ['name'], droppedText: ['Mirelle'] });
    const again = doc.createNode({ type: 'frame', tag: 'li', parentId: doc.getNode(wolf.id)!.parentId!, name: 'Odd 2' });
    expect(doc.convertToInstance(again, { component: vex.id, props: { name: 'Mirelle' } })).toMatchObject({ props: { name: 'Mirelle' }, defaulted: [] });
  });

  it("refuses what can't become an instance", () => {
    const doc = new GridDocument();
    const { page, list, vex, boss, wolf } = rows(doc);
    doc.updateNode(vex.id, { component: true });
    doc.updateNode(vex.title, { bind: { text: 'name' } });
    expect(() => doc.convertToInstance(vex.id, { component: vex.id })).toThrow(/it is the one the others become instances of/);
    expect(() => doc.convertToInstance(page, { component: vex.id })).toThrow(/artboard can't be an instance/);
    expect(() => doc.convertToInstance(boss.id, { component: wolf.id })).toThrow(/isn't a component/);
    expect(() => doc.convertToInstance(boss.id, { component: vex.id, props: { nope: 'x' } })).toThrow(/has no prop "nope"/);
    expect(() => doc.convertToInstance(list, { component: vex.id })).toThrow(/holds the component "Vex"/);
    expect(() => doc.convertToInstance(vex.state, { component: vex.id })).toThrow(/would contain itself/);
    expect(() => doc.updateNode(boss.id, { instance: { component: vex.id }, text: 'x' })).toThrow(/takes its text from its component/);
    doc.convertToInstance(boss.id, { component: vex.id });
    expect(() => doc.convertToInstance(boss.id, { component: vex.id })).toThrow(/already an instance/);
    // Nothing above changed what was refused.
    expect(doc.getDescendantIds(wolf.id)).toHaveLength(2);
  });

  it('undoes as one step and reaches another editor whole', () => {
    const a = new GridDocument();
    const b = new GridDocument();
    const { vex, boss } = rows(a);
    a.updateNode(vex.id, { component: true });
    a.updateNode(vex.title, { bind: { text: 'name' } });
    Y.applyUpdate(b.ydoc, Y.encodeStateAsUpdate(a.ydoc));
    const undo = new Y.UndoManager(a.ydoc.getMap('nodes'), { trackedOrigins: new Set(['me']) });
    a.convertToInstance(boss.id, { component: vex.id }, 'me');
    Y.applyUpdate(b.ydoc, Y.encodeStateAsUpdate(a.ydoc));
    expect(texts(b.getExpandedTree(boss.id))).toEqual(['Goblin Boss', 'Ready']);
    undo.undo();
    expect(a.getNode(boss.id)!.instance).toBeUndefined();
    expect(a.getChildren(boss.id).map((n) => [n.id, n.text])).toEqual([
      [boss.title, 'Goblin Boss'],
      [boss.state, 'Acting now'],
    ]);
    expect(a.getNode(boss.id)).toMatchObject({ tag: 'li', styles: { padding: '8px', backgroundColor: 'var(--color-primary-container)' } });
  });
});

describe('style props', () => {
  /** A week's volume chart: each day a column holding a bar, whose height and color differ by day, and a label. */
  function chart(doc: GridDocument) {
    const page = artboard(doc);
    const list = doc.createNode({ type: 'frame', parentId: page, name: 'Chart', styles: { display: 'flex', gap: '8px' } });
    const day = (label: string, height: string, color: string, rootStyles: Record<string, string> = {}) => {
      const id = doc.createNode({ type: 'frame', parentId: list, name: label, styles: { display: 'flex', flexDirection: 'column', ...rootStyles } });
      const bar = doc.createNode({ type: 'frame', parentId: id, name: 'Bar', styles: { width: '100%', borderRadius: '12px', height, backgroundColor: color } });
      const text = doc.createNode({ type: 'text', tag: 'span', parentId: id, name: 'Label', text: label });
      return { id, bar, text };
    };
    return {
      page,
      list,
      mon: day('M', '4px', 'var(--color-surface-container)'),
      tue: day('T', '40px', 'var(--color-primary)'),
      thu: day('T', '33px', 'var(--color-tertiary)', { opacity: '0.9' }),
    };
  }

  it('lets an instance set a bound style through a prop, with the component value as the default', () => {
    const doc = new GridDocument();
    const { list, mon } = chart(doc);
    doc.updateNode(mon.id, { component: true, name: 'Day' });
    doc.updateNode(mon.bar, { bind: { styles: { height: 'barHeight', backgroundColor: 'barColor' } } });
    doc.updateNode(mon.text, { bind: { text: 'label' } });
    expect(doc.getComponents()).toEqual([
      {
        id: mon.id,
        name: 'Day',
        props: { barHeight: '4px', barColor: 'var(--color-surface-container)', label: 'M' },
        styleProps: { barHeight: ['height'], barColor: ['backgroundColor'] },
        instances: 0,
      },
    ]);

    const wed = doc.createNode({ type: 'frame', parentId: list, name: 'Wed', instance: { component: mon.id, props: { label: 'W', barHeight: '53px' } } });
    const bar = doc.getExpandedTree(wed).children[0]!;
    // Its own height, the component's color, and nothing else changed.
    expect(bar.styles).toEqual({ width: '100%', borderRadius: '12px', height: '53px', backgroundColor: 'var(--color-surface-container)' });
    // '' goes back to the component's; the component's own changes still reach it.
    doc.updateNode(wed, { props: { barHeight: '' } });
    doc.updateNode(mon.bar, { styles: { height: '6px', borderRadius: '4px' } });
    expect(doc.getExpandedTree(wed).children[0]!.styles).toMatchObject({ height: '6px', borderRadius: '4px' });
    // It exports like any other style.
    doc.updateNode(wed, { props: { barHeight: '53px' } });
    expect(exportArtboardHTML(doc, doc.getNode(list)!.parentId!)).toContain('height: 53px');
  });

  it('checks a style prop value like the style it sets, when it is set and when it is drawn', () => {
    const doc = new GridDocument();
    const { list, mon } = chart(doc);
    doc.updateNode(mon.id, { component: true, name: 'Day' });
    doc.updateNode(mon.text, { bind: { text: 'label' } });
    doc.updateNode(mon.bar, { bind: { styles: { backgroundColor: 'barColor' } } });
    // Bindings name real style properties and camelCase props.
    expect(() => doc.updateNode(mon.bar, { bind: { styles: { colour: 'tone' } } })).toThrow(/Can't bind style "colour"/);
    expect(() => doc.updateNode(mon.bar, { bind: { styles: { color: 'bar_tone' } } })).toThrow(/Use "barTone"/);
    // A value has to be a valid value for what it sets.
    expect(() => doc.createNode({ type: 'frame', parentId: list, instance: { component: mon.id, props: { barColor: 'url(https://example.com/x.png)' } } })).toThrow(
      /Prop "barColor" sets backgroundColor: Style "backgroundColor" can't load external resources/,
    );
    expect(() => doc.createNode({ type: 'frame', parentId: list, instance: { component: mon.id, props: { barColor: 'red; display: none' } } })).toThrow(/forbidden characters/);
    // A value that was fine as text is never drawn as a style it isn't safe for, if the component later binds it to one.
    const row = doc.createNode({ type: 'frame', parentId: list, instance: { component: mon.id, props: { label: 'url(https://example.com/x.png)' } } });
    doc.updateNode(mon.bar, { bind: { styles: { backgroundImage: 'label' } } });
    expect(doc.getExpandedTree(row).children[0]!.styles).not.toHaveProperty('backgroundImage');
    // Removing one binding keeps the rest; null for styles removes them all.
    doc.updateNode(mon.bar, { bind: { styles: { backgroundImage: null } } });
    expect(doc.getNode(mon.bar)!.bind).toEqual({ styles: { backgroundColor: 'barColor' } });
    doc.updateNode(mon.bar, { bind: { styles: null } });
    expect(doc.getNode(mon.bar)!.bind).toBeUndefined();
  });

  it('reads bound styles into props when a look-alike is converted, instead of reporting them as changes', () => {
    const doc = new GridDocument();
    const { page, mon, tue, thu } = chart(doc);
    doc.updateNode(mon.id, { component: true, name: 'Day' });
    doc.updateNode(mon.bar, { bind: { styles: { height: 'barHeight', backgroundColor: 'barColor' } } });
    doc.updateNode(mon.text, { bind: { text: 'label' } });
    const before = exportArtboardHTML(doc, page).replace(/ data-gf-(id|src)="[^"]*"/g, '');

    expect(doc.convertToInstance(tue.id, { component: mon.id })).toEqual({
      props: { barHeight: '40px', barColor: 'var(--color-primary)', label: 'T' },
      defaulted: [],
      droppedText: [],
      changedLayers: [],
      addedAttributes: [],
    });
    // Its root keeps its own opacity; the bar's look comes through the props.
    expect(doc.convertToInstance(thu.id, { component: mon.id }).changedLayers).toEqual([]);
    expect(doc.getNode(thu.id)!.styles).toEqual({ opacity: '0.9' });
    expect(exportArtboardHTML(doc, page).replace(/ data-gf-(id|src)="[^"]*"/g, '')).toBe(before);

    // A style that isn't bound, or a bound one the layer doesn't set, still counts as a change, never as wrong content.
    const fri = doc.createNode({ type: 'frame', parentId: doc.getNode(mon.id)!.parentId!, name: 'F', styles: { display: 'flex', flexDirection: 'column' } });
    doc.createNode({ type: 'frame', parentId: fri, name: 'Bar', styles: { width: '100%', borderRadius: '2px', height: '20px' } });
    doc.createNode({ type: 'text', tag: 'span', parentId: fri, name: 'Label', text: 'F' });
    const match = doc.convertToInstance(fri, { component: mon.id });
    expect(match).toMatchObject({ props: { barHeight: '20px', label: 'F' }, defaulted: [], changedLayers: ['Bar'] });
  });

  it('binds a style on the component itself: an instance root takes it from the prop, and conversion moves it there', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const nav = doc.createNode({ type: 'frame', tag: 'nav', parentId: page, name: 'Tabs' });
    const tab = (label: string, styles: Record<string, string>) => {
      const id = doc.createNode({ type: 'frame', tag: 'a', parentId: nav, name: label, styles: { display: 'flex', color: 'var(--color-on-surface-variant)', ...styles }, attributes: { href: `#${label.toLowerCase()}` } });
      doc.createNode({ type: 'text', tag: 'span', parentId: id, name: 'Text', text: label });
      return id;
    };
    const week = tab('Week', { color: 'var(--color-primary)' });
    const plan = tab('Plan', {});
    doc.updateNode(plan, { component: true, bind: { styles: { color: 'tone' } } });
    doc.updateNode(doc.getChildren(plan)[0]!.id, { bind: { text: 'label' } });

    expect(doc.convertToInstance(week, { component: plan }).props).toEqual({ tone: 'var(--color-primary)', label: 'Week' });
    // The color went into the prop, not the root's own styles, where it would hide the prop.
    expect(doc.getNode(week)!.styles).toEqual({});
    expect(doc.getNode(week)!.attributes).toEqual({ href: '#week' });
    expect(doc.getExpandedTree(week).styles).toMatchObject({ color: 'var(--color-primary)' });
    // A root style of its own still wins over the prop: it places the instance.
    doc.updateNode(week, { styles: { color: 'var(--color-error)' } });
    expect(doc.getExpandedTree(week).styles.color).toBe('var(--color-error)');
  });

  it('survives a save, a copy and a detach', () => {
    const doc = new GridDocument();
    const { list, mon } = chart(doc);
    doc.updateNode(mon.id, { component: true, name: 'Day' });
    doc.updateNode(mon.bar, { bind: { styles: { height: 'barHeight' } } });
    const wed = doc.createNode({ type: 'frame', parentId: list, instance: { component: mon.id, props: { barHeight: '53px' } } });

    const reopened = new GridDocument();
    reopened.loadSnapshot(doc.toSnapshot());
    expect(reopened.getNode(mon.bar)!.bind).toEqual({ styles: { height: 'barHeight' } });
    expect(reopened.getExpandedTree(wed).children[0]!.styles.height).toBe('53px');

    // A copy of the component is an instance of it, showing the component's value.
    const copy = doc.duplicateNode(mon.id);
    expect(doc.getNode(copy)!.instance).toEqual({ component: mon.id, props: {} });
    expect(doc.getExpandedTree(copy).children[0]!.styles.height).toBe('4px');

    // Detached, it keeps the look the prop gave it, as ordinary styles.
    doc.updateNode(wed, { instance: null });
    const bar = doc.getChildren(wed)[0]!;
    expect(bar.styles.height).toBe('53px');
    expect(bar.bind).toBeUndefined();
  });
});

describe('attribute props', () => {
  /** A tab bar: four links, the first one the current page. */
  function tabs(doc: GridDocument) {
    const page = artboard(doc);
    const nav = doc.createNode({ type: 'frame', tag: 'nav', parentId: page, name: 'Tab bar', styles: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' } });
    const tab = (label: string, current: boolean) => {
      const id = doc.createNode({
        type: 'frame',
        tag: 'a',
        parentId: nav,
        name: `${label} tab`,
        styles: { color: current ? 'var(--color-primary)' : 'var(--color-on-surface-variant)' },
        attributes: { href: `#${label.toLowerCase()}`, ...(current && { 'aria-current': 'page' }) },
      });
      const icon = doc.createNode({ type: 'text', tag: 'span', parentId: id, name: 'Icon', text: label.toLowerCase(), attributes: { 'aria-hidden': 'true' } });
      const text = doc.createNode({ type: 'text', tag: 'span', parentId: id, name: 'Label', text: label });
      return { id, icon, text };
    };
    return { page, nav, week: tab('Week', true), plan: tab('Plan', false), log: tab('Log', false) };
  }
  const drawn = (doc: GridDocument, id: string) => doc.getExpandedTree(id).attributes;

  it('reports an attribute the component has and a converted layer did not, which an unbound component gives every instance', () => {
    const doc = new GridDocument();
    const { week, plan } = tabs(doc);
    doc.updateNode(week.id, { component: true, bind: { styles: { color: 'tabColor' } } });
    doc.updateNode(week.icon, { bind: { text: 'icon' } });
    doc.updateNode(week.text, { bind: { text: 'label' } });
    const match = doc.convertToInstance(plan.id, { component: week.id });
    expect(match.addedAttributes).toEqual(['aria-current="page"']);
    // This is the bug the report exists for: Plan now says it's the current page.
    expect(drawn(doc, plan.id)).toEqual({ href: '#plan', 'aria-current': 'page' });
  });

  it('carries a bound attribute into the props when converting, and leaves it off where the layer had none', () => {
    const doc = new GridDocument();
    const { page, week, plan, log } = tabs(doc);
    doc.updateNode(week.id, { component: true, name: 'Tab', bind: { styles: { color: 'tabColor' }, attributes: { 'aria-current': 'current' } } });
    doc.updateNode(week.icon, { bind: { text: 'icon' } });
    doc.updateNode(week.text, { bind: { text: 'label' } });
    expect(doc.getComponents()[0]).toMatchObject({ props: { current: 'page' }, attributeProps: { current: ['aria-current'] } });
    // Converted layers are drawn from the component's, so they're marked by where they come from instead of by id.
    const page_ = () => exportArtboardHTML(doc, page).replace(/ data-gf-(id|src)="[^"]*"/g, '');
    const before = page_();

    for (const tab of [plan, log]) {
      const match = doc.convertToInstance(tab.id, { component: week.id });
      expect(match).toMatchObject({ addedAttributes: [], changedLayers: [], droppedText: [] });
      expect(match.props.current).toBe('');
    }
    expect(drawn(doc, plan.id)).toEqual({ href: '#plan' });
    expect(drawn(doc, week.id)).toEqual({ href: '#week', 'aria-current': 'page' });
    // Nothing about the page changed, and only one tab is current.
    const after = page_();
    expect(after).toBe(before);
    expect(after.match(/aria-current/g)).toHaveLength(1);

    // Making another tab current is a prop.
    doc.updateNode(plan.id, { props: { current: 'page' } });
    doc.updateNode(week.id, { attributes: { 'aria-current': null } });
    expect(drawn(doc, plan.id)['aria-current']).toBe('page');
    expect(drawn(doc, log.id)['aria-current']).toBeUndefined();
  });

  it('binds attributes inside a component, and reads them when converting', () => {
    const doc = new GridDocument();
    const { week, plan } = tabs(doc);
    doc.updateNode(plan.icon, { attributes: { 'aria-hidden': null, 'aria-label': 'Plan icon' } });
    doc.updateNode(week.id, { component: true, bind: { styles: { color: 'tabColor' }, attributes: { 'aria-current': 'current' } } });
    doc.updateNode(week.icon, { bind: { text: 'icon', attributes: { 'aria-hidden': 'iconHidden', 'aria-label': 'iconLabel' } } });
    doc.updateNode(week.text, { bind: { text: 'label' } });
    const match = doc.convertToInstance(plan.id, { component: week.id });
    expect(match.changedLayers).toEqual([]);
    expect(match.props).toMatchObject({ iconHidden: '', iconLabel: 'Plan icon' });
    expect(doc.getExpandedTree(plan.id).children[0]!.attributes).toEqual({ 'aria-label': 'Plan icon' });
  });

  it('turns boolean attributes on and off', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const button = doc.createNode({ type: 'text', tag: 'button', parentId: page, name: 'Button', text: 'Save', component: true, bind: { text: 'label', attributes: { disabled: 'disabled' } } });
    const faq = doc.createNode({ type: 'frame', tag: 'details', parentId: page, name: 'FAQ', component: true, attributes: { open: '' }, bind: { attributes: { open: 'open' } } });
    doc.createNode({ type: 'text', tag: 'summary', parentId: faq, name: 'Question', text: 'Why?' });
    // Off by default here, on by default there: an "on" boolean reads as its own name, not as '' (off).
    expect(doc.getComponents().map((c) => c.props)).toEqual([
      { label: 'Save', disabled: '' },
      { open: 'open' },
    ]);
    const off = doc.createNode({ type: 'frame', parentId: page, name: 'Off', instance: { component: button, props: { disabled: 'disabled' } } });
    expect(drawn(doc, off)).toEqual({ disabled: '' });
    const closed = doc.createNode({ type: 'frame', parentId: page, name: 'Closed', instance: { component: faq, props: { open: '' } } });
    expect(drawn(doc, closed)).toEqual({});
    const open = doc.createNode({ type: 'frame', parentId: page, name: 'Open', instance: { component: faq } });
    expect(drawn(doc, open)).toEqual({ open: '' });
  });

  it('checks bindings and values when set, and values again when drawn', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const link = doc.createNode({ type: 'text', tag: 'a', parentId: page, name: 'Link', text: 'Go', component: true, attributes: { href: '#a' } });
    expect(() => doc.updateNode(link, { bind: { attributes: { onclick: 'handler' } } })).toThrow(/Event handler attributes are not allowed/);
    expect(() => doc.updateNode(link, { bind: { attributes: { src: 'image' } } })).toThrow(/an image can't be a prop yet/);
    expect(() => doc.updateNode(link, { bind: { attributes: { href: 'link-url' } } })).toThrow(/camelCase.*"linkUrl"/);

    doc.updateNode(link, { bind: { text: 'label', attributes: { href: 'url' } } });
    expect(() => doc.createNode({ type: 'frame', parentId: page, name: 'Bad', instance: { component: link, props: { url: 'javascript:alert(1)' } } })).toThrow(/Prop "url" sets href: Unsafe URL/);

    // A text prop may hold anything; rebinding it to href later must not make it a link.
    doc.updateNode(link, { bind: { attributes: null } });
    const sneaky = doc.createNode({ type: 'frame', parentId: page, name: 'Sneaky', instance: { component: link, props: { label: 'javascript:alert(1)' } } });
    doc.updateNode(link, { bind: { attributes: { href: 'label' } } });
    expect(drawn(doc, sneaky)).toEqual({ href: '#a' });
  });

  it('keeps attribute bindings through copy, save and detach', () => {
    const doc = new GridDocument();
    const { week, plan } = tabs(doc);
    doc.updateNode(week.id, { component: true, bind: { styles: { color: 'tabColor' }, attributes: { 'aria-current': 'current' } } });
    doc.updateNode(week.icon, { bind: { text: 'icon' } });
    doc.updateNode(week.text, { bind: { text: 'label' } });
    doc.convertToInstance(plan.id, { component: week.id });

    const copy = new GridDocument();
    Y.applyUpdate(copy.ydoc, Y.encodeStateAsUpdate(doc.ydoc));
    expect(copy.getNode(week.id)!.bind).toEqual({ styles: { color: 'tabColor' }, attributes: { 'aria-current': 'current' } });
    const twin = doc.duplicateNode(plan.id);
    expect(drawn(doc, twin)['aria-current']).toBeUndefined();

    doc.updateNode(plan.id, { instance: null });
    expect(doc.getNode(plan.id)!.attributes).toEqual({ href: '#plan' });
  });
});
