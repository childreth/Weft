import { expect, test, type Page, type Route } from '@playwright/test';

/** A server-backed document (assist needs the server); the assist routes are stubbed per test. */
async function open(page: Page, models: Route['fulfill'] extends (o: infer O) => unknown ? O : never) {
  await page.route('**/assist/models', (route) => route.fulfill(models));
  await page.goto(`/?doc=assist-${test.info().workerIndex}-${Date.now()}`);
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
}

const MODELS = {
  json: {
    models: [
      { name: 'qwen3.8:27b-mlx', size: 18e9, thinking: true, vision: false, cloud: false },
      { name: 'granite4.1:3b', size: 2e9, thinking: false, vision: false, cloud: false },
    ],
  },
};

test('prompt streams tool steps and the reply; Undo reverts the turn', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  let chatBody: Record<string, unknown> = {};
  await page.route('**/assist/chat', (route) => {
    chatBody = route.request().postDataJSON();
    const events = [
      { type: 'tool', name: 'update_nodes', args: {} },
      { type: 'tool_result', name: 'update_nodes', ok: false, text: 'Unknown style property "borderLeft"' },
      { type: 'tool', name: 'update_nodes', args: {} },
      { type: 'tool_result', name: 'update_nodes', ok: true, text: '{}' },
      { type: 'message', text: 'Stacked the cards in one column:\n- **Grid**: one column (`gridTemplateColumns: 1fr`).\n- **Gap**: `var(--space-4)` between cards.' },
      { type: 'done', edits: 1 },
    ];
    return route.fulfill({ contentType: 'application/x-ndjson', body: events.map((e) => JSON.stringify(e)).join('\n') + '\n' });
  });
  let undone = false;
  await page.route('**/assist/undo', (route) => {
    undone = true;
    return route.fulfill({ json: { undone: 1 } });
  });
  await open(page, MODELS);

  const features = await page.evaluate(() => {
    const id = window.weft.doc.getNodes().find((n) => n.name === 'Features')!.id;
    window.weft.editor.getState().select([id]);
    return id;
  });
  const input = page.getByLabel('Ask the model');
  await expect(input).toHaveAttribute('placeholder', 'Ask the local model to edit Features…');
  await expect(page.getByLabel('Assist model')).toHaveValue('qwen3.8:27b-mlx');
  await page.getByLabel('Assist model').selectOption('granite4.1:3b');

  // Shift+Enter starts a new line; Enter sends.
  await input.fill('stack');
  await input.press('Shift+Enter');
  await expect(input).toHaveValue('stack\n');
  await input.fill('stack these');
  await input.press('Enter');
  const log = page.getByTestId('assist-log');
  await expect(log).toContainText('Stacked the cards in one column:');
  // Replies render their Markdown.
  await expect(log.locator('.is-reply li')).toHaveCount(2);
  await expect(log.locator('.is-reply strong').first()).toHaveText('Grid');
  await expect(log.locator('.is-reply code').first()).toHaveText('gridTemplateColumns: 1fr');
  await expect(log).toContainText('Unknown style property "borderLeft"');
  await expect(log.locator('.is-failed')).toHaveCount(1);
  expect(chatBody).toMatchObject({ prompt: 'stack these', model: 'granite4.1:3b', selection: [features] });
  expect(typeof chatBody.session).toBe('string');

  // Each message copies its text; a reply copies its Markdown source.
  const reply = log.locator('.gf-assist-message.is-reply').first();
  await reply.hover();
  await expect(reply.getByRole('button', { name: 'Copy message' })).toBeVisible();
  await page.screenshot({ path: 'test-results/m3-assist.png' });
  await reply.getByRole('button', { name: 'Copy message' }).click();
  await expect(reply.getByRole('button', { name: 'Copy message' })).toHaveText('Copied');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain('- **Grid**: one column');

  await page.getByRole('button', { name: 'Undo assist change' }).click();
  await expect(log).toContainText('Undid 1 change.');
  expect(undone).toBe(true);
  await expect(page.getByRole('button', { name: 'Undo assist change' })).toBeDisabled();

  // The model choice is remembered.
  await page.reload();
  await expect(page.getByLabel('Assist model')).toHaveValue('granite4.1:3b');
});

