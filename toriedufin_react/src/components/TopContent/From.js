import { Box, Grid, List, ListItem } from "@mui/material";
import React from "react";

const summaryStyle = {
  backgroundColor: "#3565F2",
  alignItems: "center",
  color: "white",
  borderRadius: "8px",
  height: '100%',
  marginBottom: '8px',
};

function Together() {
  return (
    <Grid container sx={{ ...summaryStyle }}>
      <List>
        <ListItem className="descriptor">토리에듀핀과 함께</ListItem>
        <ListItem className="totalDays">총 00일</ListItem>
        <ListItem className="from">가입 2023.12.06</ListItem>
      </List>
    </Grid>
  );
}

export default Together;
