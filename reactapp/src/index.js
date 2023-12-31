import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplete from 'react-alert-template-basic'

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  timeout: 3000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

root.render(
  <AlertProvider template={AlertTemplete}{...options}>

  
  <BrowserRouter>
  
    <App />
  
  </BrowserRouter>
  </AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
