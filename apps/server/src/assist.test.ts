import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ollamaUrlFrom, type AssistEvent } from './assist';
import { startGridServer, type GridServer } from './server';

/** A scripted stand-in for Ollama: replies are taken in order; requests are recorded. */
let fake: Server;
let replies: Array<Record<string, unknown>> = [];
const requests: Array<{ messages: Array<{ role: string; content: string }>; tools: Array<{ function: { name: string; parameters: { properties?: object } } }> }> = [];
let server: GridServer;
const SESSION = 'test-session-1';

beforeAll(async () => {
  fake = createServer(async (req, res) => {
    if (req.url === '/api/tags') {
      return res.end(
        JSON.stringify({
          models: [
            { name: 'small:1b', size: 1, capabilities: ['completion', 'tools'] },
            { name: 'big:27b', size: 27, capabilities: ['completion', 'tools', 'thinking'] },
            { name: 'vision-only', size: 5, capabilities: ['completion', 'vision'] },
            { name: 'kimi:cloud', size: 100, capabilities: ['completion', 'tools'] },
          ],
        }),
      );
    }
    const chunks: Buffer[] = [];
    for await (const c of req) chunks.push(c as Buffer);
    requests.push(JSON.parse(Buffer.concat(chunks).toString()));
    res.end(JSON.stringify({ message: replies.shift() ?? { role: 'assistant', content: 'Done.' } }));
  });
  await new Promise<void>((r) => fake.listen(0, '127.0.0.1', r));
  server = await startGridServer({ port: 0, dataDir: null, ollamaUrl: `http://127.0.0.1:${(fake.address() as AddressInfo).port}` });
});

afterAll(async () => {
  await server.close();
  fake.close();
});

async function chat(body: Record<string, unknown>): Promise<AssistEvent[]> {
  const res = await fetch(`${server.httpUrl}/assist/chat`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ doc: 'assist', session: SESSION, model: 'big:27b', ...body }),
  });
  return (await res.text()).trim().split('\n').map((line) => JSON.parse(line));
}

