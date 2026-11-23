import {
  BIND_FIELDS,
  UNBINDABLE_ATTRIBUTES,
  attributeNameIssue,
  attributeValueIssue,
  isStyleProp,
  styleValueIssue,
  type NodeBindings, type NodeBindingsPatch, type NodeType, type SceneNode, type SceneTree, type StyleMap, type StyleProp } from './schema';

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
 * inside it binds its text, a style property or an attribute to a named prop
 * (`bind: { text: 'label', styles: { backgroundColor: 'tone' }, attributes: { 'aria-current': 'current' } }`),
 * and an instance sets `props: { label: 'Save', tone: 'var(--color-primary)', current: '' }`.
 * An attribute prop set to '' leaves the attribute off.
 * Everything else comes from the component. An instance's own styles, attributes and theme apply to its root,
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

/** `name` rewritten as a prop name when it's one in another style (`date_label`, `date-label`, `Date label` → `dateLabel`); null when it can't be. */
function asPropName(name: string): string | null {
  const words = name.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  const joined = words
    .map((word) => (word === word.toUpperCase() ? word.toLowerCase() : word))
    .map((word) => word[0]!.toUpperCase() + word.slice(1))
    .join('');
  const fixed = joined.slice(0, 1).toLowerCase() + joined.slice(1);
  return fixed !== name && PROP_NAME.test(fixed) ? fixed : null;
}

/** Says the fix where there is one: a model that sent `date_label` shouldn't have to work out the convention from the rule. */
function propNameIssue(name: string): string | null {
  if (PROP_NAME.test(name)) return null;
  const fixed = asPropName(name);
  const rule = `Prop name "${name}" must be camelCase: start with a lowercase letter and use only letters and digits`;
  return fixed ? `${rule}. Use "${fixed}"` : `${rule} (label, iconName)`;
}

/** Problems with a layer's bindings (or a change to them: null removes). */
export function bindIssues(type: NodeType, bind: object): string[] {
  const issues: string[] = [];
  for (const [field, value] of Object.entries(bind) as Array<[string, unknown]>) {
    if (!(BIND_FIELDS as readonly string[]).includes(field)) {
      issues.push(`Can't bind "${field}" (a prop can set: ${BIND_FIELDS.join(', ')})`);
      continue;
    }
    if (value === null || value === undefined) continue;
    if (field === 'text') {
      if (typeof value !== 'string') issues.push('bind.text is a prop name');
      else {
        if (type !== 'text') issues.push('Only a text layer has text to bind to a prop');
        const bad = propNameIssue(value);
        if (bad) issues.push(bad);
      }
      continue;
    }
    const styles = field === 'styles';
    if (typeof value !== 'object' || Array.isArray(value)) {
      issues.push(styles ? 'bind.styles maps style properties to prop names: {"height": "barHeight"}' : 'bind.attributes maps attributes to prop names: {"aria-current": "current"}');
      continue;
    }
    for (const [key, name] of Object.entries(value as Record<string, unknown>)) {
      const badKey = styles
        ? isStyleProp(key)
          ? null
          : `Can't bind style "${key}": not a style property (camelCase, as in styles)`
        : UNBINDABLE_ATTRIBUTES.includes(key)
          ? `Can't bind "${key}": an image can't be a prop yet`
          : attributeNameIssue(key);
      if (badKey) issues.push(badKey);
      else if (name === null || name === undefined) continue;
      else if (typeof name !== 'string') issues.push(`bind.${field}.${key} is a prop name`);
      else {
        const bad = propNameIssue(name);
        if (bad) issues.push(bad);
      }
    }
  }
  return issues;
}

/** One of a component's props: what it shows by default, and what it sets. */
export interface PropSpec {
  /** What the component itself shows: the first bound layer's text or style value ('' when it sets none). */
  default: string;
  /** Sets a text layer's text. */
  text: boolean;
  /** Style properties it sets; a value must be valid for each. */
  styles: StyleProp[];
  /** Attributes it sets ('' leaves them off). */
  attributes: string[];
}

/**
 * Problems with prop values for an instance of a component whose props are `known`.
 * `null` clears a value, so it's accepted for a prop the component no longer
 * has: unbinding a layer leaves the instances' values behind, and clearing them
 * (in the same call or later) shouldn't be refused for the prop being gone.
 */
