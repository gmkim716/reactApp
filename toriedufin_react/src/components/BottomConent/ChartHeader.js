import { Box, Grid } from "@mui/material";
import React from "react";

const chartHeaderStyle = {
  display: "flex",
  backgroundColor: "violet",
  margin: "200px auto",
  justifyContent: "space-between",
};

function ChartHeader() {
  return (
    <Grid container sx={{ ...chartHeaderStyle }}>
      <Grid>[이미지] 수익률 현황</Grid>
      <Grid>일별</Grid>
    </Grid>
  );
}

export default ChartHeader;
