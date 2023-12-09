import React from "react";
import ReactChart from "./BottomConent/ReactChart";
import { Grid } from "@mui/material";
import Results from "./BottomConent/Results";
import ChartHeader from "./BottomConent/ChartHeader";

const bottomContentsStyles = {};

function BottomContents() {
  return (
    <Grid container sx={{ ...bottomContentsStyles }}>
      <Grid xs={12} sx={{ backgroundColor: "" }}>
        <ChartHeader />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "white" }}>
        <ReactChart />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "" }}>
        <Results />
      </Grid>
    </Grid>
  );
}

export default BottomContents;
