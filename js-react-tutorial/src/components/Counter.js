import React, { useReducer, useState } from "react";

// reducer 정의
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // reducer 사용
  const [number, dispatch] = useReducer(reducer, 0); // 정의해둔 reducer 사용, 기본값 0

  // const [ number, setNumber ] = useState(0);

  /* reducer에 정의해둔 action 사용 */
  const onIncrease = () => {
    // setNumber(prevNumber => prevNumber + 1);
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    // setNumber(prevNumber => prevNumber - 1);
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
