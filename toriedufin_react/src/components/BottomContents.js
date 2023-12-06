import React from "react";
import ReactChart from "./BottomConent/ReactChart";
import { Box, Grid } from "@mui/material";
import Results from "./BottomConent/Results";
import ChartHeader from "./BottomConent/ChartHeader";

function BottomContents() {
  return (
    <Box container>
      <ChartHeader />
      <ReactChart />
      <Results />
    </Box>
  );
}

export default BottomContents;
