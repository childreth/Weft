/**
 * Declarative 3D scenes for `<weft-3d>` layers.
 *
 * A `<weft-3d>` node can display either an uploaded `.glb` asset (`src="asset:<sha256>.glb"`),
 * a declarative procedural Three.js scene (`data-scene='<JSON>'`), or both. Keeping procedural
 * 3D declarative means agents and humans can build rotatable, cutaway 3D schematics that stay
 * pure data in Yjs, validate strictly in core, and react live to Weft color tokens.
 */

export const MAX_SCENE3D_CHARS = 200_000;
export const MAX_SCENE3D_PARTS = 256;

export type Vec3 = [number, number, number];
export type Vec2 = [number, number];

export type Part3DType =
  | 'box'
  | 'cylinder'
  | 'cone'
  | 'sphere'
  | 'torus'
  | 'lathe'
  | 'ring'
  | 'capsule'
  | 'group';

export const PART3D_TYPES: ReadonlySet<string> = new Set<Part3DType>([
  'box', 'cylinder', 'cone', 'sphere', 'torus', 'lathe', 'ring', 'capsule', 'group',
]);

export interface Material3D {
  /** Hex color or Weft CSS token (e.g. "var(--color-primary)"). */
  color?: string;
  metalness?: number;
  roughness?: number;
  /** Emissive hex or CSS token. */
  emissive?: string;
  emissiveIntensity?: number;
  opacity?: number;
  wireframe?: boolean;
  side?: 'front' | 'back' | 'double';
}

export interface Repeat3D {
  /** Number of copies (1–120). */
  count: number;
  /** Axis around which copies are arrayed radially (or linearly when `step` is set). */
  axis: 'x' | 'y' | 'z';
  /** Radial offset from the axis (creates radial arrays like fan blades or bolts). */
  radius?: number;
  /** Linear spacing along the axis (creates axial stages like compressor blade rows). */
  step?: number;
  /** Total angle span in radians for radial arrays (defaults to 2π). */
  arc?: number;
}

export interface Part3D {
  type: Part3DType;
  name?: string;
  position?: Vec3;
  rotation?: Vec3;
  scale?: Vec3 | number;
  // Geometry parameters (used according to `type`)
  width?: number;
  height?: number;
  depth?: number;
  radius?: number;
  radiusTop?: number;
  radiusBottom?: number;
  innerRadius?: number;
  outerRadius?: number;
  tube?: number;
  radialSegments?: number;
  tubularSegments?: number;
  openEnded?: boolean;
  /** Angular sweep in radians (e.g. Math.PI * 1.35 for a cutaway cylinder/cone/lathe). */
  thetaStart?: number;
  thetaLength?: number;
  /** Profile [radius, y] points for `lathe` geometry. */
  points?: Vec2[];
  /** Optional radial or axial repetition. */
  repeat?: Repeat3D;
  material?: Material3D;
  children?: Part3D[];
}

export interface Camera3D {
  position?: Vec3;
  target?: Vec3;
  fov?: number;
}

export interface Light3D {
  type: 'ambient' | 'directional' | 'point' | 'hemisphere';
  color?: string;
  groundColor?: string;
  intensity?: number;
  position?: Vec3;
}

export interface ClipPlane3D {
  normal: Vec3;
  constant: number;
}

export interface Scene3D {
  /** Background color (hex, CSS token, or "transparent"). Defaults to transparent. */
  background?: string;
  camera?: Camera3D;
  lighting?: 'studio' | 'dramatic' | 'cad';
  lights?: Light3D[];
  clipPlane?: ClipPlane3D;
  autoRotate?: boolean | number;
  parts: Part3D[];
}

