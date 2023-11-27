import React from "react";
import Users_useEffect from "./component/Users_useEffect";
import Users_useReducer from "./component/Users_useReducer";
import Users_useAsyncCustomHook from "./component/Users_useAsyncCustomHook";
import Users from "./component/Users";

function App() {
  return (
    <>
      <Users_useEffect />
      <hr />
      <Users_useReducer />
      <hr />
      <Users_useAsyncCustomHook />
      <hr />
      <Users />
      <hr />
    </>
  );
}

export default App;
