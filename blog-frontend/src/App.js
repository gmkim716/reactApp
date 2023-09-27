import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    // Route 컴포넌트: 각 라우터의 경로 설정
    <Routes>
      {/* 파라미터가 주어지지 않은 경우: 전체 포스트 목록 */}
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />

      {/* 파라미터가 주어진 경우: 특정 사용자가 작성한 포스트 목록  */}
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostListPage />} />
      </Route>
    </Routes>
  );
};

export default App;
