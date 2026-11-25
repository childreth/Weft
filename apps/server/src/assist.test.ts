import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { assistLimits, isRepeating, ollamaUrlFrom, toolResultLimit, type AssistEvent } from './assist';
import { startGridServer, type GridServer } from './server';
import type { TraceRecord, TraceTurn } from './traces';

/**
 * A scripted stand-in for Ollama: replies are taken in order; requests are
 * recorded. A reply is sent whole, or, as `{ stream: [...] }`, the way Ollama
 * streams: one line per part, where a part is a piece of the message,
 * `{ wait: ms }` (the model writing something that never arrives),
 * `{ hang: true }` (it never finishes) or `{ error }` (Ollama failing the
 * stream partway). `{ status, error }` fails the request outright.
 */
let fake: Server;
let replies: Array<Record<string, unknown>> = [];
const requests: Array<{
  messages: Array<{ role: string; content: string; images?: string[] }>;
  tools: Array<{ function: { name: string; parameters: { properties?: object } } }>;
  think?: boolean | string;
}> = [];
/** Makes the fake refuse an effort level, like a model that only takes on/off. */
let refuseLevels = false;
/** What the fake reports as loaded (`/api/ps`): a model's name and the context it was loaded with. */
let loaded: Array<{ name: string; context_length: number }> = [];
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
            { name: 'gpt-oss:20b', size: 20, capabilities: ['completion', 'tools', 'thinking'] },
            { name: 'vision-only', size: 5, capabilities: ['completion', 'vision'] },
            { name: 'kimi:cloud', size: 100, capabilities: ['completion', 'tools', 'thinking'] },
            { name: 'qwen3-vl:235b-cloud', size: 200, remote_host: 'https://ollama.com:443', capabilities: ['completion', 'tools', 'vision'] },
            { name: 'lfm3-audio:latest', size: 2, capabilities: ['completion', 'audio', 'speech'] },
            { name: 'phonon:latest', size: 112, capabilities: ['speech'] },
          ],
        }),
      );
    }
    if (req.url === '/api/ps') return res.end(JSON.stringify({ models: loaded }));
    const chunks: Buffer[] = [];
    for await (const c of req) chunks.push(c as Buffer);
    if (req.url === '/v1/audio/speech') {
      const body = JSON.parse(Buffer.concat(chunks).toString()) as { model?: string; voice?: string };
      if (body.model?.startsWith('lfm3') && body.voice !== undefined && !body.voice.startsWith('female')) {
        res.statusCode = 400;
        return res.end(
          JSON.stringify({
            error: { message: `voice "${body.voice}" is not supported; use female or male, optionally followed by a language such as female-british-english or male-french (languages: british-english, french)` },
          }),
        );
      }
      if (!body.model?.startsWith('lfm3') && body.voice !== undefined && !['Miles', 'Zoey'].includes(body.voice)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: { message: `voice "${body.voice}" not found; available voices: Miles, Zoey, default` } }));
      }
      spoken.push(body);
      return res.end('RIFF-fake-wav');
    }
    const request = JSON.parse(Buffer.concat(chunks).toString());
    if (refuseLevels && typeof request.think === 'string') {
      res.statusCode = 400;
      return res.end(JSON.stringify({ error: 'think value "high" is not supported for this model' }));
    }
    requests.push(request);
    const reply = replies.shift() ?? { role: 'assistant', content: 'Done.' };
    if (typeof reply.status === 'number') {
      res.statusCode = reply.status;
      return res.end(JSON.stringify({ error: reply.error }));
    }
    if (!Array.isArray(reply.stream)) return res.end(JSON.stringify({ message: reply }));
    for (const part of reply.stream as Array<Record<string, unknown>>) {
      if (typeof part.wait === 'number') await new Promise((r) => setTimeout(r, part.wait as number));
      else if (part.hang) return void (await new Promise((r) => res.on('close', r)));
      else if (part.error) return res.end(`${JSON.stringify({ error: part.error })}\n`);
      else res.write(`${JSON.stringify({ message: { role: 'assistant', content: '', ...part }, done: false })}\n`);
    }
    res.end(`${JSON.stringify({ message: { role: 'assistant', content: '' }, done: true, done_reason: 'stop', ...(typeof reply.evalCount === 'number' && { eval_count: reply.evalCount }) })}\n`);
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
    const { models } = (await res.json()) as {
      models: Array<{ name: string; thinking: boolean; thinkLevels: boolean; cloud: boolean; vision: boolean }>;
    };
    expect(models.map((m) => m.name)).toEqual(['big:27b', 'gpt-oss:20b', 'small:1b', 'kimi:cloud', 'qwen3-vl:235b-cloud']);
    expect(models.map((m) => m.cloud)).toEqual([false, false, false, true, true]);
    expect(models.map((m) => m.thinking)).toEqual([true, true, false, true, false]);
    // Only some families take an effort level.
    expect(models.map((m) => m.thinkLevels)).toEqual([false, true, false, false, false]);
    expect(models[4]!.vision).toBe(true);
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

  it('thinks as chosen: off, on, a level where the model takes one, and shows the reasoning', async () => {
    const think = () => requests.at(-1)!.think;
    await chat({ prompt: 'hi', model: 'big:27b', think: 'on' });
    expect(think()).toBe(true);
    await chat({ prompt: 'hi', model: 'kimi:cloud', think: 'off' });
    expect(think()).toBe(false);
    // A level means "on" for a model that doesn't take levels.
    await chat({ prompt: 'hi', model: 'big:27b', think: 'high' });
    expect(think()).toBe(true);
    await chat({ prompt: 'hi', model: 'gpt-oss:20b', think: 'low' });
    expect(think()).toBe('low');
    // Models that can't think are never sent it, and junk is ignored.
    await chat({ prompt: 'hi', model: 'small:1b', think: 'on' });
    expect(think()).toBeUndefined();
    await chat({ prompt: 'hi', model: 'big:27b', think: 'lots' });
    expect(think()).toBe(false);

    // A refused level falls back to plain on.
    refuseLevels = true;
    try {
      await chat({ prompt: 'hi', model: 'gpt-oss:20b', think: 'high' });
      expect(think()).toBe(true);
    } finally {
      refuseLevels = false;
    }

    // Each step's reasoning is streamed before its result, and isn't sent back to the model.
    replies = [
      { role: 'assistant', content: '', thinking: '  The user wants the canvas read first.  ', tool_calls: [{ function: { name: 'list_tokens', arguments: {} } }] },
      { role: 'assistant', content: 'Nothing to change.', thinking: '' },
    ];
    const events = await chat({ prompt: 'look', model: 'big:27b', think: 'on' });
    expect(events.map((e) => e.type)).toEqual(['thinking', 'tool', 'tool_result', 'message', 'done']);
    expect(events[0]).toMatchObject({ type: 'thinking', text: 'The user wants the canvas read first.' });
    expect(typeof (events[0] as { ms: number }).ms).toBe('number');
    expect(JSON.stringify(requests.at(-1)!.messages)).not.toContain('canvas read first');

    // An answer given only in the reasoning becomes the reply, not "Done.".
    replies = [{ role: 'assistant', content: '', thinking: 'The button is #004ac6.' }];
    const answered = await chat({ prompt: 'what color?', model: 'big:27b', think: 'on' });
    expect(answered.map((e) => e.type)).toEqual(['message', 'done']);
    expect(answered[0]).toEqual({ type: 'message', text: 'The button is #004ac6.' });
  });

  it('reads a streamed reply: reasoning, tool calls and text arrive in pieces', async () => {
    replies = [
      { stream: [{ thinking: 'Read the ' }, { thinking: 'tokens first.' }, { tool_calls: [{ function: { name: 'list_tokens', arguments: {} } }] }] },
      { stream: [{ content: 'Nothing ' }, { content: 'to change.' }] },
    ];
    const events = await chat({ prompt: 'look', think: 'on' });
    expect(events.map((e) => e.type)).toEqual(['thinking', 'tool', 'tool_result', 'message', 'done']);
    expect(events[0]).toMatchObject({ text: 'Read the tokens first.' });
    expect(events[3]).toEqual({ type: 'message', text: 'Nothing to change.' });
    expect((requests.at(-1) as unknown as { stream: boolean }).stream).toBe(true);
  });

  it("says so when a tool call was lost, and asks the model to write it again", async () => {
    const saved = { ...assistLimits };
    assistLimits.swallowedMs = 40;
    const lastMessage = () => requests.at(-1)!.messages.at(-1)!;
    try {
      // The model reasons, writes a call Ollama can't parse (nothing arrives while it does), and stops.
      const lost = { stream: [{ thinking: 'Build all four components in one call.' }, { wait: 120 }] };
      replies = [lost, { role: 'assistant', content: '', tool_calls: [{ function: { name: 'list_tokens', arguments: {} } }] }, { role: 'assistant', content: 'Built the first one.' }];
      const events = await chat({ prompt: 'make components', think: 'on' });
      // Its plan is shown as reasoning, not passed off as the answer.
      expect(events.map((e) => e.type)).toEqual(['thinking', 'error', 'tool', 'tool_result', 'message', 'done']);
      expect(events[0]).toMatchObject({ text: 'Build all four components in one call.' });
      expect((events[1] as { message: string }).message).toMatch(/no tool call Weft could read/);
      // The retry ended with the nudge; the call after it didn't, and it was never kept.
      expect(requests.at(-2)!.messages.at(-1)).toMatchObject({ role: 'user', content: expect.stringContaining('could not be read') });
      // It carries the plan the model had reached: nothing else of the lost step is left for it to write again from.
      expect(requests.at(-2)!.messages.at(-1)!.content).toContain('Build all four components in one call.');
      expect(lastMessage().role).toBe('tool');
      expect(JSON.stringify(requests.at(-1)!.messages)).not.toContain('could not be read');

      // Lost again straight after the nudge: the turn stops and says why.
      replies = [lost, lost];
      const stopped = await chat({ prompt: 'make components', think: 'on' });
      expect(stopped.map((e) => e.type)).toEqual(['thinking', 'error', 'thinking', 'error', 'done']);
      expect((stopped[3] as { message: string }).message).toMatch(/^Stopped: the model again wrote a tool call/);

      // A model that doesn't think and sends back nothing at all: never "Done.".
      replies = [{ role: 'assistant', content: '' }, { role: 'assistant', content: 'Here you go.' }];
      const silent = await chat({ prompt: 'make components', model: 'small:1b' });
      expect(silent.map((e) => e.type)).toEqual(['error', 'message', 'done']);
      // With no reasoning to hand back, the nudge doesn't pretend there was any.
      expect(requests.at(-1)!.messages.at(-1)!.content).not.toContain('worked out');

      // Long reasoning goes back as its end, where the plan is.
      const long = `${'Looking at the rows. '.repeat(400)}So: one update_nodes call for f_plan.`;
      replies = [{ stream: [{ thinking: long }, { wait: 120 }] }, { role: 'assistant', content: 'Converted.' }];
      await chat({ prompt: 'make components', think: 'on' });
      const nudge = requests.at(-1)!.messages.at(-1)!.content;
      expect(nudge).toContain('one update_nodes call for f_plan.');
      expect(nudge.length).toBeLessThan(7000);
      expect(silent[1]).toEqual({ type: 'message', text: 'Here you go.' });

      // Ollama refusing a call it can't parse (Inkling 2) is the same lost call, not the end of the turn:
      // before the reply starts, and partway through it, with a call it had read already dropped too.
      const parserError = "invalid Inkling2 tool call: invalid character ']' after object key:value pair";
      for (const refused of [
        { status: 500, error: parserError },
        { stream: [{ thinking: 'Set the tokens, then build the home screen.' }, { tool_calls: [{ function: { name: 'list_tokens', arguments: {} } }] }, { error: parserError }] },
      ]) {
        replies = [refused, { role: 'assistant', content: 'Built it.' }];
        const retried = await chat({ prompt: 'make a health app', think: 'on' });
        expect(retried.filter((e) => e.type !== 'thinking').map((e) => e.type)).toEqual(['error', 'message', 'done']);
        expect(retried.find((e) => e.type === 'error')).toMatchObject({ message: expect.stringMatching(/no tool call Weft could read/) });
        expect(requests.at(-1)!.messages.at(-1)!.content).toContain('could not be read');
      }
      expect(requests.at(-1)!.messages.at(-1)!.content).toContain('Set the tokens, then build the home screen.');

      // An answer given only in the reasoning, with no pause after it, is still the reply.
      replies = [{ stream: [{ thinking: 'The button is #004ac6.' }] }];
      const answered = await chat({ prompt: 'what color?', think: 'on' });
      expect(answered[0]).toEqual({ type: 'message', text: 'The button is #004ac6.' });
    } finally {
      Object.assign(assistLimits, saved);
    }
  });

  it('stops a step that runs too long, with what the model had reasoned', async () => {
    const saved = { ...assistLimits };
    assistLimits.stepMs = 150;
    try {
      replies = [{ stream: [{ thinking: 'Wait, let me plan this again.' }, { hang: true }] }];
      const events = await chat({ prompt: 'make components', think: 'on' });
      expect(events.map((e) => e.type)).toEqual(['thinking', 'error', 'done']);
      expect(events[0]).toMatchObject({ text: 'Wait, let me plan this again.' });
      expect((events[1] as { message: string }).message).toMatch(/^Stopped: big:27b spent .* on one step without finishing \(its reasoning so far is above\)/);
      // The session is free for the next request.
      const next = await chat({ prompt: 'hi' });
      expect(next.at(-2)).toEqual({ type: 'message', text: 'Done.' });
    } finally {
      Object.assign(assistLimits, saved);
    }
  });

  it('stops a model that is writing the same lines over and over, long before the step limit', async () => {
    // What gemma4 did for 10 minutes: a little real reasoning, then one sentence without end.
    const line = "Actually, I'll try get_canvas with detail full and look for the Initiative row nodes.\n\n";
    replies = [{ stream: [{ thinking: 'The list is not on this artboard. ' }, ...Array.from({ length: 40 }, () => ({ thinking: line })), { hang: true }] }];
    const events = await chat({ prompt: 'make components', think: 'on' });
    expect(events.map((e) => e.type)).toEqual(['thinking', 'error', 'done']);
    expect((events[0] as { text: string }).text).toMatch(/^The list is not on this artboard\./);
    expect((events[1] as { message: string }).message).toMatch(/^Stopped: big:27b got stuck writing the same lines over and over in its reasoning/);
    // The same in a reply.
    replies = [{ stream: [...Array.from({ length: 40 }, () => ({ content: line })), { hang: true }] }];
    const reply = await chat({ prompt: 'make components' });
    expect((reply.at(-2) as { message: string }).message).toMatch(/in its reply, so Weft ended the step/);
    // The session is free for the next request.
    expect((await chat({ prompt: 'hi' })).at(-2)).toEqual({ type: 'message', text: 'Done.' });
  });

  it('tells a loop from reasoning that only looks repetitive', () => {
    const sentence = 'Wait, I will read the canvas again and look for the rows.\n';
    expect(isRepeating(`Some thought first. ${sentence.repeat(30)}`)).toBe(true);
    // A short stretch has to come round many more times before it counts.
    expect(isRepeating(`Some thought first. ${'No.\n'.repeat(400)}`)).toBe(true);
    // A long one counts after six rounds, not two.
    const paragraph = `${'Check the header, then the list, then the footer, and compare each with the component. '.repeat(4)}\n`;
    expect(isRepeating(`Start. ${paragraph.repeat(2)}`)).toBe(false);
    expect(isRepeating(`Start. ${paragraph.repeat(8)}`)).toBe(true);
    // Not loops: a few repeats, look-alike lines that differ, and a loop the model got out of.
    expect(isRepeating(sentence.repeat(5))).toBe(false);
    expect(isRepeating(Array.from({ length: 80 }, (_, i) => `Row ${i}: li, same styles as the component, text differs.`).join('\n'))).toBe(false);
    expect(isRepeating(`${sentence.repeat(30)}Right: the rows are in the Day list, so convert those.`)).toBe(false);
    expect(isRepeating('')).toBe(false);
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
      { role: 'assistant', content: 'I renamed it.' },
    ];
    const events = await chat({ prompt: 'rename nope' });
    expect(events.find((e) => e.type === 'tool_result')).toMatchObject({ ok: false });
    expect(requests.at(-1)!.messages.at(-1)).toMatchObject({ role: 'tool' });
    // Every edit was refused: the reply's claim is followed by what really happened.
    expect(events.at(-2)).toMatchObject({ type: 'error', message: expect.stringContaining('Nothing was changed') });
    expect(events.at(-1)).toEqual({ type: 'done', edits: 0 });
  });

  it('says nothing extra when a refused edit was followed by one that worked', async () => {
    const id = server.rooms.get('assist').doc.createNode({ type: 'frame', name: 'Box', frame: { x: 0, y: 0, width: 100, height: 100 } });
    replies = [
      { role: 'assistant', content: '', tool_calls: [{ function: { name: 'update_nodes', arguments: { updates: [{ id: 'nope', name: 'x' }] } } }] },
      { role: 'assistant', content: '', tool_calls: [{ function: { name: 'update_nodes', arguments: { updates: [{ id, name: 'Card' }] } } }] },
      { role: 'assistant', content: 'Renamed it to Card.' },
    ];
    const events = await chat({ prompt: 'rename the box' });
    expect(events.some((e) => e.type === 'error')).toBe(false);
    expect(events.at(-1)).toEqual({ type: 'done', edits: 1 });
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
    expect(canvas.content).toContain('showing the first 8000');
  });

  it('lets a model loaded with a large context read more of a tool result', async () => {
    // The board from the test above: its read is far longer than 8,000 characters.
    const read = { function: { name: 'get_canvas', arguments: { maxDepth: 11 } } };
    const toolResult = () => requests.at(-1)!.messages.filter((m) => m.role === 'tool').at(-1)!.content;
    try {
      loaded = [{ name: 'big:27b', context_length: 131072 }];
      replies = [{ role: 'assistant', content: '', tool_calls: [read] }, { role: 'assistant', content: 'Read it.' }];
      await chat({ prompt: 'look again', session: 'context-session-1' });
      expect(toolResult()).toContain('Line 79');
      expect(toolResult()).not.toContain('[Cut off:');
      // Another model being loaded says nothing about this one.
      loaded = [{ name: 'small:1b', context_length: 131072 }];
      replies = [{ role: 'assistant', content: '', tool_calls: [read] }, { role: 'assistant', content: 'Read it.' }];
      await chat({ prompt: 'look again', session: 'context-session-2' });
      expect(toolResult()).toContain('showing the first 8000');
    } finally {
      loaded = [];
    }
    // A tenth of the context, in characters: never under the old 8,000, never over what cloud models get.
    expect(toolResultLimit(undefined)).toBe(8000);
    expect(toolResultLimit(8192)).toBe(8000);
    expect(toolResultLimit(32768)).toBe(9830);
    expect(toolResultLimit(65536)).toBe(19661);
    expect(toolResultLimit(131072)).toBe(39322);
    expect(toolResultLimit(262144)).toBe(60000);
  });

  it('rejects cross-site origins and answers local CORS preflight', async () => {
    const evil = await fetch(`${server.httpUrl}/assist/models`, { headers: { origin: 'https://evil.example' } });
    expect(evil.status).toBe(403);
    const preflight = await fetch(`${server.httpUrl}/assist/chat`, { method: 'OPTIONS', headers: { origin: 'http://localhost:5173' } });
    expect(preflight.status).toBe(204);
    expect(preflight.headers.get('access-control-allow-origin')).toBe('http://localhost:5173');
  });

  it('reports every speech model with its voices, and speaks through the one asked for', async () => {
    const { speech } = (await (await fetch(`${server.httpUrl}/assist/models`)).json()) as { speech: Array<{ model: string; voices: string[] }> };
    // Phonon first, whatever order Ollama lists them in.
    expect(speech).toEqual([
      { model: 'phonon:latest', voices: ['default', 'Miles', 'Zoey'] },
      {
        model: 'lfm3-audio:latest',
        voices: ['default', 'female', 'male', 'female-british-english', 'male-british-english', 'female-french', 'male-french'],
      },
    ]);

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

    await say({ text: 'Hi.', model: 'lfm3-audio:latest', voice: 'female-french' });
    expect(spoken.at(-1)).toMatchObject({ model: 'lfm3-audio:latest', voice: 'female-french' });
    // A voice belongs to its model: another model's voice falls back to the default.
    await say({ text: 'Hi.', model: 'lfm3-audio:latest', voice: 'Miles' });
    expect(spoken.at(-1)).toMatchObject({ model: 'lfm3-audio:latest' });
    expect(spoken.at(-1)).not.toHaveProperty('voice');
    // A model that isn't installed can't be asked for by name.
    await say({ text: 'Hi.', model: 'big:27b' });
    expect(spoken.at(-1)).toMatchObject({ model: 'phonon:latest' });
  });

  it('normalizes OLLAMA_HOST', () => {
    expect(ollamaUrlFrom(undefined)).toBe('http://127.0.0.1:11434');
    expect(ollamaUrlFrom('0.0.0.0')).toBe('http://0.0.0.0:11434');
    expect(ollamaUrlFrom('127.0.0.1:9999')).toBe('http://127.0.0.1:9999');
    expect(ollamaUrlFrom('http://box.local:11434')).toBe('http://box.local:11434');
  });
});

