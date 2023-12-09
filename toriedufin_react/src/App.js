import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import ReactChart from "./components/BottomConent/ReactChart";
import TopContents from "./components/TopContents";
import { Box, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";

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
