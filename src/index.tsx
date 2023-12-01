import React from 'react'
import ReactDOM from 'react-dom/client'
import PageConnectKit from './App'

import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer;
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageConnectKit />
  </React.StrictMode>
)