import { Box, Grid, ListItem } from "@mui/material";
import React from "react";

const detailStyles = {
  backgroundColor: "pink",
  display: "grid",
  gap: 2,
  gridTemplateColumns: "repeat(2, 1fr)",
  paddingTop: "16px",
};

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
};

function Details() {
  return (
    <Grid sx={{ ...detailStyles }}>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>금융지능순위</div>
          <div className="value">00위</div>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>정답률</div>
          <div className="value">00위</div>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>학습량</div>
          <div className="value">00%</div>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <div>총 학습 Gold</div>
          <div className="value">000,000</div>
        </Grid>
      </Item>
    </Grid>
  );
}

export default Details;
