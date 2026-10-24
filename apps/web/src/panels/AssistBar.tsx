import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { docName, mode, scene } from '../editor/editor';
import { listModels, resetAssist, sendPrompt, undoAssistTurn, type AssistEvent, type AssistModel } from '../editor/assist';
import { useEditor } from '../editor/store';
import { Markdown } from './Markdown';

type Entry =
  | { kind: 'user'; text: string }
  | { kind: 'tool'; name: string; ok?: boolean; detail?: string }
  | { kind: 'reply'; text: string }
  | { kind: 'error'; text: string };

const TOOL_LABELS: Record<string, string> = {
  get_canvas: 'Read the canvas',
  get_selection: 'Read the selection',
  get_layout: 'Measured layout',
  list_tokens: 'Read design tokens',
  create_nodes: 'Created nodes',
  update_nodes: 'Updated nodes',
  move_node: 'Moved a node',
  duplicate_node: 'Duplicated a node',
  align_nodes: 'Aligned nodes',
  distribute_nodes: 'Distributed nodes',
  delete_nodes: 'Deleted nodes',
  undo_agent_change: 'Undid a change',
  select_nodes: 'Selected the result',
};

const MODEL_KEY = 'weft:assist-model';
const savedModel = (): string | null => {
  try {
    return localStorage.getItem(MODEL_KEY);
  } catch {
    return null;
  }
};
const gb = (bytes: number) => (bytes > 0 ? ` · ${(bytes / 1e9).toFixed(1)} GB` : '');

/** Prompt bar at the bottom of the canvas: edits the document with an Ollama model (local or cloud) through the server. */
export function AssistBar() {
  if (mode !== 'server') {
    return (
      <div className="gf-assist" data-testid="assist">
        <div className="gf-assist-bar gf-assist-off">Assist needs the Weft server: open without ?offline or ?ephemeral and run pnpm dev.</div>
      </div>
    );
  }
  return <AssistPrompt />;
}

