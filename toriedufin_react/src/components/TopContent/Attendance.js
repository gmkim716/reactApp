import React from "react";
import { Box, Grid } from "@mui/material";
import ReactCalendar from "./ReactCalendar";
import AttendanceCnt from "./AttendanceCnt";

const AttendanceStyles = {
  backgroundColor: "beige",
  marginRight: '10px',
};

function Attendance() {
  return (
    <Grid container sx={{ ...AttendanceStyles }}>
      <Grid item xs={12}>
        <ReactCalendar />
      </Grid>
      <Grid item xs={12}>
        <AttendanceCnt />
      </Grid>
    </Grid>
  );
}

export default Attendance;
