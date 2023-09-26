import { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  // category 상태를 useState로 관리
  const [category, setCategory] = useState('all');

  // category 값 업데이트 함수
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      {/* category, onSelect 함수 props */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

export default App;