describe('assist traces', () => {
  let traced: GridServer;
  let dir: string;
  const read = async (): Promise<TraceRecord[]> => {
    await traced.traces!.flushed();
    return readdirSync(dir).flatMap((f) => readFileSync(join(dir, f), 'utf8').trim().split('\n').map((l) => JSON.parse(l) as TraceRecord));
  };
  const say = (body: Record<string, unknown>) =>
    fetch(`${traced.httpUrl}/assist/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ doc: 'traced', session: 'trace-session-1', model: 'big:27b', ...body }),
    }).then((r) => r.text());

  beforeAll(async () => {
    dir = mkdtempSync(join(tmpdir(), 'weft-traces-'));
    traced = await startGridServer({ port: 0, dataDir: null, traceDir: dir, ollamaUrl: `http://127.0.0.1:${(fake.address() as AddressInfo).port}` });
  });
  afterAll(async () => {
    await traced.close();
    rmSync(dir, { recursive: true, force: true });
  });

  it('writes a turn as the model saw it, and marks it when the user undoes it', async () => {
    replies = [
      {
        role: 'assistant',
        content: '',
        thinking: 'One artboard with a heading.',
        tool_calls: [{ function: { name: 'create_nodes', arguments: { nodes: [{ type: 'frame', name: 'Traced', frame: { x: 0, y: 0, width: 390 }, children: [{ type: 'text', tag: 'h1', text: 'Hi' }] }] } } }],
      },
      { role: 'assistant', content: 'Added a page.' },
    ];
    await say({ prompt: 'make a page', think: 'on' });
    const [turn] = (await read()) as TraceTurn[];
    expect(turn).toMatchObject({ type: 'turn', doc: 'traced', model: 'big:27b', cloud: false, think: 'on', outcome: 'answered', edits: 1, refused: 0, notices: [] });
    expect(turn!.messages.map((m) => m.role)).toEqual(['system', 'user', 'assistant', 'tool', 'assistant']);
    expect(turn!.messages[0]!.content).toContain('You are the assistant built into the Weft editor');
    // The reasoning is kept beside the reply it led to; arguments are kept as the objects the tool got.
    expect(turn!.messages[2]).toMatchObject({ thinking: 'One artboard with a heading.', tool_calls: [{ function: { name: 'create_nodes', arguments: { nodes: [{ name: 'Traced' }] } } }] });
    expect(turn!.messages[3]).toMatchObject({ role: 'tool', tool_name: 'create_nodes' });
    expect(turn!.messages[4]).toEqual({ role: 'assistant', content: 'Added a page.' });
    expect(turn!.tools.length).toBeGreaterThan(5);

    await fetch(`${traced.httpUrl}/assist/undo`, { method: 'POST', body: JSON.stringify({ session: 'trace-session-1' }) });
    expect((await read()).at(-1)).toMatchObject({ type: 'undo', turn: turn!.id, undone: 1 });
  });

  it('says how a turn that went wrong ended', async () => {
    replies = [
      { role: 'assistant', content: '', tool_calls: [{ function: { name: 'update_nodes', arguments: { updates: [{ id: 'nope', text: 'x' }] } } }] },
      { role: 'assistant', content: 'That node does not exist.' },
    ];
    await say({ prompt: 'rename nope' });
    expect((await read()).at(-1)).toMatchObject({ type: 'turn', outcome: 'answered', refused: 1, edits: 0 });

    // A call that never arrives, twice: the turn stops with a reason.
    // After a read, one dropped and one refused: the turn stops, and the trace says where each was lost and how big.
    const lost = { stream: [{ thinking: 'Build it all in one call.' }, { wait: 120 }], evalCount: 4200 };
    const swallowed = assistLimits.swallowedMs;
    assistLimits.swallowedMs = 50;
    try {
      replies = [
        { role: 'assistant', content: '', tool_calls: [{ function: { name: 'get_canvas', arguments: { detail: 'outline' } } }] },
        lost,
        { status: 500, error: "invalid Inkling2 tool call: invalid character ']' after object key:value pair" },
      ];
      await say({ prompt: 'build four components' });
    } finally {
      assistLimits.swallowedMs = swallowed;
    }
    const last = (await read()).at(-1) as TraceTurn;
    expect(last.outcome).toBe('error');
    expect(last.error).toBeTruthy();
    expect(last.notices.length).toBeGreaterThan(0);
    expect(last.lost).toEqual([
      { step: 1, after: 'get_canvas', how: 'dropped', ms: expect.any(Number), tokens: 4200, thinking: 'Build it all in one call.' },
      { step: 2, after: 'get_canvas', how: 'refused', error: expect.stringContaining("invalid character ']'"), ms: expect.any(Number) },
    ]);
    expect(last.lost![0]!.ms).toBeGreaterThanOrEqual(100);
  });
});

