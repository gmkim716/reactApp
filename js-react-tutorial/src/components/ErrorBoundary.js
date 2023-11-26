import React, { Component } from "react";
import * as Sentry from "@sentry/react";

// componentDidCatch로 에러 잡아내기
class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    // 콘솔 출력
    console.log("에러가 발생했습니다.");
    console.log({ error, info });

    // state 상태 변경
    this.setState({
      error: true,
    });

    // 추가: 현재의 환경이 '개발 환경'인지 '프로덕션 환경'인지 확인 (production / development)
    // 개발환경에서는 captureException을 사용할 필요가 없으므로 프로덕션에서만 이 작업을 실행하도록 조건문을 입력
    if (process.env.NODE_ENV === "production") {
      Sentry.captureException(error, { extra: info });
    }
    /* 프로덕션 환경에서 잘 작동하는지 확인
      $ yarn build
      $ npx serve ./build
    */
  }

  render() {
    if (this.state.error) {
      return <h1>에러 발생!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
