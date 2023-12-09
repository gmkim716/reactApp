import { Box, Grid } from "@mui/material";
import React from "react";

const itemContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const itemStyles = {
  backgroundColor: "white",
  borderRadius: "8px",
  marginLeft: "8px",
  marginRight: "8px",
  flex: 1,
};

function Results() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
      }}
    >
      <Grid item sx={{ ...itemStyles, marginLeft: 0 }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>이달 수익률</Grid>
          <Grid item className="value">
            0%
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ ...itemStyles }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>누적 수익률</Grid>
          <Grid item className="value">
            0%
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ ...itemStyles, marginRight: 0 }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>손익금액</Grid>
          <Grid item className="value">
            0%
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Results;
