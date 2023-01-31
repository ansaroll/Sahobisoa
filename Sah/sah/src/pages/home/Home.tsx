import React, { useContext } from "react";
import { Grid, Theme, Typography, useMediaQuery } from "@mui/material";

const Home = () => {

  const isSmorDown = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'))

  return (
    <Grid container overflow="hidden" py={2}>
      <Grid
        item
        xs={12}
        sm={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant={isSmorDown ? 'h3' :"h2"} textAlign="center">
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        py={{xs:4,sm:2}}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img
          width="100%"
          src={"/assets/illustration.svg"}
          alt="Illustration"
          style={{
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
