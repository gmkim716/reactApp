import React from "react";
import { Box } from "@mui/material";
import ReactCalendar from "./ReactCalendar";
import AttendanceCnt from "./AttendanceCnt";

const AttendanceStyles = {
  backgroundColor: "green",
};

function Attendance() {
  return (
    <Box container sx={{ ...AttendanceStyles }}>
      <ReactCalendar />
      <AttendanceCnt />
    </Box>
  );
}

export default Attendance;
