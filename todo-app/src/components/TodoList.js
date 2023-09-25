import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // props된 todos 사용
  return (
    <div className="TodoList">
      {/* map을 사용해 컴포넌트로 변환할 때는 key props를 전달해야 함 */}
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        /> // key로 props된 todo의 id를 사용: 고유하기 때문
      ))}
    </div>
  );
};

export default TodoList;
