import { useSyncExternalStore } from 'react';
import { GridError, type Alignment, type Axis } from '@weft/core';
import { doc, run, scene } from '../editor/editor';
import { Section } from './controls';

/** Horizontal glyphs; the vertical ones are the same drawings turned 90°. */
const ALIGN_GLYPH = {
  start: 'M2.5 2v12 M5 4h8v3H5z M5 9h5v3H5z',
  center: 'M8 2v12 M3 4h10v3H3z M5 9h6v3H5z',
  end: 'M13.5 2v12 M3 4h8v3H3z M6 9h5v3H6z',
};
const DISTRIBUTE_GLYPH = 'M2.5 2v12 M13.5 2v12 M6.5 4h3v8h-3z';

const ALIGN_BUTTONS: Array<{ align: Alignment; label: string; key: string; glyph: string; turn: boolean }> = [
  { align: 'left', label: 'Align left', key: '⌥A', glyph: ALIGN_GLYPH.start, turn: false },
  { align: 'center', label: 'Align horizontal centers', key: '⌥H', glyph: ALIGN_GLYPH.center, turn: false },
  { align: 'right', label: 'Align right', key: '⌥D', glyph: ALIGN_GLYPH.end, turn: false },
  { align: 'top', label: 'Align top', key: '⌥W', glyph: ALIGN_GLYPH.start, turn: true },
  { align: 'middle', label: 'Align vertical centers', key: '⌥V', glyph: ALIGN_GLYPH.center, turn: true },
  { align: 'bottom', label: 'Align bottom', key: '⌥S', glyph: ALIGN_GLYPH.end, turn: true },
];

const DISTRIBUTE_BUTTONS: Array<{ axis: Axis; label: string; key: string; turn: boolean }> = [
  { axis: 'horizontal', label: 'Distribute horizontally', key: '⌥⇧H', turn: false },
  { axis: 'vertical', label: 'Distribute vertically', key: '⌥⇧V', turn: true },
];

/** Why a plan doesn't apply, or null when it does. */
function blocked(plan: () => unknown): string | null {
  try {
    plan();
    return null;
  } catch (err) {
    if (err instanceof GridError) return err.message;
    throw err;
  }
}

function ArrangeButton({ label, shortcut, glyph, turn, reason, onClick }: {
  label: string;
  shortcut: string;
  glyph: string;
  turn: boolean;
  reason: string | null;
  onClick(): void;
}) {
  return (
    <button
      type="button"
      className="gf-arrange-btn"
      aria-label={label}
      title={reason ?? `${label} (${shortcut})`}
      disabled={reason !== null}
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d={glyph} transform={turn ? 'rotate(90 8 8)' : undefined} />
      </svg>
    </button>
  );
}

/**
 * Align and distribute. Artboards move by frame; elements get CSS alignment
 * through their flex or grid parent. Buttons that don't apply are disabled
 * with the reason as their tooltip.
 */
export function AlignSection({ ids }: { ids: string[] }) {
  // Re-plan whenever the document changes: parents' display and direction decide what applies.
  useSyncExternalStore(scene.subscribe, () => scene.nodes);
  return (
    <Section title="Align">
      <div className="gf-arrange" role="toolbar" aria-label="Align and distribute">
        {ALIGN_BUTTONS.map((b) => (
          <ArrangeButton
            key={b.align}
            label={b.label}
            shortcut={b.key}
            glyph={b.glyph}
            turn={b.turn}
            reason={blocked(() => doc.planAlign(ids, b.align))}
            onClick={() => run(() => doc.alignNodes(ids, b.align))}
          />
        ))}
        <span className="gf-arrange-sep" />
        {DISTRIBUTE_BUTTONS.map((b) => (
          <ArrangeButton
            key={b.axis}
            label={b.label}
            shortcut={b.key}
            glyph={DISTRIBUTE_GLYPH}
            turn={b.turn}
            reason={blocked(() => doc.planDistribute(ids, b.axis))}
            onClick={() => run(() => doc.distributeNodes(ids, b.axis))}
          />
        ))}
      </div>
    </Section>
  );
}