test('cloud models are grouped apart, never picked by default, and flagged when chosen', async ({ page }) => {
  const cloud = { name: 'gpt-oss:120b-cloud', size: 0, thinking: true, vision: false, cloud: true };
  await open(page, { json: { models: [cloud, ...MODELS.json.models] } });
  const select = page.getByLabel('Assist model');
  await expect(select).toHaveValue('qwen3.8:27b-mlx');
  await expect(select.locator('optgroup')).toHaveCount(2);
  await expect(select.locator('optgroup').first()).toHaveAttribute('label', 'Local · on this machine');
  await expect(select.locator('optgroup[label="Cloud · ollama.com"] option')).toHaveText(['☁ gpt-oss:120b-cloud']);
  await expect(page.getByTestId('assist-cloud')).toHaveCount(0);

  await select.selectOption('gpt-oss:120b-cloud');
  await expect(page.getByTestId('assist-cloud')).toBeVisible();
  await expect(page.getByLabel('Ask the model')).toHaveAttribute('placeholder', /^Ask the cloud model/);
  await page.screenshot({ path: 'test-results/m3-assist-cloud.png' });
});

test('thinking models get a Thinking menu (levels where the model takes them), remembered per model; reasoning folds into the log', async ({ page }) => {
  const bodies: Array<Record<string, unknown>> = [];
  await page.route('**/assist/chat', (route) => {
    bodies.push(route.request().postDataJSON());
    const events = [
      { type: 'thinking', text: 'The headline is the h1 in Hero. A theme font change belongs in set_tokens, not on the layer.', ms: 4200 },
      { type: 'tool', name: 'list_tokens', args: {} },
      { type: 'tool_result', name: 'list_tokens', ok: true, text: '{}' },
      { type: 'message', text: 'Pointed the theme’s heading font at Comic Neue.' },
      { type: 'done', edits: 1 },
    ];
    return route.fulfill({ contentType: 'application/x-ndjson', body: events.map((e) => JSON.stringify(e)).join('\n') + '\n' });
  });
  const granite = { name: 'granite4.2:8b', size: 5.3e9, thinking: true, thinkLevels: true, vision: false, cloud: false };
  const cloud = { name: 'kimi-k3:cloud', size: 0, thinking: true, thinkLevels: false, vision: false, cloud: true };
  await open(page, { json: { models: [granite, ...MODELS.json.models.map((m) => ({ ...m, thinkLevels: false })), cloud] } });
  const model = page.getByLabel('Assist model');
  const thinking = page.getByLabel('Thinking');

  // Local models start with thinking off; a model that takes levels offers them.
  await expect(model).toHaveValue('granite4.2:8b');
  await expect(thinking).toHaveValue('off');
  await expect(thinking.locator('option')).toHaveText(['Think: off', 'Think: low', 'Think: medium', 'Think: high']);
  await thinking.selectOption('high');

  // Other thinking models offer on/off; cloud ones start on; models that can't think have no menu.
  await model.selectOption('qwen3.8:27b-mlx');
  await expect(thinking.locator('option')).toHaveText(['Think: off', 'Think: on']);
  await expect(thinking).toHaveValue('off');
  await model.selectOption('kimi-k3:cloud');
  await expect(thinking).toHaveValue('on');
  await model.selectOption('granite4.1:3b');
  await expect(thinking).toHaveCount(0);

  // Each model keeps its choice, and the prompt carries it.
  await model.selectOption('granite4.2:8b');
  await expect(thinking).toHaveValue('high');
  await page.getByLabel('Ask the model').fill('use comic sans for the bubblegum headline');
  await page.getByLabel('Ask the model').press('Enter');
  const log = page.getByTestId('assist-log');
  await expect(log).toContainText('Pointed the theme’s heading font at Comic Neue.');
  expect(bodies[0]).toMatchObject({ model: 'granite4.2:8b', think: 'high' });

  // Reasoning shows as one collapsed line that opens.
  const thought = log.locator('.is-thinking');
  await expect(thought.locator('summary')).toHaveText('Thought for 4s');
  await expect(thought.locator('.gf-assist-thought')).toBeHidden();
  await thought.locator('summary').click();
  await expect(thought.locator('.gf-assist-thought')).toContainText('belongs in set_tokens');
  await page.screenshot({ path: 'test-results/m3-assist-thinking.png' });

  // A model that can't think is never sent a choice.
  await model.selectOption('granite4.1:3b');
  await page.getByLabel('Ask the model').fill('again');
  await page.getByLabel('Ask the model').press('Enter');
  await expect.poll(() => bodies.length).toBe(2);
  expect(bodies[1]).not.toHaveProperty('think');

  // The choice survives a reload.
  await page.reload();
  await expect(page.getByLabel('Assist model')).toHaveValue('granite4.1:3b');
  await page.getByLabel('Assist model').selectOption('granite4.2:8b');
  await expect(page.getByLabel('Thinking')).toHaveValue('high');
});

