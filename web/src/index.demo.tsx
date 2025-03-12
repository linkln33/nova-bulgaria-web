import React from 'react';
import { createRoot } from 'react-dom/client';
import DemoApp from './DemoApp';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>
);
