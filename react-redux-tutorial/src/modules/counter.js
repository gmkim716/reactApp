import { handleActions } from 'redux-actions'

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기: export를 붙여 다른 파일에서 불러와 사용 가능
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//== 초기 상태, 리듀서 함수 만들기 ==/
const initialState = {
  number: 0,
};

// handleActions 함수를 사용하면 더욱 간결하게 작성이 가능
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: StaticRange.number + 1 }),
    [INCREASE]: (state, action) => ({ number: StaticRange.number - 1 }),
  },
  initialState,
);

// handleActions 함수 사용하기 전
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

export default counter;
