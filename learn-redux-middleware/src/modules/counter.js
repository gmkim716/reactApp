import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC);
export const decreaseAsync = createAction(DECREASE_ASYNC);

function* increaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(increase()); // 특정 액션을 디스패치

  // *redux-saga에서 현재 상태를 조회하는 방법: select 사용
  const number = yield select((state) => state.counter); // state는 스토어 상태를 의미
  console.log(`현재 값은 ${number}입니다.`);
}
function* decreaseSaga() {
  yield delay(1000); // 1초 대기
  yield put(decrease()); // 특정 액션을 디스패치
}
export function* counterSaga() {
  // // takeEvery: 들어오는 모든 액션에 대해 특정 작업을 처리
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);

  // throttle: takeEvery 대신 사용, n초에 단 한번만 호출되도록 설정
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLatest: 기존 작업 중인 내용 취소 처리, 가장 마지막으로 시랳ㅇ된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// /* redux-saga 이전 */
// // 1초 뒤에 increase 혹은 decrease 함수를 디스패치
// export const increaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(increase())
//   }, 1000);
// }
// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrease())
//   }, 1000);
// }

const initialState = 0; // 상태는 꼭 객체일 필요가 없으며 숫자도 작동한다

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
