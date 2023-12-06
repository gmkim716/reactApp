import React from "react";
import From from "./From";
import Details from "./Details";
import { Box, Grid, ListItem } from "@mui/material";

function Summary() {
  return (
    <Box>
      <Grid container>
        <Grid xs={12}>
          <From />
          <Details />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Summary;
