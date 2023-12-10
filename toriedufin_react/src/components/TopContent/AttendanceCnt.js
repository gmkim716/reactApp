import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const attendanceContainerStyle = {
  height: "100%",
};

const attendanceCntStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function AttendanceCnt({ month }) {
  const userInfo = useSelector((user) => user);
  const [montlyCnt, setMonthlyCnt] = useState(0);

  useEffect(() => {
    const filtered = userInfo.loginHistory.filter((value, key) => {
      const date = new Date(value);
      return date.getMonth() + 1 === month;
    });
    setMonthlyCnt(filtered.length);
  }, [userInfo.loginHistory]);

  return (
    <Grid container sx={{ ...attendanceContainerStyle }}>
      <Grid item xs={12} sx={{ ...attendanceCntStyle }}>
        {month}월 출석 &nbsp;
        <b>총 {montlyCnt}일</b>
      </Grid>
    </Grid>
  );
}

export default AttendanceCnt;
