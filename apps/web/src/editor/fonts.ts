import { useMemo, useSyncExternalStore } from 'react';
import { encodeFontQuery, flattenTokens, googleFontsCSSUrl, type DocumentFont, type FlatToken, type TokenSet } from '@weft/core';
import { SERVER_URL } from './connection';
import { doc, mode } from './editor';

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

const subscribeTokens = (l: () => void) => {
  tokenListeners.add(l);
  return () => void tokenListeners.delete(l);
};

/** Default tokens, the document's own tokens, and a `font-family` token per document font. */
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

/** Keeps one <link> in the page head in step with the document's fonts. */
export function installFontLoader(): () => void {
  let link: HTMLLinkElement | null = null;
  const sync = () => {
    const href = fontStylesheetUrl(fonts);
    if (!href) return void (link?.remove(), (link = null));
    if (!link) {
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.dataset.weftFonts = '';
      document.head.append(link);
    }
    if (link.href !== href) link.href = href;
  };
  sync();
  const stop = subscribe(sync);
  return () => {
    stop();
    link?.remove();
  };
}
