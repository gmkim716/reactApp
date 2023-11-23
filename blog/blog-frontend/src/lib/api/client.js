import axios from '../../../node_modules/axios/index';

const client = axios.create();

/* 설정 예시

// API 주소를 다른 곳을 가리킴
client.defaults.baseURL = 'https://external-api-server.com/';

// 헤더 설정
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

// 인터셉터 설정
axios.intercepter.response.use(
  // 요청 성공 시, 해당 작업 수행
  (response) => {
    return response;
  },

  // 요청 실패 시, 작업 취소
  (error) => {
    return Promise.reject(error);
  },
);

*/

export default client;
