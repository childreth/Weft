import { useMemo, useSyncExternalStore } from 'react';
import { defaultTokens, encodeFontQuery, flattenTokens, googleFontsCSSUrl, withFontTokens, type DocumentFont, type FlatToken, type TokenSet } from '@weft/core';
import { SERVER_URL } from './connection';
import { doc, mode } from './editor';

/**
 * The document's Google Fonts in the editor: a store over `doc.fonts`, the
 * token set they extend, and the one stylesheet that loads them. Fonts must
 * load in the main document: @font-face rules inside shadow roots are ignored,
 * but faces declared here are visible to every artboard.
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

/** Default tokens plus a `font-family` token per document font. */
export function useDocTokens(): TokenSet {
  const list = useDocFonts();
  return useMemo(() => withFontTokens(defaultTokens, list), [list]);
}

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
