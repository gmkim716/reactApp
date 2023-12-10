import { Box, Grid, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const detailStyles = {
  // backgroundColor: "red",
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
  paddingLeft: "20px",
  paddingRight: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
};

function Details() {
  const userInfo = useSelector((user) => user);

  const [accuracy, setAccuracy] = useState();

  useEffect(() => {
    setAccuracy(userInfo.correct / userInfo.attempted);
  }, [userInfo]);

  return (
    <Grid sx={{ ...detailStyles }}>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <Grid item>금융지능순위</Grid>
          <Grid item className="value">
            {userInfo.rank}위
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <Grid item>정답률</Grid>
          <Grid item className="value">
            {accuracy?.toFixed(3) * 100}%
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <Grid item>학습량</Grid>
          <Grid item className="value">
            {userInfo?.attempted} 문제
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Grid sx={{ ...itemDetailStyles }}>
          <Grid item>총 학습 Gold</Grid>
          <Grid item className="value">
            {userInfo.gold.toLocaleString()}
          </Grid>
        </Grid>
      </Item>
    </Grid>
  );
}

export default Details;
