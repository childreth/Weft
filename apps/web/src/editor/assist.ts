import { SERVER_URL } from './connection';

/** Client for the server's in-editor assistant (an Ollama model: local, or an Ollama cloud model). */

const HTTP_URL = SERVER_URL.replace(/^ws/, 'http');

export interface AssistModel {
  name: string;
  size: number;
  thinking: boolean;
  vision: boolean;
  /** Runs on ollama.com: the prompt and document leave the machine. */
  cloud: boolean;
}

export type AssistEvent =
  | { type: 'tool'; name: string; args: Record<string, unknown> }
  | { type: 'tool_result'; name: string; ok: boolean; text: string }
  | { type: 'message'; text: string }
  | { type: 'error'; message: string }
  | { type: 'done'; edits: number };

/** One conversation (and one agent cursor) per tab, surviving reloads of that tab. */
export const assistSession: string = (() => {
  const fresh = () => crypto.randomUUID().replace(/-/g, '').slice(0, 24);
  try {
    const saved = sessionStorage.getItem('weft:assist-session');
    if (saved) return saved;
    const id = fresh();
    sessionStorage.setItem('weft:assist-session', id);
    return id;
  } catch {
    return fresh();
  }
})();

export async function listModels(): Promise<{ models: AssistModel[]; error?: string }> {
  try {
    const res = await fetch(`${HTTP_URL}/assist/models`);
    const body = (await res.json()) as { models?: AssistModel[]; error?: string };
    return { models: body.models ?? [], error: body.error };
  } catch {
    return { models: [], error: "The Weft server isn't reachable" };
  }
}

/** Sends a prompt and reports each streamed event until the turn ends or `signal` aborts it. */
export async function sendPrompt(
  body: { doc: string; model: string; prompt: string; selection: string[] },
  onEvent: (e: AssistEvent) => void,
  signal: AbortSignal,
): Promise<void> {
  const res = await fetch(`${HTTP_URL}/assist/chat`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...body, session: assistSession }),
    signal,
  });
  if (!res.ok || !res.body) {
    const { error } = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(error ?? `Assist failed (${res.status})`);
  }
  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += value;
    const lines = buffer.split('\n');
    buffer = lines.pop()!;
    for (const line of lines) if (line.trim()) onEvent(JSON.parse(line) as AssistEvent);
  }
  if (buffer.trim()) onEvent(JSON.parse(buffer) as AssistEvent);
}

const post = (route: string) =>
  fetch(`${HTTP_URL}/assist/${route}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ session: assistSession }),
  }).then((r) => r.json());

/** Reverts the assistant's most recent turn that edited the document. */
export const undoAssistTurn = (): Promise<{ undone: number }> => post('undo');
export const resetAssist = (): Promise<{ ok: boolean }> => post('reset');
