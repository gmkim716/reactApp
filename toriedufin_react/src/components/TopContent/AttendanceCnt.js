import { Grid } from "@mui/material";
import React from "react";

const attendanceContainerStyle = {
  // backgroundColor: "yellow",
  height: "100%",
};

const attendanceCntStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "yellow",
};

function AttendanceCnt() {
  return (
    <Grid container sx={{ ...attendanceContainerStyle }}>
      <Grid item xs={12} sx={{ ...attendanceCntStyle }}>
        0월 출석 &nbsp;
        <b>총 0일</b>
      </Grid>
    </Grid>
  );
}

export default AttendanceCnt;
