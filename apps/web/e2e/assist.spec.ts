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
  const spoken: Array<{ text: string; voice: string }> = [];
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
  await open(page, { json: { ...MODELS.json, speech: { model: 'phonon:latest', voices: ['default', 'Miles', 'Zoey'] } } });

  const toggle = page.getByRole('button', { name: 'Speak replies' });
  await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByLabel('Voice')).toHaveCount(0);
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page.getByLabel('Voice').selectOption('Miles');

  const input = page.getByLabel('Ask the model');
  await input.fill('stack these');
  await input.press('Enter');
  await expect(page.getByTestId('assist-log')).toContainText('Stacked the cards');
  // Spoken as plain sentences: no Markdown symbols, tokens by name.
  await expect.poll(() => spoken.length).toBe(1);
  expect(spoken[0]).toEqual({ text: 'Stacked the cards: Grid: one column, gap space 4.', voice: 'Miles' });
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
