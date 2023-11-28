import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import createAsyncDispatcher from "./asyncActionUtils";
import * as api from './api';  // api파일에서 내보낸 모든 함수들을 불러온다 

/* Context 준비 */

// 기본 상태 정의
const initialState = {
	users: {
		loading: false,
		data: null,
		error: null,
	},
	user: {
		loading: false,
		data: null,
		error: null,
	}
}

// 로딩중일 때 바뀔 상태 객체
const loadingState = {
	loading: true,
	data: null,
	error: null,
}

// 성공했을 때의 상태
const success = (data) => ({
	loading: false,
	data,
	error: null, 
})

// 실패했을 때의 상태
const error = (error) => ({
	loading: false,
	data: null,
	error: error,
})

// 위에서 정의한 상태을 사용해서 리듀서 작성
function usersReducer(state, action) {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: loadingState,
			};

		case 'GET_USERS_SUCCESS':
			return {
				...state,
				users: success(action.data)
			};

		case 'GET_USERS_ERROR':
			return {
				...state,
				users: error(action.error)
			}

		case 'GET_USER':
			return {
				...state,
				user: loadingState,
			}

		case 'GET_USER_ERROR':
			return {
				...state,
				user: error(action.error)
			}
		default:
			throw new Error(`Unhandled action type ${action.type}`);
	}
}

// State용 Context와 Dispatch용 Context를 따로 만들어준다
const UsersStateContext = createContext(null); 
const UsersDispatchContext = createContext(null); 


export function UsersProvider({ children }) {
	const [state, dispatch] = useReducer(usersReducer, initialState)

	return (
		// UsersContext로 감싸주기 
		<UsersStateContext.Provider value={state}>  
			{/* UsersDipatchContext로 감싸주기 */}
			<UsersDispatchContext.Provider value={dispatch}>
				{children}
			</UsersDispatchContext.Provider>
		</UsersStateContext.Provider>
	);
}

// State를 쉽게 조회할 수 있게 해주는 커스텀 hook
export function useUsersState() {
	const state = useContext(UsersStateContext);
	if (!state) {
		throw new Error('Cannot find UsersProvider'); 
	}
	return state;
}

// Dispatch를 쉽게 사용할 수 있게 해주는 커스텀 hook
export function useUsersDispatch() {
	const dispatch = useContext(UsersDispatchContext);
	if (!dispatch) {
		throw new Error('Cannot find UsersProvider');
	}
	return dispatch;
}


/* API 처리 함수 만들기 
	export async function getUsers(dispatch) {
		dispatch({ type: 'GET_USERS' });  // 로딩중 표시
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });  // 유저 정보 가져오기 
		} catch (e) {
			dispatch({ type: 'GET_USERS_ERROR', error: e })  // 에러 표시 
		}
	}

	export async function getUser(dispatch, id) {
		dispatch({ type: 'GET_USER' })  // 로딩중 표시
		try {
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}`
			);
			dispatch({ type: 'GET_USER_SUCCESS', data: response.data });  // 유저 정보 가져오기
		} catch (e) {
			dispatch({ type: 'GET_USER_ERROR', error: e });  // 에러 표시
		}
	}
*/

/* createAsyncDispatcher을 이용해서 반복되는 코드 줄이기 */
export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers); 
export const getUser = createAsyncDispatcher('GET_USER', api.getUser); 