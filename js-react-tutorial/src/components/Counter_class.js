import React, { Component, useReducer, useState } from "react";

class Counter_class extends Component {
  /* 방법 1: bind 사용, 가장 일반적인 방법 
		constructor(props) {
			super(props);
			
			// bind를 사용하면 해당 함수에서 가리킬 this를 직접 설정 가능
			this.handleIncrease = this.handleIncrease.bind(this);
			this.handleDecrease = this.handleDecrease.bind(this);
		}
		
			// class에서 커스텀 메서드를 만들게 될 때 보통 이름을 handle... 라고 짓는다
			handleIncrease() {
				console.log("increase");
				console.log(this);
			}
		
			handleDecrease() {
				console.log("decrease");
				console.log(this);
			}
	*/

  /* 방법 2: 화살표 함수 사용, 가장 간편한 방법
		handleIncrease = () => {
			console.log("increase");
			console.log(this);
		};

		handleDecrease = () => {
			console.log("decrease");
			console.log(this);
		};
	*/

  /* state 방법 1 
		constructor(props) {
			super(props);
			
			// constructor 내부에서 this.state 설정, state는 무조건 객체 형태여야 한다
			this.state = {
				counter: 0,
			};
		}

		handleIncrease = () => {
			console.log("increase");
			console.log(this);
		};
	
		handleDecrease = () => {
			console.log("decrease");
			console.log(this);
		};
	*/

  /* state 방법 2 */
  state = {
    counter: 0,
    fixed: 1,
    updateMe: {
      toggleMe: false,
      dontChangeMe: 1,
    },
  };

  // setState를 통해 값을 state 상태 업데이트 가능
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handleToggle = () => {
    this.setState({
      updateMe: {
        ...this.state.updateMe,
        toggleeMe: !this.state.updateMe.toggleMe,
      },
    });
  };

  // reducer 사용
  render() {
    return (
      <div>
        <h1>0</h1>
        {/* 방법 1, 2에 사용 */}
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>

        {/* 방법 3에 사용: 렌더링 할 때마다 함수가 새로 만들어지므로, 컴포넌트 최적화에 어려움이 발생
        <button onClick={() => this.handleIncrease()}>+1</button>
        <button onClick={() => this.handleDecrease()}>-1</button> */}

        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter_class;
