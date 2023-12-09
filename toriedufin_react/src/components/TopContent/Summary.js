import React from "react";
import From from "./From";
import Details from "./Details";
import { Box, Grid, ListItem } from "@mui/material";

const summaryStyles = {
  display: "flex",
  backgroundColor: "black",
  height: "100%",
  justifyContent: "space-between",
};

const fromStyles = {
  height: "50%",
};

function Summary() {
  return (
    <Grid container sx={{ ...summaryStyles }}>
      <Grid item xs={12} sx={{ ...fromStyles }}>
        <From />
      </Grid>
      <Grid item xs={12}>
        <Details />
      </Grid>
    </Grid>
  );
}

export default Summary;
