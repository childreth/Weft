import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { parseCameraOrbit, parseScene3D, type Material3D, type Part3D, type Scene3D } from '@weft/core';

export interface OrbitState {
  theta: number;
  phi: number;
  radius: number;
  target: [number, number, number];
  fov: number;
}

const DEFAULT_ORBIT: OrbitState = {
  theta: (34 * Math.PI) / 180,
  phi: (72 * Math.PI) / 180,
  radius: 6.4,
  target: [0, 0, 0],
  fov: 38,
};

let sharedRenderer: THREE.WebGLRenderer | null = null;
const gltfCache = new Map<string, Promise<THREE.Group>>();
const loader = new GLTFLoader();

function getRenderer(): THREE.WebGLRenderer {
  if (!sharedRenderer) {
    sharedRenderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance',
    });
    sharedRenderer.localClippingEnabled = true;
    sharedRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    sharedRenderer.toneMappingExposure = 1.15;
    sharedRenderer.outputColorSpace = THREE.SRGBColorSpace;
  }
  return sharedRenderer;
}

/** Resolves a hex color or `var(--token)` CSS expression against `hostEl`. */
function resolveColor(raw: string | undefined, hostEl: HTMLElement | null, fallback = '#94a3b8'): string {
  if (!raw) return fallback;
  const trimmed = raw.trim();
  const varMatch = /^var\((--[a-z0-9-]+)\)$/i.exec(trimmed);
  if (varMatch && hostEl) {
    const resolved = getComputedStyle(hostEl).getPropertyValue(varMatch[1]!).trim();
    if (resolved) return resolved;
  }
  return trimmed;
}

function createMaterial(mat: Material3D | undefined, hostEl: HTMLElement | null, clipPlanes: THREE.Plane[]): THREE.MeshStandardMaterial {
  const side =
    mat?.side === 'double' ? THREE.DoubleSide : mat?.side === 'back' ? THREE.BackSide : THREE.FrontSide;
  const opacity = mat?.opacity ?? 1;
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(resolveColor(mat?.color, hostEl, '#8ea4b8')),
    metalness: mat?.metalness ?? 0.55,
    roughness: mat?.roughness ?? 0.35,
    ...(mat?.emissive
      ? {
          emissive: new THREE.Color(resolveColor(mat.emissive, hostEl, '#000000')),
          emissiveIntensity: mat.emissiveIntensity ?? 1,
        }
      : {}),
    transparent: opacity < 1,
    opacity,
    wireframe: mat?.wireframe ?? false,
    side,
    clippingPlanes: clipPlanes,
    clipShadows: true,
  });
}

function createGeometry(part: Part3D): THREE.BufferGeometry | null {
  switch (part.type) {
    case 'box':
      return new THREE.BoxGeometry(part.width ?? 1, part.height ?? 1, part.depth ?? 1);
    case 'cylinder':
      return new THREE.CylinderGeometry(
        part.radiusTop ?? part.radius ?? 0.5,
        part.radiusBottom ?? part.radius ?? 0.5,
        part.height ?? 1,
        part.radialSegments ?? 32,
        1,
        part.openEnded ?? false,
        part.thetaStart ?? 0,
        part.thetaLength ?? Math.PI * 2,
      );
    case 'cone':
      return new THREE.ConeGeometry(
        part.radius ?? 0.5,
        part.height ?? 1,
        part.radialSegments ?? 32,
        1,
        part.openEnded ?? false,
        part.thetaStart ?? 0,
        part.thetaLength ?? Math.PI * 2,
      );
    case 'sphere':
      return new THREE.SphereGeometry(
        part.radius ?? 0.5,
        part.radialSegments ?? 32,
        Math.max(12, Math.floor((part.radialSegments ?? 32) / 2)),
      );
    case 'torus':
      return new THREE.TorusGeometry(
        part.radius ?? 0.7,
        part.tube ?? 0.14,
        16,
        part.tubularSegments ?? 48,
        part.thetaLength ?? Math.PI * 2,
      );
    case 'ring':
      return new THREE.RingGeometry(
        part.innerRadius ?? 0.35,
        part.outerRadius ?? 0.7,
        part.radialSegments ?? 32,
        1,
        part.thetaStart ?? 0,
        part.thetaLength ?? Math.PI * 2,
      );
    case 'capsule':
      return new THREE.CapsuleGeometry(part.radius ?? 0.35, part.height ?? 0.8, 8, part.radialSegments ?? 24);
    case 'lathe': {
      const pts = (part.points ?? [[0.5, -0.5], [0.5, 0.5]]).map(([r, y]) => new THREE.Vector2(r, y));
      return new THREE.LatheGeometry(
        pts,
        part.radialSegments ?? 40,
        part.thetaStart ?? 0,
        part.thetaLength ?? Math.PI * 2,
      );
    }
    case 'group':
      return null;
  }
}

