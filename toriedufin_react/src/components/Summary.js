import React from "react";
import Together from "./Together";
import UserSummary from "./UserSummary";

function Summary() {
  return (
    <>
      <div>사용자 정보 요약 컴포넌트</div>
      {/* Together 컴포넌트 */}
      <Together />
      {/* UserSummary 컴포넌트 */}
      <UserSummary />
    </>
  );
}

export default Summary;
