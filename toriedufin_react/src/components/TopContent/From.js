import { Box, Grid, List, ListItem } from "@mui/material";
import React from "react";

const summaryStyle = {
  height: "300px",
  backgroundColor: "#3565F2",
  alignItems: "center",
  color: "white",
  borderRadius: "8px",
};

function Together() {
  return (
    <Box>
      <Grid container sx={{ ...summaryStyle }}>
        <List>
          <ListItem>토리에듀핀과 함께</ListItem>
          <ListItem>총 00일</ListItem>
          <ListItem>가입 2023.12.06</ListItem>
        </List>
      </Grid>
    </Box>
  );
}

export default Together;
