import { Box, Grid } from "@mui/material";
import React from "react";

import img02 from "../../imgs/img02.png";

const chartHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
};

function ChartHeader() {
  return (
    <Grid container sx={{ ...chartHeaderStyle }}>
      <Grid item xs={6}>
        <img src={img02} alt="img02" height={"50px"} />
        [이미지] 수익률 현황
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        일별
      </Grid>
    </Grid>
  );
}

export default ChartHeader;
