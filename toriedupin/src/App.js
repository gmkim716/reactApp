import React, { useCallback, useMemo, useReducer, useRef } from "react"
import CreateUser from "./components/CreateUser"
import UserList from "./components/UserList"

function countActiveUsers(users) {
	console.log('활성 사용자 수를 세는 중..')
	return users.filter(user => user.active.length);
}

const initialState = {
	inputs: {
		username: '',
		email: '', 
	},

	users: [
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
			active: true
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
			active: false
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
			active: false
		}
	],
};

// action.id, action.name, action.user ... => action: dispatch 할 때 사용되는 객체
function reducer(state, action) {

	// action.type에 따라 동작을 다르게 정의
	switch (action.type) {

		// CHANGE_INPUT: state.inputs.name의 값을 action.value로 변경 
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				}
			};
		
		// CREATE_USER: 
		case 'CREATE_USER':
			return {
				inputs: initialState.inputs,
				// users: state.users.concat(action.user)  // 1) concat을 사용할 때
				users: [...state.users, action.user]  // 2) spread 연산자를 사용할 때
			};
		
		// TOGGLE_USER
		case 'TOGGLE_USER':
			return {
				...state,
				users: state.users.map((user) => 
					user.id === action.id ? { ...user, active: !user.active } : user
				)
			}

		// REMOVE_USER
		case 'REMOVE_USER':
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.id)
			};

		// 마무리: 기본값 반환
		default:
			return state;
	}
}

function App () {

	/* 리듀서 사용 정의 
		-	state는 기본값으로 initialState를 값으로 갖는다
		- dispatch를 하면 reducer에 정의한 action 함수들을 사용할 수 있다 
	*/
	const [state, dispatch] = useReducer(reducer, initialState);
	const nextId = useRef(4);
	const { users } = state;  // state(initialState) 객체의 users를 꺼내서 사용
	const { username, email } = state.inputs;  // state(initialState) 아래, input 객체의 username, email 사용

	const onChange = useCallback((e) => {
		const { name, value } = e.target;  // 입력값의 name, value 추출

		// type(직접 지정), name, value를 가지고 CHANGE_INPUT 매서드 실행 
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value,
		});
	}, [])

	const onCreate = useCallback((e) => {
		dispatch({
			type: 'CREATE_USER',
			user: {
				id: nextId.current,
				username,
				email,
			}
		});
		nextId.current ++;
	}, [username, email]);

	const onToggle = useCallback((id) => {
		dispatch({
			type:'TOGGLE_USER',
			id,
		});
	}, []);

	const onRemove = useCallback((id) => {
		dispatch({
			type: 'REMOVE_USER',
			id,
		});
	}, []);

	// useMemo: 계산 값은 useMemo를 사용하도록 하자 
	const count = useMemo(() => countActiveUsers(users), [users]);

	return(
		<>
			<CreateUser 
				username={username} 
				email={email} 
				onChange={onChange} 
				onCreate={onCreate}	
			/>
			<UserList users={users} onToggle={onToggle} onRemove={onRemove} />
			<div>활성 사용자 수 : {count}</div>
		</>
	)
}

export default App