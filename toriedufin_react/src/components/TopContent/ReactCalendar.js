import { Grid } from "@mui/material";
import { current } from "immer";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useSelector } from "react-redux";

const calendarStyle = {
  position: "relative",
};

function ReactCalendar() {
  const userInfo = useSelector((user) => user);

  const [date, setDate] = useState(new Date()); // 초기값 = 현재 날짜
  const [monthlyMarks, setMonthlyMarks] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(moment().format("YYYY-MM"));

  const tileClassName = ({ date }) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    return monthlyMarks.includes(dateStr) ? "marked" : "grayed";
  };

  const tileContent = ({ date, view }) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    return monthlyMarks.includes(dateStr) ? <div className="marker" /> : null;
  };

  useEffect(() => {
    setMonthlyMarks(userInfo.loginHistory);
  }, [userInfo.loginHistory]);

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
