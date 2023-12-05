import { useState } from "react";
import Calendar from "./components/ReactCalendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date()); // 초기값 = 현재 날짜

  return (
    <>
      <div>App 화면입니다</div>
      <Calendar locale="ko" onChange={onChange} value={value} />
    </>
  );
}

export default App;
