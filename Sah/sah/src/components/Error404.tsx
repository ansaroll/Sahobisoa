import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Box
      style={{
        color: "#438AFE",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "2rem",
      }}
    >
      <Typography variant="h5">Oups...</Typography>
      <Box
        style={{
          color: "#438AFE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/404.svg"
          alt="404"
          style={{ width: "50%", margin: "auto" }}
        />
      </Box>
      <Box>
        <Typography variant="h5">
          Il semblerait qu’il y ait un problème
        </Typography>
      </Box>
      <Link to={"/"} style={{
        textDecoration:"none"
      }}>
        <Button variant="contained" color="primary">
          Accueil
        </Button>
      </Link>
    </Box>
  );
};

export default Error404;
