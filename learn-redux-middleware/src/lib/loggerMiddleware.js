/* 미들웨어: 액션 → *미들웨어 → 리듀서 → 스토어
  - 함수를 반환하는 함수
  - store: 리덕스 스토어 인스턴스
  - action: 디스패치된 액션
  - next: 함수 형태, store.dispatch와 비슷한 역할 
    cf. next(action): 그 다음 처리해야 할 미들웨어에게 액션을 넘김 / (미들웨어가 없다면) 리듀서에게 액션을 넘김
*/
const loggerMiddleware = (store) => (next) => (action) => {
  
  /* 미들웨어 기본 구조: 1. 이전 상태 2. 액션 정보 3. 새로워진 상태 */
  
  console.group(action && action.type);  // 액션 타입으로 log를 그룹화
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action);  // 다음 미들웨어 혹은 리듀서에게 전달
  console.log("그 다음 상태", store.getState()); // 업데이트 된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
