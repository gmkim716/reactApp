import React from "react";
import From from "./From";
import Details from "./Details";
import { Box, Grid, ListItem } from "@mui/material";

const summaryStyles = {
  display: "flex",
  // backgroundColor: "silver",
  height: "100%",
  justifyContent: "space-between",
};

const fromStyles = {};
const detailsStyles = {
  height: "30%",
};

function Summary() {
  return (
    <Grid container sx={{ ...summaryStyles }}>
      <Grid item xs={12} sx={{ ...fromStyles }}>
        <From />
      </Grid>
      <Grid item xs={12} sx={{ ...detailsStyles }}>
        <Details />
      </Grid>
    </Grid>
  );
}

export default Summary;
