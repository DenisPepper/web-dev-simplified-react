import React from 'react';
import ReactDOM from 'react-dom/client';
//import { RouterProvider } from 'react-router-dom';
//import { router } from './router.jsx';
import { App } from './App.jsx';
import { ErrorBorder } from './exercises/error-border/error-border.jsx';
//import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<RouterProvider router={router} /> */}
    <ErrorBorder fallback={<h1>Error border fallback!</h1>}>
      <App />
    </ErrorBorder>
  </React.StrictMode>
);
