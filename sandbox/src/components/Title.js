import { Typography } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propType = {
  children: PropTypes.node,
};

export default Title;
