import { createStore } from "redux";

// 초기 상태 정의
const initialUserState = {
  // 유저정보
  userId: "", // 아이디
  password: "", // 패스워드
  nickname: "", // 닉네임
  enrolled: "", // 등록일
  lastLogin: "", // 지난 접속일

  // 이용현황
  rank: -1,
  attempted: 0,
  correct: 0,
  gold: 0,
};

// 리듀서 함수 정의
const reducer = (user = initialUserState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...user,
        userId: action.payload.userId,
        password: action.payload.password,
        enrolled: action.payload.enrolled,
        nickname: action.payload.nickname,
        rank: action.payload.rank,
        correct: action.payload.correct,
        attempted: action.payload.attempted,
        gold: action.payload.gold,
        lastLogin: new Date().toISOString(),
      };
    case "logout":
      return {
        ...initialUserState,
      };
    case "correct":
      return {
        ...user,
        attempted: user.attempted + 1, // 시도 문제 +1
        correct: user.correct + 1, // 정답 문제 +1
        gold: user.gold + action.payload.gold, // 보상 추가
      };
    case "wrong":
      return {
        ...user,
        attempted: user.attempted + 1, // 시도 문제 +1
      };
    default:
      return user;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
