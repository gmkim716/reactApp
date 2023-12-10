import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import img03 from "../imgs/img03.png";
import { useSelector } from "react-redux";

const headerStyles = {
  fontSize: "25px",
  // backgroundColor: "green",
  marginTop: "10px",
  paddingLeft: "4px",
  paddingRight: "4px",
  fontWeight: "500",
};

const tierStyles = {
  // backgroundColor: "red",
  alignItems: "center",
};

function Header() {
  const userInfo = useSelector((user) => user);

  const [tier, setTier] = useState();

  useEffect(() => {
    if (userInfo.rank < 0) {
      setTier("Rank");
    } else if (userInfo.rank <= 10) {
      setTier("Gold");
    }
  }, [userInfo]);

  return (
    <Grid container xs={12} sx={{ ...headerStyles }}>
      <Grid container sx={{ ...tierStyles }}>
        {tier === "Gold" ? (
          <>
            <img src={img03} alt="img01" height={"30px"} /> {tier}
          </>
        ) : (
          <>{tier}</>
        )}
      </Grid>
      <Grid container>
        {userInfo?.nickname
          ? `반갑습니다 ${userInfo.nickname}님`
          : "로그인이 필요합니다"}
      </Grid>
    </Grid>
  );
}

export default Header;
