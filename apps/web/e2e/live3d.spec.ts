import { readFile } from 'node:fs/promises';
import { expect, test, type Page } from '@playwright/test';

const nextFrames = (page: Page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

/** A cutaway "engine": a casing, a hub that spins, and blades that move out when exploded. */
const SCENE = {
  lighting: 'studio',
  parts: [
    { type: 'cylinder', name: 'Casing', radiusTop: 1.2, radiusBottom: 1.2, height: 2.4, openEnded: true, thetaLength: 4.2, rotation: [0, 0, Math.PI / 2], material: { color: 'var(--color-outline)', side: 'double' } },
    { type: 'cylinder', name: 'Hub', radiusTop: 0.35, radiusBottom: 0.35, height: 2, rotation: [0, 0, Math.PI / 2], spin: { axis: 'x', speed: 2 }, material: { color: 'var(--color-primary)' } },
    { type: 'box', name: 'Blade', width: 0.08, height: 0.9, depth: 0.2, position: [-0.6, 0, 0], repeat: { count: 12, axis: 'x', radius: 0.6 }, explodeOffset: [-1.2, 0, 0], material: { color: 'var(--color-tertiary)' } },
  ],
};

async function open(page: Page) {
  await page.goto('/?ephemeral');
  await page.waitForFunction(() => window.weft?.scene.nodes.size > 0);
  const ids = await page.evaluate((scene) => {
    const { doc, editor } = window.weft;
    for (const a of doc.getChildren(null)) doc.deleteNodes([a.id]);
    const board = doc.createNode({ type: 'frame', name: 'Engine', frame: { x: 0, y: 0, width: 720, height: 520 }, styles: { padding: '24px', backgroundColor: 'var(--color-surface)' } });
    const model = doc.createNode({
      type: 'frame',
      tag: 'weft-3d',
      parentId: board,
      name: 'Engine 3D',
      styles: { width: '100%', height: '460px' },
      attributes: { alt: 'Cutaway of a small engine', 'data-scene': JSON.stringify(scene), 'camera-orbit': '34deg 72deg 6.4' },
    });
    editor.getState().setCamera({ x: 120, y: 120, zoom: 1 });
    return { board, model };
  }, SCENE);
  await nextFrames(page);
  return ids;
}

const shadow = (page: Page, artboard: string, selector: string) => page.locator(`[data-testid="artboard-${artboard}"]`).locator(selector);
const attributes = (page: Page, id: string) => page.evaluate((id) => ({ ...window.weft.doc.getNode(id)!.attributes }), id);

test('live 3D: draws on the canvas; playing with it in interact mode leaves the document alone', async ({ page }) => {
  const { board, model } = await open(page);
  const canvas = shadow(page, board, 'weft-3d canvas');
  await expect(canvas).toBeVisible();
  // Something was drawn: the canvas isn't one flat colour.
  await expect
    .poll(() =>
      canvas.evaluate((c: HTMLCanvasElement) => {
        const g = document.createElement('canvas');
        g.width = 64;
        g.height = 64;
        const ctx = g.getContext('2d')!;
        ctx.drawImage(c, 0, 0, 64, 64);
        const data = ctx.getImageData(0, 0, 64, 64).data;
        const colours = new Set<number>();
        for (let i = 0; i < data.length; i += 4) colours.add((data[i]! << 16) | (data[i + 1]! << 8) | data[i + 2]!);
        return colours.size;
      }),
    )
    .toBeGreaterThan(20);
  const before = await attributes(page, model);
  // Assembled unless the layer asks to start exploded.
  expect(before['data-exploded']).toBeUndefined();
  await page.screenshot({ path: 'test-results/m6-live3d.png' });

  await page.evaluate((id) => window.weft.editor.getState().select([id]), board);
  await page.getByTestId(`interact-${board}`).click();
  await shadow(page, board, 'button').filter({ hasText: 'Explode view' }).click();
  await expect(shadow(page, board, 'button').filter({ hasText: 'Assemble' })).toBeVisible();
  await shadow(page, board, 'button').filter({ hasText: 'Animate engine' }).click();
  await expect(shadow(page, board, 'button').filter({ hasText: 'Pause rotation' })).toBeVisible();
  // One wheel notch zooms in once (React used to deliver it twice inside the artboard).
  await canvas.hover();
  await page.mouse.wheel(0, -100);
  await nextFrames(page);
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'test-results/m6-live3d-interact.png' });
  // The toggles were a preview: nothing written to the document.
  expect(await attributes(page, model)).toEqual(before);

  // Saving the camera is a deliberate edit, and it records one zoom step: 6.4 × 0.92.
  await shadow(page, board, 'button').filter({ hasText: 'Save camera' }).click();
  await expect.poll(async () => (await attributes(page, model))['camera-orbit']).toBe('34deg 72deg 5.89');
});

test('live 3D: an exported page draws its model with no server', async ({ page, browser }) => {
  const { board } = await open(page);
  await page.evaluate((id) => window.weft.editor.getState().select([id]), board);
  const exporting = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export HTML' }).click();
  const html = await readFile(await (await exporting).path(), 'utf8');
  // The runtime is inside the page, not linked to the server it came from.
  expect(html).toContain('<script type="module" src="data:text/javascript;base64,');

  const offline = await browser.newContext({ offline: true });
  const exported = await offline.newPage();
  await exported.setContent(html, { waitUntil: 'load' });
  await exported.waitForFunction(() => (window as unknown as { __weft3dReady?: Promise<unknown> }).__weft3dReady !== undefined);
  await exported.evaluate(() => (window as unknown as { __weft3dReady: Promise<unknown> }).__weft3dReady);
  await expect(exported.locator('weft-3d canvas')).toBeVisible();
  await exported.screenshot({ path: 'test-results/m6-live3d-export.png' });
  await offline.close();
});
