import { Box, Grid } from "@mui/material";
import React from "react";
import Attendance from "./TopContent/Attendance";
import Summary from "./TopContent/Summary";

const topContentStyles = {
  backgroundColor: "green",
  display: "flex",
  // justifyContent: "space-between",
};

const summaryStyles = {
  paddingRight: "16px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  backgroundColor: "red",
};

const attendanceStyles = {
  // height: "100%",
  flex: "1",
};

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
