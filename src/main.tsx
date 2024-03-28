import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './index.css'

const container = document.createElement('div');

document.body.appendChild(container);

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
