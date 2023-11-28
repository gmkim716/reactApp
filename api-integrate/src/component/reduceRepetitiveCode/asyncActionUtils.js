// 다음과 같이 createAsyncDispatcher를 만들어주면 UsersContext의 코드를 리팩토링할 수 있다


// 파라미터: 액션의 타입, promise를 만들어주는 함수 
export default function createAsyncDispatcher(type, promiseFn) {

	// 성공, 실패에 대한 액션 타입 문자열을 준비
	const SUCCESS = `${type}_SUCCESS`;
	const ERROR = `${type}_ERROR`;

	// ...rest를 사용해서 나머지 파라미터를 rest 배열에 담는다
	async function actionHandler(dispatch, ...rest) {
		dispatch({ type })  // 요청 시작
		try {
			const data = await promiseFn(...rest);  // rest 배열을 spread로 넣어준다
			
			// 성공
			dispatch({
				type: SUCCESS,
				data,
			})
		} catch (e) {
			// 실패
			dispatch({
				type: ERROR,
				error: e
			})
		}
	}
	return actionHandler;  // 만든 함수를 반환
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null
};

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
  loading: true,
  data: null,
  error: null
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
  loading: false,
  data,
  error: null
});

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
  loading: false,
  data: null,
  error: error
});

/* 세 가지 액션을 처리하는 리듀서를 만들어준다 */
export function createAsyncHandler(type, key) {
	const SUCCESS = `${type}_SUCCESS`
	const ERROR = `${type}_ERROR`

	// 함수를 새로 만들어서 반환한다 
	function handler(state, action) {
		switch (action.type) {
      case type:
        return {
          ...state,
          [key]: loadingState
        };
      case SUCCESS:
        return {
          ...state,
          [key]: success(action.data)
        };
      case ERROR:
        return {
          ...state,
          [key]: error(action.error)
        };
      default:
        return state;
		}
	}

	return handler;
}