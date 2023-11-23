import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { BrowserRouter } from '../../../node_modules/react-router-dom/dist/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import { rootSaga } from './modules/index';
import createSagaMiddleware from 'redux-saga';

// redux-saga 미들웨어 적용
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider를 통해 리액트 프로젝트에 리덕스 적용
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
