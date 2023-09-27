import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useEffect } from 'react';

const NewsPage = () => {
  const params = useParams();

  // 카테고리가 선택되지 않았으면 기본값을 all로 사용
  const category = params.category || 'all';

  return (
    // <></>: 여러개의 컴포넌트를 하나의 부모 요소로 감싸기 위해 사용
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
