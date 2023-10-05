import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Store 생성, RootReducer 등록: 루트 리덕스를 사용해 스토어 생성
import rootReducer from './modules';  
import { createStore } from 'redux';  

// Provider: redux 스토어를 전역적으로 액세스 가능, 스토어 상태를 react 컴포넌트 트리로 전파 가능
import { Provider } from 'react-redux';

// store 정의
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider로 App을 감싸주어 App 내부에서 store 사용할 수 있도록 등록
root.render(
  <Provider store={store}>
    <App />;
  </Provider>,
);
