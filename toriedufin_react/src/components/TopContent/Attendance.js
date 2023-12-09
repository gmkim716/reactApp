import React from "react";
import { Box, Grid } from "@mui/material";
import ReactCalendar from "./ReactCalendar";
import AttendanceCnt from "./AttendanceCnt";

const attendanceBoxStyles = {
  backgroundColor: "black",
};

const attendanceContentStyles = {
  backgroundColor: "beige",
  borderRadius: "8px",
};

const calendarBoxStyles = {};

const separateLineBoxStyles = {
  backgroundColor: "blue",
  margin: "0 auto",
};

const attendanceCntBoxStyles = {};

function Attendance() {
  return (
    <Grid container sx={{ ...attendanceBoxStyles }}>
      <Box sx={{}}>
        <Grid item xs={12} sx={{ ...calendarBoxStyles }}>
          <ReactCalendar />
        </Grid>
        <Grid item xs={11} sx={{ ...separateLineBoxStyles }}>
          <hr />
        </Grid>
        <Grid item xs={12} sx={{ ...attendanceCntBoxStyles }}>
          <AttendanceCnt />
        </Grid>
      </Box>
    </Grid>
  );
}

export default Attendance;
