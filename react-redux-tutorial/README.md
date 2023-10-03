# 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

### 진행

- 모듈의 상태를 설계할 때는 객체의 깊이가 너무 깊어지지 않도록 주의해야 함 <br>
  객체의 구조가 복잡해지거나 객체로 이루어진 배열을 다룰 경우, immer를 하용하면 편리하게 상태를 관리할 수 있다 <br>
  `yarn add immer`

- createActions, handleActions 적용

- redux-actions, immer을 사용하면 액션 생성 함수를 더 짧게 작성 가능 <br>
  `yarn add redux-actions`

- 컨테이너 컴포넌트 만들기

- redux-devtools-extension 설치

- 리덕스 적용

  - provider 컴포넌트를 사용해 프로젝트에 리덕스 적용
  - 스토어 만들기

- 루트 디류서 만들기

  - 나중에 createStore 함수를 사용해 스토어를 만들 때 리듀서를 하나만 사용해야 함
  - **기존에 만들었던 리듀서를 하나로 합쳐주어야 한다**
  - combineReducer라는 유틸 함수를 사용해 쉽게 처리 가능

- 액션 타입, 액션 생성 함수, 초기 상태, 리듀서 함수 만들기

- 리덕스 관련코드 작성: ducks 패턴 사용

  - 액션 타입, 액션 생성 함수, 리듀서 코드 작성이 필요
  - 방법 1 : actions, constants, reducer 디렉터리에 담아 작성
  - 방법 2 : Ducks 패턴(modules 파일 하나에 몰아서 작성)\*

- Counter, Todos 컴포넌트 작성

- 프레젠테이셔널 컴포넌트 / 컨테이너 컴포넌트의 분리
  - 프레젠테이셔널 컴포넌트 : props를 받아 화면에 UI를 보여주기만 하는 컴포넌트
  - 컨테이터 컴포넌트 : 리덕스로부터 상태를 받아오거나 리덕스 스토어에 액션을 디스패치 하는 컴포넌트
- .prettierrc 파일 작성

### 실행

```shell
yarn create react-app react-redux-tutorial
cd react-redux-tutorial
yarn add redux react-redux
```
