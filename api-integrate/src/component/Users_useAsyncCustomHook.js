import axios from "axios";
import React, { useReducer } from "react";
import useAsync from "../use/useAsync";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users_useAsyncCustomHook() {
  const [state, refetch] = useAsync(getUsers, []); // 첫 번째 파라미터: API 실행, 두 번째 파라미터: 훅
  const { loading, data: users, error } = state; // state.data를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Users_useAsyncCustomHook;
