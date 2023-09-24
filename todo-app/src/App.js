import logo from './logo.svg';
import TodoTemplate from './components/TodoTemplate';
import './App.css';

const App = () => {
  // <TodoTemplate> 태그로 감싸서 children 전달
  return <TodoTemplate>Todo App을 만들자</TodoTemplate>;
};

export default App;
