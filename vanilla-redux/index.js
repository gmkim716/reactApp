import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");


// 1-1. 액션 이름 정의(cf. 액션: 프로젝트의 상태에 변화를 일으키는 것)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 1-2. 액션 생성 함수 작성: *type을 반드시 가져야 함
// 업데이트에 참고하고 싶은 값은 자유롭게 추가 가능 ex) difference
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });


/* 2. 리듀서 함수 정의 cf. 리듀서: 변화를 일으키는 함수, 파라미터로 state, action 값을 받아온다 */

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

function reducer(state = initialState, action) {  // state: 기존의 상태를 나타내는 관례적인 변수명, 현재 initialState를 기본값으로 설정
  // action.type에 따라 state 값을 다르게 작업 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지: ...state 복사 
        toggle: !state.toggle,  // state 내부의 toggle 값 변경
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}


// 3. store 만들기: 애플리케이션 상태, 리듀서, 내장함수 저장 공간, 하나의 프로젝트 하나의 스토어
const store = createStore(reducer);


// 4. render 함수 생성: 상태가 업데이트 될 때마다 호출하려는 작업
const render = () => {
  // 현재 상태를 불러오기
  const state = store.getState(); 
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();  // render 함수의 실행


// 5. 구독하기
store.subscribe(render); // 스토어의 상태가 업데이트될 때마다 render 함수 호출


/* 1-3. 액션 발생 시키기 */
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease(1));
};
