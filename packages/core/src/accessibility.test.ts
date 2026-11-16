import { describe, expect, it } from 'vitest';
import { GridDocument } from './document';
import { accessibilityIssues } from './accessibility';

const artboard = (doc: GridDocument) => doc.createNode({ type: 'frame', tag: 'main', name: 'Page', frame: { x: 0, y: 0, width: 390, height: 800 } });
const check = (doc: GridDocument, page: string) => accessibilityIssues(doc.getExpandedTree(page));
const icon = (doc: GridDocument, parentId: string, name: string, hidden = true) =>
  doc.createNode({ type: 'text', tag: 'span', parentId, name: 'Icon', text: name, styles: { fontFamily: 'var(--font-family-material-symbols-outlined)' }, attributes: hidden ? { 'aria-hidden': 'true' } : {} });

describe('accessibility checks', () => {
  function tabBar(doc: GridDocument, page: string, currents: boolean[]) {
    const nav = doc.createNode({ type: 'frame', tag: 'nav', parentId: page, name: 'Tab bar' });
    return currents.map((current, i) => {
      const id = doc.createNode({ type: 'frame', tag: 'a', parentId: nav, name: `Tab ${i + 1}`, attributes: { href: `#${i}`, ...(current && { 'aria-current': 'page' }) } });
      icon(doc, id, 'home');
      doc.createNode({ type: 'text', tag: 'span', parentId: id, name: 'Label', text: `Tab ${i + 1}` });
      return id;
    });
  }

  it('finds two current items in one group, but not one in each of two groups', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const tabs = tabBar(doc, page, [true, true, false]);
    const issues = check(doc, page);
    expect(issues).toHaveLength(1);
    expect(issues[0]).toMatchObject({ rule: 'aria-current', ids: [tabs[0], tabs[1]] });
    expect(issues[0]!.message).toContain('2 layers in one group say aria-current="page" (Tab 1, Tab 2)');

    // A header nav and a footer nav each marking the page is fine; so is a calendar's today beside it.
    const ok = new GridDocument();
    const p = artboard(ok);
    tabBar(ok, p, [true, false]);
    tabBar(ok, p, [true, false]);
    doc.createNode({ type: 'text', tag: 'span', parentId: page, name: 'Today', text: '14', attributes: { 'aria-current': 'date' } });
    expect(check(ok, p)).toEqual([]);
  });

  it('points at the component when instances repeat its aria-current, and goes quiet once it is a prop', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const [week, plan, log] = tabBar(doc, page, [true, false, false]);
    doc.updateNode(week!, { component: true, name: 'Tab' });
    doc.convertToInstance(plan!, { component: week! });
    doc.convertToInstance(log!, { component: week! });
    const [issue] = check(doc, page);
    expect(issue).toMatchObject({ rule: 'aria-current', ids: [week, plan, log] });
    expect(issue!.message).toContain("if it isn't a prop yet, bind it");

    doc.updateNode(week!, { bind: { attributes: { 'aria-current': 'current' } } });
    doc.updateNode(plan!, { props: { current: '' } });
    doc.updateNode(log!, { props: { current: '' } });
    expect(check(doc, page)).toEqual([]);
  });

  it('finds buttons and links with no name, counting words and labels but not icon names', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const search = doc.createNode({ type: 'frame', tag: 'button', parentId: page, name: 'Search button' });
    icon(doc, search, 'search');
    const shown = doc.createNode({ type: 'frame', tag: 'button', parentId: page, name: 'Menu button' });
    icon(doc, shown, 'menu', false);
    const named = doc.createNode({ type: 'frame', tag: 'button', parentId: page, name: 'Close', attributes: { 'aria-label': 'Close' } });
    icon(doc, named, 'close');
    doc.createNode({ type: 'text', tag: 'button', parentId: page, name: 'Save', text: 'Save' });
    doc.createNode({ type: 'frame', tag: 'a', parentId: page, name: 'Anchor' }); // no href: not a link
    const picture = doc.createNode({ type: 'frame', tag: 'a', parentId: page, name: 'Logo link', attributes: { href: '/' } });
    doc.createNode({ type: 'frame', tag: 'img', parentId: picture, name: 'Logo', attributes: { src: 'data:image/png;base64,iVBORw0KGgo=', alt: 'Weft home' } });

    const issues = check(doc, page);
    expect(issues.map((i) => [i.rule, i.ids[0]])).toEqual([
      ['name', search],
      ['name', shown],
    ]);
    expect(issues[1]!.message).toContain("an icon's text is its ligature name");
  });

  it('finds fields with no label, and says why a placeholder is not one', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const bare = doc.createNode({ type: 'frame', tag: 'input', parentId: page, name: 'Email', attributes: { placeholder: 'Email' } });
    const wrap = doc.createNode({ type: 'frame', tag: 'label', parentId: page, name: 'Name field' });
    doc.createNode({ type: 'text', tag: 'span', parentId: wrap, name: 'Text', text: 'Name' });
    doc.createNode({ type: 'frame', tag: 'input', parentId: wrap, name: 'Name' });
    doc.createNode({ type: 'text', tag: 'label', parentId: page, name: 'Notes label', text: 'Notes', attributes: { for: 'notes' } });
    doc.createNode({ type: 'text', tag: 'textarea', parentId: page, name: 'Notes', text: '', attributes: { id: 'notes' } });
    doc.createNode({ type: 'frame', tag: 'input', parentId: page, name: 'Send', attributes: { type: 'submit', value: 'Send' } });
    const issues = check(doc, page);
    expect(issues).toHaveLength(1);
    expect(issues[0]).toMatchObject({ rule: 'label', ids: [bare] });
    expect(issues[0]!.message).toContain("a placeholder disappears");
  });

  it('finds headings that skip a level, and repeated ids, including ones a component repeats', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    doc.createNode({ type: 'text', tag: 'h1', parentId: page, name: 'Title', text: 'Week' });
    const skip = doc.createNode({ type: 'text', tag: 'h3', parentId: page, name: 'Section', text: 'Runs' });
    doc.createNode({ type: 'text', tag: 'h2', parentId: page, name: 'Back up', text: 'Plan' });
    doc.createNode({ type: 'text', tag: 'h3', parentId: page, name: 'Fine', text: 'Long run' });
    const card = doc.createNode({ type: 'frame', tag: 'article', parentId: page, name: 'Card', component: true, attributes: { id: 'card' } });
    doc.createNode({ type: 'text', tag: 'h4', parentId: card, name: 'Card title', text: 'Tempo' });
    const twin = doc.createNode({ type: 'frame', parentId: page, name: 'Card 2', instance: { component: card } });

    const issues = check(doc, page);
    expect(issues.map((i) => i.rule)).toEqual(['heading-order', 'duplicate-id']);
    expect(issues[0]).toMatchObject({ ids: [skip] });
    expect(issues[0]!.message).toContain('an h3 straight after an h1 (Title) skips a level. Use h2');
    expect(issues[1]).toMatchObject({ ids: [card, twin] });
    expect(issues[1]!.message).toContain('bind id to a prop');
  });

  it('names a layer drawn for an instance by the instance, and skips hidden layers', () => {
    const doc = new GridDocument();
    const page = artboard(doc);
    const main = doc.createNode({ type: 'frame', tag: 'div', parentId: page, name: 'Toolbar', component: true });
    const button = doc.createNode({ type: 'frame', tag: 'button', parentId: main, name: 'Icon button', attributes: { 'aria-label': 'Search' } });
    icon(doc, button, 'search');
    doc.updateNode(button, { bind: { attributes: { 'aria-label': 'buttonLabel' } } });
    const copy = doc.createNode({ type: 'frame', parentId: page, name: 'Toolbar 2', instance: { component: main, props: { buttonLabel: '' } } });
    const gone = doc.createNode({ type: 'frame', tag: 'button', parentId: page, name: 'Hidden' });
    doc.updateNode(gone, { hidden: true });
    const issues = check(doc, page);
    expect(issues).toHaveLength(1);
    expect(issues[0]).toMatchObject({ rule: 'name', ids: [copy, button] });
    expect(issues[0]!.message).toMatch(/^Icon button in Toolbar 2: /);
  });
});