/** A silent WAV, so the browser has something real to play. */
function silentWav(ms = 200): Buffer {
  const rate = 24000;
  const samples = Math.round((rate * ms) / 1000);
  const wav = Buffer.alloc(44 + samples * 2);
  wav.write('RIFF', 0);
  wav.writeUInt32LE(36 + samples * 2, 4);
  wav.write('WAVEfmt ', 8);
  wav.writeUInt32LE(16, 16);
  wav.writeUInt16LE(1, 20);
  wav.writeUInt16LE(1, 22);
  wav.writeUInt32LE(rate, 24);
  wav.writeUInt32LE(rate * 2, 28);
  wav.writeUInt16LE(2, 32);
  wav.writeUInt16LE(16, 34);
  wav.write('data', 36);
  wav.writeUInt32LE(samples * 2, 40);
  return wav;
}

test('replies can be spoken with a local speech model: toggle, voice, plain text', async ({ page }) => {
  const spoken: Array<{ text: string; voice: string; model: string }> = [];
  await page.route('**/assist/speak', (route) => {
    spoken.push(route.request().postDataJSON());
    return route.fulfill({ contentType: 'audio/wav', body: silentWav() });
  });
  await page.route('**/assist/chat', (route) => {
    const events = [
      { type: 'message', text: 'Stacked the cards:\n- **Grid**: one column, gap `var(--space-4)`.' },
      { type: 'done', edits: 0 },
    ];
    return route.fulfill({ contentType: 'application/x-ndjson', body: events.map((e) => JSON.stringify(e)).join('\n') + '\n' });
  });
  await open(page, { json: { ...MODELS.json, speech: [{ model: 'phonon:latest', voices: ['default', 'Miles', 'Zoey'] }] } });

  const toggle = page.getByRole('button', { name: 'Speak replies' });
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByLabel('Voice')).toHaveCount(0);
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page.getByLabel('Voice').selectOption('Miles');
  // With one speech model there's nothing to choose.
  await expect(page.getByLabel('Speech model')).toHaveCount(0);

  const input = page.getByLabel('Ask the model');
  await input.fill('stack these');
  await input.press('Enter');
  await expect(page.getByTestId('assist-log')).toContainText('Stacked the cards');
  // Spoken as plain sentences: no Markdown symbols, tokens by name.
  await expect.poll(() => spoken.length).toBe(1);
  expect(spoken[0]).toEqual({ text: 'Stacked the cards: Grid: one column, gap space 4.', voice: 'Miles', model: 'phonon:latest' });
  await page.screenshot({ path: 'test-results/m3-assist-speech.png' });
  await expect(page.getByTestId('assist-log')).not.toContainText('Speech:');

  // Any reply can be read again; the choices are remembered.
  const reply = page.locator('.gf-assist-message.is-reply').first();
  await reply.hover();
  await reply.getByRole('button', { name: 'Speak message' }).click();
  await expect.poll(() => spoken.length).toBe(2);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Speak replies' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByLabel('Voice')).toHaveValue('Miles');
});

