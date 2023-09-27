import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import rootReducer from './modules/index';

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
