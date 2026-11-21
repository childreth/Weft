import { writeFileSync } from 'node:fs';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { startGridServer, type GridServer } from './server';

let server: GridServer;
let client: Client;

const JET_ENGINE_SCENE = {
  lighting: 'dramatic',
  camera: { position: [4.6, 2.2, 5.4], target: [0, 0, 0], fov: 34 },
  parts: [
    // Outer cutaway nacelle (235° arc exposing the internal spools)
    {
      type: 'cylinder',
      name: 'Outer nacelle cutaway',
      radiusTop: 1.55,
      radiusBottom: 1.48,
      height: 2.9,
      openEnded: true,
      radialSegments: 48,
      thetaStart: 0.75,
      thetaLength: 4.1,
      position: [-1.15, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      material: { color: 'var(--color-surface-container-highest)', metalness: 0.72, roughness: 0.28, side: 'double' },
    },
    // Intake leading-edge torus ring
    {
      type: 'torus',
      name: 'Intake lip ring',
      radius: 1.5,
      tube: 0.11,
      position: [-2.6, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      material: { color: 'var(--color-on-surface-variant)', metalness: 0.85, roughness: 0.2 },
    },
    // 22-blade swept titanium fan
    {
      type: 'box',
      name: 'Swept fan blade',
      width: 0.12,
      height: 0.92,
      depth: 0.26,
      position: [-2.25, 0, 0],
      rotation: [0.35, 0.25, 0],
      repeat: { count: 22, axis: 'x', radius: 0.82 },
      material: { color: 'var(--color-primary)', metalness: 0.82, roughness: 0.22 },
    },
    // Nose spinner cone
    {
      type: 'cone',
      name: 'Spinner cone',
      radius: 0.42,
      height: 0.95,
      position: [-2.72, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      material: { color: 'var(--color-on-surface)', metalness: 0.85, roughness: 0.18 },
    },
    // 3-stage LPC axial compressor disks
    {
      type: 'cylinder',
      name: 'LPC rotor stage',
      radiusTop: 0.88,
      radiusBottom: 0.95,
      height: 0.18,
      position: [-1.45, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      repeat: { count: 3, axis: 'x', step: 0.28 },
      material: { color: 'var(--color-primary-container)', metalness: 0.78, roughness: 0.28 },
    },
    // 8-stage HPC converging compressor disks
    {
      type: 'cylinder',
      name: 'HPC rotor stage',
      radiusTop: 0.64,
      radiusBottom: 0.72,
      height: 0.1,
      position: [-0.25, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      repeat: { count: 8, axis: 'x', step: 0.17 },
      material: { color: 'var(--color-on-surface-variant)', metalness: 0.86, roughness: 0.22 },
    },
    // Annular combustor glowing hot core ring
    {
      type: 'torus',
      name: 'Annular combustor core',
      radius: 0.62,
      tube: 0.24,
      position: [0.95, 0, 0],
      rotation: [0, Math.PI / 2, 0],
      material: {
        color: 'var(--color-tertiary)',
        emissive: 'var(--color-tertiary)',
        emissiveIntensity: 0.75,
        metalness: 0.35,
        roughness: 0.35,
      },
    },
    // 4-stage HPT/LPT turbine disks
    {
      type: 'cylinder',
      name: 'Turbine rotor stage',
      radiusTop: 0.92,
      radiusBottom: 0.76,
      height: 0.14,
      position: [1.85, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      repeat: { count: 4, axis: 'x', step: 0.24 },
      material: { color: 'var(--color-tertiary-container)', emissive: 'var(--color-tertiary)', emissiveIntensity: 0.25, metalness: 0.75, roughness: 0.3 },
    },
    // Coaxial N1/N2 drive shaft
    {
      type: 'cylinder',
      name: 'Coaxial N1/N2 shaft',
      radius: 0.2,
      height: 4.8,
      position: [0.1, 0, 0],
      rotation: [0, 0, Math.PI / 2],
      material: { color: 'var(--color-on-surface)', metalness: 0.9, roughness: 0.15 },
    },
    // Convergent exhaust nozzle
    {
      type: 'cylinder',
      name: 'Convergent exhaust nozzle',
      radiusTop: 0.62,
      radiusBottom: 0.98,
      height: 1.15,
      openEnded: true,
      position: [2.95, 0, 0],
      rotation: [0, 0, -Math.PI / 2],
      material: { color: 'var(--color-surface-container-highest)', metalness: 0.8, roughness: 0.3, side: 'double' },
    },
    // Exhaust plug cone
    {
      type: 'cone',
      name: 'Exhaust centerbody plug',
      radius: 0.34,
      height: 1.25,
      position: [3.2, 0, 0],
      rotation: [0, 0, -Math.PI / 2],
      material: { color: 'var(--color-outline)', metalness: 0.82, roughness: 0.25 },
    },
  ],
};

beforeAll(async () => {
  server = await startGridServer({ port: 0, dataDir: null });
  client = new Client({ name: 'live3d-test', version: '0.1.0' });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${server.httpUrl}/mcp`)));
});

afterAll(async () => {
  await client.close();
  await server.close();
});

describe('live3d Three.js rendering', () => {
  it('stores and serves binary .glb assets in AssetStore', async () => {
    const glb = Buffer.from([0x67, 0x6c, 0x54, 0x46, 2, 0, 0, 0, 12, 0, 0, 0]);
    const res = await fetch(`${server.httpUrl}/assets`, { method: 'POST', body: glb });
    expect(res.status).toBe(200);
    const data = (await res.json()) as { name: string; type: string; bytes: number };
    expect(data.name).toMatch(/^[0-9a-f]{64}\.glb$/);
    expect(data.type).toBe('model/gltf-binary');
    const getRes = await fetch(`${server.httpUrl}/assets/${data.name}`);
    expect(getRes.status).toBe(200);
    expect(getRes.headers.get('content-type')).toBe('model/gltf-binary');
  });

  it('renders a live Three.js 3D jet engine cutaway in get_screenshot', async () => {
    const created = (await client.callTool({
      name: 'create_nodes',
      arguments: {
        doc: 'live3d-doc',
        nodes: [
          {
            type: 'frame',
            tag: 'main',
            name: 'Live 3D Jet Engine',
            theme: 'dark',
            frame: { x: 0, y: 0, width: 960, heightMode: 'hug' },
            styles: {
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              padding: 'var(--space-6)',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-on-surface)',
            },
            children: [
              {
                type: 'text',
                tag: 'h1',
                name: 'Title',
                text: 'TF-840 Live Three.js Cutaway',
                styles: { fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)' },
              },
              {
                type: 'frame',
                tag: 'weft-3d',
                name: 'Jet Engine 3D Viewport',
                styles: {
                  width: '100%',
                  height: '460px',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-outline-variant)',
                },
                attributes: {
                  alt: 'Interactive 3D cutaway of the TF-840 turbofan engine',
                  'data-scene': JSON.stringify(JET_ENGINE_SCENE),
                  'camera-orbit': '32deg 72deg 6.8',
                },
              },
            ],
          },
        ],
      },
    })) as { isError?: boolean; content: Array<{ type: string; text?: string }> };

    expect(created.isError).not.toBe(true);
    const boardId = JSON.parse(created.content[0]!.text!).created[0].id as string;

    const shot = (await client.callTool({
      name: 'get_screenshot',
      arguments: { doc: 'live3d-doc', id: boardId },
    })) as { isError?: boolean; content: Array<{ type: string; data?: string; text?: string }> };

    expect(shot.isError).not.toBe(true);
    const img = shot.content.find((c) => c.type === 'image');
    expect(img?.data).toBeTruthy();
    const png = Buffer.from(img!.data!, 'base64');
    if (process.env.SAVE_3D_SHOT) writeFileSync(process.env.SAVE_3D_SHOT, png);
    // A real rendered 3D WebGL scene produces a rich PNG (far larger than a blank solid box).
    expect(png.length).toBeGreaterThan(15_000);
  }, 30_000);
});
