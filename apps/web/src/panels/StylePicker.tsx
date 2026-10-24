import { useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { getStyleMeta, type StyleGroup, type StyleProp } from '@weft/core';

const GROUP_LABELS: Record<StyleGroup, string> = {
  layout: 'Layout',
  grid: 'Grid',
  child: 'Flex & grid child',
  position: 'Position',
  size: 'Size',
  spacing: 'Spacing',
  fill: 'Fill',
  border: 'Border',
  type: 'Type',
  effects: 'Effects',
};
const GROUP_ORDER = Object.keys(GROUP_LABELS) as StyleGroup[];

/** "gridTemplateColumns" → "Grid Template Columns". */
export const styleLabel = (prop: string) => prop.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

/** How well `prop` matches `query` (0 best); null when it doesn't. Initials count: "gtc" finds Grid Template Columns. */
function rank(prop: StyleProp, query: string): number | null {
  const words = styleLabel(prop).toLowerCase().split(' ');
  const name = words.join(' ');
  if (name.startsWith(query) || prop.toLowerCase().startsWith(query)) return 0;
  // Initials ("ar" → Aspect Ratio) beat a word inside a longer name (Grid Template Areas).
  if (query.length > 1 && words.map((w) => w[0]).join('').startsWith(query)) return 1;
  if (words.some((w) => w.startsWith(query))) return 2;
  if (name.includes(query) || prop.toLowerCase().includes(query)) return 3;
  return null;
}

/**
 * "+ Add" for a style section: a search box over the properties the layer
 * doesn't have yet, grouped by kind until you type, then best matches first.
 */
export function StylePicker({ props, label, onPick }: { props: readonly StyleProp[]; label: string; onPick(prop: StyleProp): void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const button = useRef<HTMLButtonElement>(null);

  const options = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GROUP_ORDER.flatMap((g) => props.filter((p) => getStyleMeta(p).group === g));
    return props
      .map((p, i) => ({ p, r: rank(p, q), i }))
      .filter((o): o is { p: StyleProp; r: number; i: number } => o.r !== null)
      .sort((a, b) => a.r - b.r || a.i - b.i)
      .map((o) => o.p);
  }, [props, query]);

  const close = () => {
    setOpen(false);
    setQuery('');
    setActive(0);
  };
  const pick = (prop: StyleProp) => {
    close();
    onPick(prop);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(0, Math.min(options.length - 1, i + (e.key === 'ArrowDown' ? 1 : -1))));
    } else if (e.key === 'Enter' && options[active]) {
      e.preventDefault();
      pick(options[active]!);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
      button.current?.focus();
    }
  };

  const grouped = !query.trim();
  return (
    <>
      <button ref={button} type="button" className="gf-tool gf-add-style" aria-label={label} aria-expanded={open} onClick={() => (open ? close() : setOpen(true))}>
        + Add
      </button>
      {open && (
        <div className="gf-style-picker" data-testid="style-picker">
          <input
            className="gf-input"
            aria-label={`${label}: search`}
            placeholder="Search properties"
            value={query}
            autoFocus
            spellCheck={false}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            onBlur={close}
          />
          <ul className="gf-picker-options" role="listbox" aria-label="Style properties">
            {options.map((p, i) => {
              const group = getStyleMeta(p).group;
              const heading = grouped && (i === 0 || getStyleMeta(options[i - 1]!).group !== group);
              return (
                <li key={p} role="presentation">
                  {heading && <div className="gf-picker-group">{GROUP_LABELS[group]}</div>}
                  <div
                    role="option"
                    aria-selected={i === active}
                    className={`gf-picker-option${i === active ? ' is-active' : ''}`}
                    ref={i === active ? (el) => el?.scrollIntoView({ block: 'nearest' }) : undefined}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => {
                      // Before the input's blur closes the list.
                      e.preventDefault();
                      pick(p);
                    }}
                  >
                    <span>{styleLabel(p)}</span>
                    {!grouped && <span className="gf-font-meta">{GROUP_LABELS[group]}</span>}
                  </div>
                </li>
              );
            })}
            {options.length === 0 && <li className="gf-font-meta gf-font-none">No properties match “{query}”</li>}
          </ul>
        </div>
      )}
    </>
  );
}
