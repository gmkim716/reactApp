import { useCallback, useState } from "react";

// custom hook 생성, 대체로 use라는 키워드로 시작하는 파일을 만들고 함수를 작성한다.
// hooks를 사용해서 원하는 기능을 구현하고, 컴포넌트에서 사용하고 싶은 값들을 반환
function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  // 값 입력 매서드
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  // 초기화 매서드
  const reset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  // custom Hooks에서 반환할 함수 입력
  return [form, onChange, reset];
}

export default useInputs;
