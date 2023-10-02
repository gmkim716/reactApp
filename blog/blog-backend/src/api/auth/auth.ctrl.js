import Joi from 'joi';
import User from '../../models/user';

/* 회원가입 
  POST /api/auth/register
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
//
export const register = async (ctx) => {
  // request body 검증
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username이 이미 존재하는 지 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    //== 메서드를 사용하지 않은 경우 ==//
    // 응답할 데이터에서 hashedPassword 필드 제거
    // const data = user.toJSON();
    // delete data.hashedPasword;
    // ctx.body = data;

    //== 메서드를 만들어 사용하는 경우 ==//
    ctx.body = user.serialize();

    /* 
    브라우저에서 토큰을 사용하는 두 가지 방법
      1. localStorage or sessionStorage에 담아 사용
        - XSS 공격에 의해 쉽게 토큰을 탈취당할 수 있다 

      2. cookie에 담아 사용 
        - httpOnly 속성을 활성화해 자바스크립트를 통해 쿠기를 조회하는 악성 스크립트 방지
        - CSRF 공격에 취약해질 수 있다
    */

    // 토큰 사용: 브라우저의 쿠키에 담아 사용 방식 사용
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 로그인 
  POST /api/auth/login
  {
    username: 'velopert',
    password: 'mypass123'
  }
*/
export const login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // username, password가 없으면 에러 처리
  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    // 계정이 존재하지 않으면 에러 처리
    if (!user) {
      ctx.status = 400;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    // 토큰 사용
    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 로그인 상태 확인
  GET /api/auth/check
*/
export const check = async (ctx) => {
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중 아님
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

/* 로그아웃: 쿠키 지우기 
  POST /api/auth/logout
*/
export const logout = async (ctx) => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No Content
};
