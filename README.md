# React App 만들기

## 목표

- React 및 Front 기술에 대한 이해
- 웹 페이지 디버깅 작업에 기여
- 백엔드와 프론트간 통신을 위한 학습

<br>

## 구성

3. 프론트엔드 프로젝트 : 시작 및 회원 인증 구현
4. 외부 API를 연동해서 뉴스 뷰어 만들기
5. TodoApp 만들기
16. vanilla-redux: 리덕스 라이브러리 이해하기
17. react-redux-tutorial: 리덕스를 사용해서 리액트 애플리케이션 상태 관리하기

<br>

## 참고

- 리액트를 만드는 기술

<br>

## 설치 및 실행

- project 다운로드
- yarn add react-scripts

<br>
<br>

# 새롭게 알게 된 내용

## 14강\_외부 API를 연동해서 뉴스 뷰어 만들기

- https://neweapi.org/에서 제공하는 API의 데이터 사용
- 비동기 작업, Promise, async/await
- axio로 API 호출해서 데이터 받아오기

<br>
<br>

> 커스텀 hook 설정 : promise를 사용해야 하는 경우 간결하게 코드 작성 가능

<br>

> react는 여러 요소를 반환할 때 하나의 부모 요소로 감싸야 하는 규칙이 있다

<br>

> map을 이용해 전개 연산자 사용

```javascript
/* map을 이용해 전개 연산자 사용*/
categories.map((c) => <Category key={c.name}>{c.text}</Category>);
```

<br>

> axios

- HTTP 요청을 promise 기반으로 처리
- `yarn add axios`

<br>

> async/await

- promise를 더 쉽게 사용할 수 있도록 해주는 문법
- 함수의 앞부분에 async 키워드 추가, 함수 내부에서 promise 앞부분에 await 키워드 사용<br>promise가 끝날 때까지 기다리고, 결과 값을 특정 변수에 담을 수 있다

<br>

> Promise

- 콜백 지옥 코드가 형성되지 않도록 Promise를 사용

<br>

> 비동기 작업

- 작업을 동기적으로 처리하면 앞선 요청이 끝날 때까지 기다리는 동안 다른 작업을 할 수 없다
- `콜백함수`를 사용해서 비동기 작업 가능
- 순차적 구현을 콜백 함수로만 진행하면 콜백 지옥이라고 불리는 복잡한 코드가 생성될 수 있다

<br>
<br>

## 10강\_일정 관리 웹 애플리케이션 만들기 주요 내용

- 상태 변수에 데이터 추가/삭제
- 상위 컴포넌트에서 만든 기능을 하위 컴포넌트로 props해서 사용

<br>

> jsconfig.json: 파일 자동 불러오기

<br>

> prettierrc: 코드 스타일 자동정리

<br>

> useState vs useRef vs useCallback

- useState: 컴포넌트 수준의 상태 관리
- useRef: 특정 DOM에 대한 접근, 리렌더링 방지(처음 화면을 받아올 때 & 제출 버튼을 눌렀을 때만 렌더링 실행)
- useCallback: 특정 함수를 재사용하고 싶을 때 사용

<br>

> props

- 각 컴포넌트의 메인 const에 사용되는 지표들이 props 된 변수

<br>

> filter 사용 예제

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const biggerThanFive = array.filter((number) => number > 5);
// 결과: [6, 7, 8, 9, 10]
```

<br>

> onSubmit 대신 onClick 이벤트를 사용하는 이유

- onSubmit 이벤트는 input에서 enter를 누르는 것으로도 발생 가능, 반면 onClick은 enter를 눌렀을 때 동작시키기 위해 따로 로직을 추가해줘야 함

<br>

> id를 만들어 관리할 때 useState 대신 useRef 사용

- id값은 렌더링 되는 정보가 아니기 때문

<br>

> 함수가 잘 동작하는 지 확인하는 방법

- console.log 찍어보기
- 리액트 개발자 도구 사용

<br>

> scss를 적용하기 위해서는 적용하려는 컴포넌트에서 import 해야 함

<br>

> export default {컴포넌트명}의 의미

- 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내는 역할

<br>

> react에서 파라미터(children)을 컴포넌트로 전달

- 해당 컴포넌트 태그로 파라미터를 감싼다
