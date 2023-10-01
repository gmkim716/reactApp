require('dotenv').config();

/* 기존 코드 */
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose'); // mongoose를 이용해 서버와 데이터베이스 연결
// const api = require('./api');

/* ES Module 형태 변경 */
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import createFakeData from './createFakeData';

// 비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();  // 가짜 데이터 입력
  })
  .catch((e) => {
    console.log(e);
  });

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // api 라우터 적용

// 라우터 적용 *전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

// PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;

app.listen(port, () => {
  console.log('Listening to port %d', port);
});
