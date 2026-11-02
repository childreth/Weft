import { useState } from 'react';
import { TEXT_ROLES, TEXT_ROLE_GROUPS, resolvedTokenValues, type TextRole } from '@weft/core';
import { doc, run } from '../editor/editor';
import { useDocTokens } from '../editor/fonts';
import { CommitInput, Row } from './controls';

export const textRoleLabel = (role: TextRole) => (role.length === 2 ? role.toUpperCase() : role.charAt(0).toUpperCase() + role.slice(1));

const COLUMNS = [
  { group: TEXT_ROLE_GROUPS.fontSize, label: 'Size' },
  { group: TEXT_ROLE_GROUPS.fontWeight, label: 'Weight' },
  { group: TEXT_ROLE_GROUPS.lineHeight, label: 'Line' },
  { group: TEXT_ROLE_GROUPS.letterSpacing, label: 'Track' },
] as const;

/**
 * The text roles' values, for the document or one theme. A value set at that
 * level is highlighted; clearing it goes back to what it inherits.
 */
export function DocumentType() {
  const tokens = useDocTokens();
  const [theme, setTheme] = useState('');
  // Clearing a value that isn't set changes nothing, so the field is reset by hand.
  const [resets, setResets] = useState(0);
  const themes = Object.keys(tokens.modes ?? {}).sort();
  const active = themes.includes(theme) ? theme : '';
  const values = resolvedTokenValues(tokens, active || undefined);
  const own = active ? (doc.getThemes()[active] ?? {}) : doc.getTokens();
  const set = (path: string, raw: string) => {
    const value = raw.trim();
    if (!value && !(path in own)) return setResets((n) => n + 1);
    const entry = { [path]: value || null };
    run(() => (active ? doc.setTheme(active, entry) : doc.setTokens(entry)));
  };
  return (
    <section className="gf-section" data-testid="document-type">
      <header className="gf-section-header">
        <h2>Type</h2>
      </header>
      <Row label="For">
        <select className="gf-input" aria-label="Text roles for" value={active} onChange={(e) => setTheme(e.target.value)}>
          <option value="">Document</option>
          {themes.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </Row>
      <div className="gf-type-grid" role="group" aria-label="Text roles">
        <span />
        {COLUMNS.map((c) => (
          <span key={c.group} className="gf-type-heading">
            {c.label}
          </span>
        ))}
        {TEXT_ROLES.map((role) => (
          <div key={role} className="gf-type-row">
            <span className="gf-row-label">{textRoleLabel(role)}</span>
            {COLUMNS.map((c) => {
              const path = `${c.group}.${role}`;
              return (
                <span key={path} className={`gf-type-cell${path in own ? ' is-set' : ''}`}>
                  <CommitInput
                    key={`${active}:${resets}`}
                    label={`${textRoleLabel(role)} ${c.label.toLowerCase()}`}
                    value={values.get(path) ?? ''}
                    onCommit={(v) => set(path, v)}
                  />
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
