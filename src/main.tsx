import React from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from '@:providers';

const container = document.createElement('div');

document.body.appendChild(container);

createRoot(container).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
