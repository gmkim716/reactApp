import moment from "moment";
import React, { useState } from "react";
import Calendar from "react-calendar";

const marks = [
  "15-12-2023",
  "03-12-2023",
  "07-12-2023",
  "12-12-2023",
  "13-12-2023",
  "15-12-2023",
];

function ReactCalendar() {
  const [date, setDate] = useState(new Date()); // 초기값 = 현재 날짜

  return (
    <>
      <div>
        <Calendar
          locale="en-US"
          setDate={setDate}
          date={date}
          view="month"
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              return "highlight";
            }
          }}
        />
      </div>
    </>
  );
}

export default ReactCalendar;
