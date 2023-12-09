import React from "react";
import ReactChart from "./BottomConent/ReactChart";
import { Box, Grid } from "@mui/material";
import Results from "./BottomConent/Results";
import ChartHeader from "./BottomConent/ChartHeader";

function BottomContents() {
  return (
    <Grid container>
      <Grid xs={12} sx={{ backgroundColor: "gray" }}>
        <ChartHeader />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "red" }}>
        <ReactChart />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "green" }}>
        <Results />
      </Grid>
    </Grid>
  );
}

export default BottomContents;
