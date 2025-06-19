import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.js';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Root container not found');
}
const root = createRoot(container);
root.render(<App />);
