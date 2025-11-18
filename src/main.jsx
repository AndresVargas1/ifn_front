import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './auth/context/AuthContext.jsx';

/**
 * Entry point of the React application.
 *
 * Wraps the App in an AuthProvider to make authentication
 * state available to all components.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);