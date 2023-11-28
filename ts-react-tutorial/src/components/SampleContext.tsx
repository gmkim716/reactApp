import React, { Dispatch, createContext } from "react";

// 필요한 타입을 미리 선언한다
type Color = "red" | "green" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

// 디스패치를 위한 타입, Action들의 타입을 제네릭스로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SampleStateContext = createContext<State | null>(null);
const SampleActionContext = createContext<Action | null>(null);

// 리듀서, reducer의 결과물은 State 타입
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };

    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };

    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };

    default:
      throw new Error("Unhandled action type!");
  }
}
