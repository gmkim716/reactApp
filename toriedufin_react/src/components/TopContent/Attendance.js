import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import ReactCalendar from "./ReactCalendar";
import AttendanceCnt from "./AttendanceCnt";

const attendanceBoxStyles = {
  // backgroundColor: "red",
};

const attendanceContentStyles = {
  backgroundColor: "beige",
  borderRadius: "8px",
};

const calendarBoxStyles = {};

const separateLineBoxStyles = {
  // backgroundColor: "blue",
  height: "1px",
  width: "100%",
};

const attendanceCntBoxStyles = {};

function Attendance() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    console.log("month", month);
  }, [month]);

  return (
    <Grid container sx={{ ...attendanceBoxStyles }}>
      <Box
        container
        sx={{
          height: "400px",
          backgroundColor: "white",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={11} sx={{ ...calendarBoxStyles }}>
          <ReactCalendar />
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "0",
          }}
        >
          <Grid item xs={10}>
            <hr />
          </Grid>
        </Grid>
        <Grid
          container
          xs={6}
          sx={{ ...attendanceCntBoxStyles, backgroundColor: "" }}
        >
          <AttendanceCnt month={month} />
        </Grid>
      </Box>
    </Grid>
  );
}

export default Attendance;
