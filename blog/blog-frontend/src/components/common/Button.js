import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

// Button 리액트 컴포넌트를 만들어서 그 안에 StyledButton을 렌더링 : 추후에 컴포넌트 사용시 자동 import를 위함
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]}
  &:hover {
    background: ${palette.gray[6]}
  }

  // Q. 어떤 과정이지..? props를 통해서 옵션을 주는 이유는?
  // props.fullWidth & props.cyan 적용 
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

// button이 받아오는 모든 props를 StyledButton에 전달
const Button = (props) => <StyledButton {...props} />;

export default Button;
