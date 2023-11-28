import React, { useState } from "react";
import User from "./User";
import { getUsers, useUsersDispatch, useUsersState } from "./UserContext";

// Users 컴포넌트를 Context를 사용하는 형태로 전환시켜보자 
// useUsersState(), useUsersDispatch()를 사용해서 state, dispatch를 가져오고, 요청을 시작할 때 getUsers() 함수 안에 dispatch를 넣어서 호출 

function Users() {
  const [userId, setUserId] = useState(null);
  
  // 전환
  const state = useUsersState(); 
  const dispatch = useUsersDispatch(); 

  const { data: users, error, loading } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
