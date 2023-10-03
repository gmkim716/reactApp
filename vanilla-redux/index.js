import { createStore } from "redux";

// DOM 레퍼런스 만들기
const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 이름 정의 cf. 액션: 프로젝트의 상태에 변화를 일으키는 것
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 작성: type을 반드시 가져야 함
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수 정의 cf. 리듀서: 변화를 일으키는 함수, 파라미터로 state, action 값을 받아온다

// state가 undefined일 때는 initialState를 기본값으로 사용
function reducer(state = initialState, action) {
  // state의 초기 값은
  // action.type에 따라 다른 작업을 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해줘야 한다
        toggle: !state.toggle,
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

const store = createStore(reducer);

// render: 상태가 업데이트 될 때마다 호출
const render = () => {
  const state = store.getState(); // 현재 상태를 불러오기

  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  // 카운터 처리
  counter.innerText = state.counter;
};

render();
store.subscribe(render); // 상태가 업데이트될 때마다 render 함수 호출

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease(1));
};
