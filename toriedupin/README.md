# 메모

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
