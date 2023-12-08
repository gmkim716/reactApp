import React from "react";
import From from "./From";
import Details from "./Details";
import { Box, Grid, ListItem } from "@mui/material";

const summaryStyles = {
  display: 'flex',
  backgroundColor: 'beige',
  height: '100%',
  justifyContent: 'space-between',
}

function Summary() {
  return (
    <Grid container sx={{ ...summaryStyles }}>
      <Grid item xs={12}>
        <From />
      </Grid>
      <Grid item xs={12}>
        <Details />
      </Grid>
    </Grid>
  );
}

export default Summary;
