import { Box, Grid } from "@mui/material";
import React from "react";
import Attendance from "./TopContent/Attendance";
import Summary from "./TopContent/Summary";

const topContentsStyles = {
  backgroundColor: "yellow",
  ustifyContent: "space-between",
};

function TopContents() {
  return (
    <Box sx={{ ...topContentsStyles }}>
      <Grid container>
        <Grid item xs={8}>
          <Summary />
        </Grid>
        <Grid item xs={4}>
          <Attendance />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopContents;
