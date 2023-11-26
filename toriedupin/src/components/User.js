import React from "react";

function User({ user }) {
  /* if문을 주석 처리하면 에러 화면을 확인할 수 있음 */
  if (!user) {
    return null;
  }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username</b>: {user.username}
      </div>
    </div>
  );
}

export default User;
