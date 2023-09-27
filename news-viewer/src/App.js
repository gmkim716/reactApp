import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  return (
    <Routes>
      {/* category URL 파라미터가 없/있을 때 보여주기 위한 2개의 NewsPage 컴포넌트 */}
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

// //== 뉴스 뷰어 만들기 ==//
// import { useState, useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

// const App = () => {
//   // category 상태를 useState로 관리
//   const [category, setCategory] = useState('all');

//   // category 값 업데이트 함수
//   const onSelect = useCallback((category) => setCategory(category), []);

//   return (
//     <>
//       {/* category, onSelect 함수 props */}
//       <Categories category={category} onSelect={onSelect} />
//       <NewsList category={category} />;
//     </>
//   );
// };

export default App;
