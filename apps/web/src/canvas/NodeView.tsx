import { createElement, memo, useLayoutEffect, useRef, type CSSProperties } from 'react';
import { VOID_TAGS, type SceneNode } from '@gridforge/core';
import { doc, history, run, useChildren, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';
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
  if (!node) return null;

  const props: Record<string, unknown> = {
    ...node.attributes,
    'data-gf-id': id,
    ref: registerRef(id),
    style: toStyle(node, isRoot),
  };

  if (node.type === 'text') {
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