describe('assist with the small profile', () => {
  let traced: GridServer;
  let dir: string;

  beforeAll(async () => {
    dir = mkdtempSync(join(tmpdir(), 'weft-profile-'));
    traced = await startGridServer({ port: 0, dataDir: null, traceDir: dir, ollamaUrl: `http://127.0.0.1:${(fake.address() as AddressInfo).port}` });
  });
  afterAll(async () => {
    await traced.close();
    rmSync(dir, { recursive: true, force: true });
  });

  it('sends a model built for Weft the short prompt, the quick-fix tools and layout styles, and records the full selection', async () => {
    const doc = traced.rooms.get('profile').doc;
    const page = doc.createNode({ type: 'frame', name: 'Page', frame: { x: 0, y: 0, width: 390, height: 600 } });
    const row = doc.createNode({ type: 'frame', tag: 'li', parentId: page, name: 'Row', styles: { display: 'grid', gap: '8px', color: 'var(--color-primary)' } });
    const ask = (model: string, profile?: string) =>
      fetch(`${traced.httpUrl}/assist/chat`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ doc: 'profile', session: 'profile-session-1', model, prompt: 'make it flex', selection: [row], ...(profile && { profile }) }),
      }).then((r) => r.text());

    await ask('weft-fix:270m');
    const sent = requests.at(-1)!;
    expect(sent.tools.map((t) => t.function.name).sort()).toEqual(['create_nodes', 'delete_nodes', 'get_canvas', 'get_layout', 'update_nodes']);
    expect(sent.messages[0]!.content).toMatch(/^You make small fixes/);
    expect(sent.messages[0]!.content).toContain('"gap":"8px"');
    expect(sent.messages[0]!.content).not.toContain('color-primary');
    expect(JSON.stringify(sent.tools)).not.toContain('$schema');
    // The tools a tuned model was trained on: create_nodes' flat list came later.
    const create = JSON.stringify(sent.tools.find((t) => t.function.name === 'create_nodes'));
    expect(create).toContain('"children"');
    expect(create).not.toMatch(/"(key|parent)":/);

    await traced.traces!.flushed();
    const [turn] = readdirSync(dir).flatMap((f) => readFileSync(join(dir, f), 'utf8').trim().split('\n').map((l) => JSON.parse(l) as TraceTurn));
    expect(turn).toMatchObject({ profile: 'small', selected: [{ id: row, styles: { color: 'var(--color-primary)' } }] });

    // Any model can be sent the small prompt, and a tuned one the full prompt.
    await ask('big:27b', 'small');
    expect(requests.at(-1)!.messages[0]!.content).toMatch(/^You make small fixes/);
    await ask('weft-fix:270m', 'full');
    expect(requests.at(-1)!.messages[0]!.content).toContain('You are the assistant built into the Weft editor');
  });
});

describe('without traces', () => {
  it('writes nothing', () => {
    expect(server.traces).toBeUndefined();
  });
});
