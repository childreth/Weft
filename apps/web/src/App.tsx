import { useEffect } from 'react';
import { Canvas } from './canvas/Canvas';
import { installShortcuts } from './editor/shortcuts';
import { Inspector } from './panels/Inspector';
import { LayersPanel } from './panels/LayersPanel';
import { Toolbar } from './panels/Toolbar';

export function App() {
  useEffect(installShortcuts, []);
  return (
    <div className="gf-app">
      <Toolbar />
      <LayersPanel />
      <Canvas />
      <Inspector />
    </div>
  );
}
