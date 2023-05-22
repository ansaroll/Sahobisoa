import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/context';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'

const SignUp = () => {

    const { theme } = useContext(ThemeContext);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [showPassword1, setShowPassword1] = React.useState(false);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSignUpWithEmail = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Inscription réussie", user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <Container>
            <Grid container>

                <Grid item xs={12} sm={8} md={7} >
                    <Box
                        sx={{
                            my: 2,
                            py: 4,
                            backgroundColor: theme == "dark" ? "rgba(60,80,150,.4)" : "",
                            "&:before": {
                                content: '""',
                                backgroundImage: 'url(../../assets/back1.jpg)',
                            },
                        }}
                    >
                        <Box display="flex" justifyContent="center" flexDirection="column"
                            component="form"
                            noValidate
                            px={5}
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
                                    <TextField
                                        type={showPassword1 ? 'text' : 'password'}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" >
                                                <IconButton
                                                    onClick={handleClickShowPassword1}
                                                    onMouseDown={handleMouseDownPassword1}
                                                >
                                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>,
                                        }}
                                        fullWidth label="Mot de passe" variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type={showPassword ? 'text' : 'password'}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" >
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>,
                                        }}
                                        fullWidth label="Confirmation" variant="outlined" />
                                </Grid>
                            </Grid>
                            <Box>
                                <Button variant='contained'
                                    onClick={() => handleSignUpWithEmail("ansarollmg+12@gmail.com", "password")}
                                >
                                    S'inscrire
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export default SignUp