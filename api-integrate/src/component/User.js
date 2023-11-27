import axios from "axios";
import React from "react";
import { useAsync } from "react-async";

// react-async는 useAsync와 비슷한 함수가 들어있는 라이브러리
// $ yarn add react-async

// API로 부터 response를 가져오는 함수
async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/usr/${id}`
  );

  return response;
}

// id: 프로미스를 반환하는 함수의 파라미터
async function User({ id }) {
  const {
    data: user,
    error,
    isLoading,
  } = useAsync({
    promiseFn: getUser, // promisFn에 API를 불러오는 함수 입력
    id,
    watch: id, // watch에 넣은 값이 바뀌 ㄹ대마다 promiseFn에 넣은 함수를 다시 호출
  });

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