const isNum = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const isVec3 = (v: unknown): v is Vec3 => Array.isArray(v) && v.length === 3 && v.every(isNum);
const isVec2 = (v: unknown): v is Vec2 => Array.isArray(v) && v.length === 2 && v.every(isNum);
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
const SAFE_COLOR = /^(?:#[0-9a-f]{3,8}|var\(--[a-z0-9-]+\)|transparent|[a-z]{3,20})$/i;

function checkColor(value: unknown, path: string): string | null {
  if (value === undefined) return null;
  if (typeof value !== 'string' || !SAFE_COLOR.test(value.trim())) {
    return `${path} must be a hex color, "transparent", or a CSS token like var(--color-primary)`;
  }
  return null;
}

function checkMaterial(mat: unknown, path: string): string | null {
  if (mat === undefined) return null;
  if (!isObj(mat)) return `${path} must be an object`;
  const c1 = checkColor(mat.color, `${path}.color`);
  if (c1) return c1;
  const c2 = checkColor(mat.emissive, `${path}.emissive`);
  if (c2) return c2;
  if (mat.metalness !== undefined && (!isNum(mat.metalness) || mat.metalness < 0 || mat.metalness > 1)) {
    return `${path}.metalness must be a number between 0 and 1`;
  }
  if (mat.roughness !== undefined && (!isNum(mat.roughness) || mat.roughness < 0 || mat.roughness > 1)) {
    return `${path}.roughness must be a number between 0 and 1`;
  }
  if (mat.opacity !== undefined && (!isNum(mat.opacity) || mat.opacity < 0 || mat.opacity > 1)) {
    return `${path}.opacity must be a number between 0 and 1`;
  }
  if (mat.side !== undefined && mat.side !== 'front' && mat.side !== 'back' && mat.side !== 'double') {
    return `${path}.side must be "front", "back", or "double"`;
  }
  return null;
}

function checkPart(part: unknown, path: string, counter: { n: number }): string | null {
  if (!isObj(part)) return `${path} must be an object`;
  counter.n += 1;
  if (counter.n > MAX_SCENE3D_PARTS) return `Scene has more than ${MAX_SCENE3D_PARTS} parts`;
  if (typeof part.type !== 'string' || !PART3D_TYPES.has(part.type)) {
    return `${path}.type must be one of: ${[...PART3D_TYPES].join(', ')}`;
  }
  if (part.position !== undefined && !isVec3(part.position)) return `${path}.position must be [x, y, z]`;
  if (part.rotation !== undefined && !isVec3(part.rotation)) return `${path}.rotation must be [x, y, z]`;
  if (part.scale !== undefined && !isNum(part.scale) && !isVec3(part.scale)) return `${path}.scale must be a number or [x, y, z]`;
  if (part.type === 'lathe') {
    if (!Array.isArray(part.points) || part.points.length < 2 || !part.points.every(isVec2)) {
      return `${path}.points must be an array of at least two [radius, y] pairs`;
    }
  }
  if (part.repeat !== undefined) {
    if (!isObj(part.repeat)) return `${path}.repeat must be an object`;
    if (!isNum(part.repeat.count) || part.repeat.count < 1 || part.repeat.count > 120) {
      return `${path}.repeat.count must be between 1 and 120`;
    }
    if (part.repeat.axis !== 'x' && part.repeat.axis !== 'y' && part.repeat.axis !== 'z') {
      return `${path}.repeat.axis must be "x", "y", or "z"`;
    }
  }
  const matErr = checkMaterial(part.material, `${path}.material`);
  if (matErr) return matErr;
  if (part.children !== undefined) {
    if (!Array.isArray(part.children)) return `${path}.children must be an array`;
    for (let i = 0; i < part.children.length; i++) {
      const childErr = checkPart(part.children[i], `${path}.children[${i}]`, counter);
      if (childErr) return childErr;
    }
  }
  return null;
}

/** Validates a `data-scene` attribute JSON string; returns an error message or null when valid. */
export function scene3DIssue(raw: string): string | null {
  if (raw.length > MAX_SCENE3D_CHARS) {
    return `3D scene JSON is too large (over ${MAX_SCENE3D_CHARS / 1000}K characters)`;
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return 'Attribute "data-scene" must be valid JSON';
  }
  if (!isObj(parsed)) return 'Attribute "data-scene" must be a JSON object';
  const bgErr = checkColor(parsed.background, 'data-scene.background');
  if (bgErr) return bgErr;
  if (parsed.camera !== undefined) {
    if (!isObj(parsed.camera)) return 'data-scene.camera must be an object';
    if (parsed.camera.position !== undefined && !isVec3(parsed.camera.position)) return 'data-scene.camera.position must be [x, y, z]';
    if (parsed.camera.target !== undefined && !isVec3(parsed.camera.target)) return 'data-scene.camera.target must be [x, y, z]';
    if (parsed.camera.fov !== undefined && (!isNum(parsed.camera.fov) || parsed.camera.fov < 10 || parsed.camera.fov > 120)) {
      return 'data-scene.camera.fov must be between 10 and 120';
    }
  }
  if (parsed.clipPlane !== undefined) {
    if (!isObj(parsed.clipPlane) || !isVec3(parsed.clipPlane.normal) || !isNum(parsed.clipPlane.constant)) {
      return 'data-scene.clipPlane must have { normal: [x,y,z], constant: number }';
    }
  }
  if (!Array.isArray(parsed.parts) || parsed.parts.length === 0) {
    return 'data-scene.parts must be a non-empty array of 3D parts';
  }
  const counter = { n: 0 };
  for (let i = 0; i < parsed.parts.length; i++) {
    const err = checkPart(parsed.parts[i], `data-scene.parts[${i}]`, counter);
    if (err) return err;
  }
  return null;
}

/** Parses a validated `data-scene` string into a `Scene3D`, or returns null if invalid. */
export function parseScene3D(raw: string | undefined): Scene3D | null {
  if (!raw || scene3DIssue(raw) !== null) return null;
  return JSON.parse(raw) as Scene3D;
}

/**
 * Parses `camera-orbit` attribute: "<thetaDeg>deg <phiDeg>deg <radius>"
 * (e.g. "35deg 72deg 6.5" or "0.6rad 1.2rad 6.5").
 */
export function parseCameraOrbit(value: string | undefined): { theta: number; phi: number; radius: number } | null {
  if (!value) return null;
  const parts = value.trim().split(/\s+/);
  if (parts.length !== 3) return null;
  const angle = (s: string) => {
    if (s.endsWith('deg')) return (parseFloat(s) * Math.PI) / 180;
    if (s.endsWith('rad')) return parseFloat(s);
    return (parseFloat(s) * Math.PI) / 180;
  };
  const theta = angle(parts[0]!);
  const phi = angle(parts[1]!);
  const radius = parseFloat(parts[2]!);
  if (!Number.isFinite(theta) || !Number.isFinite(phi) || !Number.isFinite(radius) || radius <= 0) return null;
  return { theta, phi, radius };
}

export function formatCameraOrbit(theta: number, phi: number, radius: number): string {
  const deg = (r: number) => Math.round((r * 180) / Math.PI);
  return `${deg(theta)}deg ${deg(phi)}deg ${Math.round(radius * 100) / 100}`;
}
