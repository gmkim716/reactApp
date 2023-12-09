import { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import TopContents from "./components/TopContents";
import { Button, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";
import { useDispatch, useSelector } from "react-redux";

// 스타일 설정
const appStyles = {
  backgroundColor: "black",
  display: "flex",
  justifyContent: "center",
};

const contentStyle = {};

function App() {
  // 정의부 ====
  const user = useSelector((user) => user);
  const dispatch = useDispatch();

  const loginTest = () => {
    dispatch({
      type: "login",
      payload: {
        userId: "toriedu",
        password: "1234",
        nickname: "토리",
        rank: "2",
        attempted: 625,
        correct: 599,
        gold: 124000,
        enrolled: "2023.12.06",
      },
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
          <Grid container>
            <Grid Grid item xs={8} sx={{ backgroundColor: "skyblue" }}>
              <Header />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: "yellowGreen",
              }}
            >
              <Button onClick={loginTest}>로그인 테스트</Button>
              <Button onClick={logoutTest}>로그아웃 테스트</Button>
            </Grid>
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
