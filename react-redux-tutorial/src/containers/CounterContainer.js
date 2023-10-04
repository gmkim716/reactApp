import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useCallback } from 'react';

/* useSelector, useDispatch 사용
  - useSelector : connect를 사용하지 않고도 리덕스 상태 조회 가능
    const 결과 = useSelector(상태 선택 함수)
  - useDispatch : 컴포넌트에서 액션을 디스패치 

  cf. 현재 컴포넌트가 리렌더링될 때마다 onIncrease, onDecrease 함수가 새롭게 만들어지고 있다
      컴포넌트 성능을 최적화하기 위해 useCallback으로 액션을 디스패치하는 함수를 감싸주는 것이 좋다
  => useDispatch를 사용할 때는 useCallback과 함께 사용하도록 한다
*/
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  // 컴포넌트 성능 최적화를 위해 useCallback 함수 생성
  const onIncrease = useCallback(()=> dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);

  return (
    <Counter 
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      /* 매번 함수가 생성되는 것을 방지해 성능 최적화 */
      // onIncrease={() => dispatch(increase())}  
      // onDecrease={() => dispatch(decrease())}  
    />
  ) 
}

export default CounterContainer;

//== 취향에 따라 방법을 다르게 할 수 있다. 방법 2/3 숙지하기 ==//
// // 방법 3: 리덕스에서 제공하는 bindActionCreators 유틸 함수 사용, 액션 생성 함수의 개수가 많아질 때 번거로운 작업을 간소화 가능

/* useSelector 사용 이전 */
// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//       <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//     );
//   };

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(  // *bindActionCreators: 액션 생성자 함수를 자동으로 dispatch 함수로 연결, 
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// // 방법 2: connect에서 익명함수 형태로 사용, 불필요한 코드 블록 생략 가능
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }),
// )(CounterContainer);

// // 방법 1: mapStateToProps, mapDispatchToProps 사용

// // mapStateToProps: 리덕스 스토어 안의 상태를 props로 넘겨주기 위해 설정하는 함수
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // mapDispatchToProps: 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     // console.log('increase');
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log('decrease');
//     dispatch(decrease());
//   },
// });

// // connect: 컴포넌트를 리덕스와 연동  // mapStateToProps, mapDispatchToProps에서 반환하는 객체 내부의 값의 컴포넌트의 props로 전달
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
