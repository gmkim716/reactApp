import React, { useCallback, useMemo, useReducer, useRef } from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import useInputs from "./hooks/useInputs";
import { produce } from "immer";
import ErrorBoundary from "./components/ErrorBoundary";

// customHook + immer 적용

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는 중..");
  return users.filter((user) => user.active).length;
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },

  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

// action.id, action.name, action.user ... => action: dispatch 할 때 사용되는 객체
function reducer(state, action) {
  // action.type에 따라 동작을 다르게 정의
  switch (action.type) {
    // CREATE_USER:
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user); // users 배열에 추가
      });

    // TOGGLE_USER
    // TOGGLE_USER의 경우 immer를 적용하면서 오히려 코드가 복잡해진 것을 확인할 수 있다. 모든 코드에서 immer를 적용할 필요는 없다
    case "TOGGLE_USER":
      /* immer 사용 이전
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.id ? { ...user, active: !user.active } : user
          ),
        }; 
       */
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id == action.id);
        user.active = !user.active;
      });

    // REMOVE_USER
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.find((user) => user.id == action.id);
        draft.users.splice(index, 1); // index 위치로부터 1개의 요소를 제거
      });

    // 마무리: 기본값 반환
    default:
      return state;
  }
}

// UserDipatch 이름으로 내보내준다.
export const UserDipatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state; // state(initialState) 객체의 users를 꺼내서 사용

  /* custom hook 사용 */
  const [{ username, email }, onChange, reset] = useInputs({
    // useInputs의 initialForm 정의
    username: "",
    email: "",
  });

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current++;
  }, [username, email]);

  // useMemo: 계산 값은 useMemo를 사용하도록 하자
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      {/* Provider로 컴포넌트를 감싸준다: 감싸진 컴포넌트 내부에서 value 값(dispatch)을 사용할 수 있게 된다 */}
      <UserDipatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} />
        <div>활성 사용자 수 : {count}</div>
      </UserDipatch.Provider>
    </>
  );
}

export default App;