function applyTransform(obj: THREE.Object3D, part: Part3D): void {
  if (part.position) obj.position.set(part.position[0], part.position[1], part.position[2]);
  if (part.rotation) obj.rotation.set(part.rotation[0], part.rotation[1], part.rotation[2]);
  if (typeof part.scale === 'number') obj.scale.setScalar(part.scale);
  else if (Array.isArray(part.scale)) obj.scale.set(part.scale[0], part.scale[1], part.scale[2]);
}

function buildSinglePart(part: Part3D, hostEl: HTMLElement | null, clipPlanes: THREE.Plane[]): THREE.Object3D {
  if (part.type === 'group') {
    const group = new THREE.Group();
    if (part.name) group.name = part.name;
    applyTransform(group, part);
    for (const child of part.children ?? []) {
      group.add(buildPart(child, hostEl, clipPlanes));
    }
    return group;
  }
  const geom = createGeometry(part);
  if (!geom) return new THREE.Group();
  const mat = createMaterial(part.material, hostEl, clipPlanes);
  const mesh = new THREE.Mesh(geom, mat);
  if (part.name) mesh.name = part.name;
  applyTransform(mesh, part);
  return mesh;
}

function buildPart(part: Part3D, hostEl: HTMLElement | null, clipPlanes: THREE.Plane[]): THREE.Object3D {
  if (!part.repeat) return buildSinglePart(part, hostEl, clipPlanes);
  const { count, axis, radius = 0, step = 0, arc = Math.PI * 2 } = part.repeat;
  const group = new THREE.Group();
  if (part.name) group.name = `${part.name}-array`;
  for (let i = 0; i < count; i++) {
    const item = buildSinglePart({ ...part, repeat: undefined }, hostEl, clipPlanes);
    if (step !== 0) {
      const offset = (i - (count - 1) / 2) * step;
      if (axis === 'x') item.position.x += offset;
      else if (axis === 'y') item.position.y += offset;
      else item.position.z += offset;
    } else {
      const angle = (i / count) * arc;
      const pivot = new THREE.Group();
      if (axis === 'x') {
        item.position.y += radius;
        pivot.rotation.x = angle;
      } else if (axis === 'y') {
        item.position.x += radius;
        pivot.rotation.y = angle;
      } else {
        item.position.y += radius;
        pivot.rotation.z = angle;
      }
      pivot.add(item);
      group.add(pivot);
      continue;
    }
    group.add(item);
  }
  return group;
}

function addLights(scene: THREE.Scene, spec: Scene3D | null, hostEl: HTMLElement | null): void {
  if (spec?.lights && spec.lights.length > 0) {
    for (const l of spec.lights) {
      const color = new THREE.Color(resolveColor(l.color, hostEl, '#ffffff'));
      const intensity = l.intensity ?? 1;
      if (l.type === 'ambient') {
        scene.add(new THREE.AmbientLight(color, intensity));
      } else if (l.type === 'hemisphere') {
        const ground = new THREE.Color(resolveColor(l.groundColor, hostEl, '#1e293b'));
        scene.add(new THREE.HemisphereLight(color, ground, intensity));
      } else if (l.type === 'point') {
        const pt = new THREE.PointLight(color, intensity);
        if (l.position) pt.position.set(...l.position);
        scene.add(pt);
      } else {
        const dir = new THREE.DirectionalLight(color, intensity);
        if (l.position) dir.position.set(...l.position);
        scene.add(dir);
      }
    }
    return;
  }

  const preset = spec?.lighting ?? 'studio';
  const hemi = new THREE.HemisphereLight(0xeef6ff, 0x1c222a, preset === 'cad' ? 1.1 : 0.85);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, preset === 'dramatic' ? 2.4 : 1.9);
  key.position.set(5, 7, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x7cc4f8, preset === 'dramatic' ? 1.4 : 0.9);
  rim.position.set(-6, 3, -5);
  scene.add(rim);
  const fill = new THREE.DirectionalLight(0xf5a664, 0.55);
  fill.position.set(2, -4, 4);
  scene.add(fill);
}

