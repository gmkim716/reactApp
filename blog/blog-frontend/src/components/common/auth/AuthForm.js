import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Link } from '../../../../../../node_modules/react-router-dom/dist/index';
import Button from '../Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 기존 Button 컴포넌트에 추가해서 styled 적용: 가독성 면에서 추천
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

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

const AuthForm = () => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
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
        {/* <Button cyan fullwidth>: <Button cayn={true] fullwidth={true}와 동일 */}
        {/* <Button cyan fullWidth style={{ marginTop: '1rem' }}>: 직접 style을 정의해서 사용하는 방법 */}
        {/* ButtonWithMarginTop 스타일 정의해서 사용 */}
        <ButtonWithMarginTop cyan fullWidth>
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
