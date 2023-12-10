import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const itemContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px",
  paddingLeft: "20px",
  paddingRight: "20px",
};

const itemStyles = {
  backgroundColor: "white",
  borderRadius: "8px",
  marginLeft: "8px",
  marginRight: "8px",
  flex: 1,
};

function Results() {
  const userInfo = useSelector((user) => user);
  const [montlyProfitRate, setMontlyProfitRate] = useState();
  const [cumlativeProfitRate, setCumlativeProfitRate] = useState();
  const [totalProfit, setTotalProfit] = useState();

  const [month, setMonth] = useState(12);

  useEffect(() => {
    setCumlativeProfitRate(0);
  }, []);

  // 임의로 값 입력
  useEffect(() => {
    setCumlativeProfitRate(-3);
  }, [montlyProfitRate]);

  useEffect(() => {
    let totalProfit = 0;
    let monthlyProfit = 0;

    const tradeHistory = userInfo.tradeHistory;

    tradeHistory.forEach((trade) => {
      const tradeEntries = Object.entries(trade);

      // key와 value를 각각 출력
      tradeEntries.forEach(([date, profit]) => {
        totalProfit += profit; // 전체 이익 합계 추가

        const dateMonth = new Date(date).getMonth() + 1;
        if (dateMonth === month) {
          monthlyProfit += profit;
        }
      });
    });

    setTotalProfit(totalProfit);
    setMontlyProfitRate(monthlyProfit);
  }, [userInfo]);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "16px",
      }}
    >
      <Grid item sx={{ ...itemStyles, marginLeft: 0 }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>이번 달 수익</Grid>
          {montlyProfitRate >= 0 ? (
            <Grid item className="value" sx={{ color: "red" }}>
              {montlyProfitRate?.toLocaleString()}
            </Grid>
          ) : (
            <Grid item className="value" sx={{ color: "blue" }}>
              {montlyProfitRate?.toLocaleString()}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item sx={{ ...itemStyles }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>누적 수익률</Grid>
          {cumlativeProfitRate >= 0 ? (
            <Grid item className="value" sx={{ color: "red" }}>
              {cumlativeProfitRate}%
            </Grid>
          ) : (
            <Grid item className="value" sx={{ color: "blue" }}>
              {cumlativeProfitRate}%
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item sx={{ ...itemStyles, marginRight: 0 }}>
        <Grid container sx={{ ...itemContainerStyles }}>
          <Grid item>손익금액</Grid>

          {totalProfit >= 0 ? (
            <Grid item className="value" sx={{ color: "red" }}>
              {totalProfit?.toLocaleString()}
            </Grid>
          ) : (
            <Grid item className="value" sx={{ color: "blue" }}>
              -{totalProfit?.toLocaleString()}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Results;