function AssistPrompt() {
  const selection = useEditor((s) => s.selection);
  const [models, setModels] = useState<AssistModel[] | null>(null);
  const [modelsError, setModelsError] = useState<string | null>(null);
  const [model, setModel] = useState<string>('');
  const [text, setText] = useState('');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [open, setOpen] = useState(true);
  const [running, setRunning] = useState<AbortController | null>(null);
  const [canUndo, setCanUndo] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const loadModels = async () => {
    const { models: found, error } = await listModels();
    setModels(found);
    setModelsError(error ?? null);
    setModel((current) => {
      const names = found.map((m) => m.name);
      if (names.includes(current)) return current;
      const saved = savedModel();
      // Offline-first: a cloud model is only picked when the user chose it.
      return saved && names.includes(saved) ? saved : (found.find((m) => !m.cloud) ?? found[0])?.name ?? '';
    });
  };
  useEffect(() => {
    void loadModels();
  }, []);

  useLayoutEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [entries, open]);

  const chooseModel = (name: string) => {
    setModel(name);
    try {
      localStorage.setItem(MODEL_KEY, name);
    } catch {
      // Remembering the model is a convenience only.
    }
  };

  const onEvent = (e: AssistEvent) => {
    setEntries((list) => {
      switch (e.type) {
        case 'tool':
          return [...list, { kind: 'tool', name: e.name }];
        case 'tool_result': {
          const at = list.findLastIndex((x) => x.kind === 'tool' && x.name === e.name && x.ok === undefined);
          if (at < 0) return list;
          const next = [...list];
          next[at] = { kind: 'tool', name: e.name, ok: e.ok, detail: e.ok ? undefined : e.text };
          return next;
        }
        case 'message':
          return [...list, { kind: 'reply', text: e.text }];
        case 'error':
          return [...list, { kind: 'error', text: e.message }];
        case 'done':
          return list;
      }
    });
    if (e.type === 'done') setCanUndo(e.edits > 0);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const prompt = text.trim();
    if (!prompt || !model || running) return;
    const controller = new AbortController();
    setRunning(controller);
    setText('');
    setOpen(true);
    setEntries((list) => [...list, { kind: 'user', text: prompt }]);
    try {
      await sendPrompt({ doc: docName, model, prompt, selection: useEditor.getState().selection }, onEvent, controller.signal);
    } catch (err) {
      if (!controller.signal.aborted) onEvent({ type: 'error', message: (err as Error).message });
    } finally {
      if (controller.signal.aborted) setEntries((list) => [...list, { kind: 'error', text: 'Stopped.' }]);
      setRunning(null);
    }
  };

  const undo = async () => {
    const { undone } = await undoAssistTurn();
    setCanUndo(false);
    setEntries((list) => [...list, { kind: 'reply', text: undone ? `Undid ${undone} change${undone === 1 ? '' : 's'}.` : 'Nothing to undo.' }]);
  };

  const newChat = async () => {
    running?.abort();
    await resetAssist();
    setEntries([]);
    setCanUndo(false);
  };

  const cloud = !!models?.find((m) => m.name === model)?.cloud;
  const local = models?.filter((m) => !m.cloud) ?? [];
  const remote = models?.filter((m) => m.cloud) ?? [];
  const target =
    selection.length === 1 ? (scene.nodes.get(selection[0]!)?.name ?? 'the selection') : selection.length > 1 ? `${selection.length} layers` : 'the canvas';

  return (
    <div className="gf-assist" data-testid="assist">
      {open && entries.length > 0 && (
        <div className="gf-assist-log" ref={logRef} data-testid="assist-log">
          {entries.map((entry, i) => (
            <div key={i} className={`gf-assist-entry is-${entry.kind}${entry.kind === 'tool' && entry.ok === false ? ' is-failed' : ''}`}>
              {entry.kind === 'tool' ? (
                <>
                  <span className="gf-assist-tool-mark">{entry.ok === undefined ? '…' : entry.ok ? '✓' : '✕'}</span>
                  {TOOL_LABELS[entry.name] ?? entry.name}
                  {entry.detail && <span className="gf-assist-detail">{entry.detail}</span>}
                </>
              ) : entry.kind === 'reply' ? (
                <Markdown text={entry.text} />
              ) : (
                entry.text
              )}
            </div>
          ))}
          {running && <div className="gf-assist-entry is-pending">Thinking…</div>}
        </div>
      )}
      <form className="gf-assist-bar" onSubmit={submit}>
        {entries.length > 0 && (
          <button
            type="button"
            className="gf-tool gf-assist-icon"
            aria-label={open ? 'Hide conversation' : 'Show conversation'}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ transform: open ? 'none' : 'rotate(180deg)' }}>
              <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {modelsError || models?.length === 0 ? (
          <span className="gf-assist-status" data-testid="assist-status">
            {modelsError ?? 'No models with tool calling. Pull one with ollama pull.'}{' '}
            <button type="button" className="gf-assist-link" onClick={() => void loadModels()}>
              Retry
            </button>
          </span>
        ) : (
          <select
            className="gf-assist-model"
            aria-label="Assist model"
            value={model}
            disabled={!models || !!running}
            onChange={(e) => chooseModel(e.target.value)}
          >
            {!models && <option>Loading models…</option>}
            {local.length > 0 && (
              <optgroup label="Local · on this machine">
                {local.map((m) => (
                  <option key={m.name} value={m.name} title={`${m.name}${gb(m.size)}`}>
                    {m.name}
                  </option>
                ))}
              </optgroup>
            )}
            {remote.length > 0 && (
              <optgroup label="Cloud · ollama.com">
                {remote.map((m) => (
                  <option key={m.name} value={m.name} title={`${m.name} runs on ollama.com: your prompt and the document are sent there`}>
                    ☁ {m.name}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        )}
        {cloud && (
          <span className="gf-assist-cloud" data-testid="assist-cloud" title="This model runs on ollama.com: your prompt and the document are sent there, and it needs a network">
            Cloud
          </span>
        )}
        <input
          className="gf-assist-input"
          aria-label="Ask the model"
          placeholder={`Ask the ${cloud ? 'cloud' : 'local'} model to edit ${target}…`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              if (running) running.abort();
              else e.currentTarget.blur();
            }
          }}
        />
        {running ? (
          <button type="button" className="gf-tool gf-assist-send" onClick={() => running.abort()}>
            Stop
          </button>
        ) : (
          <button type="submit" className="gf-tool gf-assist-send is-active" disabled={!text.trim() || !model}>
            Send
          </button>
        )}
        <button
          type="button"
          className="gf-tool"
          aria-label="Undo assist change"
          title="Undo the model's last change (⌘Z undoes only your own edits)"
          disabled={!canUndo || !!running}
          onClick={() => void undo()}
        >
          Undo
        </button>
        {entries.length > 0 && (
          <button type="button" className="gf-tool" disabled={!!running} onClick={() => void newChat()}>
            New
          </button>
        )}
      </form>
    </div>
  );
}
