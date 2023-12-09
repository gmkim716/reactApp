import { Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";

const calendarStyle = {
  position: "relative",
};

const marks = [
  "2023-12-05",
  "2023-12-06",
  "2023-12-07",
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

  const tileClassName = ({ date }) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    return marks.includes(dateStr) ? "marked" : "grayed";
  };

  const tileContent = ({ date, view }) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    return marks.includes(dateStr) ? <div className="marker" /> : null;
  };

  return (
    <Grid container sx={{ ...calendarStyle }}>
      <Grid item xs={12}>
        <Calendar
          locale="en-US"
          setDate={setDate}
          date={date}
          view="month"
          prev2Label={null}
          next2Label={null}
          tileClassName={tileClassName}
          tileContent={tileContent}
        />
      </Grid>
    </Grid>
  );
}

export default ReactCalendar;
