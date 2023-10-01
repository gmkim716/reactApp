import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from 'joi'; // 클라이언트의 요청이 올바르지 않을 경우(필요한 값을 빼 먹었을 때 400 오류 확인이 필요)

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};

/* 
  POST /api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/
export const write = async (ctx) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있는지 검증
    title: Joi.string().required(), // required(): 필수 항목
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(), // 문자열로 이루어진 배열
  });

  // 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts
*/
export const list = async (ctx) => {
  // query는 문자열이기 때문에 숫자로 변환해줘야 한다
  // 값이 주어지지 않았다면 1을 기본으로 사용한다
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  //== body의 길이가 200자 이상일 때 ...을 붙이고 문자열을 자르기==//
  // 방법 1: toJSON() 함수 사용, cf. find()를 통해 조회한 데이터는 데이터를 바로 변형할 수 없다. 대신 toJSON()함수로 JSON 형태로 변환 후 변형 가능
  // 방법 2: lean() 함수 사용, 데이터를 처음부터 JSON 형태로 조회
  try {
    const posts = await Post.find()
      .sort({ _id: -1 }) // -1: 내림차순 정렬, 1: 오름차순 정렬
      .limit(10) // 보이는 개수 제한
      .skip((page - 1) * 10) // 페이지 기능 구현
      .lean() // JSON 형태로 데이터 조회
      .exec();

    // 마지막 페이지 번호 알려주기
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10)); // Last-Page라는 커스텀 HTTP 헤더를 설정

    //* 방법 1 사용 */
    // ctx.body = posts
    //   .map((post) => post.toJSON())
    //   .map((post) => ({
    //     ...post,
    //     body:
    //       post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    //   }));

    /* 방법 2 사용 */
    ctx.body = posts.map((post) => ({
      ...post,
      body:
        post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*  
  GET /api/posts/:id
*/
export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 
  DELETE /api/posts/:id
*/
export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content: 성공했지만 응답할 데이터가 없음(데이터 삭제 완료)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 
  PATCH /api/posts/:id
  {
    title: '수정',
    body: '수정 내용',
    tags: ['수정', '태그']
  }
*/
export const update = async (ctx) => {
  const { id } = ctx.params;

  // write에서 사용한 schema와 비슷 cf. required가 필요하지 않음
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // true: 업데이트 된 데이터를 반환, false: 업데이트 되기 전의 데이터 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