export function propIssues(props: Readonly<Record<string, unknown>>, known: Readonly<Record<string, PropSpec>>, componentName: string): string[] {
  const names = Object.keys(known);
  const issues: string[] = [];
  for (const [name, value] of Object.entries(props)) {
    const spec = known[name];
    if (!spec && value === null) continue;
    if (!spec) {
      issues.push(
        names.length
          ? `"${componentName}" has no prop "${name}" (its props: ${names.join(', ')})`
          : `"${componentName}" has no props: bind a layer in it first, e.g. bind: { "text": "${PROP_NAME.test(name) ? name : 'label'}" }`,
      );
    } else if (value !== null && typeof value !== 'string') issues.push(`Prop "${name}" must be text`);
    else if (typeof value === 'string' && value.length > MAX_PROP_VALUE_LENGTH) issues.push(`Prop "${name}" is too long (over ${MAX_PROP_VALUE_LENGTH} characters)`);
    else if (typeof value === 'string' && value !== '') {
      for (const prop of spec.styles) {
        const bad = styleValueIssue(prop, value);
        if (bad) issues.push(`Prop "${name}" sets ${prop}: ${bad}`);
      }
      for (const attribute of spec.attributes) {
        const bad = attributeValueIssue(attribute, value);
        if (bad) issues.push(`Prop "${name}" sets ${attribute}: ${bad}`);
      }
    }
  }
  return issues;
}

/**
 * A component's props, read from the bindings inside it. Two layers may share
 * a prop (a color for a bar and its label); the first one's value is the
 * default.
 */
export function componentPropSpecs(componentId: string, scene: SceneLookup): Record<string, PropSpec> {
  const specs: Record<string, PropSpec> = {};
  const spec = (name: string, fallback: string): PropSpec => (specs[name] ??= { default: fallback, text: false, styles: [], attributes: [] });
  const visit = (id: string) => {
    const node = scene.node(id);
    if (!node) return;
    const name = node.bind?.text;
    if (name !== undefined && node.type === 'text') spec(name, node.text ?? '').text = true;
    for (const [prop, propName] of Object.entries(node.bind?.styles ?? {}) as Array<[StyleProp, string]>) {
      const entry = spec(propName, node.styles[prop] ?? '');
      if (!entry.styles.includes(prop)) entry.styles.push(prop);
    }
    for (const [attribute, propName] of Object.entries(node.bind?.attributes ?? {})) {
      const entry = spec(propName, attributeProp(attribute, node.attributes[attribute]));
      if (!entry.attributes.includes(attribute)) entry.attributes.push(attribute);
    }
    // An instance in here is one layer; its own component's bindings aren't this one's.
    if (!node.instance) scene.children(id).forEach(visit);
  };
  visit(componentId);
  return specs;
}

/** A component's props with their defaults (what the component itself shows). */
export function componentProps(componentId: string, scene: SceneLookup): Record<string, string> {
  return Object.fromEntries(Object.entries(componentPropSpecs(componentId, scene)).map(([name, spec]) => [name, spec.default]));
}

/** Which of a component's props set styles, and which: `{ barHeight: ['height'] }`. */
export function componentStyleProps(componentId: string, scene: SceneLookup): Record<string, StyleProp[]> {
  return Object.fromEntries(Object.entries(componentPropSpecs(componentId, scene)).flatMap(([name, spec]) => (spec.styles.length ? [[name, spec.styles]] : [])));
}

/** Which of a component's props set attributes, and which: `{ current: ['aria-current'] }`. */
export function componentAttributeProps(componentId: string, scene: SceneLookup): Record<string, string[]> {
  return Object.fromEntries(Object.entries(componentPropSpecs(componentId, scene)).flatMap(([name, spec]) => (spec.attributes.length ? [[name, spec.attributes]] : [])));
}

/**
 * An attribute as a prop's value: '' when it's off. A boolean attribute that's
 * on (stored as `open: ""`) reads as its own name, which HTML takes to mean the
 * same (`open="open"`), so it isn't mistaken for off.
 */
const attributeProp = (name: string, value: string | undefined): string => (value === undefined ? '' : value === '' ? name : value);

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

/**
 * The style values an instance sets on `node` through its props. Checked here,
 * not only when set: a prop's value was checked for the properties it set then,
 * and the component may since bind it to another (a text prop holding "url(…)"
 * bound to backgroundImage must not load it). '' or a bad value shows the
 * component's own.
 */
function boundStyles(node: SceneNode, props: Readonly<Record<string, string>>): StyleMap {
  const out: StyleMap = {};
  for (const [prop, name] of Object.entries(node.bind?.styles ?? {}) as Array<[StyleProp, string]>) {
    const value = props[name];
    if (value !== undefined && value !== '' && value.length <= MAX_PROP_VALUE_LENGTH && styleValueIssue(prop, value) === null) out[prop] = value;
  }
  return out;
}

/**
 * `node`'s attributes with the values an instance sets through its props: '' takes
 * one off, and a boolean attribute set to its own name is written the usual way
 * (`open: ""`). Checked here for the same reason as styles.
 */
