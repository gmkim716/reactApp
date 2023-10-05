# 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기

## Summary
- 컨테이너 컴포넌트 만드는 방식 : connect / useSelector, useDispatch

- useSelector를 사용해 리덕스 상태를 조회할 때는 최적화 작업을 위해 React.memo를 사용해야 함

- 주요 파일 구조
  - 모듈 : modules/counter.js, modules/todos.js
  - 루트 리듀서 : src/index.js
  - 컨테이너 컴포넌트 : containers/CounterContainer.js containers/TodosContainer.js 

<br>

## Memo

- **src/countainers/** : 리덕스 연동 컴포넌트
- **src/modules/** : ducks 패턴을 사용해 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드 

<br>

- 비구조화 할당 문법 : 객체나 배열에서 원하는 값을 추출해 값을 할당하는 방법 
- **useACtions Hook** : 공식 문서에서 사용법 확인 가능, useActions.js 파일 확인
- **useStore Hook** : 컴포넌트 내부에서 리덕스 스토어 객체 직접 사용, (보통의 경우 사용하지 않음)
- **useDispatch Hook** : container 컴포넌트에서 액션을 디스패치 가능, *useCallback과 함께 사용하는 습관을 들일 것*
  - cf. useCallback: 함수 메모이제이션을 통한 성능 최적화
- **useSelector Hook** : connect 함수를 사용하지 않고 리덕스의 상태 조회 가능
- **immer** : 객체로 이루어진 배열을 다룰 경우 immer를 사용해 편리하게 상태 관리 가능<br> cf. modules/todos 참고 (counter 모듈처럼 간단한 리듀서에 immer를 사용하면 코드가 더 길어질 수 있다)
- **redux-actions** : 액션 생성 함수를 더 간결하게 작성 가능

#### 순서
1. 각 모듈: 액션 타입 정의, 액션 생성 함수 만들기, 초기상태 및 리듀서 함수 만들기

2. 루트 리듀서 만들기: createStore 함수를 사용해 Store를 만들 때 리듀서를 하나만 사용해야 함 -> 각 모듈에 정의된 리듀서 함수를 루트 리듀서에 통합해서 사용

3. 리덕스 적용: src/index.js 
    1. Store 만들기
    2. Provider(from react-redux) 컴포넌트 사용: 리덕스 적용, redux store의 전역적 액세스, 사용 가능

4. 컨테이너 컴포넌트 생성

<br>


## Knowledge
#### 비구조화 할당 문법
```javascript
const person = {
  name: 'John',
  age: 30,
  location: 'New York',
};

// 객체 비구조화 할당을 사용하여 속성 추출
const { name, age } = person;

console.log(name); // 'John'
console.log(age);  // 30

```

#### createAction 사용법
- createAction(type, payloadCreator, metaCreator): redux에서 제공하는 함수 
  - type: 액션 타입을 나타내는 문자열, 필수
  payloadCreator: 액션에 전달할 데이터 반환   

#### export vs export default
- export : 여러 개의 값을 내보낼 수 있다
- export default : 하나의 값만 내보낼 수 있다
- 예시
  ```javascript
    // 내보내기
    export const increase = () => ({ type: INCREASE })
    export const decrease = () => ({ type: DECREASE })
    export default counter;

    // 불러오기
    import counter from './counter';
    import { incrase, decrease } from './counter';
    import counter, { incrase, decrease } from './counter';
  ```

#### 리덕스 코드 작성
- `액션 타입 / 액션 생성 함수 / 리듀서 코드`를 작성해야 함
- 일반적으로 각 항목을 폴더별로 구분해 작성
- Ducks 패턴: 각 기능별로 파일 하나에 몰아서 작성 (cf.실습에서 ducks 패턴으로 진행) 

#### presentational 컴포넌트 & Container 컴포넌트 관계
- react-redux에서 자주 사용하는 패턴: presentational / container 컴포넌트 분리
  - presentational 컴포넌트 : 상태관리 x, props를 통해 `화면에 보여주기만` 하는 역할 
  - container 컴포넌트 : `리덕스와 연동`, 리덕스로부터 상태를 받아오거나 리덕스 스토어에 액션 디스패치 


  ![image](https://github.com/gmkim716/reactApp/assets/81900687/9797510a-088d-4b74-a618-5e9f21f48edf)


<br>

<hr>

<br>

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
