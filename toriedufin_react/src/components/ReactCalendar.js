import React, { useState } from "react";
import Calendar from "react-calendar";
import { startOfMonth, endOfMonth, max } from "date-fns";

function ReactCalendar() {
  const [date, setDate] = useState(new Date()); // 초기값 = 현재 날짜

  const minDate = startOfMonth(date);
  const maxDate = endOfMonth(date);

  return (
    <>
      <div>calendar 컴포넌트입니다.</div>
      <div>
        <Calendar locale="en-US" setDate={setDate} date={date} view="month" />
      </div>
    </>
  );
}

export default ReactCalendar;
