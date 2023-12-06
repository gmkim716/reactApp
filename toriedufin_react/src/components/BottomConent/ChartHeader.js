import { Box, Grid } from "@mui/material";
import React from "react";

function ChartHeader() {
  return (
    <Box container>
      <Grid>수익률 현황</Grid>
      <Grid>일별</Grid>
    </Box>
  );
}

export default ChartHeader;
