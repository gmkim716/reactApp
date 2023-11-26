import React from "react";

// GreetinsProps 객체 타입 선언
type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string; // 있어도, 없어도 되는 값
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수
};

/* React.FC
  - React.FC를 사용할 때 props의 타입을 Generics로 넣어 사용
  - React.FC를 사용해서 얻을 수 있는 두 가지 이점 
    1. props에 기본적으로 children이 들어가 있다
    2. defaultProps, propTypes, contextTypes를 설정할 때 자동완성될 수 있다 

  - React.FC를 사용할 때 발생하는 단점
    1. children이 옵셔널 형태로 들어가서 컴포넌트 props의 타입이 명백하지 않는다 
*/

/* 저자는 React.FC를 사용하지 않는 것을 추천
  const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    <div>Heello, {name} </div>
  );
*/

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name}
      {mark}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

// Greetins 기본값
Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
