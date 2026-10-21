import * as Y from 'yjs';
import { ORIGIN_LOCAL, type GridDocument, type Origin } from './document';

/**
 * Per-user undo. Only transactions from tracked origins are undoable, so an
 * agent's or collaborator's edits never land on this user's stack by accident.
 *
 * Each command is its own undo step. Continuous gestures (drags, text editing)
 * wrap their transactions in begin/endGesture to collapse into a single step.
 */
export class History {
  readonly manager: Y.UndoManager;
  private gestureDepth = 0;

  constructor(doc: GridDocument, trackedOrigins: Origin[] = [ORIGIN_LOCAL]) {
    this.manager = new Y.UndoManager(doc.undoScope, {
      trackedOrigins: new Set(trackedOrigins),
      captureTimeout: 0,
    });
  }

  undo(): void {
    this.endAllGestures();
    this.manager.undo();
  }

  redo(): void {
    this.endAllGestures();
    this.manager.redo();
  }

  canUndo(): boolean {
    return this.manager.canUndo();
  }

  canRedo(): boolean {
    return this.manager.canRedo();
  }

  beginGesture(): void {
    if (this.gestureDepth++ === 0) {
      this.manager.stopCapturing();
      this.manager.captureTimeout = Number.MAX_SAFE_INTEGER;
    }
  }

  endGesture(): void {
    if (this.gestureDepth === 0) return;
    if (--this.gestureDepth === 0) {
      this.manager.captureTimeout = 0;
      this.manager.stopCapturing();
    }
  }

  private endAllGestures(): void {
    if (this.gestureDepth > 0) {
      this.gestureDepth = 1;
      this.endGesture();
    }
  }
}