function loadGlb(url: string): Promise<THREE.Group> {
  let cached = gltfCache.get(url);
  if (!cached) {
    cached = new Promise<THREE.Group>((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          const root = gltf.scene || new THREE.Group();
          // Normalize loaded model to fit cleanly inside a ~4-unit sphere centered at origin.
          const box = new THREE.Box3().setFromObject(root);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z, 0.001);
          const scale = 3.8 / maxDim;
          root.position.sub(center).multiplyScalar(scale);
          root.scale.multiplyScalar(scale);
          const wrapper = new THREE.Group();
          wrapper.add(root);
          resolve(wrapper);
        },
        undefined,
        reject,
      );
    });
    gltfCache.set(url, cached);
  }
  return cached.then((g) => g.clone(true));
}

export function initialOrbit(cameraOrbitAttr: string | undefined, sceneSpec: Scene3D | null): OrbitState {
  const base: OrbitState = {
    ...DEFAULT_ORBIT,
    target: sceneSpec?.camera?.target ? [...sceneSpec.camera.target] : [0, 0, 0],
    fov: sceneSpec?.camera?.fov ?? DEFAULT_ORBIT.fov,
  };
  if (sceneSpec?.camera?.position) {
    const [x, y, z] = sceneSpec.camera.position;
    const dx = x - base.target[0];
    const dy = y - base.target[1];
    const dz = z - base.target[2];
    const r = Math.hypot(dx, dy, dz) || DEFAULT_ORBIT.radius;
    base.radius = r;
    base.phi = Math.acos(Math.max(-1, Math.min(1, dy / r)));
    base.theta = Math.atan2(dx, dz);
  }
  const parsed = parseCameraOrbit(cameraOrbitAttr);
  if (parsed) {
    base.theta = parsed.theta;
    base.phi = parsed.phi;
    base.radius = parsed.radius;
  }
  return base;
}

export interface Render3DInput {
  canvas: HTMLCanvasElement;
  hostEl: HTMLElement;
  src?: string;
  sceneJson?: string;
  orbit: OrbitState;
}

export async function renderWeft3D({ canvas, hostEl, src, sceneJson, orbit }: Render3DInput): Promise<void> {
  const rect = hostEl.getBoundingClientRect();
  const cssW = Math.max(1, Math.round(rect.width || canvas.clientWidth || 400));
  const cssH = Math.max(1, Math.round(rect.height || canvas.clientHeight || 300));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const pixelW = Math.max(1, Math.round(cssW * dpr));
  const pixelH = Math.max(1, Math.round(cssH * dpr));

  const spec = parseScene3D(sceneJson);
  const scene = new THREE.Scene();
  if (spec?.background && spec.background !== 'transparent') {
    scene.background = new THREE.Color(resolveColor(spec.background, hostEl, '#0b0e11'));
  }

  const clipPlanes: THREE.Plane[] = [];
  if (spec?.clipPlane) {
    const [nx, ny, nz] = spec.clipPlane.normal;
    clipPlanes.push(new THREE.Plane(new THREE.Vector3(nx, ny, nz).normalize(), spec.clipPlane.constant));
  }

  addLights(scene, spec, hostEl);

  if (spec) {
    for (const part of spec.parts) {
      scene.add(buildPart(part, hostEl, clipPlanes));
    }
  }
  if (src) {
    try {
      const glb = await loadGlb(src);
      scene.add(glb);
    } catch {
      // Fallback subtle wireframe cube when a .glb fails to load.
      const fallback = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x7cc4f8, wireframe: true }),
      );
      scene.add(fallback);
    }
  }

  const camera = new THREE.PerspectiveCamera(orbit.fov, cssW / cssH, 0.05, 200);
  const phi = Math.max(0.08, Math.min(Math.PI - 0.08, orbit.phi));
  const r = Math.max(0.5, orbit.radius);
  camera.position.set(
    orbit.target[0] + r * Math.sin(phi) * Math.sin(orbit.theta),
    orbit.target[1] + r * Math.cos(phi),
    orbit.target[2] + r * Math.sin(phi) * Math.cos(orbit.theta),
  );
  camera.lookAt(orbit.target[0], orbit.target[1], orbit.target[2]);

  const renderer = getRenderer();
  renderer.setPixelRatio(1);
  renderer.setSize(pixelW, pixelH, false);
  renderer.render(scene, camera);

  if (canvas.width !== pixelW || canvas.height !== pixelH) {
    canvas.width = pixelW;
    canvas.height = pixelH;
  }
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, pixelW, pixelH);
    ctx.drawImage(renderer.domElement, 0, 0, pixelW, pixelH);
  }

  // Dispose temporary procedural geometries/materials so repeated renders never leak GPU memory.
  scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) m.dispose();
    }
  });
}
