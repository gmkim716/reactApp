import axios from "axios";
import React, { useEffect } from "react";
import { useAsync } from "react-async";
import { getUser, useUsersDispatch, useUsersState } from "./UserContext";

function User({ id }) {

  // Q. userUsersxxx인데도 가능하네?
  const state = useUsersState();
  const dipatch = useUsersDispatch(); 
  
  // id값이 바뀔 때마다 getUser함수를 호출 
  useEffect(() => {
    getUser(dipatch, id); 
  }, [dipatch, id])

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중...</div>;
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
