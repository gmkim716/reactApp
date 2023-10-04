import { connect, useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import { useCallback } from 'react';
import useActions from '../lib/useActions';  // useActions 사용

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  /* useActions 사용: 코드 간소화 
    비구조화 할당 문법을 통해 배열형태로 정의할 수 있다
    useActions(함수의 배열, 추가 설정(현재 빈 배열))

  */
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  /* useActions 사용 이전 */
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
  //   dispatch
  // ]);
  // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return (
    <Todos 
      input={input} 
      todos={todos} 
      onChangeInput={onChangeInput} 
      onInsert={onInsert} 
      onToggle={onToggle} 
      onRemove={onRemove} 
    />
  )
}

export default TodosContainer;

/* 코드 간소화: connect대신 useSelector, useDispatch Hook 사용 // CounterContainer 주석 참고 */
// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   insert,
//   toggle,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };

// export default connect(
//   ({ todos }) => ({
//     // 비구조화 할당을 통해 todos륿 분리
//     // state.todos.input 대신 todos.input 사용
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);
