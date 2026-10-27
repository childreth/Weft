import { readFile } from 'node:fs/promises';
import { expect, test, type Page } from '@playwright/test';

/** A 960×640 PNG (sky, sun, hills) drawn in the page, as base64. */
const picture = (page: Page) =>
  page.evaluate(async () => {
    const canvas = new OffscreenCanvas(960, 640);
    const g = canvas.getContext('2d')!;
    const sky = g.createLinearGradient(0, 0, 0, 640);
    sky.addColorStop(0, '#fde68a');
    sky.addColorStop(1, '#f97316');
    g.fillStyle = sky;
    g.fillRect(0, 0, 960, 640);
    g.fillStyle = '#fff7ed';
    g.beginPath();
    g.arc(640, 260, 90, 0, Math.PI * 2);
    g.fill();
    for (const [y, color] of [[420, '#9a3412'], [500, '#7c2d12']] as const) {
      g.fillStyle = color;
      g.beginPath();
      g.moveTo(0, 640);
      for (let x = 0; x <= 960; x += 40) g.lineTo(x, y + Math.sin(x / 120 + y) * 40);
      g.lineTo(960, 640);
      g.fill();
    }
    const blob = await canvas.convertToBlob({ type: 'image/png' });
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let binary = '';
    for (const b of bytes) binary += String.fromCharCode(b);
    return btoa(binary);
  });

/** Fires a paste or drop carrying `base64` as a PNG file. */
const sendImage = (page: Page, base64: string, kind: 'paste' | 'drop', at?: { x: number; y: number }) =>
  page.evaluate(
    ([data, kind, at]) => {
      const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
      const transfer = new DataTransfer();
      transfer.items.add(new File([bytes], 'Sunset.png', { type: 'image/png' }));
      if (kind === 'paste') return void document.dispatchEvent(new ClipboardEvent('paste', { clipboardData: transfer, bubbles: true }));
      const canvas = document.querySelector('[data-canvas]')!;
      const init = { dataTransfer: transfer, bubbles: true, cancelable: true, clientX: at!.x, clientY: at!.y };
      canvas.dispatchEvent(new DragEvent('dragover', init));
      canvas.dispatchEvent(new DragEvent('drop', init));
    },
    [base64, kind, at] as const,
  );

const images = (page: Page) =>
  page.evaluate(() => window.weft.doc.getNodes().filter((n) => n.tag === 'img').map((n) => ({ id: n.id, parentId: n.parentId, name: n.name, attributes: n.attributes })));

test('images: paste into the selection, drop on the canvas, alt text, export and save with the file', async ({ page }) => {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const png = await picture(page);

  // Pasted into the selected container, sized from the file, stored by content.
  const visual = await page.evaluate(() => {
    const id = window.weft.doc.getNodes().find((n) => n.name === 'Hero visual')!.id;
    window.weft.editor.getState().select([id]);
    return id;
  });
  await sendImage(page, png, 'paste');
  await expect.poll(async () => (await images(page)).length).toBe(1);
  const [pasted] = await images(page);
  expect(pasted).toMatchObject({ parentId: visual, name: 'Sunset', attributes: { src: expect.stringMatching(/^asset:[0-9a-f]{64}\.png$/), alt: '', width: '960', height: '640' } });
  expect(await page.evaluate(() => window.weft.editor.getState().selection)).toEqual([pasted!.id]);
  const shown = page.locator(`[data-gf-id="${pasted!.id}"]`);
  await expect.poll(() => shown.evaluate((img: HTMLImageElement) => img.naturalWidth)).toBe(960);

  // The Inspector shows it and asks for alt text.
  const inspector = page.getByTestId('inspector');
  await expect(inspector.locator('.gf-image-preview img')).toBeVisible();
  await expect(inspector).toContainText('960 × 640');
  await expect(inspector).toContainText('No alt text');
  await inspector.getByLabel('Alt text').fill('Sunset over orange hills');
  await inspector.getByLabel('Alt text').press('Enter');
  await expect.poll(async () => (await images(page))[0]!.attributes.alt).toBe('Sunset over orange hills');
  await expect(inspector).not.toContainText('No alt text');
  await page.screenshot({ path: 'test-results/m4-images.png' });

  // Dropped on the empty canvas: its own artboard, where it was dropped.
  const box = (await page.locator('[data-canvas]').boundingBox())!;
  await sendImage(page, png, 'drop', { x: box.x + 20, y: box.y + box.height - 20 });
  await expect.poll(async () => (await images(page)).length).toBe(2);
  const dropped = (await images(page))[1]!;
  const board = await page.evaluate((id) => window.weft.doc.getNode(id)!, dropped.parentId!);
  expect(board).toMatchObject({ parentId: null, name: 'Sunset', frame: { width: 960, heightMode: 'hug' } });
  // The same file is the same asset.
  expect(dropped.attributes.src).toBe(pasted!.attributes.src);
  await page.keyboard.press('ControlOrMeta+z');
  await expect.poll(async () => (await images(page)).length).toBe(1);

  // Export inlines the image, so the page stands alone.
  const page1 = await page.evaluate(() => window.weft.doc.getChildren(null)[0]!.id);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), page1);
  const exporting = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export HTML' }).click();
  const html = await readFile(await (await exporting).path(), 'utf8');
  expect(html).toContain(`src="data:image/png;base64,${png.slice(0, 40)}`);
  expect(html).toContain('alt="Sunset over orange hills"');

  // A saved file carries its images, and opening it brings them along.
  const saving = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  const savedPath = await (await saving).path();
  const saved = JSON.parse(await readFile(savedPath, 'utf8'));
  const assetName = pasted!.attributes.src!.slice('asset:'.length);
  expect(Object.keys(saved.assets)).toEqual([assetName]);
  const choosing = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Open…' }).click();
  await (await choosing).setFiles(savedPath);
  await expect.poll(async () => (await images(page)).length).toBe(2);

  // A file whose image doesn't match its name is refused, whole.
  const lying = { ...saved, assets: { [assetName.replace(/^./, (c: string) => (c === 'a' ? 'b' : 'a'))]: saved.assets[assetName] } };
  lying.nodes = lying.nodes.map((n: { attributes: Record<string, string> }) =>
    n.attributes.src ? { ...n, attributes: { ...n.attributes, src: `asset:${Object.keys(lying.assets)[0]}` } } : n,
  );
  const choosingBad = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Open…' }).click();
  await (await choosingBad).setFiles({ name: 'lying.weft', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(lying)) });
  await expect(page.getByRole('status').filter({ hasText: "doesn't match its content" })).toBeVisible();
  expect(await images(page)).toHaveLength(2);

  // The toolbar's Image… adds one where a paste would go.
  await page.evaluate((id) => window.weft.editor.getState().select([id]), visual);
  const picking = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Image…' }).click();
  await (await picking).setFiles({ name: 'Second.png', mimeType: 'image/png', buffer: Buffer.from(png, 'base64') });
  await expect.poll(async () => (await images(page)).map((i) => i.name)).toContain('Second');
});
