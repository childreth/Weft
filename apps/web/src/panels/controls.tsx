import { useEffect, useState, type KeyboardEvent, type ReactNode } from 'react';

interface CommitInputProps {
  value: string;
  onCommit(value: string): void;
  label: string;
  list?: string;
  placeholder?: string;
  multiline?: boolean;
  numeric?: boolean;
}

/** Text field that edits a local draft and commits on blur or Enter. */
export function CommitInput({ value, onCommit, label, list, placeholder, multiline, numeric }: CommitInputProps) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);

  const commit = () => {
    if (draft !== value) onCommit(draft);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (!multiline || e.metaKey)) {
      e.preventDefault();
      e.currentTarget.blur();
    } else if (e.key === 'Escape') {
      setDraft(value);
      requestAnimationFrame(() => (e.target as HTMLElement).blur());
    }
  };
  const common = {
    'aria-label': label,
    value: draft,
    placeholder,
    onBlur: commit,
    onKeyDown,
    spellCheck: false,
  };
  return multiline ? (
    <textarea className="gf-input gf-textarea" rows={3} {...common} onChange={(e) => setDraft(e.target.value)} />
  ) : (
    <input
      className="gf-input"
      list={list}
      inputMode={numeric ? 'decimal' : undefined}
      {...common}
      onChange={(e) => setDraft(e.target.value)}
    />
  );
}

export function Section({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <section className="gf-section">
      <header className="gf-section-header">
        <h2>{title}</h2>
        {actions}
      </header>
      {children}
    </section>
  );
}

export function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="gf-row">
      <span className="gf-row-label">{label}</span>
      {children}
    </label>
  );
}