function boundAttributes(node: SceneNode, props: Readonly<Record<string, string>>): Record<string, string> {
  const out: Record<string, string> = { ...node.attributes };
  for (const [attribute, name] of Object.entries(node.bind?.attributes ?? {})) {
    const value = props[name];
    if (value === undefined || value.length > MAX_PROP_VALUE_LENGTH || UNBINDABLE_ATTRIBUTES.includes(attribute) || attributeNameIssue(attribute) || attributeValueIssue(attribute, value)) continue;
    if (value === '') delete out[attribute];
    else out[attribute] = value === attribute ? '' : value;
  }
  return out;
}

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
    return {
      ...rest,
      id: derivedId,
      source: node.id,
      ...(node.type === 'text' && { text: boundText(node, ref.props) }),
      styles: { ...node.styles, ...boundStyles(node, ref.props) },
      attributes: boundAttributes(node, ref.props),
      children: childrenOf(node.id),
    };
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
    // Then its props; then its own, which place it in its parent (width, alignSelf, a link's href).
    styles: { ...component.styles, ...boundStyles(component, ref.props), ...instance.styles },
    ...(breakpoints && { breakpoints }),
    ...(states && { states }),
    attributes: { ...boundAttributes(component, ref.props), ...instance.attributes },
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

/** What turning a layer into an instance of a component keeps and loses. */
export interface InstanceMatch {
  /** Prop values read from the layer's own text and bound styles (only where they differ from the component's). */
  props: Record<string, string>;
  /** Text props nothing in the layer supplies: the instance would show the component's own text for these. */
  defaulted: string[];
  /** Text in the layer that no prop carries, so the instance won't show it. */
  droppedText: string[];
  /** Layers inside (by name) that look different from the component's, or have no counterpart in it. */
  changedLayers: string[];
  /**
   * Attributes the component's root has and the layer didn't (`aria-current="page"`):
   * the instance gets them, since only a prop can take one off.
   */
  addedAttributes: string[];
}

/** Same value whatever order its keys were written in. */
const stable = (value: unknown): string =>
  JSON.stringify(value, (_key, v: unknown) =>
    v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.entries(v as Record<string, unknown>).sort(([a], [b]) => (a < b ? -1 : 1))) : v,
  );

/**
 * Lines a layer up with a component it was built like (a copy of it, or a
 * sibling made the same way) and reads the layer's text into the component's
 * props. Layers pair by position where both sides have the same number of
 * children, else by a name only one child on each side has. Read-only: it says
 * what a conversion would keep and lose, for `GridDocument.convertToInstance`
 * and for telling an agent before anything is thrown away.
 */
