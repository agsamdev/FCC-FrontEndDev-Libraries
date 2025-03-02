// main.jsx (or index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import './index.css';

function AppWrapper() {
  const color = useSelector((state) => state.color);
  const quote = useSelector((state) => state.quote);

  return (
    <div style={{ backgroundColor: color, minHeight: '100vh', transition: 'background-color 0.5s ease' }}>
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  </React.StrictMode>
);