import { combineReducers } from 'redux';
import auth from './auth';

// 생성한 여러 리듀서를 등록
const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
g;
