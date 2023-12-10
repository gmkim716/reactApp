import React, { useState } from "react";
import ReactChart from "./BottomConent/ReactChart";
import { Grid } from "@mui/material";
import Results from "./BottomConent/Results";
import ChartHeader from "./BottomConent/ChartHeader";

const bottomContentsStyles = {
  // backgroundColor: "yellow",
};

function BottomContents() {
  const [month, setMonth] = useState(new Date().getMonth + 1);
  return (
    <Grid container sx={{ ...bottomContentsStyles }}>
      <Grid xs={12} sx={{ backgroundColor: "	" }}>
        <ChartHeader />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "", borderRadius: "8px" }}>
        <ReactChart />
      </Grid>
      <Grid xs={12} sx={{ backgroundColor: "#" }}>
        <Results />
      </Grid>
    </Grid>
  );
}

export default BottomContents;
