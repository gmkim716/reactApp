/* 기존 코드 */
// const Router = require('koa-router');
// const postsCtrl = require('./posts.ctrl');

/* ES Module 형태 변경 */
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

//== 형태 1: 라우터 경로가 한 눈에 들어온다, 형태 2: 중복되는 코드를 줄일 수 있다 ==//
/* 형태 1 */
// // postsCtrl에서 정의한 매서드 사용
// posts.get('/:id', postsCtrl.checkObjectId.read);
// posts.delete('/:id', postsCtrl.checkObjectId.remove);
// // posts.put('/:id', postsCtrl.replace);
// posts.patch('/:id', postsCtrl.checkObjectId.update);

/* 형태 2: 리팩토링 */
const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
// module.exports = posts;
