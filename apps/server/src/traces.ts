import { appendFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Assist turns written down as training data, when the user turns it on
 * (`WEFT_TRACES=1`). One JSON line per turn, in `<dataDir>/traces/<date>.jsonl`:
 * the messages the model saw at its last step (system prompt, recent history,
 * this turn's calls and results), the tools it was offered, and what came of
 * it. A turn the user undoes later gets a second line pointing at it, so a
 * file is only ever appended to. `evals/traces/export.mts` turns the kept
 * turns into mlx-lm's chat format.
 *
 * Traces hold the document's content and stay in `.weft-data`, which is never
 * committed. Writing one never fails a turn: a full disk loses the trace, not
 * the edit.
 */

export interface TraceMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_calls?: Array<{ function: { name: string; arguments: unknown } }>;
  tool_name?: string;
  /** What the model reasoned before this reply, when thinking was on. */
  thinking?: string;
}

export interface TraceTurn {
  type: 'turn';
  id: string;
  /** When the turn started (ISO). */
  at: string;
  ms: number;
  doc: string;
  model: string;
  /** Ran on ollama.com: a teacher, not something to train on without checking its terms. */
  cloud: boolean;
  think?: string;
  selection: string[];
  /** answered: ended with a reply. error: stopped by a limit or a failure (`error` says which). stopped: the user pressed Stop. */
  outcome: 'answered' | 'error' | 'stopped';
  error?: string;
  /** Problems the turn got past (a lost tool call that was retried). */
  notices: string[];
  /** Undo steps the turn left in the document. */
  edits: number;
  /** Tool calls that came back as errors (refused arguments, unknown ids). */
  refused: number;
  tools: unknown[];
  messages: TraceMessage[];
}

export interface TraceUndo {
  type: 'undo';
  /** The turn's `id`. */
  turn: string;
  at: string;
  undone: number;
}

export type TraceRecord = TraceTurn | TraceUndo;

export class TraceLog {
  /** Writes in the order they were asked for, one at a time. */
  private queue: Promise<void> = Promise.resolve();

  constructor(readonly dir: string) {}

  write(record: TraceRecord): Promise<void> {
    const file = join(this.dir, `${new Date().toISOString().slice(0, 10)}.jsonl`);
    this.queue = this.queue
      .then(async () => {
        await mkdir(this.dir, { recursive: true });
        await appendFile(file, `${JSON.stringify(record)}\n`);
      })
      .catch((err: Error) => console.warn(`Couldn't write an Assist trace: ${err.message}`));
    return this.queue;
  }

  /** Resolves when everything asked for so far is on disk (tests). */
  flushed(): Promise<void> {
    return this.queue;
  }
}
