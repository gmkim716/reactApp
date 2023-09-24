// https://react-icons.netlify.com/#/icons/md 페이지에 사용할 수 있는 아이콘들이 나열되어 있다
// import { 아이콘 이름 } from 'react-icons/md';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
