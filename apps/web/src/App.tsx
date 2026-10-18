import { useEffect } from 'react';
import { Canvas } from './canvas/Canvas';
import { installShortcuts } from './editor/shortcuts';
import { Inspector } from './panels/Inspector';
import { LayersPanel } from './panels/LayersPanel';
import { LayersResizer } from './panels/LayersResizer';
import { Toolbar } from './panels/Toolbar';

export function App() {
  useEffect(installShortcuts, []);
  return (
    <div className="gf-app">
      <Toolbar />
      <LayersPanel />
      <LayersResizer />
      <Canvas />
      <Inspector />
    </div>
  );
}
