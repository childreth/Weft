import { createElement, memo, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { VOID_TAGS, type SceneNode } from '@weft/core';
import { displaySrc } from '../editor/assets';
import { doc, history, run, useChildren, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';
import { holdsSelection, isRevealable, reactAttributes } from './behaviors';
import { nodeElements } from './elements';

function registerRef(id: string) {
  return (el: HTMLElement | null) => {
    if (!el) return;
    nodeElements.set(id, el);
    return () => {
      if (nodeElements.get(id) === el) nodeElements.delete(id);
    };
  };
}

function toStyle(node: SceneNode, isRoot: boolean): CSSProperties {
  const style: CSSProperties = { ...node.styles } as CSSProperties;
  if (isRoot) {
    style.width = '100%';
    style.height = '100%';
  }
  if (node.hidden) style.display = 'none';
  return style;
}

/** Commit hook for the text node currently being edited, if any. */
export let commitActiveText: (() => void) | null = null;

function EditableText({ node, props }: { node: SceneNode; props: Record<string, unknown> }) {
  const ref = useRef<HTMLElement | null>(null);
  const register = (props.ref as (el: HTMLElement | null) => void | (() => void));

  useLayoutEffect(() => {
    const el = ref.current!;
    el.textContent = node.text ?? '';
    el.focus();
    getSelection()?.selectAllChildren(el);
    let done = false;
    const commit = () => {
      if (done) return;
      done = true;
      commitActiveText = null;
      const text = el.innerText.replace(/\n$/, '');
      if (doc.has(node.id)) {
        run(() => (text.trim() === '' ? doc.deleteNodes([node.id]) : doc.updateNode(node.id, { text })));
      }
      history.endGesture();
      useEditor.getState().setEditingText(null);
    };
    commitActiveText = commit;
    return () => {
      if (commitActiveText === commit) commitActiveText = null;
    };
    // Only on mount: the DOM owns the text while editing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(node.tag, {
    ...props,
    ref: (el: HTMLElement | null) => {
      ref.current = el;
      return register(el);
    },
    contentEditable: 'plaintext-only',
    suppressContentEditableWarning: true,
    spellCheck: false,
    onBlur: () => commitActiveText?.(),
    onKeyDown: (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === 'Escape' || (e.key === 'Enter' && !e.shiftKey)) {
        e.preventDefault();
        commitActiveText?.();
      }
    },
  });
}

export const NodeView = memo(function NodeView({ id, isRoot = false }: { id: string; isRoot?: boolean }) {
  const node = useNode(id);
  const childIds = useChildren(id);
  const editing = useEditor((s) => s.editingTextId === id);
  const preview = useEditor((s) => (s.statePreview?.id === id ? s.statePreview.state : undefined));
  // A popover, dialog or details shows its content while it or a layer inside is selected, so it can be edited.
  const revealable = !!node && isRevealable(node.tag, node.attributes);
  const revealed = useEditor((s) => revealable && holdsSelection(id, s.selection));
  if (!node) return null;

  const props: Record<string, unknown> = {
    ...reactAttributes(node.attributes),
    'data-gf-id': id,
    ...(node.theme && { 'data-theme': node.theme }),
    ...(preview && { 'data-gf-preview': preview }),
    ref: registerRef(id),
    style: toStyle(node, isRoot),
  };
  if (node.attributes.src !== undefined) props.src = displaySrc(node.attributes.src);
  if (revealed) {
    if (node.tag === 'details') props.open = true;
    else props['data-gf-open'] = '';
  }
  // The canvas handles drags itself; a dragged image would start the browser's own.
  if (node.tag === 'img') props.draggable = false;

  if (node.type === 'text') {
    // A textarea's text is its starting value; it's edited in the Inspector.
    if (node.tag === 'textarea') return createElement(node.tag, { ...props, defaultValue: node.text ?? '' });
    if (editing) return <EditableText node={node} props={props} />;
    return createElement(node.tag, props, node.text);
  }
  if (VOID_TAGS.has(node.tag)) return createElement(node.tag, props);
  return createElement(
    node.tag,
    props,
    childIds.map((childId) => <NodeView key={childId} id={childId} />),
  );
});
