/* 기존 코드 */
// const Router = require('koa-router');
// const posts = new require('./posts');

/* ES Module 형태 변경 */
import Router from 'koa-router';
import posts from './posts';

const api = new Router();

// // test
// api.get('/test', (ctx) => {
//   ctx.body = 'test 성공';
// });

api.use('/posts', posts.routes());

// // 라우터 내보내기
// module.exports = api;

export default api;
