import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './Context';
import { Provider } from 'react-redux';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    {/* <UserProvider> */}
    <Provider store={store}>
      <App />
      </Provider>
    {/* </UserProvider> */}
  </BrowserRouter>

);

