import { Grid, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import moment from "moment";

import img01 from "../../imgs/img01.png";
import { useSelector } from "react-redux";

const summaryStyle = {
  backgroundColor: "#3565F2",
  alignItems: "center",
  color: "white",
  borderRadius: "8px",
  height: "100%",
  marginBottom: "px",
  position: "relative",
  paddingLeft: "50px",
};

const listGridStyles = {
  // backgroundColor: "yellow",
};

const imgGridStyles = {
  display: "flex",
  justifyContent: "flex-end",
  position: "absolute",
  bottom: 0,
  right: 0,
};

function Together() {
  const userInfo = useSelector((user) => user);

  const [enrolled, setEnrolled] = useState();
  const [along, setAlong] = useState();

  useEffect(() => {
    if (userInfo) {
      const enrolledDate = userInfo.enrolled;

      const now = moment();
      const daysDiff = now.diff(enrolledDate, "days");

      setEnrolled(userInfo.enrolled);
      setAlong(daysDiff);
    }
  }, [userInfo]);

  return (
    <Grid container sx={{ ...summaryStyle }}>
      <Grid item xs={4} sx={{ ...listGridStyles }}>
        <List>
          <ListItem className="descriptor">토리에듀핀과 함께</ListItem>
          <ListItem className="totalDays" sx={{ fontSize: "x-large" }}>
            총 {along}일
          </ListItem>
          <ListItem className="from" sx={{ fontSize: "small" }}>
            가입 {enrolled}
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sx={{ ...imgGridStyles }}>
        <img src={img01} alt="img01" height="300px" objectFit="cover" />
      </Grid>
    </Grid>
  );
}

export default Together;
