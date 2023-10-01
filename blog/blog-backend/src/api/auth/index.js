import Router from 'koa-router';
import * as authCtrl from './auth.ctrl';
import auth from './auth';

const api = new Router();

auth.post('/register', authCtrl.register);
auth.post('/login', authCtrl.register);
auth.post('/check', authCtrl.register);
auth.post('/logout', authCtrl.register);

export default auth;
