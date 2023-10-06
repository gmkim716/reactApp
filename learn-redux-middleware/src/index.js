import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { Provider, createStoreHook } from "react-redux";
import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'

//== 비동기 작업을 처리할 때 도움을 주는 미들웨어는 다양 ==//
// 실습에서는 redux-thunk, redux-saga를 사용
 
/* redux-thunk 사용: loggerMiddleware */
const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger, thunk)); 

// /* redux-logger 사용: loggerMiddleware */
// const logger = createLogger()
// const store = createStore(rootReducer, applyMiddleware(logger)); 

// /* loggerMiddelware 사용 */
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware)); // applyMiddleware: 미들웨어 적용

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
