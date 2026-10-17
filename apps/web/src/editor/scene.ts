import { useSyncExternalStore } from 'react';
import { changedNodeIds, readNode, sortSiblings, type GridDocument, type SceneNode } from '@weft/core';

const ROOT_KEY = '\u0000root';
const EMPTY: readonly string[] = [];

function sameIds(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((id, i) => id === b[i]);
}

/**
 * Immutable, structurally shared projection of the Yjs document for React.
 * Unchanged nodes keep their object identity so memoized views skip renders.
 */
export class SceneStore {
  nodes: ReadonlyMap<string, SceneNode> = new Map();
  private childIndex: ReadonlyMap<string, readonly string[]> = new Map();
  private listeners = new Set<() => void>();

  constructor(private readonly doc: GridDocument) {
    this.refresh(null);
    doc.nodes.observeDeep((events) => this.refresh(changedNodeIds(events, doc.nodes)));
  }

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  children(parentId: string | null): readonly string[] {
    return this.childIndex.get(parentId ?? ROOT_KEY) ?? EMPTY;
  }

  private refresh(changed: Set<string> | null): void {
    const next = new Map(changed ? this.nodes : []);
    if (changed === null) {
      for (const [id, y] of this.doc.nodes) next.set(id, readNode(y));
    } else {
      for (const id of changed) {
        const y = this.doc.nodes.get(id);
        if (y) next.set(id, readNode(y));
        else next.delete(id);
      }
    }
    this.nodes = next;

    const groups = new Map<string, SceneNode[]>();
    for (const node of next.values()) {
      const key = node.parentId ?? ROOT_KEY;
      const list = groups.get(key) ?? [];
      list.push(node);
      groups.set(key, list);
    }
    const childIndex = new Map<string, readonly string[]>();
    for (const [key, list] of groups) {
      const ids = sortSiblings(list).map((n) => n.id);
      const prev = this.childIndex.get(key);
      childIndex.set(key, prev && sameIds(prev, ids) ? prev : ids);
    }
    this.childIndex = childIndex;
    for (const listener of this.listeners) listener();
  }
}

export function makeSceneHooks(scene: SceneStore) {
  return {
    useNode: (id: string) => useSyncExternalStore(scene.subscribe, () => scene.nodes.get(id)),
    useChildren: (parentId: string | null) => useSyncExternalStore(scene.subscribe, () => scene.children(parentId)),
  };
}
