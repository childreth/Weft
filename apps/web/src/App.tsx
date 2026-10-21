import { useEffect } from 'react';
import { Canvas } from './canvas/Canvas';
import { AssistBar } from './panels/AssistBar';
import { installClipboard } from './editor/clipboard';
import { installFontLoader } from './editor/fonts';
import { installShortcuts } from './editor/shortcuts';
import { Inspector } from './panels/Inspector';
import { LayersPanel } from './panels/LayersPanel';
import { LayersResizer } from './panels/LayersResizer';
import { Toolbar } from './panels/Toolbar';

export function App() {
  useEffect(installShortcuts, []);
  useEffect(installClipboard, []);
  useEffect(installFontLoader, []);
  return (
    <div className="gf-app">
      <Toolbar />
      <LayersPanel />
      <LayersResizer />
      <Canvas />
      <AssistBar />
      <Inspector />
    </div>
  );
}
