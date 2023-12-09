import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import ReactChart from "./components/BottomConent/ReactChart";
import TopContents from "./components/TopContents";
import { Box, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";

// 테스트 유저 정보
const adminUser = {
  enrolled: "2023-12-06",
  nickname: "토리",
  rank: 2,
  solved: 625,
  correct: 601,
  gold: 123456,
};

// 스타일 설정
const appStyles = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
};

const contentStyle = {
  // backgroundColor: "gray",
};

function App() {
  return (
    <Grid container sx={{ ...appStyles }}>
      <Grid item xs={8} sx={{ ...contentStyle }}>
        <Grid container>
          <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
            <Header />
          </Grid>
          <Grid item xs={12} sx={{ backgroundColor: "orange" }}>
            <TopContents />
          </Grid>
          <Grid item xs={12} sx={{ backgroundColor: "green" }}>
            <BottomContents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
