import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { docName, mode, scene } from '../editor/editor';
import { listModels, resetAssist, sendPrompt, undoAssistTurn, type AssistEvent, type AssistModel, type SpeechInfo } from '../editor/assist';
import { speak, stopSpeaking, useSpeaking } from '../editor/speech';
import { useEditor } from '../editor/store';
import { Markdown } from './Markdown';

type Entry =
  | { kind: 'user'; text: string }
  | { kind: 'tool'; name: string; ok?: boolean; detail?: string }
  | { kind: 'reply'; text: string; id: string }
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
  read_skill: 'Read the design guide',
  get_screenshot: 'Took a screenshot',
};

const MODEL_KEY = 'weft:assist-model';
const SPEAK_KEY = 'weft:assist-speak';
const VOICE_KEY = 'weft:assist-voice';
/** Remembered choices are a convenience only: storage may be unavailable. */
const saved = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};
const remember = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Not remembered.
  }
};
const gb = (bytes: number) => (bytes > 0 ? ` · ${(bytes / 1e9).toFixed(1)} GB` : '');

/** Copies a message's text (a reply's Markdown source), confirming briefly. */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access denied: selecting the text still works.
    }
  };
  return (
    <button type="button" className="gf-assist-copy" aria-label="Copy message" onClick={() => void copy()}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}

/** Reads one reply aloud, or stops it. */
function SpeakButton({ id, text, voice, onError }: { id: string; text: string; voice: string; onError(message: string): void }) {
  const speaking = useSpeaking() === id;
  return (
    <button
      type="button"
      className="gf-assist-copy"
      aria-label={speaking ? 'Stop speaking' : 'Speak message'}
      onClick={() => (speaking ? stopSpeaking() : speak(id, text, voice).catch((err: Error) => onError(err.message)))}
    >
      {speaking ? 'Stop' : 'Speak'}
    </button>
  );
}

