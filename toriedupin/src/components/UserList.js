import React, { useEffect } from "react";

/* User를 컴포넌트로 생성하지 말고 UserList에서 정의해서 사용 가능 */
const User = ({ user, onRemove, onToggle }) => {

	/*
		useEffect: 첫 번째 인자: 함수, 두 번째 인자 : 의존값 배열 

		- deps가 비어있는 경우 cleanup 함수가 호출, 리렌더링 될 때마다 호출이 발생
		- 리액트 컴포넌트는 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트 또한 리렌더링이 진행
		- 컴포넌트 최적화 과정에서 Virtual DOM에 렌더링하는 리소스를 아끼는 방법도 있다 
	*/
	useEffect(() => {
		console.log('user 값이 설정됨');
		console.log(user);
		return () => {
			console.log('user가 바뀌기 전..')
			console.log(user)
		}
	}, [user])

	
	return (
		<div>
			<b>{user.id}.</b>
			<b
				style={{
					cursor: 'pointer',  // cursor: 마우스를 올렸을 때, pointer: 손가락 모양 
					color: user.active ? 'green' : 'black',  // active 값에 따라 색상 변화 
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b> 
			&nbsp;
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

const UserList = ({ users, onRemove, onToggle }) => {
	return (
		<div>
			{users.map((user, idx) => (
				/* 
					key를 입력하지 않으면 콘솔에 warning이 뜨게 된다
					cf. key를 전달해도 idx값을 props 할 수 있는 것은 아닌듯. idx를 출력하길 원한다면 user.id를 사용하도록 하자.
				*/
				<User key={idx} user={user} onRemove={onRemove} onToggle={onToggle} />
			))}
		</div>
	)
}

export default UserList