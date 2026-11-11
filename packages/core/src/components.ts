import { BIND_FIELDS, type NodeBindings, type NodeType, type SceneNode, type SceneTree, type StyleMap } from './schema';

/**
 * Components. A main component is an ordinary frame or text layer marked
 * `component`, living on the canvas like any other. An instance is one node
 * that points at it (`instance.component`) and holds values for its props;
 * what an instance draws is worked out when it's read (`instanceTree`), never
 * copied into the document. So editing the component changes every instance,
 * two people can't leave copies out of step, and a document with a hundred
 * cards stores one card.
 *
 * What may differ between instances is what the component declares: a layer
 * inside it binds a field to a named prop (`bind: { text: 'label' }`), and an
 * instance sets `props: { label: 'Save' }`. Everything else comes from the
 * component. An instance's own styles, attributes and theme apply to its root,
 * for placing it in its parent.
 */

/** Read access to a scene, however it's held: the document, or the editor's projection of it. */
export interface SceneLookup {
  node(id: string): SceneNode | undefined;
  /** Child ids in sibling order. */
  children(id: string): readonly string[];
}

/** Prop names read like the props they become in code: `label`, `iconName`. */
export const PROP_NAME = /^[a-z][a-zA-Z0-9]{0,39}$/;
export const MAX_PROP_VALUE_LENGTH = 2000;
/** Instances inside components inside components: deeper than this is treated as a mistake. */
const MAX_INSTANCE_DEPTH = 8;

const propNameIssue = (name: string): string | null =>
  PROP_NAME.test(name) ? null : `Prop name "${name}" must start with a lowercase letter and use only letters and digits (label, iconName)`;

/** Problems with a layer's bindings. */
export function bindIssues(type: NodeType, bind: Readonly<Record<string, string | null | undefined>>): string[] {
  const issues: string[] = [];
  for (const [field, name] of Object.entries(bind)) {
    if (!(BIND_FIELDS as readonly string[]).includes(field)) {
      issues.push(`Can't bind "${field}" (a prop can set: ${BIND_FIELDS.join(', ')})`);
      continue;
    }
    if (name === null || name === undefined) continue;
    if (field === 'text' && type !== 'text') issues.push('Only a text layer has text to bind to a prop');
    const bad = propNameIssue(name);
    if (bad) issues.push(bad);
  }
  return issues;
}

/** Problems with prop values for an instance of a component whose props are `known`. */
export function propIssues(props: Readonly<Record<string, unknown>>, known: Readonly<Record<string, string>>, componentName: string): string[] {
  const names = Object.keys(known);
  const issues: string[] = [];
  for (const [name, value] of Object.entries(props)) {
    if (!(name in known)) {
      issues.push(
        names.length
          ? `"${componentName}" has no prop "${name}" (its props: ${names.join(', ')})`
          : `"${componentName}" has no props: bind a layer in it first, e.g. bind: { "text": "${PROP_NAME.test(name) ? name : 'label'}" }`,
      );
    } else if (value !== null && typeof value !== 'string') issues.push(`Prop "${name}" must be text`);
    else if (typeof value === 'string' && value.length > MAX_PROP_VALUE_LENGTH) issues.push(`Prop "${name}" is too long (over ${MAX_PROP_VALUE_LENGTH} characters)`);
  }
  return issues;
}

/**
 * A component's props with their defaults (what the component itself shows),
 * read from the bindings inside it. Two layers may share a prop; the first
 * one's value is the default.
 */
export function componentProps(componentId: string, scene: SceneLookup): Record<string, string> {
  const props: Record<string, string> = {};
  const visit = (id: string) => {
    const node = scene.node(id);
    if (!node) return;
    const name = node.bind?.text;
    if (name !== undefined && node.type === 'text' && !(name in props)) props[name] = node.text ?? '';
    // An instance in here is one layer; its own component's bindings aren't this one's.
    if (!node.instance) scene.children(id).forEach(visit);
  };
  visit(componentId);
  return props;
}

/** The component `id` is, or is inside of; null when it's in none. */
export function enclosingComponent(id: string | null, scene: SceneLookup): string | null {
  const seen = new Set<string>();
  for (let cur = id; cur !== null && !seen.has(cur); ) {
    seen.add(cur);
    const node = scene.node(cur);
    if (!node) return null;
    if (node.component) return cur;
    cur = node.parentId;
  }
  return null;
}

/** Whether drawing component `from` draws `target`: it is `target`, or holds an instance that leads there. */
export function reachesComponent(from: string, target: string, scene: SceneLookup, seen: Set<string> = new Set()): boolean {
  if (from === target) return true;
  if (seen.has(from)) return false;
  seen.add(from);
  const visit = (id: string): boolean => {
    const node = scene.node(id);
    if (!node) return false;
    if (node.instance) return reachesComponent(node.instance.component, target, scene, seen);
    return scene.children(id).some(visit);
  };
  return scene.children(from).some(visit);
}

