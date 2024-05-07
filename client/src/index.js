import React from 'react';
import { createRoot } from 'react-dom/client';  // Correct import for React 18
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root')); // Create a root.
root.render(
  <React.StrictMode>
    <Provider store={store}>
   
        <App />

    </Provider>
  </React.StrictMode>
);

