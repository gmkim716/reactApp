import combineReducers from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 리듀서의 역할: 하위 리듀서를 하나로 병합
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer; // index.js이지만 rootReducer로 읽을 수 있도록 설정
