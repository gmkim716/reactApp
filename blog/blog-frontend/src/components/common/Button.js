import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

// ${palette.gray} : platte 폴더로부터 설정된 값을 가져와서 사용

const StyledButton = styled.css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

// Button 컴포넌트를 호출하면, StyledButton 정의한 값을 가져온다.
const Button = (props) => {
  <StyledButton {...props} />; // Button이 받아오는 모든 props 항목들을 StyledButton에 전달
};

export default Button;
