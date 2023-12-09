import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

import img02 from "../../imgs/img02.png";

const chartHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyles = {
  // backgroundColor: "lightGray",
  alignItems: "center",
  fontWeight: "500",
};

const selectStyles = {
  boxShadow: "none",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: 0,
  },
};

function ChartHeader() {
  const [state, setState] = useState("daily");

  const onChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Grid container sx={{ ...chartHeaderStyle }}>
      <Grid container xs={6} sx={{ ...titleStyles }}>
        <img src={img02} alt="img02" height={"30px"} /> 수익률 현황
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <FormControl>
          <Select
            value={state}
            onChange={(e) => onChange(e)}
            sx={{ ...selectStyles }}
          >
            <MenuItem value={"daily"}>일별</MenuItem>
            <MenuItem value={"monthly"}>월별</MenuItem>
            <MenuItem value={"yearly"}>연도별</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default ChartHeader;
