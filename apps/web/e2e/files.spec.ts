import { readFile } from 'node:fs/promises';
import { expect, test, type Page } from '@playwright/test';

async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
}

const artboards = (page: Page) => page.evaluate(() => window.weft.doc.getChildren(null).map((n) => n.id));

test('Save downloads a .weft file; Open adds its artboards beside the others as one undo step', async ({ page }) => {
  await open(page);
  const [original] = await artboards(page);

  const saving = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  const saved = await saving;
  expect(saved.suggestedFilename()).toBe('default.weft');
  const path = await saved.path();
  expect(JSON.parse(await readFile(path, 'utf8'))).toMatchObject({ format: 'weft', version: 1 });

  const choosing = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Open…' }).click();
  await (await choosing).setFiles(path);
  await expect.poll(() => artboards(page)).toHaveLength(2);
  const [, imported] = await artboards(page);
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([imported]);
  await page.screenshot({ path: 'test-results/m3-files.png' });

  await page.keyboard.press('ControlOrMeta+z');
  await expect.poll(() => artboards(page)).toEqual([original]);

  const choosingBad = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Open…' }).click();
  await (await choosingBad).setFiles({ name: 'notes.weft', mimeType: 'application/json', buffer: Buffer.from('{"hello": 1}') });
  await expect(page.getByRole('status').filter({ hasText: 'notes.weft: Not a Weft file' })).toBeVisible();
  expect(await artboards(page)).toEqual([original]);
});

test('Export HTML downloads the selected artboard as a standalone page', async ({ page }) => {
  await open(page);
  const [id] = await artboards(page);
  await page.evaluate((s) => window.weft.editor.getState().select(s), [id!]);
  const exporting = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export HTML' }).click();
  const file = await exporting;
  expect(file.suggestedFilename()).toMatch(/\.html$/);
  const html = await readFile(await file.path(), 'utf8');
  expect(html).toMatch(/^<!doctype html>/);
  expect(html).toContain('class="weft-artboard"');
  await page.getByTestId('inspector').screenshot({ path: 'test-results/m3-export.png' });
});
