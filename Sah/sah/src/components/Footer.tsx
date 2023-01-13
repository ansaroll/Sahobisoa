import { Typography, AppBar } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 , py:.5 }}>
      <Typography
        style={{ margin: 'auto' }}
        variant="caption"
      >
        Copyright © 2023 Ansaroll Technology
      </Typography>
    </AppBar>
  );
};

export default Footer;
