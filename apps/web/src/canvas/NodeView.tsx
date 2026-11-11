import { createElement, memo, useLayoutEffect, useMemo, useRef, useSyncExternalStore, type CSSProperties, type ReactElement } from 'react';
import { VOID_TAGS, instanceTree, type SceneLookup, type SceneNode, type SceneTree } from '@weft/core';
import { displaySrc } from '../editor/assets';
import { doc, history, run, scene, useChildren, useNode } from '../editor/editor';
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

function toStyle(node: Pick<SceneNode, 'styles' | 'hidden'>, isRoot: boolean): CSSProperties {
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

const sceneLookup: SceneLookup = { node: (id) => scene.nodes.get(id), children: (id) => scene.children(id) };

/**
 * A layer drawn for an instance. It has no id of its own: a click lands on the
 * instance, and its breakpoint and state rules find it by `data-gf-src`, the
 * component layer it comes from.
 */
function drawnLayer(layer: SceneTree): ReactElement {
  const props: Record<string, unknown> = {
    ...reactAttributes(layer.attributes),
    key: layer.id,
    'data-gf-src': layer.source,
    ...(layer.theme && { 'data-theme': layer.theme }),
    style: toStyle(layer, false),
  };
  if (layer.attributes.src !== undefined) props.src = displaySrc(layer.attributes.src);
  if (layer.tag === 'img') props.draggable = false;
  if (layer.type === 'text') {
    if (layer.tag === 'textarea') return createElement(layer.tag, { ...props, defaultValue: layer.text ?? '' });
    return createElement(layer.tag, props, layer.text);
  }
  if (VOID_TAGS.has(layer.tag)) return createElement(layer.tag, props);
  return createElement(layer.tag, props, layer.children.map(drawnLayer));
}

/**
 * An instance: its component's layers, worked out from the scene each time it
 * changes, under the instance's own element. Every instance looks again on any
 * edit (its component can be anywhere in the document); React then changes
 * only what differs.
 */
function InstanceView({ node, props }: { node: SceneNode; props: Record<string, unknown> }) {
  const nodes = useSyncExternalStore(scene.subscribe, () => scene.nodes);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tree = useMemo(() => instanceTree(node, sceneLookup), [node, nodes]);
  // Its component is gone: an empty frame that can still be selected and fixed.
  if (!tree) return createElement('div', { ...props, 'data-gf-missing': '' });
  const own: Record<string, unknown> = { ...props, ...reactAttributes(tree.attributes), style: toStyle(tree, false) };
  if (tree.theme) own['data-theme'] = tree.theme;
  if (tree.attributes.src !== undefined) own.src = displaySrc(tree.attributes.src);
  if (tree.type === 'text') return createElement(tree.tag, own, tree.text);
  if (VOID_TAGS.has(tree.tag)) return createElement(tree.tag, own);
  return createElement(tree.tag, own, tree.children.map(drawnLayer));
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
  if (node.instance) return <InstanceView node={node} props={props} />;

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