test('replies can be spoken by any installed speech model, each with its own voices, and the choice is remembered', async ({ page }) => {
  const spoken: Array<{ text: string; voice: string; model: string }> = [];
  await page.route('**/assist/speak', (route) => {
    spoken.push(route.request().postDataJSON());
    return route.fulfill({ contentType: 'audio/wav', body: silentWav() });
  });
  await page.route('**/assist/chat', (route) =>
    route.fulfill({
      contentType: 'application/x-ndjson',
      body: [{ type: 'message', text: 'Done.' }, { type: 'done', edits: 0 }].map((e) => JSON.stringify(e)).join('\n') + '\n',
    }),
  );
  // Saved before there was a choice of model: it still applies to Phonon.
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('seeded')) {
      localStorage.setItem('weft:assist-voice', 'Miles');
      sessionStorage.setItem('seeded', '1');
    }
  });
  await open(page, {
    json: {
      ...MODELS.json,
      speech: [
        { model: 'phonon:latest', voices: ['default', 'Miles', 'Zoey'] },
        { model: 'lfm3-audio:latest', voices: ['default', 'female', 'male', 'female-british-english', 'male-french'] },
      ],
    },
  });
  await page.getByRole('button', { name: 'Speak replies' }).click();

  const models = page.getByLabel('Speech model');
  const voice = page.getByLabel('Voice');
  await expect(models).toHaveValue('phonon:latest');
  await expect(models.locator('option')).toHaveText(['phonon', 'lfm3-audio']);
  await expect(voice).toHaveValue('Miles');

  // Each model has its own voices, and built names read as words.
  await models.selectOption('lfm3-audio:latest');
  await expect(voice).toHaveValue('default');
  await expect(voice.locator('option')).toHaveText(['Default voice', 'Female', 'Male', 'Female, British English', 'Male, French']);
  await voice.selectOption('female-british-english');

  const input = page.getByLabel('Ask the model');
  await input.fill('do it');
  await input.press('Enter');
  await expect.poll(() => spoken.length).toBe(1);
  expect(spoken[0]).toEqual({ text: 'Done.', voice: 'female-british-english', model: 'lfm3-audio:latest' });
  await expect(page.getByLabel('Assist model')).toBeVisible();
  await page.screenshot({ path: 'test-results/m3-assist-speech-models.png' });

  // A message read again uses the choice as it is now; each model keeps its voice.
  await models.selectOption('phonon:latest');
  await expect(voice).toHaveValue('Miles');
  const reply = page.locator('.gf-assist-message.is-reply').first();
  await reply.hover();
  await reply.getByRole('button', { name: 'Speak message' }).click();
  await expect.poll(() => spoken.length).toBe(2);
  expect(spoken[1]).toMatchObject({ voice: 'Miles', model: 'phonon:latest' });

  await models.selectOption('lfm3-audio:latest');
  await expect(voice).toHaveValue('female-british-english');
  await page.reload();
  await expect(page.getByLabel('Speech model')).toHaveValue('lfm3-audio:latest');
  await expect(page.getByLabel('Voice')).toHaveValue('female-british-english');
});

test('shows why assist is unavailable, with a retry', async ({ page }) => {
  await open(page, { status: 503, json: { error: "Ollama isn't reachable at http://127.0.0.1:11434" } });
  await expect(page.getByTestId('assist-status')).toContainText("Ollama isn't reachable");
  await page.unroute('**/assist/models');
  await page.route('**/assist/models', (route) => route.fulfill(MODELS));
  await page.getByRole('button', { name: 'Retry' }).click();
  await expect(page.getByLabel('Assist model')).toHaveValue('qwen3.8:27b-mlx');
});

test('offline documents explain that assist needs the server', async ({ page }) => {
  await page.goto('/?ephemeral');
  await expect(page.getByTestId('assist')).toContainText('Assist needs the Weft server');
});
