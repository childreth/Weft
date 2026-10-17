import { useSyncExternalStore } from 'react';
import { history, scene } from '../editor/editor';
import { useEditor, type Tool } from '../editor/store';
import { zoomTo, zoomToFit } from '../editor/viewport';

const TOOLS: Array<{ tool: Tool; label: string; key: string }> = [
  { tool: 'select', label: 'Select', key: 'V' },
  { tool: 'frame', label: 'Frame', key: 'F' },
  { tool: 'text', label: 'Text', key: 'T' },
];

const STATUS_LABEL = {
  local: 'Local only',
  connecting: 'Connecting…',
  connected: 'Live',
  disconnected: 'Offline',
} as const;

export function Toolbar() {
  const tool = useEditor((s) => s.tool);
  const zoom = useEditor((s) => s.camera.zoom);
  const notice = useEditor((s) => s.notice);
  const connection = useEditor((s) => s.connection);
  const collaborators = useEditor((s) => s.collaborators);
  const activity = useEditor((s) => s.agentActivity);
  // Re-render when the document changes so undo/redo enablement stays current.
  useSyncExternalStore(scene.subscribe, () => scene.nodes);

  return (
    <header className="gf-toolbar">
      <span className="gf-brand">Weft</span>
      <div className="gf-tool-group" role="toolbar" aria-label="Tools">
        {TOOLS.map((t) => (
          <button
            key={t.tool}
            className={`gf-tool${tool === t.tool ? ' is-active' : ''}`}
            aria-pressed={tool === t.tool}
            title={`${t.label} (${t.key})`}
            onClick={() => useEditor.getState().setTool(t.tool)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="gf-tool-group">
        <button className="gf-tool" disabled={!history.canUndo()} onClick={() => history.undo()} title="Undo (⌘Z)">
          Undo
        </button>
        <button className="gf-tool" disabled={!history.canRedo()} onClick={() => history.redo()} title="Redo (⇧⌘Z)">
          Redo
        </button>
      </div>
      {activity && (
        <span className="gf-activity" role="status" data-testid="agent-activity">
          {activity.name} · {activity.tool.replace(/_/g, ' ')} · {activity.ids.length} node{activity.ids.length === 1 ? '' : 's'}
        </span>
      )}
      {notice && (
        <span className="gf-notice" role="status">
          {notice}
        </span>
      )}
      <div className="gf-tool-group gf-push-right">
        {collaborators.map((c) => (
          <span key={c.clientId} className="gf-avatar" style={{ background: c.color }} title={`${c.name} (${c.kind})`}>
            {c.kind === 'agent' ? 'AI' : c.name.charAt(0)}
          </span>
        ))}
        <span className="gf-status" data-status={connection} data-testid="connection" title={STATUS_LABEL[connection]}>
          <span className="gf-status-dot" />
          {STATUS_LABEL[connection]}
        </span>
      </div>
      <div className="gf-tool-group">
        <button className="gf-tool" onClick={() => zoomToFit()} title="Zoom to fit (⇧1)">
          Fit
        </button>
        <button className="gf-tool gf-zoom" onClick={() => zoomTo(1)} title="Zoom to 100% (⌘0)" data-testid="zoom">
          {Math.round(zoom * 100)}%
        </button>
      </div>
    </header>
  );
}
