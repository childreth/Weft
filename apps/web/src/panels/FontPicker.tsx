import { useMemo, useState, type KeyboardEvent } from 'react';
import { findFont, fontSlug, searchFonts, type DocumentFont } from '@weft/core';
import { doc, history, run } from '../editor/editor';
import { useDocFonts } from '../editor/fonts';

const RESULTS = 8;

/** The token a font is used through. */
export const fontVar = (family: string) => `var(--font-family-${fontSlug(family)})`;

/** The document font a `fontFamily` value points at, if any. */
export function fontForValue(value: string, fonts: readonly DocumentFont[]): DocumentFont | undefined {
  return fonts.find((f) => value.trim() === fontVar(f.family));
}

/**
 * Searchable list of the document's fonts and the bundled Google Fonts
 * catalog. Picking a catalog font adds it to the document first; `onPick`
 * gets the family. Both happen in one undo step.
 */
export function FontPicker({ onPick, label, autoFocus }: { onPick(family: string): void; label: string; autoFocus?: boolean }) {
  const fonts = useDocFonts();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    const inDoc = fonts.filter((f) => f.family.toLowerCase().includes(q)).map((f) => ({ family: f.family, inDoc: true, detail: f.weights.join(' ') }));
    const have = new Set(fonts.map((f) => f.family));
    const catalog = searchFonts(q, { limit: RESULTS + inDoc.length })
      .filter((f) => !have.has(f.family))
      .slice(0, RESULTS)
      .map((f) => ({ family: f.family, inDoc: false, detail: f.category }));
    return [...inDoc, ...catalog];
  }, [fonts, query]);

  const pick = (family: string) => {
    history.beginGesture();
    try {
      if (!doc.fonts.has(family)) run(() => doc.addFonts([{ family }]));
      onPick(family);
    } finally {
      history.endGesture();
    }
    setQuery('');
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(0, Math.min(options.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1))));
    } else if (e.key === 'Enter' && options[active]) {
      e.preventDefault();
      pick(options[active]!.family);
    }
  };

  return (
    <div className="gf-font-picker" data-testid="font-picker">
      <input
        className="gf-input"
        aria-label={label}
        placeholder="Search Google Fonts"
        value={query}
        autoFocus={autoFocus}
        spellCheck={false}
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(0);
        }}
        onKeyDown={onKeyDown}
      />
      <ul className="gf-font-options" role="listbox" aria-label="Fonts">
        {options.map((o, i) => (
          <li
            key={o.family}
            role="option"
            aria-selected={i === active}
            className={`gf-font-option${i === active ? ' is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onMouseDown={(e) => {
              e.preventDefault();
              pick(o.family);
            }}
          >
            <span className="gf-font-name">{o.family}</span>
            <span className="gf-font-meta">{o.inDoc ? `In document · ${o.detail}` : o.detail}</span>
          </li>
        ))}
        {options.length === 0 && <li className="gf-font-meta gf-font-none">No fonts match “{query}”</li>}
      </ul>
    </div>
  );
}

/** Document-level list of fonts, shown in the Inspector when nothing is selected. */
export function DocumentFonts() {
  const fonts = useDocFonts();
  const [adding, setAdding] = useState(false);
  return (
    <section className="gf-section" data-testid="document-fonts">
      <header className="gf-section-header">
        <h2>Fonts</h2>
        <button type="button" className="gf-tool" onClick={() => setAdding((a) => !a)} aria-expanded={adding}>
          {adding ? 'Done' : '+ Add'}
        </button>
      </header>
      {fonts.length === 0 && !adding && <p className="gf-font-meta">Google Fonts used by this document appear here, each as a font-family token.</p>}
      {fonts.map((f) => (
        <div key={f.family} className="gf-font-row" data-testid="document-font">
          {findFont(f.family)?.category === 'icons' ? (
            // An icon font would draw its own name as icons: show the name plainly, then one of its icons.
            <span className="gf-font-sample">
              {f.family}{' '}
              <span aria-hidden="true" style={{ fontFamily: `"${f.family}"`, letterSpacing: 'normal' }}>
                star
              </span>
            </span>
          ) : (
            <span className="gf-font-sample" style={{ fontFamily: `"${f.family}", ${findFont(f.family)?.category === 'serif' ? 'serif' : 'sans-serif'}` }}>
              {f.family}
            </span>
          )}
          <span className="gf-font-meta" title={fontVar(f.family)}>
            {f.weights.join(' ')}
          </span>
          <button type="button" className="gf-icon-btn" aria-label={`Remove ${f.family}`} onClick={() => run(() => doc.removeFonts([f.family]))}>
            ×
          </button>
        </div>
      ))}
      {adding && <FontPicker label="Add a font" autoFocus onPick={() => undefined} />}
    </section>
  );
}
