import { useEffect, useReducer, useState } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import TopContents from "./components/TopContents";
import { Button, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";
import { useDispatch, useSelector } from "react-redux";
import reducer from "../src/store/store";

// 테스트 유저 정보
const initialUserState = {
  userId: "",
  password: "",
  nickname: "",
  enrolled: "",
  rank: -1,
  attempted: 0,
  correct: 0,
  gold: 0,
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
  // 정의부 ====
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const loginTest = () => {
    dispatch({
      type: "login",
      payload: { userId: "toriedu", password: "1234" },
    });
  };

  const logoutTest = () => {
    dispatch({
      type: "logout",
    });
  };

  // 유저 정보 확인
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <Grid container sx={{ ...appStyles }}>
      <Grid item xs={8} sx={{ ...contentStyle }}>
        <Grid container>
          <Grid item xs={12} sx={{ backgroundColor: "skyblue" }}>
            <Button onClick={loginTest}>로그인 테스트</Button>
            <Button onClick={logoutTest}>로그아웃 테스트</Button>
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
