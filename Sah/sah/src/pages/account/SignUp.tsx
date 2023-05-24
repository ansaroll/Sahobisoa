import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, Container, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../utils/context';
import { useForm, SubmitHandler } from "react-hook-form";
import useSignUp from './hooks/useSignUp';
import { TUser } from '../../models/User';

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

    const { handleSignUpWithEmailMutation, isLoading } = useSignUp()
    const { register, handleSubmit, watch, formState: { errors }, } = useForm<TSignUpForm>();
    const onSubmit: SubmitHandler<TSignUpForm> = data => { console.log({ data }); handleSignUpWithEmailMutation.mutateAsync(data) }

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
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                        <Box display="flex" justifyContent="center" flexDirection="column"
                            component="form"
                            noValidate
                            px={5}
                            gap={2}
                            autoComplete="off">
                            <Typography variant="h4">Inscription</Typography>

                            <Box>
                                <TextField fullWidth
                                    error={Boolean(errors.lastName)}
                                    label={"Nom" + (errors.lastName ? " (requis)" : "")}
                                    variant="outlined" {...register("lastName", { required: true, maxLength: 20 })} />
                            </Box>
                            <Box>
                                <TextField fullWidth
                                    error={Boolean(errors.firstName)}
                                    label={"Prenom" + (errors.firstName ? " (requis)" : "")}
                                    variant="outlined" {...register("firstName")} />
                            </Box>
                            <Box>
                                <TextField fullWidth
                                    error={Boolean(errors.email)}
                                    label="Email"
                                    variant="outlined" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig })} />
                            </Box>
                            <Box>
                                <TextField fullWidth label="Lien LinkedIn" variant="outlined"  {...register("linkedIn")} />
                            </Box>
                            <Box>
                                <TextField fullWidth 
                                error={Boolean(errors.jobTitle)}
                                label={"Titre du profil" + (errors.jobTitle ? " (requis)" : "")}
                                variant="outlined"  {...register("jobTitle", { required: true, minLength: 2 })} />
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type={showPassword1 ? 'text' : 'password'}
                                        autoComplete='new-password'
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.type === "required" ? "Mot de passe requis"
                                            : errors.password?.type === "minLength" ? "Minimum 8 caractères" : ""}
                                        label="Mot de passe"
                                        {...register("password", { required: true, minLength: 8 })}
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
                                        fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete='new-password'
                                        error={Boolean(errors.passwordConfirm)}
                                        helperText={errors.passwordConfirm?.type === "validate" ? "Les mots de passe ne correspondent pas"
                                            : errors.passwordConfirm?.type === "required" ? "Confirmation requise"
                                                : errors.passwordConfirm?.type === "minLength" ? "Minimum 8 caractères" : ""}
                                        {...register("passwordConfirm", { required: true, minLength: 8, validate: (value) => value === watch("password") })}
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
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isLoading}
                                >
                                    {
                                        isLoading ? <CircularProgress size={24} /> : "S'inscrire"
                                    }
                                </Button>
                            </Box>
                        </Box>
                        {/* </form> */}
                    </Box>
                </Grid>
            </Grid>

        </Container>
    )
}

export type TSignUpForm = TUser & { password: string, passwordConfirm: string }
export default SignUp