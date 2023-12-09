import React from "react";
import { Box, Grid } from "@mui/material";
import ReactCalendar from "./ReactCalendar";
import AttendanceCnt from "./AttendanceCnt";

const attendanceBoxStyles = {
  paddingRight: "8px",
};

const calendarBoxStyles = {
  backgroundColor: "beige",
};

const separateLineBoxStyles = {
  backgroundColor: "blue",
  margin: "0 auto",
};

const attendanceCntBoxStyles = {
  backgroundColor: "yellow",
};

function Attendance() {
  return (
    <Grid container sx={{ ...attendanceBoxStyles }}>
      <Grid item xs={12} sx={{ ...calendarBoxStyles }}>
        <ReactCalendar />
      </Grid>
      <Grid item xs={11} sx={{ ...separateLineBoxStyles }}>
        <hr />
      </Grid>
      <Grid item xs={12} sx={{ ...attendanceCntBoxStyles }}>
        <AttendanceCnt />
      </Grid>
    </Grid>
  );
}

export default Attendance;
