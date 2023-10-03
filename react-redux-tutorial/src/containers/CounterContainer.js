import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//== 취향에 따라 방법을 다르게 할 수 있다. 방법 2/3 숙지하기 ==//
// 방법 3: 리덕스에서 제공하는 bindActionCreators 유틸 함수 사용, 액션 생성 함수의 개수가 많아질 때 번거로운 작업을 간소화 가능
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch,
    ),
)(CounterContainer);

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
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // connect: 컴포넌트를 리덕스와 연동  // mapStateToProps, mapDispatchToProps에서 반환하는 객체 내부의 값의 컴포넌트의 props로 전달
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
