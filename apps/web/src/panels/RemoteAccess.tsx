import { useEffect, useRef, useState, type FormEvent } from 'react';
import { mode } from '../editor/editor';
import { addRemoteAgent, remoteStatus, revokeRemoteAgent, setRemoteEnabled, type RemoteStatus } from '../editor/remote';

const POLL_MS = 4000;

const ago = (iso: string | null) => {
  if (!iso) return 'never connected';
  const s = Math.round((Date.now() - Date.parse(iso)) / 1000);
  return s < 60 ? 'active just now' : s < 3600 ? `active ${Math.round(s / 60)}m ago` : `active ${Math.round(s / 3600)}h ago`;
};

const copy = (text: string) => void navigator.clipboard?.writeText(text).catch(() => {});

/** Toolbar button + popover: lets agents outside this machine reach /mcp with their own token. */
export function RemoteAccess() {
  const [status, setStatus] = useState<RemoteStatus | null>(null);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [issued, setIssued] = useState<{ name: string; token: string } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const refresh = () =>
    remoteStatus().then(
      (s) => (setStatus(s), setError(null)),
      () => setError("The Weft server isn't reachable"),
    );
  useEffect(() => {
    if (mode !== 'server') return;
    void refresh();
    if (!open) return;
    const timer = setInterval(() => void refresh(), POLL_MS);
    return () => clearInterval(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => !rootRef.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (mode !== 'server') return null;

  const act = async (fn: () => Promise<unknown>) => {
    try {
      await fn();
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    }
    await refresh();
  };

  const add = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    void act(async () => {
      const { token, agent } = await addRemoteAgent(trimmed);
      setIssued({ name: agent.name, token });
      setName('');
    });
  };

  const enabled = !!status?.enabled;
  const mcpUrl = status?.publicUrl;

  return (
    <div className="gf-remote" ref={rootRef}>
      <button
        className={`gf-tool gf-remote-button${enabled ? ' is-on' : ''}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Let agents outside this Mac (e.g. through ngrok) use Weft's MCP tools"
        onClick={() => setOpen((o) => !o)}
        data-testid="remote-button"
      >
        <span className="gf-remote-dot" />
        {enabled ? 'Remote on' : 'Remote'}
      </button>
      {open && (
        <div className="gf-remote-panel" role="dialog" aria-label="Remote access" data-testid="remote-panel">
          <label className="gf-remote-switch">
            <input type="checkbox" role="switch" checked={enabled} disabled={!status} onChange={(e) => void act(() => setRemoteEnabled(e.target.checked))} />
            <span>
              <strong>Allow remote agents</strong>
              <span className="gf-remote-muted">
                Agents outside this Mac can use the MCP tools through a tunnel, each with its own token. Sync, Assist and these settings stay local.
              </span>
            </span>
          </label>

          <div className="gf-remote-section">
            <div className="gf-remote-heading">Public URL</div>
            {mcpUrl ? (
              <div className="gf-remote-row">
                <code className="gf-remote-code" data-testid="remote-url">
                  {mcpUrl}
                </code>
                <button type="button" className="gf-tool" onClick={() => copy(mcpUrl)}>
                  Copy
                </button>
              </div>
            ) : (
              <div className="gf-remote-muted">
                No tunnel found. Run <code>ngrok http 4510</code> (or <code>--url=</code> your static domain), and don't use <code>--host-header=rewrite</code>.
              </div>
            )}
          </div>

          <div className="gf-remote-section">
            <div className="gf-remote-heading">Agents</div>
            {status?.agents.length === 0 && <div className="gf-remote-muted">No agents yet. Add one to get its token.</div>}
            {status?.agents.map((a) => (
              <div key={a.id} className="gf-remote-row" data-testid="remote-agent">
                <span className="gf-remote-name">{a.name}</span>
                <span className="gf-remote-muted">{ago(a.lastSeen)}</span>
                <button type="button" className="gf-tool gf-remote-revoke" onClick={() => void act(() => revokeRemoteAgent(a.id))}>
                  Revoke
                </button>
              </div>
            ))}
            {issued && (
              <div className="gf-remote-token" data-testid="remote-token">
                <div>
                  Token for <strong>{issued.name}</strong>. Copy it now: it won't be shown again.
                </div>
                <div className="gf-remote-row">
                  <code className="gf-remote-code">{issued.token}</code>
                  <button type="button" className="gf-tool" onClick={() => copy(issued.token)}>
                    Copy
                  </button>
                </div>
                <div className="gf-remote-muted">
                  Send it as <code>Authorization: Bearer …</code>, or add <code>?key=…</code> to the URL if the agent only takes a URL.
                </div>
                <button type="button" className="gf-assist-link" onClick={() => setIssued(null)}>
                  Done
                </button>
              </div>
            )}
            <form className="gf-remote-row" onSubmit={add}>
              <input
                className="gf-remote-input"
                aria-label="Agent name"
                placeholder="Agent name, e.g. Muse"
                maxLength={32}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="gf-tool is-active" disabled={!name.trim() || !status}>
                Add
              </button>
            </form>
          </div>
          {error && (
            <div className="gf-remote-error" role="alert">
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
