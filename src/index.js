import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageRouter from './PageRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>
);
