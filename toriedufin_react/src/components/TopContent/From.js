import { Box, Grid, List, ListItem } from "@mui/material";
import React from "react";

const summaryStyle = {
  height: "200px",
  backgroundColor: "#3565F2",
  alignItems: "center",
  color: "white",
  borderRadius: "8px",
  marginBottom: "16px",
};

function Together() {
  return (
    <Box>
      <Grid container sx={{ ...summaryStyle }}>
        <List>
          <ListItem className="descriptor">토리에듀핀과 함께</ListItem>
          <ListItem className="totalDays">총 00일</ListItem>
          <ListItem className="from">가입 2023.12.06</ListItem>
        </List>
      </Grid>
    </Box>
  );
}

export default Together;
