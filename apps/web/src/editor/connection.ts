import { WebsocketProvider } from 'y-websocket';
import { IndexeddbPersistence } from 'y-indexeddb';
import { doc, docName, mode, scene } from './editor';
import { useEditor, type AgentActivity, type Collaborator } from './store';
import { zoomToNodes } from './viewport';
import { nodeElements } from '../canvas/elements';

export const SERVER_URL: string = import.meta.env.VITE_GRIDFORGE_SERVER ?? 'ws://127.0.0.1:4510';

const AGENT_HIGHLIGHT_MS = 2400;
const LAYOUT_LIMIT = 400;
const USER_COLORS = ['#f97316', '#10b981', '#0ea5e9', '#ec4899', '#eab308'];

interface PresenceState {
  kind?: 'human' | 'agent';
  user?: { name: string; color: string };
  selection?: string[];
  activity?: { seq: number; tool: string; ids: string[] } | null;
}

/** Connects the document to the GridForge server (sync, presence, agent RPC). */
export function startConnection(): () => void {
  const editor = useEditor.getState();
  if (mode !== 'server') {
    editor.setConnection('local');
    return () => {};
  }

  // Local cache so the document opens instantly and survives server restarts.
  const cache = new IndexeddbPersistence(`gridforge:server:${docName}`, doc.ydoc);
  const provider = new WebsocketProvider(SERVER_URL, docName, doc.ydoc);
  const { awareness } = provider;

  editor.setConnection('connecting');
  provider.on('status', ({ status }: { status: string }) => {
    useEditor.getState().setConnection(status === 'connected' ? 'connected' : status === 'connecting' ? 'connecting' : 'disconnected');
  });

  awareness.setLocalState({
    kind: 'human',
    user: { name: 'Designer', color: USER_COLORS[awareness.clientID % USER_COLORS.length]! },
    selection: useEditor.getState().selection,
  } satisfies PresenceState);
  const unsubscribeSelection = useEditor.subscribe((s, prev) => {
    if (s.selection !== prev.selection) awareness.setLocalStateField('selection', s.selection);
  });

  const seenActivity = new Map<number, number>();
  let highlightTimer: ReturnType<typeof setTimeout> | undefined;
  const onAwareness = () => {
    const collaborators: Collaborator[] = [];
    for (const [clientId, state] of awareness.getStates() as Map<number, PresenceState>) {
      if (clientId === awareness.clientID || !state.user) continue;
      collaborators.push({ clientId, kind: state.kind ?? 'human', name: state.user.name, color: state.user.color });
      const activity = state.activity;
      if (state.kind !== 'agent') continue;
      const seq = activity?.seq ?? 0;
      const previous = seenActivity.get(clientId);
      seenActivity.set(clientId, seq);
      // Highlight only new activity, not whatever the agent did before we connected.
      if (activity && previous !== undefined && previous !== seq) {
        const highlight: AgentActivity = { ...activity, name: state.user.name, color: state.user.color };
        useEditor.getState().setAgentActivity(highlight);
        clearTimeout(highlightTimer);
        highlightTimer = setTimeout(() => {
          if (useEditor.getState().agentActivity === highlight) useEditor.getState().setAgentActivity(null);
        }, AGENT_HIGHLIGHT_MS);
      }
    }
    useEditor.getState().setCollaborators(collaborators);
  };
  awareness.on('change', onAwareness);

  const stopRpc = startRpc();

  return () => {
    stopRpc();
    unsubscribeSelection();
    awareness.off('change', onAwareness);
    clearTimeout(highlightTimer);
    provider.destroy();
    void cache.destroy();
  };
}

// ── Browser RPC: lets agents measure real layout and steer the viewport ────

type RpcHandler = (params: any) => unknown;

const handlers: Record<string, RpcHandler> = {
  getLayout: ({ ids, includeDescendants }: { ids?: string[]; includeDescendants?: boolean }) => {
    const selection = useEditor.getState().selection;
    let targets = ids?.length ? ids : selection.length ? selection : [...scene.children(null)];
    if (includeDescendants) {
      const all: string[] = [];
      const walk = (id: string) => {
        if (all.length >= LAYOUT_LIMIT) return;
        all.push(id);
        scene.children(id).forEach(walk);
      };
      targets.forEach(walk);
      targets = all;
    }
    return targets.map(measureNode);
  },
  select: ({ ids, focus }: { ids: string[]; focus?: boolean }) => {
    const alive = ids.filter((id) => scene.nodes.has(id));
    useEditor.getState().select(alive);
    if (focus && alive.length) requestAnimationFrame(() => zoomToNodes(alive));
    return { selected: alive };
  },
};

function artboardOf(id: string): string {
  let cur = scene.nodes.get(id);
  while (cur?.parentId) cur = scene.nodes.get(cur.parentId);
  return cur?.id ?? id;
}

const round = (n: number) => Math.round(n * 10) / 10;

function measureNode(id: string) {
  const node = scene.nodes.get(id);
  const el = nodeElements.get(id);
  if (!node) return { id, error: 'not found' };
  if (!el) return { id, name: node.name, error: 'not rendered' };
  const artboardId = artboardOf(id);
  const rootRect = nodeElements.get(artboardId)!.getBoundingClientRect();
  const rect = el.getBoundingClientRect();
  const zoom = useEditor.getState().camera.zoom;
  const cs = getComputedStyle(el);
  const computed: Record<string, string> = { display: cs.display };
  if (cs.display.includes('grid')) {
    computed.gridTemplateColumns = cs.gridTemplateColumns;
    computed.gridTemplateRows = cs.gridTemplateRows;
  }
  if (cs.display.includes('flex')) computed.flexDirection = cs.flexDirection;
  if (cs.display.includes('grid') || cs.display.includes('flex')) computed.gap = cs.gap;
  if (node.type === 'text') {
    Object.assign(computed, {
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      fontWeight: cs.fontWeight,
      color: cs.color,
    });
  }
  if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') computed.backgroundColor = cs.backgroundColor;
  return {
    id,
    name: node.name,
    tag: node.tag,
    artboardId,
    box: {
      x: round((rect.left - rootRect.left) / zoom),
      y: round((rect.top - rootRect.top) / zoom),
      width: round(rect.width / zoom),
      height: round(rect.height / zoom),
    },
    computed,
    overflowing: el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1,
    visible: rect.width > 0 && rect.height > 0,
  };
}

function startRpc(): () => void {
  let socket: WebSocket | null = null;
  let retry = 500;
  let stopped = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const open = () => {
    socket = new WebSocket(`${SERVER_URL}/rpc/${docName}`);
    socket.onopen = () => (retry = 500);
    socket.onclose = () => {
      if (!stopped) timer = setTimeout(open, (retry = Math.min(retry * 2, 5000)));
    };
    socket.onmessage = async (event) => {
      const { id, method, params } = JSON.parse(String(event.data)) as { id?: number; method: string; params: unknown };
      const handler = handlers[method];
      try {
        if (!handler) throw new Error(`Unknown method ${method}`);
        const result = await handler(params);
        if (id !== undefined) socket?.send(JSON.stringify({ id, result }));
      } catch (err) {
        if (id !== undefined) socket?.send(JSON.stringify({ id, error: (err as Error).message }));
      }
    };
  };
  open();
  return () => {
    stopped = true;
    clearTimeout(timer);
    socket?.close();
  };
}
