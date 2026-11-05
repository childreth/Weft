import { useMemo, useSyncExternalStore } from 'react';
import { encodeFontQuery, flattenTokens, googleFontsCSSUrl, type DocumentFont, type FlatToken, type TokenSet } from '@weft/core';
import { SERVER_URL } from './connection';
import { doc, mode } from './editor';
import { useEditor } from './store';

/**
 * The document's Google Fonts and tokens in the editor: stores over
 * `doc.fonts` and the full token set (`doc.tokenSet()`), and the one
 * stylesheet that loads the fonts. Fonts must load in the main document:
 * @font-face rules inside shadow roots are ignored, but faces declared here
 * are visible to every artboard.
 */

const HTTP_URL = SERVER_URL.replace(/^ws/, 'http');

let fonts: DocumentFont[] = doc.getFonts();
const listeners = new Set<() => void>();
doc.fonts.observe(() => {
  fonts = doc.getFonts();
  for (const l of listeners) l();
});

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => void listeners.delete(l);
};

export const useDocFonts = (): DocumentFont[] => useSyncExternalStore(subscribe, () => fonts);

let tokenSet: TokenSet = doc.tokenSet();
const tokenListeners = new Set<() => void>();
const updateTokens = () => {
  tokenSet = doc.tokenSet();
  for (const l of tokenListeners) l();
};
doc.fonts.observe(updateTokens);
doc.tokens.observe(updateTokens);
doc.themes.observe(updateTokens);

const subscribeTokens = (l: () => void) => {
  tokenListeners.add(l);
  return () => void tokenListeners.delete(l);
};

/** Default tokens, the document's own tokens, a `font-family` token per document font, and every theme. */
export const useDocTokens = (): TokenSet => useSyncExternalStore(subscribeTokens, () => tokenSet);

export function useFlatTokens(): FlatToken[] {
  const tokens = useDocTokens();
  return useMemo(() => flattenTokens(tokens.tokens), [tokens]);
}

/**
 * With the server, fonts come from its local cache (fetched from Google once,
 * then available offline). Browser-only modes load from Google directly.
 */
export function fontStylesheetUrl(list: readonly DocumentFont[]): string | null {
  if (list.length === 0) return null;
  return mode === 'server' ? `${HTTP_URL}/fonts.css?q=${encodeURIComponent(encodeFontQuery(list))}` : googleFontsCSSUrl(list);
}

/** Waits before each retry of a failed font load; after the last, only a reconnect retries. */
const RETRY_MS = [2000, 5000, 15000, 30000, 60000];

/**
 * Keeps one <link> in the page head in step with the document's fonts. A
 * browser never retries a stylesheet or font file that failed (the server was
 * restarting, the network dropped), and would show fallback text, icon names
 * included, until a reload. So a failure reloads the stylesheet with backoff,
 * and at once when the server connection comes back.
 */
export function installFontLoader(): () => void {
  let link: HTMLLinkElement | null = null;
  let base: string | null = null;
  let attempt = 0;
  let failed = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const load = () => {
    if (!base) return;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.dataset.weftFonts = '';
      link.addEventListener('error', fail);
      document.head.append(link);
    }
    // A changed URL is the only way to make the browser fetch the faces again.
    const href = attempt === 0 ? base : `${base}${base.includes('?') ? '&' : '?'}retry=${attempt}`;
    if (link.href !== href) link.href = href;
  };
  const retry = () => {
    clearTimeout(timer);
    timer = undefined;
    if (!failed) return;
    failed = false;
    attempt++;
    load();
  };
  function fail() {
    if (failed) return;
    failed = true;
    const wait = RETRY_MS[Math.min(attempt, RETRY_MS.length)];
    if (wait !== undefined) timer = setTimeout(retry, wait);
  }

  const sync = () => {
    const next = fontStylesheetUrl(fonts);
    if (next === base) return;
    base = next;
    attempt = 0;
    failed = false;
    clearTimeout(timer);
    if (!base) return void (link?.remove(), (link = null));
    load();
  };
  sync();
  const stop = subscribe(sync);
  const onFaceError = () => fail();
  document.fonts.addEventListener('loadingerror', onFaceError);
  const stopConnection = useEditor.subscribe((state, prev) => {
    if (state.connection === 'connected' && prev.connection !== 'connected' && failed) retry();
  });
  window.addEventListener('online', retry);
  return () => {
    stop();
    stopConnection();
    clearTimeout(timer);
    document.fonts.removeEventListener('loadingerror', onFaceError);
    window.removeEventListener('online', retry);
    link?.remove();
  };
}
