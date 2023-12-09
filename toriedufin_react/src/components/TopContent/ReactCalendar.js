import { Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const calendarStyle = {};

const marks = [
  "2023-12-05",
  "2023-12-06",
  "2023-12-7",
  "2023-12-12",
  "2023-12-13",
  "2023-12-14",
  "2023-12-15",
  "2023-12-16",
  "2023-12-17",
  "2023-12-19",
  "2023-12-20",
];

function ReactCalendar() {
  const [date, setDate] = useState(new Date()); // 초기값 = 현재 날짜

  return (
    <Grid container sx={{ ...calendarStyle }}>
      <Grid item>
        <Calendar
          locale="en-US"
          setDate={setDate}
          date={date}
          view="month"
          prev2Label={null}
          next2Label={null}
          tileContent={({ date }) => {
            const isMarked = marks.includes(moment(date).format("YYYY-MM-DD"));
            return isMarked && <div className="dot"></div>;
          }}
        />
      </Grid>
    </Grid>
  );
}

export default ReactCalendar;
