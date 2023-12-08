import { Grid } from "@mui/material";
import React from "react";

const attendanceCntStyle = {
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', 
}

function AttendanceCnt() {
  return (
    <Grid container >
      <Grid item xs={12} sx={{ ...attendanceCntStyle }}>
        0월 출석 <b>총 0일</b>
      </Grid>
    </Grid>
  )
}

export default AttendanceCnt;
