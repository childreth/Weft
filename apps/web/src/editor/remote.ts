import { SERVER_URL } from './connection';

/** Client for the server's remote-access settings (local only). */

const HTTP_URL = SERVER_URL.replace(/^ws/, 'http');

export interface RemoteAgent {
  id: string;
  name: string;
  created: string;
  lastSeen: string | null;
}

export interface RemoteStatus {
  enabled: boolean;
  agents: RemoteAgent[];
  publicUrl: string | null;
}

async function call<T>(route: string, body?: unknown): Promise<T> {
  const res = await fetch(`${HTTP_URL}/remote${route}`, {
    method: body === undefined ? 'GET' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as T & { error?: string };
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
  return data;
}

export const remoteStatus = () => call<RemoteStatus>('');
export const setRemoteEnabled = (enabled: boolean) => call<RemoteStatus>('/enabled', { enabled });
/** The token comes back once; the server keeps only its hash. */
export const addRemoteAgent = (name: string) => call<{ agent: RemoteAgent; token: string }>('/agents', { name });
export const revokeRemoteAgent = (id: string) => call<{ revoked: boolean }>('/revoke', { id });