describe('assist', () => {
  it('lists local tool-capable models, largest first', async () => {
    const res = await fetch(`${server.httpUrl}/assist/models`);
    const { models } = (await res.json()) as { models: Array<{ name: string; thinking: boolean }> };
    expect(models.map((m: { name: string }) => m.name)).toEqual(['big:27b', 'small:1b']);
    expect(models[0].thinking).toBe(true);
  });

  it('runs tool calls against the document and undoes the whole turn', async () => {
    const doc = server.rooms.get('assist').doc;
    const board = doc.createNode({ type: 'frame', name: 'Board', frame: { x: 0, y: 0, width: 400, height: 300 } });
    const title = doc.createNode({ type: 'text', parentId: board, text: 'Hello', name: 'Title' });

    replies = [
      {
        role: 'assistant',
        content: '',
        tool_calls: [
          { function: { name: 'update_nodes', arguments: { updates: [{ id: title, styles: { color: 'var(--color-accent)' } }] } } },
          { function: { name: 'update_nodes', arguments: JSON.stringify({ updates: [{ id: title, text: 'Hi there' }] }) } },
        ],
      },
      { role: 'assistant', content: 'Made the title accent-colored.' },
    ];
    const events = await chat({ prompt: 'make it blue', selection: [title] });

    expect(events.filter((e) => e.type === 'tool').map((e) => (e as { name: string }).name)).toEqual(['update_nodes', 'update_nodes']);
    expect(events.filter((e) => e.type === 'tool_result').every((e) => (e as { ok: boolean }).ok)).toBe(true);
    expect(events.at(-2)).toEqual({ type: 'message', text: 'Made the title accent-colored.' });
    expect(events.at(-1)).toEqual({ type: 'done', edits: 2 });
    expect(doc.getNode(title)).toMatchObject({ text: 'Hi there', styles: { color: 'var(--color-accent)' } });

    // The model saw the selection, and never had to pass doc/model.
    const first = requests.at(-2)!;
    expect(first.messages[0]!.content).toContain(title);
    const update = first.tools.find((t) => t.function.name === 'update_nodes')!;
    expect(update.function.parameters.properties).not.toHaveProperty('doc');
    expect(update.function.parameters.properties).not.toHaveProperty('model');

    const undo = await fetch(`${server.httpUrl}/assist/undo`, { method: 'POST', body: JSON.stringify({ session: SESSION }) });
    expect(await undo.json()).toEqual({ undone: 2 });
    expect(doc.getNode(title)).toMatchObject({ text: 'Hello' });
    expect(doc.getNode(title)!.styles.color).toBeUndefined();
  });

  it('feeds tool errors back to the model instead of failing', async () => {
    replies = [
      { role: 'assistant', content: '', tool_calls: [{ function: { name: 'update_nodes', arguments: { updates: [{ id: 'nope', text: 'x' }] } } }] },
      { role: 'assistant', content: 'That node does not exist.' },
    ];
    const events = await chat({ prompt: 'rename nope' });
    expect(events.find((e) => e.type === 'tool_result')).toMatchObject({ ok: false });
    expect(requests.at(-1)!.messages.at(-1)).toMatchObject({ role: 'tool' });
    expect(events.at(-1)).toEqual({ type: 'done', edits: 0 });
  });

  it('answers a repeated identical call from history and says when a result was cut off', async () => {
    const doc = server.rooms.get('assist').doc;
    const board = doc.createNode({ type: 'frame', name: 'Big', frame: { x: 0, y: 0, width: 400, height: 300 } });
    for (let i = 0; i < 80; i++) doc.createNode({ type: 'text', parentId: board, text: `Line ${i} `.repeat(4), name: `Line ${i}` });
    const read = { function: { name: 'get_canvas', arguments: { maxDepth: 12 } } };
    replies = [
      { role: 'assistant', content: '', tool_calls: [read] },
      { role: 'assistant', content: '', tool_calls: [read] },
      { role: 'assistant', content: '', tool_calls: [read] },
      { role: 'assistant', content: 'The board has 80 lines.' },
    ];
    const events = await chat({ prompt: 'look' });
    const results = events.filter((e) => e.type === 'tool_result') as Array<{ ok: boolean; text: string }>;
    expect(results.map((r) => r.ok)).toEqual([true, false, false]);
    // After two refused repeats the model is asked to answer, with no tools to call.
    expect(events.at(-2)).toEqual({ type: 'message', text: 'The board has 80 lines.' });
    const last = requests.at(-1) as unknown as { tools?: unknown; messages: Array<{ content: string }> };
    expect(last.tools).toBeUndefined();
    expect(last.messages[0]!.content).toContain('Stop calling tools');
    expect(results[1]!.text).toContain('already made this exact call');
    const canvas = requests.at(-2)!.messages.filter((m) => m.role === 'tool').at(-2)!;
    expect(canvas.content).toContain('[Cut off:');
  });

  it('rejects cross-site origins and answers local CORS preflight', async () => {
    const evil = await fetch(`${server.httpUrl}/assist/models`, { headers: { origin: 'https://evil.example' } });
    expect(evil.status).toBe(403);
    const preflight = await fetch(`${server.httpUrl}/assist/chat`, { method: 'OPTIONS', headers: { origin: 'http://localhost:5173' } });
    expect(preflight.status).toBe(204);
    expect(preflight.headers.get('access-control-allow-origin')).toBe('http://localhost:5173');
  });

  it('normalizes OLLAMA_HOST', () => {
    expect(ollamaUrlFrom(undefined)).toBe('http://127.0.0.1:11434');
    expect(ollamaUrlFrom('0.0.0.0')).toBe('http://0.0.0.0:11434');
    expect(ollamaUrlFrom('127.0.0.1:9999')).toBe('http://127.0.0.1:9999');
    expect(ollamaUrlFrom('http://box.local:11434')).toBe('http://box.local:11434');
  });
});
