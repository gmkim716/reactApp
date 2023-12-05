import React, { useState } from "react";

function Welcome() {
  // 사용자 등급
  const [tier, setTier] = useState("");

  return (
    <>
      <h1>반갑습니다 토리님</h1>
    </>
  );
}

export default Welcome;
