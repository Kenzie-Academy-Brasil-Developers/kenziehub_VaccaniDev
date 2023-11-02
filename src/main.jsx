import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { KenzieProvider } from './providers/Context.jsx';
import { TechProvider } from './providers/TechContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <KenzieProvider>
        <TechProvider>
        <App />
        </TechProvider>
      </KenzieProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
