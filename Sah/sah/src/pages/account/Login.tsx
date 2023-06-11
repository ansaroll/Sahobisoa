import { Box, Button, Chip, Container, Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Verified } from '@mui/icons-material'
import useLogin from '../../utils/hooks/useLogin'
const Login = () => {

    const { signIn } = useLogin()
    const [user, setUser] = React.useState<TUser | undefined>(undefined)

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sm={8} md={7} >
                    <Box
                        sx={{
                            my: 6,
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
                            <Typography variant="h4">Connexion</Typography>

                            <Box>
                                <TextField fullWidth label="Email" variant="outlined" />
                            </Box>
                            <Box>
                                <TextField fullWidth label="Mot de passe" variant="outlined" />
                            </Box>
                            <Box alignSelf="left">
                                <Button variant='contained' fullWidth>
                                    Se connecter
                                </Button>
                            </Box>
                            <Box>
                                <Divider component="div" textAlign='left'>
                                    <Chip label="Ou" />
                                </Divider>
                            </Box>
                            <Box alignSelf="left">
                                <Button variant='contained' onClick={signIn} fullWidth>
                                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" /> &nbsp; Se connecter avec Google
                                </Button>
                            </Box>

                            {/* <Box alignSelf="left">
                                <Button variant='contained' onClick={handleSignWithGithub} fullWidth>
                                    <img src="https://img.icons8.com/color/24/000000/github.png" /> &nbsp; Se connecter avec Github
                                </Button>
                            </Box> */}

                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Dialog
                open={Boolean(user?.displayName)}
                // open={true}
                onClose={() => setUser(undefined)}
            >
                <DialogTitle>
                    Connexion
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box display="flex" width='100%' justifyContent="center">
                            <Verified color='success'/>
                        </Box>
                        <Typography textAlign='center' pt={2}>
                            Hello {user?.displayName}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default Login

type TUser = {
    displayName: string
}