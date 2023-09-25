import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  //== async 적용 이전 ==//
  // // JSONPlaceholder에서 제공하는 가짜 API를 호출하고 응답을 컴포넌트 상태에 보여주는 예제
  // const onClick = () => {
  //   // axios.get: 파라미터로 전달된 주소에 GET 요청, .then을 통해 비동기적으로 결과를 확인
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  //== aysnc 적용 ==//
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=ad25a6be891a40e5a75fcd651a48e8bd',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
