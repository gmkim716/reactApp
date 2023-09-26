import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  amrgin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
  // [{변수명}, {값 변경을 위한 매서드}]
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect를 사용해 처음 렌더링 되는 시점에 API를 요청
  useEffect(() => {
    // async를 사용하는 함수는 따로 선언
    const fetchData = async () => {
      setLoading(true); // 로딩 중 on
      try {
        // 카테고리에 따라 호출api(query) 변경 cf. 백틱과 따옴표 혼동하지 않도록 주의
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ad25a6be891a40e5a75fcd651a48e8bd`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false); // 로딩 중 off
    };

    // 정의한 fetchData 실행
    fetchData();
  }, [category]); // category가 변경될 때마다 useEffect 실행

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  // *반드시 필요한 과정: 이 작업이 없으면 데이터가 없을 때 null에 map 함수가 없기 때문에 오류가 발생
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
