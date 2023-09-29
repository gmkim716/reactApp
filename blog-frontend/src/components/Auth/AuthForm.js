import styled from 'styled-components';
import { Link } from 'react-router-dom'; // 라우터 경로 설정
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

/**
 * 회원가입 또는 로그인 폼
 */

// div 스타일 지정: styled.div 사용
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

// intput 스타일 지정: sytled.input 사용
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outine: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

// button 스타일 지정
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

// type에 따라 표시되는 명칭이 달라질 수 있도록 설정
const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        {/* 버튼에 옵션을 줘서 스타일 적용 */}
        {/* <Button cyan={true} fullwidth={true}와 동일 */}
        {/* <Button cyan fullWidth> */}
        {/* 상단에 여백주기 */}
        {/* 방식 1. style props 전달 */}
        {/* <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          로그인
        </Button> */}
        {/* 방식 2. styled 함수를 사용해 새로운 컴포넌트 정의 */}{' '}
        {/* 가독성이 더 좋기 때문에 권장하는 방법 */}
        <ButtonWithMarginTop cyan fullWidth>
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {/* Q.login, register 순서가 바뀌어야 하는게 아닌지..?  */}
        {/* A. 로그인 창에서는 회원가입으로, 회원가입 창에서는 로그인으로 이동할 수 있는 경로 설정 */}
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
