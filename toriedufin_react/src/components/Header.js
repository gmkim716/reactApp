import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

const welcomeStyle = {
  fontSize: "25px",
  margin: "10px",
};

function Header() {
  // 사용자 등급
  const [tier, setTier] = useState("Gold");
  const [user, setUser] = useState("토리");

  return (
    <Grid container xs={12} sx={{ ...welcomeStyle }}>
      <Box>
        <Grid>{tier}</Grid>
        <Grid>반갑습니다 {user}님</Grid>
      </Box>
    </Grid>
  );
}

export default Header;
