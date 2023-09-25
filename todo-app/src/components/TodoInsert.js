import { useState, useCallback } from 'react';
// https://react-icons.netlify.com/#/icons/md 페이지에 사용할 수 있는 아이콘들이 나열되어 있다
import { MdAdd } from 'react-icons/md'; // import { 아이콘 이름 } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  // useState를 이용해 value 상태를 정의
  const [value, setValue] = useState('');

  // 인풋에 넣어줄 onChange 함수 작성, 재사용을 위해 useCallback 훅 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킨다
      // 이를 방지하기 위해 preventDefault() 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
