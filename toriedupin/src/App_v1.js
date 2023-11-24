import React, { useCallback, useMemo, useRef, useState } from "react";
import Hello from './components/Hello'
import InputSample from "./components/InputSample";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Counter from "./components/Counter";

function App_v1() {
  const [ inputs, setInputs ] = useState({
    username: '', 
    email: '', 
  })

  const { username, email } = inputs;

	/* users 데이터 정의 */ 
	const [ users, setUsers ] = useState([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
      active: true, 
		},
		{
      id: 2,
			username: 'tester',
			email: 'tester@example.com',
      active: false, 
		},
		{
      id: 3,
			username: 'liz',
			email: 'liz@example.com',
      active: false, 
		}
	]);

  /*
    useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다
    - 리액트 컴포넌트에서의 상태: 상태 변경 함수를 호출하고, 렌더링 이후에 업데이트 된 상태 조회 가능
    - 반면, useRef로 관리하는 변수는 설정 후 바로 조회가 가능 => 렌더링을 줄일 수 있다!
  */
  const nextId = useRef(4);  // useRef로 관리, .current를 통해 조회 가능 

  /* 유저 정보 추가 */
  const onCreate = useCallback(() => {
    console.log("hi")
    const user = {
      id: nextId.current,
      username, 
      email,
    };
    nextId.current ++;  // cf. nextId가 아니라 nextId.current에 값을 추가  
    
    // 데이터 추가 
    setUsers([...users, user])  // 기존의 users 배열 복사, user를 배열에 추가
  }, [username, email]);


  /* 데이터 입력 */ 
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, [inputs]
  )

  /* 유저 정보 제거 */
  const onRemove = useCallback(
    (id) => {
      // user.id가 일치하지 않는 원소만 추출해서 새로운 배열 생성 = user.id가 id인 데이터 제거
      setUsers(users.filter(user => user.id !== id));  
  }, []);


  /* user명 클릭 시 토글 기능 */
  const onToggle = useCallback(
    (id) => {
      setUsers(
        // users배열 순환: user.id가 id와 일치하는 user 정보의 active를 true/false 전환, 그렇지 않을 경우 기존 user를 유지
        users.map(user => user.id === id ? { ...user, active: !user.active } : user)
      )
  }, []);


  /* useMemo : 연산값 재사용 */
  const countActiveUsers = (users) => {
    console.log("활성 사용자를 세는 중..");

    // user.acive = true인 사용자 집합의 수 반환
    return users.filter(user => user.active).length;
  }

  // users 값이 변경되었을 때, 함수 호출, 변경되지 않았다면 이전에 연산한 값 재사용
  const count = useMemo(() => 
    countActiveUsers(users), [users]);

  /* useCallback : 함수 재사용
    - 매서드에 훅을 걸어, 특정 값이 변경되었을 때만 함수를 새로 만들어 진행하도록 설정한다
    - 항상 좋은 것은 아니며, 메서드가 의존하는 상태가 프롭스가 변경될 때마다 메서드 업데이트가 필요한 경우에만 사용해야 한다.
  
    cf. useCallback을 사용함으로써, 바로 이뤄낼 수 눈에 띄는 최적화는 없다. 컴포넌트 렌더링 최적화 작업까지 마쳐야 한다.
  */

  /* React.memo: props가 바뀌지 않았다면, 리렌더링 방지 => 리렌더링 성능 최적화
    - 리렌더링에 대해 심화 학습이 필요 
    - 함수형 컴포넌트는 props가 변경되면 다시 렌더링이 진행된다.
    - React.memo를 사용하면 컴포넌트가 렌더링 되기 전에 이전 props와 비교해서 변경이 없으면 리렌더링을 방지, 변경이 있을 때만 렌더링을 수행
  
    cf. 'useCallback, useMemo, React.memo'는 성능을 실제로 개선할 수 있는 상황에서만 사용할 것 
    - 렌더링 최적화에 관련없는 컴포넌트에 React.memo를 사용하는 경우 불필요한 props 비교만 하게 되는 것
  */

  /* useReducer : 현재상태와 액션 객체를 파라미터로 받아와 새로운 상태를 반환하는 함수 
    - const [state, dispatch] = useReducer(reducer, initialState); 형태로 사용 
  */


  return (
    <>
      <h2>컴포넌트 렌더링</h2>
      <Hello />
      <hr />

      <h2>계산</h2>
      <Counter />
      <hr />

      <h2>여러개의 input 관리</h2>
      <InputSample />
      <hr />

      <h2>배열 렌더링</h2>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
      <hr />

    </>
  );
}

export default App_v1;
