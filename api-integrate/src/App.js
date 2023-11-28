import React from "react";
import Users_useEffect from "./component/Users_useEffect";
import Users_useReducer from "./component/Users_useReducer";
import Users_useAsyncCustomHook from "./component/Users_useAsyncCustomHook";
import Users from "./component/Context+asyncAPI/Users";
import { UsersProvider } from "./component/Context+asyncAPI/UserContext";

function App() {
  return (
    <>
      <Users_useEffect />
      <hr />
      <Users_useReducer />
      <hr />
      <Users_useAsyncCustomHook />
      <hr />

      {/* Context 사용: Provider로 감싸주기 */}
      <UsersProvider>
        <Users />
      </UsersProvider>
      <hr />
    </>
  );
}

export default App;
