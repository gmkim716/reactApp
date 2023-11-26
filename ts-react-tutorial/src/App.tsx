import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
    <>
      <Greetings name="Jayden" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
    </>
  );
};

export default App;
