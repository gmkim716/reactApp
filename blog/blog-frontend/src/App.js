import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

// App: 라우터 경로를 지정
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />

      {/* 특정 사용자가 작성한 포스트 목록 */}
      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
      {/* 위 코드와 동일 */}
      {/* <Route path="/@:username" element={<PostListPage />} /> */}
      {/* <Route path="/@:username/:postId" element={<PostListPage />} /> */}
    </Routes>
  );
};

export default App;
