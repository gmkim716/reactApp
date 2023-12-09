import { Grid } from "@mui/material";
import React from "react";
import { attendanceContainerStyle } from "./attendanceContainerStyle";

const attendanceCntStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
