import React from 'react';
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import { getByPlaceholderText } from '@testing-library/react';

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  // 클래스 형태 컴포넌트였다면 componentDidMount
  useEffect(() => {
    // useEffect에 파라미터로 넣는 함수는 async로 할 수 없기 때문에, 내부에서 async 함수를 선언하고 호출
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);  // 에러 조회
      }
    };
    fn();
    
    // getPost(1);
    // getUsers(1);
  }, [getPost, getUsers]);

  return (
    <Sample 
      post={post} 
      users={users} 
      loadingPost={loadingPost} 
      loadingUsers={loadingUsers} 
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    
    /* 리팩토링 */
    loadingPost: sample['sample/GET_POST'],
    loadingUsers: sample['sample/GET_USERS'],
    
    /* 리팩토링 이전 */
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS
  }),
  {
    getPost,
    getUsers
  }
)(SampleContainer);
