import { describe, expect, it } from 'vitest';
import {
  GridDocument,
  altIssue,
  exportArtboardHTML,
  formatCameraOrbit,
  modelSrcIssue,
  parseCameraOrbit,
  parseScene3D,
  scene3DIssue,
  sniffAsset,
  sniffModel,
} from './index';

const VALID_SCENE = JSON.stringify({
  lighting: 'studio',
  camera: { position: [3, 2, 5], target: [0, 0, 0], fov: 38 },
  parts: [
    {
      type: 'cylinder',
      name: 'Core',
      radiusTop: 0.6,
      radiusBottom: 0.8,
      height: 2,
      material: { color: 'var(--color-primary)', metalness: 0.7, roughness: 0.3 },
    },
    {
      type: 'box',
      name: 'Fan blade',
      width: 0.08,
      height: 0.7,
      depth: 0.25,
      repeat: { count: 16, axis: 'x', radius: 0.7 },
      material: { color: 'var(--color-on-surface-variant)' },
    },
  ],
});

describe('scene3d and .glb assets', () => {
  it('validates declarative 3D scenes and rejects invalid ones', () => {
    expect(scene3DIssue(VALID_SCENE)).toBeNull();
    expect(parseScene3D(VALID_SCENE)?.parts).toHaveLength(2);

    expect(scene3DIssue('not json')).toMatch(/valid JSON/);
    expect(scene3DIssue(JSON.stringify({ parts: [] }))).toMatch(/non-empty/);
    expect(scene3DIssue(JSON.stringify({ parts: [{ type: 'teapot' }] }))).toMatch(/type must be/);
    expect(scene3DIssue(JSON.stringify({ parts: [{ type: 'box', material: { color: 'url(evil)' } }] }))).toMatch(/hex color/);
    expect(scene3DIssue(JSON.stringify({ parts: [{ type: 'lathe', points: [[1, 0]] }] }))).toMatch(/at least two/);
  });

  it('parses and formats camera-orbit values', () => {
    const orbit = parseCameraOrbit('35deg 72deg 6.5');
    expect(orbit).not.toBeNull();
    expect(formatCameraOrbit(orbit!.theta, orbit!.phi, orbit!.radius)).toBe('35deg 72deg 6.5');
    expect(parseCameraOrbit('bad')).toBeNull();
  });

  it('sniffs glTF 2.0 .glb headers and validates model src + alt', () => {
    const glbHeader = new Uint8Array([0x67, 0x6c, 0x54, 0x46, 2, 0, 0, 0, 20, 0, 0, 0]);
    expect(sniffModel(glbHeader)).toBe('glb');
    expect(sniffAsset(glbHeader)).toBe('glb');
    expect(sniffModel(new Uint8Array([0x67, 0x6c, 0x54, 0x46, 1, 0, 0, 0, 20, 0, 0, 0]))).toBeNull();

    const hash = 'a'.repeat(64);
    expect(modelSrcIssue(`asset:${hash}.glb`)).toBeNull();
    expect(modelSrcIssue(`asset:${hash}.png`)).toMatch(/\.glb/);
    expect(modelSrcIssue('https://example.com/engine.glb')).toMatch(/remote URLs/);
    expect(altIssue('weft-3d', {})).toMatch(/alt/);
    expect(altIssue('weft-3d', { alt: 'Turbofan cutaway' })).toBeNull();
  });

  it('creates <weft-3d> nodes in GridDocument and injects runtimeUrl on export', () => {
    const doc = new GridDocument();
    const board = doc.createNode({ type: 'frame', tag: 'main', name: '3D Board', frame: { x: 0, y: 0, width: 800, height: 500, heightMode: 'hug' } });
    const viewer = doc.createNode({
      type: 'frame',
      tag: 'weft-3d',
      name: 'Jet Engine 3D',
      parentId: board,
      styles: { width: '100%', height: '400px' },
      attributes: { alt: '3D turbofan schematic', 'data-scene': VALID_SCENE, 'camera-orbit': '32deg 70deg 6.2' },
    });
    expect(doc.getNode(viewer)?.tag).toBe('weft-3d');

    const htmlWithRuntime = exportArtboardHTML(doc, board, { runtimeUrl: 'https://assets.weft.invalid/__weft3d.js' });
    expect(htmlWithRuntime).toContain('<weft-3d');
    expect(htmlWithRuntime).toContain('weft-3d { display: block; position: relative; }');
    expect(htmlWithRuntime).toContain('<script type="module" src="https://assets.weft.invalid/__weft3d.js"></script>');

    // Artboards without <weft-3d> never receive the runtime script.
    const plainBoard = doc.createNode({ type: 'frame', tag: 'main', name: 'Plain', frame: { x: 900, y: 0, width: 400, height: 300 } });
    const plainHtml = exportArtboardHTML(doc, plainBoard, { runtimeUrl: 'https://assets.weft.invalid/__weft3d.js' });
    expect(plainHtml).not.toContain('__weft3d.js');
  });
});
