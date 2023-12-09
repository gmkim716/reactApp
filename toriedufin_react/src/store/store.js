import { createStore } from "redux";

// 초기 상태 정의
const initialUserState = {
  // 유저정보
  userId: "", // 아이디
  password: "", // 패스워드
  nickname: "", // 닉네임
  enrolled: "", // 등록일

  // 이용현황
  rank: -1,
  attempted: 0,
  correct: 0,
  gold: 0,
};

// 리듀서 함수 정의
const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        userId: action.payload.userId,
        password: action.payload.password,
        enrolled: new Date().toISOString().slice(0, 10),
      };
    case "logout":
      return {
        ...initialUserState,
      };
    case "correct":
      return {
        ...state,
        attempted: state.attempted + 1, // 시도 문제 +1
        correct: state.correct + 1, // 정답 문제 +1
        gold: state.gold + action.payload.gold, // 보상 추가
      };
    case "wrong":
      return {
        ...state,
        attempted: state.attempted + 1, // 시도 문제 +1
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
