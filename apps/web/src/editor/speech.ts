import { useSyncExternalStore } from 'react';
import { SERVER_URL } from './connection';

/**
 * Speaks Assist replies through the server's local speech model (Ollama's
 * Phonon). A reply is cut into sentences: the first plays while the next is
 * generated, so speech starts at once even for long replies.
 */

const HTTP_URL = SERVER_URL.replace(/^ws/, 'http');
/** Sentences are joined up to about this long, so playback doesn't pause between short ones. */
const CHUNK_CHARS = 240;

/** Markdown as it should sound: no asterisks, backticks, bullets or link targets. */
export function speakable(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    // Tokens read as their names: var(--space-4) → "space 4".
    .replace(/var\(--([\w-]+)\)/g, (_, name: string) => name.replace(/-/g, ' '))
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}(?:#{1,6}|[-*+]|\d+[.)])\s+/gm, '')
    // The emphasis Markdown.tsx renders; other underscores are names (get_canvas → "get canvas").
    .replace(/(\*\*|__|\*)(\S(?:[\s\S]*?\S)?)\1/g, '$2')
    .replace(/_/g, ' ')
    .replace(/\s*\n+\s*/g, (gap) => (/\n\s*\n/.test(gap) ? '. ' : ', '))
    .replace(/([.!?:])[,.]\s/g, '$1 ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** `text` in pieces of whole sentences, each up to about `max` characters. */
export function chunks(text: string, max = CHUNK_CHARS): string[] {
  // Only punctuation followed by a space ends a sentence, so 1.5 stays whole.
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const out: string[] = [];
  for (const sentence of sentences) {
    const last = out.at(-1);
    if (last && last.length + sentence.length + 1 <= max) out[out.length - 1] = `${last} ${sentence}`;
    else out.push(sentence);
  }
  return out;
}

let current: { id: string; controller: AbortController } | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

async function audio(text: string, voice: string, signal: AbortSignal): Promise<Blob> {
  const res = await fetch(`${HTTP_URL}/assist/speak`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ text, voice }),
    signal,
  });
  if (!res.ok) throw new Error(((await res.json().catch(() => ({}))) as { error?: string }).error ?? `Speech failed (${res.status})`);
  return res.blob();
}

function play(blob: Blob, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const el = new Audio(url);
    const done = () => {
      URL.revokeObjectURL(url);
      signal.removeEventListener('abort', stop);
      resolve();
    };
    const stop = () => {
      el.pause();
      done();
    };
    signal.addEventListener('abort', stop, { once: true });
    el.onended = done;
    el.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Could not play the reply'));
    };
    el.play().catch(reject);
  });
}

/** Speaks `markdown`, stopping anything already speaking. `id` names what's speaking (a message), for its button. */
export async function speak(id: string, markdown: string, voice: string): Promise<void> {
  stopSpeaking();
  const controller = new AbortController();
  current = { id, controller };
  notify();
  const { signal } = controller;
  try {
    const parts = chunks(speakable(markdown));
    let next = parts.length ? audio(parts[0]!, voice, signal) : null;
    for (let i = 0; next && !signal.aborted; i++) {
      const blob = await next;
      // Generate the next piece while this one plays.
      next = i + 1 < parts.length ? audio(parts[i + 1]!, voice, signal) : null;
      next?.catch(() => {});
      await play(blob, signal);
    }
  } catch (err) {
    if (!signal.aborted) throw err;
  } finally {
    if (current?.controller === controller) {
      current = null;
      notify();
    }
  }
}

export function stopSpeaking(): void {
  if (!current) return;
  current.controller.abort();
  current = null;
  notify();
}

/** The id of what's speaking, or null. */
export const useSpeaking = (): string | null =>
  useSyncExternalStore(
    (l) => (listeners.add(l), () => void listeners.delete(l)),
    () => current?.id ?? null,
  );
