import { memo } from 'react';
import { useChildren, useNode } from '../editor/editor';
import { useEditor } from '../editor/store';

const LayerRow = memo(function LayerRow({ id, depth }: { id: string; depth: number }) {
  const node = useNode(id);
  const childIds = useChildren(id);
  const selected = useEditor((s) => s.selection.includes(id));
  const hovered = useEditor((s) => s.hoveredId === id);
  if (!node) return null;

  const icon = node.parentId === null ? '▣' : node.type === 'text' ? 'T' : node.styles.display === 'grid' ? '▦' : '▢';
  return (
    <>
      <div
        className={`gf-layer${selected ? ' is-selected' : ''}${hovered ? ' is-hovered' : ''}${node.hidden ? ' is-hidden' : ''}`}
        style={{ paddingLeft: 8 + depth * 14 }}
        data-layer-id={id}
        onClick={(e) => {
          const { selection, select } = useEditor.getState();
          select(e.shiftKey ? (selected ? selection.filter((s) => s !== id) : [...selection, id]) : [id]);
        }}
        onMouseEnter={() => useEditor.getState().setHovered(id)}
        onMouseLeave={() => useEditor.getState().setHovered(null)}
      >
        <span className="gf-layer-icon">{icon}</span>
        <span className="gf-layer-name">{node.type === 'text' && node.text ? node.text : node.name}</span>
        <span className="gf-layer-tag">{node.tag}</span>
      </div>
      {childIds.map((childId) => (
        <LayerRow key={childId} id={childId} depth={depth + 1} />
      ))}
    </>
  );
});

export function LayersPanel() {
  const rootIds = useChildren(null);
  return (
    <aside className="gf-panel gf-layers" data-testid="layers">
      <h2 className="gf-panel-title">Layers</h2>
      {rootIds.map((id) => (
        <LayerRow key={id} id={id} depth={0} />
      ))}
    </aside>
  );
}