function mergeOverrides(base: Record<string, StyleMap> | undefined, over: Record<string, StyleMap> | undefined): Record<string, StyleMap> | undefined {
  if (!base || !over) return over ?? base;
  const out: Record<string, StyleMap> = { ...base };
  for (const [key, styles] of Object.entries(over)) out[key] = { ...out[key], ...styles };
  return out;
}

/** `text` as the instance sets it through the prop `node` binds, else the component's own. */
const boundText = (node: SceneNode, props: Readonly<Record<string, string>>): string | undefined => {
  const name = node.bind?.text;
  return (name !== undefined ? props[name] : undefined) ?? node.text;
};

function build(instance: SceneNode, scene: SceneLookup, path: readonly string[], id: string, source?: string): SceneTree | null {
  const ref = instance.instance;
  const component = ref && scene.node(ref.component);
  // A missing component, or one that would draw itself (merged edits can make either).
  if (!ref || !component?.component || path.includes(component.id) || path.length >= MAX_INSTANCE_DEPTH) return null;
  const inside = [...path, component.id];

  const derive = (node: SceneNode): SceneTree | null => {
    // Unique among this instance's layers: a component layer is drawn once per instance.
    const derivedId = `${id}/${node.id}`;
    if (node.instance) return build(node, scene, inside, derivedId, node.id);
    const { parentId: _parent, index: _index, component: _component, bind: _bind, ...rest } = node;
    return { ...rest, id: derivedId, source: node.id, ...(node.type === 'text' && { text: boundText(node, ref.props) }), children: childrenOf(node.id) };
  };
  const childrenOf = (parentId: string): SceneTree[] =>
    scene.children(parentId).flatMap((childId) => {
      const child = scene.node(childId);
      const tree = child ? derive(child) : null;
      return tree ? [tree] : [];
    });

  const breakpoints = mergeOverrides(component.breakpoints, instance.breakpoints);
  const states = mergeOverrides(component.states, instance.states);
  const theme = instance.theme ?? component.theme;
  return {
    id,
    ...(source !== undefined && { source }),
    type: component.type,
    tag: component.tag,
    name: instance.name,
    ...(component.type === 'text' && { text: boundText(component, ref.props) }),
    // The instance's own win: they place it in its parent (width, alignSelf, a link's href).
    styles: { ...component.styles, ...instance.styles },
    ...(breakpoints && { breakpoints }),
    ...(states && { states }),
    attributes: { ...component.attributes, ...instance.attributes },
    ...(theme !== undefined && { theme }),
    // Hiding or locking the component doesn't hide or lock what uses it.
    ...(instance.hidden && { hidden: true }),
    ...(instance.locked && { locked: true }),
    instance: ref,
    children: component.type === 'text' ? [] : childrenOf(component.id),
  };
}

/**
 * What an instance draws: its component's layers with its props applied, under
 * the instance's own id. Layers inside carry `source` (the component layer they
 * come from) and ids nothing else uses. Null when the component is missing or
 * would contain itself.
 */
export function instanceTree(instance: SceneNode, scene: SceneLookup): SceneTree | null {
  return build(instance, scene, [], instance.id);
}

/**
 * The subtree under `rootId` as it's drawn: every instance replaced by its
 * component's layers. An instance whose component is missing stays an empty
 * frame, so it can still be seen, selected and fixed.
 */
export function expandTree(rootId: string, scene: SceneLookup): SceneTree | null {
  const walk = (node: SceneNode): SceneTree => {
    const { parentId: _parent, index: _index, ...rest } = node;
    if (node.instance) return instanceTree(node, scene) ?? { ...rest, children: [] };
    return {
      ...rest,
      children: scene.children(node.id).flatMap((id) => {
        const child = scene.node(id);
        return child ? [walk(child)] : [];
      }),
    };
  };
  const root = scene.node(rootId);
  return root ? walk(root) : null;
}

/** A tree's layers as a flat list, for code that takes nodes (the CSS compilers, asset collection). */
export function flattenTree(tree: SceneTree): SceneNode[] {
  const out: SceneNode[] = [];
  const walk = (t: SceneTree, parentId: string | null) => {
    const { children, expanded: _expanded, ...rest } = t;
    out.push({ ...rest, parentId, index: '' });
    children.forEach((child) => walk(child, t.id));
  };
  walk(tree, null);
  return out;
}

/** Bindings as stored: only known fields with a name. */
export function cleanBindings(bind: Readonly<Record<string, unknown>> | null | undefined): NodeBindings | undefined {
  const out: NodeBindings = {};
  for (const field of BIND_FIELDS) {
    const name = bind?.[field];
    if (typeof name === 'string' && PROP_NAME.test(name)) out[field] = name;
  }
  return Object.keys(out).length ? out : undefined;
}
