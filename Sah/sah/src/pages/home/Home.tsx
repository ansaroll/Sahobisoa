import React, { useContext } from "react";
import { Box, Container, Divider, Grid, IconButton, InputAdornment, TextField, Theme, Typography, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Freelances } from "../freelances/Freelances";

const Home = () => {

  const isSmorDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Grid container overflow="hidden" mb={10}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        height="100vh"
      >
        <img
          width="100%"
          height="100%"
          src={"/assets/home/sora-shimazaki.jpg"}
          alt="Illustration"
          style={{
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        />

        <Container
          style={{
            position: "absolute",
            bottom: 100,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography variant={isSmorDown ? 'h3' : "h1"}
            textTransform={"uppercase"}
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", lg: "6rem", xl: "7rem" },
              fontWeight: "semi-bold",
              fontFamily: "Lexend Deca",
              py: { xs: 4, sm: 4 },
              letterSpacing: "0.5em",
              textShadow: "0px 0px 10px rgba(255,255,255,0.6)",
            }}
            color="primary"
          >
            MYCAREAR
          </Typography>
          <Typography variant="h2" textAlign="start" color="secondary.light"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem", xl: "3.5rem" },
              textShadow: "0px 2px 10px rgba(0,0,0,0.8)",
            }}
          >
            Connectez-vous avec la communauté des
            <Typography component="span" variant="inherit" color="primary.light"> passionnés </Typography>
            de la tech et donnez un élan à votre carrière.
          </Typography>
        </Container>
      </Grid>

      <Container>
        <Grid
          item
          xs={12}
          py={{ xs: 2, sm: 4 }}
        >
          <Box>
            <Typography variant="h2">
              Comment ça marche ?
            </Typography>
            <Divider sx={{ py: 2, borderColor: "primary" }} />
            <TextField
              type="text"
              fullWidth
              placeholder="Ex: Développeur web . . ."
              InputProps={{
                endAdornment: <InputAdornment position="end" >
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>,
              }}
            />
          </Box>
          <Box>
            <Freelances />
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