const SpeakerIcon = ({ on }: { on: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M2 5.5h2.2L7.5 2.8v8.4L4.2 8.5H2z" fill="currentColor" />
    {on ? (
      <path d="M9.6 4.6a3.4 3.4 0 0 1 0 4.8M11.2 3a5.6 5.6 0 0 1 0 8" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    ) : (
      <path d="m9.5 5.3 3 3.4m0-3.4-3 3.4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    )}
  </svg>
);

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
  const [speech, setSpeech] = useState<SpeechInfo | null>(null);
  const [speakOn, setSpeakOn] = useState(() => saved(SPEAK_KEY) === 'on');
  const [voice, setVoice] = useState(() => saved(VOICE_KEY) ?? 'default');
  const logRef = useRef<HTMLDivElement>(null);
  const replyIds = useRef(0);
  // A reply arrives mid-turn: read the speech choices as they are then, not when the prompt was sent.
  const speakRef = useRef({ on: false, voice });
  speakRef.current = { on: speakOn && !!speech, voice: speech?.voices.includes(voice) ? voice : 'default' };

  const loadModels = async () => {
    const { models: found, speech: info, error } = await listModels();
    setModels(found);
    setSpeech(info);
    setModelsError(error ?? null);
    setModel((current) => {
      const names = found.map((m) => m.name);
      if (names.includes(current)) return current;
      const previous = saved(MODEL_KEY);
      // Offline-first: a cloud model is only picked when the user chose it.
      return previous && names.includes(previous) ? previous : (found.find((m) => !m.cloud) ?? found[0])?.name ?? '';
    });
  };
  useEffect(() => {
    void loadModels();
    return stopSpeaking;
  }, []);

  const speechError = (message: string) => setEntries((list) => [...list, { kind: 'error', text: `Speech: ${message}` }]);
  const speakReply = (id: string, text: string) => void speak(id, text, speakRef.current.voice).catch((err: Error) => speechError(err.message));
  const toggleSpeak = () => {
    const on = !speakOn;
    setSpeakOn(on);
    remember(SPEAK_KEY, on ? 'on' : 'off');
    if (!on) stopSpeaking();
  };
  const chooseVoice = (name: string) => {
    setVoice(name);
    remember(VOICE_KEY, name);
  };

  useLayoutEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [entries, open]);

  const chooseModel = (name: string) => {
    setModel(name);
    remember(MODEL_KEY, name);
  };

  const onEvent = (e: AssistEvent) => {
    const id = e.type === 'message' ? `reply-${replyIds.current++}` : '';
    if (e.type === 'message' && speakRef.current.on) speakReply(id, e.text);
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
          return [...list, { kind: 'reply', text: e.text, id }];
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
    stopSpeaking();
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
    const text = undone ? `Undid ${undone} change${undone === 1 ? '' : 's'}.` : 'Nothing to undo.';
    setEntries((list) => [...list, { kind: 'reply', text, id: `reply-${replyIds.current++}` }]);
  };

  const newChat = async () => {
    running?.abort();
    stopSpeaking();
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
          {entries.map((entry, i) =>
            entry.kind === 'reply' || entry.kind === 'user' ? (
              <div key={i} className={`gf-assist-message is-${entry.kind}`}>
                <div className={`gf-assist-entry is-${entry.kind}`}>{entry.kind === 'reply' ? <Markdown text={entry.text} /> : entry.text}</div>
                <div className="gf-assist-actions">
                  <CopyButton text={entry.text} />
                  {entry.kind === 'reply' && speech && <SpeakButton id={entry.id} text={entry.text} voice={speakRef.current.voice} onError={speechError} />}
                </div>
              </div>
            ) : (
              <div key={i} className={`gf-assist-entry is-${entry.kind}${entry.kind === 'tool' && entry.ok === false ? ' is-failed' : ''}`}>
                {entry.kind === 'tool' ? (
                  <>
                    <span className="gf-assist-tool-mark">{entry.ok === undefined ? '…' : entry.ok ? '✓' : '✕'}</span>
                    {TOOL_LABELS[entry.name] ?? entry.name}
                    {entry.detail && <span className="gf-assist-detail">{entry.detail}</span>}
                  </>
                ) : (
                  entry.text
                )}
              </div>
            ),
          )}
          {running && <div className="gf-assist-entry is-pending">Thinking…</div>}
        </div>
      )}
      <form className="gf-assist-bar" onSubmit={submit}>
        <textarea
          className="gf-assist-input"
          aria-label="Ask the model"
          placeholder={`Ask the ${cloud ? 'cloud' : 'local'} model to edit ${target}…`}
          rows={2}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            // Enter sends, Shift+Enter starts a new line (not while an IME is composing).
            if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
              e.preventDefault();
              e.currentTarget.form?.requestSubmit();
            } else if (e.key === 'Escape') {
              stopSpeaking();
              if (running) running.abort();
              else e.currentTarget.blur();
            }
          }}
        />
        <div className="gf-assist-controls">
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
          {speech && (
            <button
              type="button"
              className={`gf-tool gf-assist-icon${speakOn ? ' is-active' : ''}`}
              aria-label="Speak replies"
              aria-pressed={speakOn}
              title={`Speak replies aloud with ${speech.model} (on this machine)`}
              onClick={toggleSpeak}
            >
              <SpeakerIcon on={speakOn} />
            </button>
          )}
          {speech && speakOn && (
            <select className="gf-assist-model gf-assist-voice" aria-label="Voice" value={speakRef.current.voice} onChange={(e) => chooseVoice(e.target.value)}>
              {speech.voices.map((v) => (
                <option key={v} value={v}>
                  {v === 'default' ? 'Default voice' : v}
                </option>
              ))}
            </select>
          )}
          <span className="gf-assist-spacer" />
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
          {running ? (
            <button
              type="button"
              className="gf-tool gf-assist-send"
              onClick={() => {
                stopSpeaking();
                running.abort();
              }}
            >
              Stop
            </button>
          ) : (
            <button type="submit" className="gf-tool gf-assist-send is-active" disabled={!text.trim() || !model}>
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
