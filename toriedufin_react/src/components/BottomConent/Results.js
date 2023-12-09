import { Box, Grid, ListItem } from "@mui/material";
import React from "react";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

const itemDetailStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

function Results() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>이달 수익률</div>
          <div className="value">0%</div>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>누적 수익률</div>
          <div className="value">00%</div>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>손익금액</div>
          <div className="value">000,000</div>
        </Grid>
      </Item>
    </Box>
  );
}

export default Results;
