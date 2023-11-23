import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from '../../node_modules/axios/index';

// 생성한 여러 리듀서를 등록
const rootReducer = combineReducers({
  auth,
  loading,
});

// rootSaga 생성
export function* rootSaga() {
  yield all([authSaga()]);
}

export default rootReducer;
