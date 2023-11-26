import React, { Component } from "react";

/* 클래스형 컴포넌트 작성 이전
	function Hello() {
		return (
			<div>
			안녕하세요
			</div>
			)
		}
*/

/* 클래스형 컴포넌트 작성 */
class Hello extends Component {
  /* 클래스 내부에 defaultProps를 선언해도 된다 
		static defaultProps = {
			name: "이름없음",
		};
	*/

  // render 필수: 렌더링 하고 싶은 JSX 반환
  render() {
    // this.props: props 조회
    const { color, anme, isSpecial } = this.props;

    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
