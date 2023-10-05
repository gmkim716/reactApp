import { createAction, handleActions } from 'redux-actions';

// 1. 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 1-1. 액션 생성 함수 만들기: export를 붙여 다른 파일에서 불러와 사용 가능
// export: 여러 개의 값을 내보낼 수 있다
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

/* 초기 상태, 리듀서 함수 만들기 */ 
const initialState = {
  number: 0,
};

/* handleActions 함수를 사용: 액션 함수를 더욱 간결하게 작성이 가능 
  handleActions(reducerMap, initialState)
  - reducerMap: 액션 타입에 따른 업데이트 함수 정의
  - initialState: 리듀서의 초기 상태를 나타내는 객체
*/
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

/* handleActions 함수 사용하기 전 */
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default: 단 한개의 값만 내보낼 수 있다
export default counter;
