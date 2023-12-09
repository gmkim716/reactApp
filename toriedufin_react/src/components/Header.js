import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import img03 from "../imgs/img03.png";

const headerStyle = {
  fontSize: "25px",
  backgroundColor: "green",
  marginTop: "50px",
  paddingLeft: "4px",
  paddingRight: "4px",
};

function Header() {
  // 사용자 등급
  const [tier, setTier] = useState("Gold");
  const [user, setUser] = useState("토리");

  return (
    <Grid container xs={12} sx={{ ...headerStyle }}>
      <Box>
        <Grid>
          <img src={img03} alt="img01" height={"50px"} />
          {tier}
        </Grid>
        <Grid>반갑습니다 {user}님</Grid>
      </Box>
    </Grid>
  );
}

export default Header;
