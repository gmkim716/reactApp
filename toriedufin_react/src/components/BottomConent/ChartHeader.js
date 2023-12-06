import { Box, Grid } from "@mui/material";
import React from "react";

function ChartHeader() {
  return (
    <Box
      container
      sx={{
        display: "flex",
        backgroundColor: "violet",
        justifyContent: "space-between",
      }}
    >
      <Grid>[이미지] 수익률 현황</Grid>
      <Grid>일별</Grid>
    </Box>
  );
}

export default ChartHeader;
