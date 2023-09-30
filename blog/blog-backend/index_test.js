// const Koa = require('koa');
// const Router = require('koa-router');

// const app = new Koa();
// const router = new Router();

// /* 라우터 설정 */
// // home
// router.get('/', (ctx) => {
//   ctx.body = '홈';
// });

// // about
// router.get('/about', (ctx) => {
//   ctx.body = '소개';
// });

// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;

//   // name의 존재 유무에 따라 다른 결과 출력
//   ctx.body = name ? `${name}의 소개` : '소개';
// });

// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;

//   // id의 존재 유뮤에 따라 다른 결과 출력
//   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
// });

// // app 인스턴스에 라우터 적용
// app.use(router.routes()).use(router.allowedMethods());

// app.listen(4001, () => {
//   console.log('Listening to port 4001');
// });

// // // 첫 번째 미들웨어
// // app.use(async (ctx, next) => {
// //   console.log(ctx.url);
// //   console.log(1);

// //   // 요청 경로에 authorized=1이라는 쿼리 파라미터가 포함되어 있으면 미들웨어를 처리, 그렇지 않으면 이후 미들웨어를 처리하지 않음
// //   if (ctx.query.authorized !== '1') {
// //     ctx.status = 401; // Unauthorized
// //     return;
// //   }
// //   await next();
// //   console.log('END');

// //   // // 모든 next()가 실행되고 난 이후에 실행
// //   // next().then(() => {
// //   //   console.log('END');
// //   // });

// //   // // next를 실행하지 않을 경우 첫 번째 미들웨어까지만 실행
// //   // next();
// // });

// // // 두 번째 미들웨어
// // app.use((ctx, next) => {
// //   console.log(2);
// //   next();
// // });

// // app.use((ctx) => {
// //   ctx.body = 'hello world';
// // });

// app.listen(4000, () => {
//   console.timeLog('Listening to port 4000');
// });
