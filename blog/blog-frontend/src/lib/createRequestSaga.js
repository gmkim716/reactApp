import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  /*
    function*: 제너레이터 함수: 실행을 일시중단하고, 필요한 만큼 여러 반 값을 반환할 수 있는 함수, 비동기 작업
    yield: 제너레이터 함수 내부에서 오른쪽에 위치한 표현식 실행을 기다림, 비동기 작업 수행
    call: 함수 호출하고 결과를 기다림
  */
  return function* (action) {   
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);  // request 함수 호출, actions.payload를 인수로 전달
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
