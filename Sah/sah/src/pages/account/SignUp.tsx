import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={8} md={7} >
                <Box
                    sx={{
                        py: 6,
                        "&:before": {
                            content: '""',
                            backgroundImage: 'url(../../assets/back1.jpg)',
                        },
                        // boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                    }}
                >
                    <Box display="flex" justifyContent="center" flexDirection="column"
                        component="form"
                        noValidate
                        px={10}
                        gap={2}
                        autoComplete="off">
                        <Typography variant="h4">Inscription</Typography>

                        <Box>
                            <TextField fullWidth label="Nom" variant="outlined" />
                        </Box>
                        <Box>
                            <TextField fullWidth label="Prenom" variant="outlined" />
                        </Box>
                        <Box>
                            <TextField fullWidth label="Email" variant="outlined" />
                        </Box>
                        <Box>
                            <TextField fullWidth label="Lien LinkedIn" variant="outlined" />
                        </Box>
                        <Box>
                            <TextField fullWidth label="Titre du profil" variant="outlined" />
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Mot de passe" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Confirmation mot de passe" variant="outlined" />
                            </Grid>
                        </Grid>
                        <Box>
                            <Button variant='contained'>
                                S'inscrire
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default SignUp