import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import ReactChart from "./components/BottomConent/ReactChart";
import TopContents from "./components/TopContents";
import { Box, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";

const appStyles = {
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
};

const contentStyles = {
  width: "1600px",
};

function App() {
  return (
    <Grid container xs={12} style={{ ...appStyles }}>
      <Grid xs={8}>
        <Box>
          <Header />
          <TopContents />
          <BottomContents />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
