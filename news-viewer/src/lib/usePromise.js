import { useState, useEffect } from 'react';

// 훅 설정: API 호출처럼 Promise를 사용해야 하는 경우 간결하게 코드 작성
export default function usePromise(promiseCreator, deps) {
  // 대기중/완료/실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true); // 로딩 on
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false); // 로딩 off
    };
    process(); // process 실행
  }, deps); // deps: usePromise의 의존 배열

  return [loading, resolved, error];
}
