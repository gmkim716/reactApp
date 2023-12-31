import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// 1-1.액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/체크해제
const REMOVE = 'todos/REMOVE'; // todo 제거


//== 1-2. 액션 생성 함수 만들기 ==//

/* createAction 함수를 이용해 코드를 간결하게 정리 */
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert가 호출될 때마다 1씩 더해진다, 미리 만들어둔 값이 2개라서 3부터 시작
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,  // cf. text=text와 같이 입력하지 않아도 됨 // JS ES6인 축약된 객체 리터럴 문법로 인함 
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

/* createActions 사용 이전 */
// export const changeInput = (input) => ({  // type외에 input이라는 추가 파라미터를 받아 사용
//   type: CHANGE_INPUT,
//   input,
// });

// let id = 3; // insert가 호출될 때마다 1씩 더해진다
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });


// 2. 초기 상태, 리듀서 함수 만들기
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

/* handleActions + immer 적용 
  immer: 객체를 다룰 때 immer를 사용하면 편리하게 사용 가능
  produce: 불변성을 유지하면서 상태를 변경하는 작업에 사용, immer 모듈에서 제공 
*/
const todos = handleActions(
  {
    /* 
      액션 생성 함수는 액션에 필요한 추가 데이터를 모두 payload라는 이름으로 사용
      action.id, action.payload.id를 조회하는 대신, 공통적으로 action.payload 값을 조회하도록 리듀서를 구현
    */
    [CHANGE_INPUT]: (state, { payload: input }) =>  // { payload: input }: payload의 별칭으로 input을 사용
      produce(state, (draft) => {
        draft.input = input;
      }),

    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),

    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),

    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

/* handleActions 함수를 이용해 코드를 간결하게 정리*/
// 액션 생성함수는 액션에 필요한 추가 데이터를 모두 payload 이름으로 사용, 데이터 조회를 위해 actions.payload 값을 조회하도록 리듀서를 구현
// spread(...) 연산자를 이용하지만, 모듈의 상태가 복잡해질수록 불변성을 지키기가 까다로워짐
// const todos = handleActions(
//   {
//     [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
//     [INSERT]: (state, { payload: todo }) => ({
//       ...state,
//       todos: state.todos.concat(todo),
//     }),
//     [TOGGLE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, done: !todo.done } : todo,
//       ),
//     }),
//     [REMOVE]: (state, { payload: id }) => ({
//       ...state,
//       todos: state.todos.filter((todo) => todo.id !== id),
//     }),
//   },
//   initialState,
// );

/* handleActions 사용 이전 */
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         input: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