export function matchInstance(layerId: string, componentId: string, scene: SceneLookup): InstanceMatch {
  const specs = componentPropSpecs(componentId, scene);
  const defaults = componentProps(componentId, scene);
  const props: Record<string, string> = {};
  const matched = new Set<string>();
  const droppedText: string[] = [];
  const changedLayers: string[] = [];
  const kids = (id: string) => scene.children(id).flatMap((child) => scene.node(child) ?? []);
  const textIn = (node: SceneNode): string[] => (node.type === 'text' ? (node.text?.trim() ? [node.text] : []) : kids(node.id).flatMap(textIn));
  /** `layer` has no counterpart: everything in it goes. */
  const lose = (layer: SceneNode) => {
    droppedText.push(...textIn(layer));
    changedLayers.push(layer.name);
  };
  /** How a layer looks, leaving out the style properties and attributes `main` lets props set. */
  const look = (node: SceneNode, main: SceneNode) => {
    const styles = Object.fromEntries(Object.entries(node.styles).filter(([prop]) => !main.bind?.styles?.[prop as StyleProp]));
    const attributes = Object.fromEntries(Object.entries(node.attributes).filter(([name]) => !main.bind?.attributes?.[name]));
    return stable([node.tag, styles, node.breakpoints ?? {}, node.states ?? {}, attributes, !!node.hidden]);
  };
  /** Reads one value into the prop `name`; true if it can't be carried. */
  const read = (name: string, value: string, emptyIsValue: boolean): boolean => {
    if (matched.has(name)) {
      // Shared with a layer already read: this one shows that value.
      return value !== (props[name] ?? defaults[name]);
    }
    matched.add(name);
    // A style it doesn't set, where the component does: the instance would show the component's.
    if (value === '' && !emptyIsValue && defaults[name] !== '') return true;
    if (value !== defaults[name]) props[name] = value;
    return false;
  };
  /** Reads the layer's values for what `main` binds (style properties, attributes) into props; true if one can't be carried. */
  const readBound = (main: SceneNode, layer: SceneNode): boolean => {
    let lost = false;
    for (const [prop, name] of Object.entries(main.bind?.styles ?? {}) as Array<[StyleProp, string]>) lost = read(name, layer.styles[prop] ?? '', false) || lost;
    // An attribute it doesn't have is a value too: off.
    for (const [attribute, name] of Object.entries(main.bind?.attributes ?? {})) lost = read(name, attributeProp(attribute, layer.attributes[attribute]), true) || lost;
    return lost;
  };

  const pair = (main: SceneNode, layer: SceneNode, root: boolean): void => {
    if (main.instance || layer.instance) {
      const same = main.instance && layer.instance && main.instance.component === layer.instance.component && stable(main.instance.props) === stable(layer.instance.props);
      if (!same) lose(layer);
      return;
    }
    if (main.type !== layer.type) return lose(layer);
    const styleLost = readBound(main, layer);
    // The root's own look stays on the instance; inside, the component's replaces it, but for what props carry.
    if (!root && (styleLost || look(main, main) !== look(layer, main))) changedLayers.push(layer.name);
    if (main.type === 'text') {
      const name = main.bind?.text;
      const text = layer.text ?? '';
      if (name === undefined) {
        if (text !== (main.text ?? '') && text.trim()) droppedText.push(text);
      } else if (matched.has(name) || text.length > MAX_PROP_VALUE_LENGTH) {
        // A second layer on the same prop shows the first one's value.
        if (text !== (props[name] ?? defaults[name]) && text.trim()) droppedText.push(text);
      } else {
        matched.add(name);
        if (text !== defaults[name]) props[name] = text;
      }
      return;
    }
    const mains = kids(main.id);
    const layers = kids(layer.id);
    if (mains.length === layers.length) return mains.forEach((child, i) => pair(child, layers[i]!, false));
    const once = (list: SceneNode[], name: string) => list.filter((n) => n.name === name).length === 1;
    for (const child of layers) {
      const partner = once(layers, child.name) && once(mains, child.name) ? mains.find((n) => n.name === child.name) : undefined;
      if (partner) pair(partner, child, false);
      else lose(child);
    }
  };

  const main = scene.node(componentId);
  const layer = scene.node(layerId);
  if (main && layer) pair(main, layer, true);
  const addedAttributes =
    main && layer && !main.instance && !layer.instance
      ? Object.entries(main.attributes).flatMap(([name, value]) => (!main.bind?.attributes?.[name] && !(name in layer.attributes) ? [value === '' ? name : `${name}="${value}"`] : []))
      : [];
  // A style prop nothing supplies only looks like the component: that's a changed layer (reported above), not wrong content.
  const defaulted = Object.entries(specs).flatMap(([name, spec]) => (spec.text && !matched.has(name) ? [name] : []));
  return { props, defaulted, droppedText, changedLayers: [...new Set(changedLayers)], addedAttributes };
}

/** Bindings as stored: only known fields with a valid name. */
export function cleanBindings(raw: object | null | undefined): NodeBindings | undefined {
  const bind = raw as Readonly<Record<string, unknown>> | null | undefined;
  const out: NodeBindings = {};
  const text = bind?.text;
  if (typeof text === 'string' && PROP_NAME.test(text)) out.text = text;
  const styles = bind?.styles;
  if (styles && typeof styles === 'object' && !Array.isArray(styles)) {
    const kept = Object.entries(styles as Record<string, unknown>).filter((entry): entry is [StyleProp, string] => isStyleProp(entry[0]) && typeof entry[1] === 'string' && PROP_NAME.test(entry[1]));
    if (kept.length) out.styles = Object.fromEntries(kept);
  }
  const attributes = bind?.attributes;
  if (attributes && typeof attributes === 'object' && !Array.isArray(attributes)) {
    const kept = Object.entries(attributes as Record<string, unknown>).filter(
      (entry): entry is [string, string] => !attributeNameIssue(entry[0]) && !UNBINDABLE_ATTRIBUTES.includes(entry[0]) && typeof entry[1] === 'string' && PROP_NAME.test(entry[1]),
    );
    if (kept.length) out.attributes = Object.fromEntries(kept);
  }
  return Object.keys(out).length ? out : undefined;
}

/** `current` with a change applied: merged by field and by style property or attribute; null removes. */
export function mergeBindings(current: NodeBindings | undefined, patch: NodeBindingsPatch): NodeBindings | undefined {
  const next: Record<string, unknown> = { ...current };
  if (patch.text === null) delete next.text;
  else if (patch.text !== undefined) next.text = patch.text;
  for (const field of ['styles', 'attributes'] as const) {
    const change = patch[field];
    if (change === null) delete next[field];
    else if (change) {
      const merged: Record<string, string | null | undefined> = { ...current?.[field], ...change };
      next[field] = Object.fromEntries(Object.entries(merged).filter(([, name]) => typeof name === 'string'));
    }
  }
  return cleanBindings(next);
}
