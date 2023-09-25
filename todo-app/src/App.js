import logo from './logo.svg';
import './App.css';

// useState: 상태 정의, useRef: DOM 접근, 불필요한 리렌더링 방지, useCallback: 함수의 재사용
import { useState, useRef, useCallback } from 'react';

// 생성한 하위 컴포넌트 불러오기
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // useState 상태 정의, 파라미터로 todos, setTodos를 사용
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '다이소에서 건전지 사오기',
      checked: true,
    },
    {
      id: 2,
      text: '미용실 예약하기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어보기',
      checked: false,
    },
  ]);

  // 고유값으로 사용될 id
  // useState가 아닌 ref를 사용해서 변수 담기: id값은 렌더링 되는 정보가 아니므로
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  // <TodoTemplate> 태그로 감싸서 children 전달
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      {/* TodoListd에 props로 전달 */}
    </TodoTemplate>
  );
};

export default App;
