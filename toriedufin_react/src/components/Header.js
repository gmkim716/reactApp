import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import img03 from "../imgs/img03.png";

const headerStyle = {
  fontSize: "25px",
  backgroundColor: "green",
  marginTop: "50px",
  paddingLeft: "4px",
  paddingRight: "4px",
  fontWeight: "500",
};

const tierStyles = {
  backgroundColor: "red",
  alignItems: "center",
};

function Header() {
  // 사용자 등급
  const [tier, setTier] = useState("Gold");
  const [user, setUser] = useState("토리");

  return (
    <Grid container xs={12} sx={{ ...headerStyle }}>
      <Grid container sx={{ ...tierStyles }}>
        <img src={img03} alt="img01" height={"30px"} /> {tier}
      </Grid>
      <Grid container>반갑습니다 {user}님</Grid>
    </Grid>
  );
}

export default Header;
