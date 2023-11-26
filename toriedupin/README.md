# 메모

### Sentry

- componentDidCatch를 사용해서 에러가 발생했음을 인지시켜 줄 수 있지만, 실제 서비스에서는 componentDidCatch가 호출되는 일은 없어야 하는게 맞다
- 만약에 놓인 에러가 있다면, 개발자가 알아내서 예외 처리를 해줘야 한다
- 개발자가 발견하지 못했지만, 사용자가 발견하는 오류 -> componentDidCatch에서 error와 info 값을 네트워크를 통해 다른 곳으로 전달해주면 된다
- 이를 위해서 따로 서버를 만드는 것은 굉장히 번거로운 일 이므로, `Sentry`라는 사용 서비스를 이용하자
  - 무료 모델로 충분히 사용할 수 있다

### 배열관리

- map : 배열의 모든 요소에 대한 for문 실행
- filter : 정의된 특정 조건을 통과하는 요소만을 포함하는 새 배열 생성
- concat : 두 개 이상의 배열을 병합해서 기존 배열을 수정하지 않고 새 배열을 만드는데 사용

### immer 사용

- Immer를 사용하면 상태를 업데이트 할 때, 불변성을 신경쓰지 않으면서 업데이트를 해주면 Immer가 불변성 관리를 대신 해준다
- yarn add immer를 통해 설치

```javascript
import produce from "immer"; // 보통 produce라는 이름으로 불러와서 사용한다
```

- 첫 번째 파라미터: 수정하고 싶은 상태, 두 번째 파라미터: 어떻게 업데이트하고 싶을지 정의하는 함수 사용
- immer를 통해 간단해질 수도 / 오히려 길어질 수도 있기 때문에 주의할 것
  - 업데이트 하려는 값이 객체의 깊은 곳에 위치할 수록 immer 사용이 효율적이다
  - 함수형 업데이트를 하는 경우

```javascript
const state = {
  number: 1,
  dontChangeMe: 2,
};

const nextState = produce(state, (draft) => {
  // state의 number를 1 증가
  draft.number += 1;
});
```

### 객체 불변성을 유지하면서 값 변경

```javascript
const originalObject : {
  key1: 'value1',
  key2: 'value2',
}

// 스프레드 연산자 사용
const updatedObjectBySpread = {
  ...originalObject,
  key2: 'new value',
}
// concat 사용
const updatedObjectByConcat = {
  ??? 잘 설명하는 법 찾아서 적어두기 ???
}
```

- 만약 produce 함수에 두 개의 파라미터를 넣게 된다면
  - 첫 번째 파라미터에 넣은 상태를 불변성을 유지하면서 새로운 상태를 만들어준다
- 만약 첫 번째 파라미터를 생략하고 바로 업데이트 함수를 넣게 된다면

  - 반환 값은 새로운 상태가 아닌, 상태를 업데이트 해주는 함수가 된다

- 데이터 구조가 복잡해져서 불변성을 유지하면서 업데이트 하려면 immer 사용을 권장한다

### Context API

- 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리 할 수 있다
- 값은 '상태'일 수도, '함수'일 수도, '라이브러리 인스턴스'일수도, 'DOM'일 수도 있다
- `React.createContext()`를 통해 사용한다
- Context를 만들면 Context안의 Provider라는 컴포넌트를 통해 Context의 값을 정할 수 있다. 컴포넌트를 사용할 때, value라는 값을 설정해주면 된다

```javascript
<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
```

- Provider에 의해 감싸진 컴포넌트 중 어디서든지 Context의 값을 조회해서 사용할 수 있다.
- useReducer를 사용하면 dispatch를 Context API를 사용해서 전역적으로 사용할 수 있게 하고, 컴포넌트에 함수를 전달해야 하는 상황에서 코드 구조가 훨씬 깔끔해질 수 있다
