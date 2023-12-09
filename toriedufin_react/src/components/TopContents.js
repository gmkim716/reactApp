import { Box, Grid } from "@mui/material";
import React from "react";
import Attendance from "./TopContent/Attendance";
import Summary from "./TopContent/Summary";

const topContentStyles = {
  marginBottom: "32px",
};

const summaryStyles = {
  paddingRight: "16px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  // backgroundColor: "yellow",
  height: "400px",
};

const attendanceStyles = {};

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
