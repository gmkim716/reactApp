import { Box, Grid } from "@mui/material";
import React from "react";
import Attendance from "./TopContent/Attendance";
import Summary from "./TopContent/Summary";

const topContentsStyles = {
  height: "500px",
};

function TopContents() {
  return (
    <Box sx={{ ...topContentsStyles }}>
      <Grid container xs={12}>
        <Grid xs={8}>
          <Summary />
        </Grid>
        <Grid xs={4}>
          <Attendance />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopContents;
