import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ollamaUrlFrom, type AssistEvent } from './assist';
import { startGridServer, type GridServer } from './server';

/** A scripted stand-in for Ollama: replies are taken in order; requests are recorded. */
let fake: Server;
let replies: Array<Record<string, unknown>> = [];
const requests: Array<{
  messages: Array<{ role: string; content: string; images?: string[] }>;
  tools: Array<{ function: { name: string; parameters: { properties?: object } } }>;
  think?: boolean;
}> = [];
const spoken: Array<Record<string, unknown>> = [];
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
            { name: 'kimi:cloud', size: 100, capabilities: ['completion', 'tools', 'thinking'] },
            { name: 'qwen3-vl:235b-cloud', size: 200, remote_host: 'https://ollama.com:443', capabilities: ['completion', 'tools', 'vision'] },
            { name: 'phonon:latest', size: 112, capabilities: ['speech'] },
          ],
        }),
      );
    }
    const chunks: Buffer[] = [];
    for await (const c of req) chunks.push(c as Buffer);
    if (req.url === '/v1/audio/speech') {
      const body = JSON.parse(Buffer.concat(chunks).toString()) as { voice?: string };
      if (body.voice !== undefined && !['Miles', 'Zoey'].includes(body.voice)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: { message: `voice "${body.voice}" not found; available voices: Miles, Zoey, default` } }));
      }
      spoken.push(body);
      return res.end('RIFF-fake-wav');
    }
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
  it('lists tool-capable models: local ones largest first, then cloud ones', async () => {
    const res = await fetch(`${server.httpUrl}/assist/models`);
    const { models } = (await res.json()) as { models: Array<{ name: string; thinking: boolean; cloud: boolean; vision: boolean }> };
    expect(models.map((m) => m.name)).toEqual(['big:27b', 'small:1b', 'kimi:cloud', 'qwen3-vl:235b-cloud']);
    expect(models.map((m) => m.cloud)).toEqual([false, false, true, true]);
    expect(models[0]!.thinking).toBe(true);
    expect(models[3]!.vision).toBe(true);
  });

  it('gives cloud models the skill, screenshots when they can see, and their reasoning', async () => {
    const names = () => requests.at(-1)!.tools.map((t) => t.function.name);
    await chat({ prompt: 'hi', model: 'big:27b' });
    expect(names()).not.toContain('read_skill');
    expect(requests.at(-1)!.think).toBe(false);
    expect(requests.at(-1)!.messages[0]!.content).toContain('running on a local model');

    await chat({ prompt: 'hi', model: 'kimi:cloud' });
    expect(names()).toContain('read_skill');
    expect(names()).not.toContain('get_screenshot');
    expect(requests.at(-1)!.think).toBeUndefined();
    expect(requests.at(-1)!.messages[0]!.content).toContain('running on a cloud model');

    replies = [
      { role: 'assistant', content: '', tool_calls: [{ function: { name: 'read_skill', arguments: {} } }] },
      { role: 'assistant', content: 'Read it.' },
    ];
    await chat({ prompt: 'design a page', model: 'qwen3-vl:235b-cloud' });
    expect(names()).toContain('get_screenshot');
    // The whole skill fits: no cut-off at the local limit.
    const skill = requests.at(-1)!.messages.at(-1)!;
    expect(skill).toMatchObject({ role: 'tool' });
    expect(skill.content.length).toBeGreaterThan(8000);
    expect(skill.content).not.toContain('[Cut off:');
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

  it('parses array and object arguments a model sent as JSON strings', async () => {
    const doc = server.rooms.get('assist').doc;
    replies = [
      {
        role: 'assistant',
        content: '',
        tool_calls: [
          {
            function: {
              name: 'create_nodes',
              arguments: {
                nodes: JSON.stringify([{ type: 'frame', name: 'Listing', frame: { x: 0, y: 900, width: 390 }, children: [{ type: 'text', tag: 'h1', text: 'BMW M2' }] }]),
              },
            },
          },
        ],
      },
      { role: 'assistant', content: 'Added the listing.' },
    ];
    const events = await chat({ prompt: 'make a listing page' });
    expect(events.find((e) => e.type === 'tool_result')).toMatchObject({ ok: true });
    const board = doc.getNodes().find((n) => n.name === 'Listing');
    expect(board).toBeDefined();
    expect(doc.getChildren(board!.id).map((n) => n.text)).toEqual(['BMW M2']);
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

  it('reports the speech model and speaks text through it', async () => {
    const { speech } = (await (await fetch(`${server.httpUrl}/assist/models`)).json()) as { speech: { model: string; voices: string[] } };
    expect(speech).toEqual({ model: 'phonon:latest', voices: ['default', 'Miles', 'Zoey'] });

    const say = (body: Record<string, unknown>) =>
      fetch(`${server.httpUrl}/assist/speak`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const res = await say({ text: 'Made the title larger.', voice: 'Miles' });
    expect(res.headers.get('content-type')).toBe('audio/wav');
    expect(await res.text()).toBe('RIFF-fake-wav');
    expect(spoken.at(-1)).toMatchObject({ model: 'phonon:latest', input: 'Made the title larger.', voice: 'Miles', response_format: 'wav' });
    // An unknown voice falls back to the default instead of failing.
    await say({ text: 'Hi.', voice: 'Nobody' });
    expect(spoken.at(-1)).not.toHaveProperty('voice');
    expect((await say({ text: '' })).status).toBe(400);
  });

  it('normalizes OLLAMA_HOST', () => {
    expect(ollamaUrlFrom(undefined)).toBe('http://127.0.0.1:11434');
    expect(ollamaUrlFrom('0.0.0.0')).toBe('http://0.0.0.0:11434');
    expect(ollamaUrlFrom('127.0.0.1:9999')).toBe('http://127.0.0.1:9999');
    expect(ollamaUrlFrom('http://box.local:11434')).toBe('http://box.local:11434');
  });
});
