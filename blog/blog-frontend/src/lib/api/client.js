import axios from 'axios';

const client = axios.create();

/*
axios 인스턴스를 만들면 나중에 API 클라이언트에 공통된 설정을 쉽게 넣을 수 있다
인스턴스를 만들지 않아도 작업할 수 있지만, 인스턴스를 만들지 않으면 애플리케이션에서 발생하는 모든 요청에 대해 설정하게 됨 
  → 또다른 API 서버를 사용하려할 때 곤란해질 수 있다

  따라서, 처음부터 인스턴스를 만들어 작업하는 것을 권장
  cf. axio를 사용하지 않는 상황이 왔을 때 쉽게 클라이언트를 교체할 수 있는 장점도 있다 
*/

/* 
 글로벌 설정 예시
 
 // API 주소를 다른 곳으로 사용
 client.defaults.baseURL = 'https://external-api-server.com/'
 
 // API 주소를 다른 곳으로 사용
 client.defaults.headers.commomt['Authorization'] = 'Bearer a1b2c3d4';

 // 인터셉터 설정
 axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    },
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })
*/

export default client;
