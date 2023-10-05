# 16장 실습: 리덕스 라이브러리 이해하기


## Memo
- 주요 내용 요약 : index.js : 리듀서 함수 정의, store 만들기, render 함수 만들기, 구독하기, 액션 발생시키기
- 바닐라 자바스크립트 실행 : parcel index.html
- 리덕스 설치 : yarn add redux
<br>
<br>

## Knowledge
- 리덕스 규칙 세가지<br> 1. `하나의 애플리케이션 안에는 하나의 스토어만` 사용<br> 2. 리덕스는 `읽기전용` 상태: 상태 업데이트할 때 기존 객체를 건드리지 않고 새로운 객체를 생성 -> 객체 안쪽까지 비교하는 것을 방지해서 성능을 유지<br> 3. `순수한 상태` <br> 
    - 리듀서 함수는 이전 상태, 액션 객체를 파라미터로 받아 사용
    - 파라미터 외의 값에 의존하면 안된다
    - 이전 상태는 절대 건들이지 않고 변화를 준 새로운 상태 객체를 만들어서 반환
    - 같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다

- **`index.js` : 리듀서 함수 정의, store 만들기, render 함수 만들기, 구독하기, 액션 발생시키기** 

- 리덕스는 리액트에 종속되는 라이브러리가 아니다 => 다른 라이브러리/프레임워크에서도 사용할 수 있다 (따라서, `예제에서는 react 대신, vanilla javascript를 사용해 redux 사용` 예시를 보이고 있다)<br> react와 별개로 `yarn add redux` 설치 필요 

- 구독 : subscribe() 함수 안에 리스너 함수를 파라미터로 넣어 호출하면, 액션이 디스패치되어 상태가 업데이트될 때마다 호출<br> 스토어 내장 함수 중 하나<br> 

- 디스패치 : '액션을 발생'<br> 스토어 내장함수 중 하나<br> 디스패치가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만든다 

- 스토어 : 애플리케이션 상태, 리듀서, 내장함수가 들어가 있는 곳<br> 하나의 프로젝트는 하나의 스토어만 가질 수 있다

- 리듀서 : 변화를 일으키는 함수<br> 액션을 만들어 발생 → 리듀서가 현재 상태, 액션 객체를 파라미터로 받아온다<br> 두 값을 이용해 새로운 상태를 만들어 반환한다
    ```javascript
        const initialState = {
            counter: 1
        }
        function reducer(state = initialSTate, action) {
            switch (action.type) {
                case INCREMENT:
                    return {
                        counter: state.counter + 1
                    };
                default:
                    return state;
            }
        }
    ```

- 액션 생성 함수 : 액션 객체를 만드는 함수
    ``` javascript
        // 1. 일반 
        function addTodo(data) {
            return {
                type: 'ADD_TODO',
                data
            };
        }

        // 2. *화살표 함수 형태
        const addTodo = (data) => ({
            type: 'ADD_TODO',
            data
        })
    ```

- 액션: 상태에 대한 변화가 필요할 때 발생
    ```
    {
        type: 'ADD_TODO',
        data: {
            id: 1,
            text: '리덕스 배우기'
        }
    }
    ```