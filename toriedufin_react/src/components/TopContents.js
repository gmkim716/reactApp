import { Box, Grid } from "@mui/material";
import React from "react";
import Attendance from "./TopContent/Attendance";
import Summary from "./TopContent/Summary";

const topContentStyles = {
  backgroundColor: "yellow",
  justifyContent: "space-between",
  display: 'flex',
};

const summaryStyles = {
  paddingRight: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: 'red',
}

const attendanceStyles = {
  paddingLeft: '8px',  
  height: '100%',
}

function TopContents() {
  return (
    <Grid container sx={{ ...topContentStyles }}>
      <Grid item xs={8} sx={{ ...summaryStyles }}>
        <Summary />
      </Grid>
      <Grid item xs={4} sx={{ ...attendanceStyles }}>
        <Attendance />
      </Grid>
    </Grid>
  );
}

export default TopContents;
