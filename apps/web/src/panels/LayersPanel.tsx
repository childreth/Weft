import { memo, useEffect, useRef, useState, type DragEvent, type MouseEvent } from 'react';
import { create } from 'zustand';
import { VOID_TAGS, type SceneNode } from '@weft/core';
import { doc, run, scene, useChildren, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';

type DropPosition = 'before' | 'after' | 'inside';

interface DropTarget {
  id: string;
  position: DropPosition;
}

/** Drag-and-drop state, local to the panel. */
const useLayerDrag = create<{ dragging: string[]; target: DropTarget | null }>()(() => ({ dragging: [], target: null }));

/** Last plainly clicked layer: the anchor for shift-click range selection. */
let anchorId: string | null = null;

const canContain = (node: SceneNode) => node.type === 'frame' && !VOID_TAGS.has(node.tag);

/** Layer ids top to bottom as the panel shows them, skipping collapsed subtrees. */
function visibleLayerIds(): string[] {
  const { collapsed } = useEditor.getState();
  const out: string[] = [];
  const walk = (parentId: string | null) => {
    for (const id of scene.children(parentId)) {
      out.push(id);
      if (!collapsed.has(id)) walk(id);
    }
  };
  walk(null);
  return out;
}

function isWithin(id: string, ancestors: ReadonlySet<string>): boolean {
  for (let cur = scene.nodes.get(id); cur; cur = cur.parentId ? scene.nodes.get(cur.parentId) : undefined) {
    if (ancestors.has(cur.id)) return true;
  }
  return false;
}

/** The layers a drag of `id` carries: the selection (outermost only) if `id` is in it. */
function dragSet(id: string): string[] {
  const { selection } = useEditor.getState();
  if (!selection.includes(id)) return [id];
  const set = new Set(selection);
  const outermost = selection.filter((s) => {
    const parentId = scene.nodes.get(s)?.parentId;
    return !(parentId && isWithin(parentId, set));
  });
  const order = new Map(visibleLayerIds().map((v, i) => [v, i]));
  return outermost.sort((a, b) => (order.get(a) ?? Infinity) - (order.get(b) ?? Infinity));
}

function dropPosition(e: DragEvent<HTMLElement>, node: SceneNode): DropPosition {
  const rect = e.currentTarget.getBoundingClientRect();
  const f = (e.clientY - rect.top) / rect.height;
  if (!canContain(node)) return f < 0.5 ? 'before' : 'after';
  return f < 0.25 ? 'before' : f > 0.75 ? 'after' : 'inside';
}

/** Moves the dragged layers to the drop target in one undo step. */
function drop(ids: string[], { id, position }: DropTarget) {
  const target = scene.nodes.get(id);
  if (!target) return;
  const moving = new Set(ids);
  let parentId: string | null;
  let beforeId: string | null;
  const firstChild = scene.children(id).find((c) => !moving.has(c));
  if (position === 'inside') {
    parentId = id;
    beforeId = null;
  } else if (position === 'after' && firstChild && !useEditor.getState().collapsed.has(id)) {
    // Just below an expanded container is visually its first child slot.
    parentId = id;
    beforeId = firstChild;
  } else {
    parentId = target.parentId;
    const siblings = scene.children(parentId).filter((s) => s === id || !moving.has(s));
    const at = siblings.indexOf(id);
    beforeId = position === 'before' ? id : (siblings[at + 1] ?? null);
  }
  if (parentId === null && ids.some((m) => scene.nodes.get(m)?.type !== 'frame')) {
    useEditor.getState().setNotice('Only frames can be artboards');
    return;
  }
  run(() => doc.transact(() => ids.forEach((m) => doc.moveNode(m, parentId, beforeId))));
  if (position === 'inside') useEditor.getState().setCollapsed(id, false);
  useEditor.getState().select(ids);
}

function selectFromClick(id: string, e: MouseEvent) {
  const { selection, select } = useEditor.getState();
  if (e.metaKey || e.ctrlKey) {
    select(selection.includes(id) ? selection.filter((s) => s !== id) : [...selection, id]);
    anchorId = id;
  } else if (e.shiftKey && anchorId) {
    const order = visibleLayerIds();
    const a = order.indexOf(anchorId);
    const b = order.indexOf(id);
    if (a < 0 || b < 0) return select([id]);
    select(order.slice(Math.min(a, b), Math.max(a, b) + 1));
  } else {
    select([id]);
    anchorId = id;
  }
}

const EyeIcon = ({ off }: { off: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8s-2.4 4.5-6.5 4.5S1.5 8 1.5 8z" />
    <circle cx="8" cy="8" r="2" />
    {off && <path d="M2.5 13.5l11-11" />}
  </svg>
);

const LockIcon = ({ off }: { off: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <rect x="3.5" y="7" width="9" height="6.5" rx="1.2" />
    <path d={off ? 'M5.5 7V5a2.5 2.5 0 0 1 4.9-.7' : 'M5.5 7V5a2.5 2.5 0 0 1 5 0v2'} />
  </svg>
);

function RenameInput({ node, onDone }: { node: SceneNode; onDone: () => void }) {
  const done = useRef(false);
  const finish = (value: string | null) => {
    if (done.current) return;
    done.current = true;
    const name = value?.trim();
    if (name && name !== node.name) run(() => doc.updateNode(node.id, { name }));
    onDone();
  };
  return (
    <input
      className="gf-input gf-layer-rename"
      defaultValue={node.name}
      autoFocus
      onFocus={(e) => e.currentTarget.select()}
      onClick={(e) => e.stopPropagation()}
      onBlur={(e) => finish(e.currentTarget.value)}
      onKeyDown={(e) => {
        e.stopPropagation();
        if (e.key === 'Enter') finish(e.currentTarget.value);
        if (e.key === 'Escape') finish(null);
      }}
      aria-label="Layer name"
    />
  );
}

const LayerRow = memo(function LayerRow({ id, depth }: { id: string; depth: number }) {
  const node = useNode(id);
  const childIds = useChildren(id);
  const selected = useEditor((s) => s.selection.includes(id));
  const hovered = useEditor((s) => s.hoveredId === id);
  const collapsed = useEditor((s) => s.collapsed.has(id));
  const dropAt = useLayerDrag((s) => (s.target?.id === id ? s.target.position : null));
  const [renaming, setRenaming] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected) rowRef.current?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  if (!node) return null;

  const icon = node.parentId === null ? '▣' : node.type === 'text' ? 'T' : node.tag === 'img' ? '◪' : node.styles.display === 'grid' ? '▦' : '▢';
  // Text layers created on the canvas keep the default name; show their text instead.
  const label = node.type === 'text' && node.text && node.name === 'Text' ? node.text : node.name;
  const toggle = (flag: 'hidden' | 'locked') => (e: MouseEvent) => {
    e.stopPropagation();
    run(() => doc.updateNode(id, { [flag]: !node[flag] }));
  };
  const className = [
    'gf-layer',
    selected && 'is-selected',
    hovered && 'is-hovered',
    node.hidden && 'is-hidden',
    node.locked && 'is-locked',
    dropAt && `drop-${dropAt}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div
        ref={rowRef}
        className={className}
        style={{ paddingLeft: 4 + depth * 14 }}
        data-layer-id={id}
        draggable={!renaming}
        onClick={(e) => selectFromClick(id, e)}
        onDoubleClick={() => setRenaming(true)}
        onMouseEnter={() => useEditor.getState().setHovered(id)}
        onMouseLeave={() => useEditor.getState().setHovered(null)}
        onDragStart={(e) => {
          const ids = dragSet(id);
          useLayerDrag.setState({ dragging: ids, target: null });
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('application/x-weft-layers', ids.join(','));
        }}
        onDragOver={(e) => {
          const { dragging } = useLayerDrag.getState();
          if (!dragging.length || isWithin(id, new Set(dragging))) return;
          e.preventDefault();
          const position = dropPosition(e, node);
          const t = useLayerDrag.getState().target;
          if (t?.id !== id || t.position !== position) useLayerDrag.setState({ target: { id, position } });
        }}
        onDrop={(e) => {
          e.preventDefault();
          const { dragging, target } = useLayerDrag.getState();
          useLayerDrag.setState({ dragging: [], target: null });
          if (target) drop(dragging, target);
        }}
        onDragEnd={() => useLayerDrag.setState({ dragging: [], target: null })}
      >
        <span
          className="gf-layer-twisty"
          data-testid={childIds.length ? `twisty-${id}` : undefined}
          onClick={(e) => {
            if (!childIds.length) return;
            e.stopPropagation();
            useEditor.getState().setCollapsed(id, !collapsed);
          }}
        >
          {childIds.length > 0 && (
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" style={{ transform: collapsed ? 'rotate(-90deg)' : undefined }}>
              <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          )}
        </span>
        <span className="gf-layer-icon">{icon}</span>
        {renaming ? (
          <RenameInput node={node} onDone={() => setRenaming(false)} />
        ) : (
          <span className="gf-layer-name">{label}</span>
        )}
        <span className="gf-layer-tag">{node.tag}</span>
        <button
          className={`gf-layer-toggle${node.locked ? ' is-on' : ''}`}
          title={node.locked ? 'Unlock' : 'Lock'}
          aria-label={node.locked ? 'Unlock' : 'Lock'}
          aria-pressed={!!node.locked}
          onClick={toggle('locked')}
        >
          <LockIcon off={!node.locked} />
        </button>
        <button
          className={`gf-layer-toggle${node.hidden ? ' is-on' : ''}`}
          title={node.hidden ? 'Show' : 'Hide'}
          aria-label={node.hidden ? 'Show' : 'Hide'}
          aria-pressed={!!node.hidden}
          onClick={toggle('hidden')}
        >
          <EyeIcon off={!!node.hidden} />
        </button>
      </div>
      {!collapsed && childIds.map((childId) => <LayerRow key={childId} id={childId} depth={depth + 1} />)}
    </>
  );
});

export function LayersPanel() {
  const rootIds = useChildren(null);
  const selection = useEditor((s) => s.selection);

  // Reveal layers selected elsewhere (canvas, agents) by expanding their ancestors.
  useEffect(() => {
    const { setCollapsed } = useEditor.getState();
    for (const id of selection) {
      for (let p = scene.nodes.get(id)?.parentId; p; p = scene.nodes.get(p)?.parentId) setCollapsed(p, false);
    }
  }, [selection]);

  return (
    <aside className="gf-panel gf-layers" data-testid="layers">
      <h2 className="gf-panel-title">Layers</h2>
      {rootIds.map((id) => (
        <LayerRow key={id} id={id} depth={0} />
      ))}
    </aside>
  );
}
