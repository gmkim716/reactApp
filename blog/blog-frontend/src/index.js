import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';
import { BrowserRouter } from '../../../node_modules/react-router-dom/dist/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';

const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider를 통해 리액트 프로젝트에 리덕스 적용
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
