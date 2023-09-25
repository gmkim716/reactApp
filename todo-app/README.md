# React App 만들기

## 목표

- React 및 Front 기술에 대한 이해
- 웹 페이지 디버깅 작업에 기여
- 백엔드와 프론트간 통신을 위한 학습

## 구성

1. TodoApp 만들기

## 참고

- 리액트를 만드는 기술

# 새롭게 알게 된 내용

> props

- 각 컴포넌트의 메인 const에 사용되는 지표들이 props 된 변수

> filter 사용 예제

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const biggerThanFive = array.filter((number) => number > 5);
// 결과: [6, 7, 8, 9, 10]
```

> onSubmit 대신 onClick 이벤트를 사용하는 이유

- onSubmit 이벤트는 input에서 enter를 누르는 것으로도 발생 가능, 반면 onClick은 enter를 눌렀을 때 동작시키기 위해 따로 로직을 추가해줘야 함

> id를 만들어 관리할 때 useState 대신 useRef 사용

- id값은 렌더링 되는 정보가 아니기 때문

> 함수가 잘 동작하는 지 확인하는 방법

- console.log 찍어보기
- 리액트 개발자 도구 사용

> scss를 적용하기 위해서는 적용하려는 컴포넌트에서 import 해야 함

> export default {컴포넌트명}의 의미

- 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내는 역할

> react에서 파라미터(children)을 컴포넌트로 전달

- 해당 컴포넌트 태그로 파라미터를 감싼다
