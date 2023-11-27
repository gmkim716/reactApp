import React, { useEffect, useReducer } from "react";

// 커스텀 훅을 만들어서 요청 상태 관리 로직 재사용

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };

    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };

    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// useAsync 두 가지 파라미터: callback: API 요청을 시작하는 함수, deps: 훅을 위한 설정
function useAsync(callback, deps = []) {
  // useReducer 선언
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" }); // loading
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data }); // 성공일 경우
    } catch (e) {
      dispatch({ type: "ERROR", error: e }); // 실패일 경우
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
