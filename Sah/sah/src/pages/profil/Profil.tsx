import React from "react";
import ProfilePage from "./ProfilePage";
import { Avatar, Badge, Box, Button, Container, Grid, Typography } from "@mui/material";
import { AccessTime, Home, PunchClock } from "@mui/icons-material";

const Profil = () => {
  return (
    <Box sx={{ backgroundColor: "background.default" }} >
      <Container maxWidth="lg" >
        <Grid container py={4} >
          <Grid item xs={12} sm={4} md={2.5}>
            <Badge color="secondary" overlap="circular" badgeContent="Nouveau" >
              <Avatar
                alt="Profil Images"
                src="./assets/profil/sahprofil.png"
                sx={{ width: 200, height: 200 }}
              />
            </Badge>
          </Grid>
          <Grid item xs={12} sm={12} md={7.5} container direction="column"
            justifyContent="center"
            alignItems="start"
          >
            <Typography variant="h4">
              Sahobisoa Rolland ANDRIANIAINA
            </Typography>
            <Typography variant="h5">
              Developpeur React
            </Typography>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Home color="info" />
              <Typography>
                Antananarivo, Madagascar
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Button variant="contained" sx={{ py: 1, px: 4, borderRadius: 10 }}>
              Contacter
            </Button>
            <Typography py={2}>
              Contacter par email ou par téléphone pour plus d'informations
            </Typography>
            <Box sx={{
              backgroundColor: "success.main",
              color: "success.contrastText", width: "fit-content",
              borderRadius: 10, px: 2, display: "flex", flexDirection: "row",
              alignItems: "center", gap: 1, py: .3
            }}>
              <AccessTime/> <Typography component="span">Disponible</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profil


