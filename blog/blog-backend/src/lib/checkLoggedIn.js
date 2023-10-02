// 로그인 상태 확인: 로그인 상태가 아니라면 401 HTTP Status 반환
const checkLoggedIn = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
