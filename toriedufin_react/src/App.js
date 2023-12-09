import { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
import TopContents from "./components/TopContents";
import { Button, Grid } from "@mui/material";
import Header from "./components/Header";
import BottomContents from "./components/BottomContents";
import { useDispatch, useSelector } from "react-redux";

const appStyles = {
  backgroundColor: "lightGray",
  display: "flex",
  justifyContent: "center",
  height: "1020px", // 1440, 1020 기준
};

const contentStyle = {};

function App() {
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

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <Grid container sx={{ ...appStyles }}>
      <Grid item xs={8} sx={{ ...contentStyle }}>
        <Grid container>
          <Grid container>
            <Grid item xs={8} sx={{ backgroundColor: "" }}>
              <Header />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={loginTest}>로그인 테스트</Button>
              <Button onClick={logoutTest}>로그아웃 테스트</Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TopContents />
          </Grid>
          <Grid item xs={12}>
            <BottomContents />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
