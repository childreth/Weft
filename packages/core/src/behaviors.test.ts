import { describe, expect, it } from 'vitest';
import { invokerAction, invokerIssues, linkedArtboard } from './behaviors';
import { GridDocument } from './document';
import { exportArtboardHTML } from './export';
import { ARTBOARD_RESET_CSS } from './defaults';

describe('native behaviors', () => {
  it('finds the artboard a link names, by id or name', () => {
    const boards = [{ id: 'a1', name: 'Character Sheet' }, { id: 'b2', name: 'Spells' }];
    expect(linkedArtboard('#b2', boards)).toBe('b2');
    expect(linkedArtboard('#character-sheet', boards)).toBe('a1');
    expect(linkedArtboard('#SPELLS', boards)).toBe('b2');
    expect(linkedArtboard('#nope', boards)).toBeNull();
    expect(linkedArtboard('https://example.com', boards)).toBeNull();
    expect(linkedArtboard('#%E0%A4%A', boards)).toBeNull();
  });

  it('reads what an invoker does', () => {
    expect(invokerAction({ popovertarget: 'menu' })).toEqual({ target: 'menu', action: 'toggle-popover' });
    expect(invokerAction({ popovertarget: 'menu', popovertargetaction: 'hide' })).toEqual({ target: 'menu', action: 'hide-popover' });
    expect(invokerAction({ commandfor: 'confirm', command: 'show-modal' })).toEqual({ target: 'confirm', action: 'show-modal' });
    expect(invokerAction({ commandfor: 'confirm', command: 'explode' })).toBeNull();
    expect(invokerAction({ type: 'button' })).toBeNull();
  });

  it('flags invokers that point nowhere or at the wrong kind of layer', () => {
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', frame: { x: 0, y: 0, width: 400, height: 300 } });
    doc.createNode({ type: 'frame', parentId: board, attributes: { popover: '', id: 'menu' } });
    doc.createNode({ type: 'frame', tag: 'dialog', parentId: board, attributes: { id: 'confirm' } });
    doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Menu', text: 'Menu', attributes: { popovertarget: 'menu' } });
    doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Delete', text: 'Delete', attributes: { commandfor: 'confirm', command: 'show-modal' } });
    const nodes = () => doc.getNodes();
    expect(invokerIssues(nodes())).toEqual([]);
    doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Help', text: '?', attributes: { popovertarget: 'help' } });
    doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Wrong', text: 'x', attributes: { commandfor: 'menu', command: 'show-modal' } });
    doc.createNode({ type: 'text', tag: 'span', parentId: board, name: 'Span', text: 'x', attributes: { popovertarget: 'menu' } });
    doc.createNode({ type: 'text', tag: 'button', parentId: board, name: 'Typo', text: 'x', attributes: { commandfor: 'confirm', command: 'open' } });
    const issues = invokerIssues(nodes());
    expect(issues).toHaveLength(4);
    expect(issues[0]).toContain('no layer in this artboard has attributes.id "help"');
    expect(issues[1]).toContain('"show-modal" needs a dialog');
    expect(issues[2]).toContain('only a button can be an invoker');
    expect(issues[3]).toContain('command "open" isn\'t one of');
  });

  it('allows the native tags and exports them with their attributes and the hiding rules', () => {
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', frame: { x: 0, y: 0, width: 400, height: 300 } });
    const details = doc.createNode({ type: 'frame', tag: 'details', parentId: board, attributes: { name: 'faq', open: '' } });
    doc.createNode({ type: 'text', tag: 'summary', parentId: details, text: 'Question' });
    const select = doc.createNode({ type: 'frame', tag: 'select', parentId: board });
    doc.createNode({ type: 'text', tag: 'option', parentId: select, text: 'One', attributes: { value: '1' } });
    doc.createNode({ type: 'text', tag: 'textarea', parentId: board, text: 'Hello', attributes: { rows: '3' } });
    doc.createNode({ type: 'frame', parentId: board, attributes: { popover: '', id: 'menu' }, styles: { display: 'flex' } });
    const html = exportArtboardHTML(doc, board);
    expect(html).toMatch(/<details [^>]*name="faq" open="">/);
    expect(html).toMatch(/<option [^>]*value="1">One<\/option>/);
    expect(html).toMatch(/<textarea [^>]*rows="3">Hello<\/textarea>/);
    // A popover styled display:flex still hides until it's open.
    expect(ARTBOARD_RESET_CSS).toContain('[popover]:not(:popover-open):not([data-gf-open]), dialog:not([open]):not([data-gf-open]) { display: none !important; }');
    expect(html).toContain(':not(:popover-open)');
  });
});
