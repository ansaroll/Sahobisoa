import { Grid, IconButton, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { TUser } from '../../../../models/User'
import { Facebook, GitHub, Instagram, LinkedIn, Portrait, Twitter } from '@mui/icons-material'

const EditSomeLinkSection = () => {

    const user = useAppSelector((state) => state.user?.value)
    const dispatch = useAppDispatch()

    const [userFormData, setUserFormData] = React.useState<TUser>(user)

    return (
        <>
            <Grid container spacing={2} pt={2}>
                <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
                    <TextField
                        type="text"
                        label="Github"
                        fullWidth
                        value={userFormData?.github}
                        inputProps={{
                            min: 0,
                            style: { textAlign: 'center' }
                        }}
                        onChange={(e) => setUserFormData({ ...user, github: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <GitHub />
								</IconButton>
							</>
						}}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        label="Linkedin"
                        value={userFormData?.linkedin}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={(e) => setUserFormData({ ...user, linkedin: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <LinkedIn />
								</IconButton>
							</>
						}}
                    />
                </Grid>
                <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
                    <TextField
                        type="text"
                        fullWidth
                        label="Facebook"
                        value={userFormData?.facebook}
                        inputProps={{
                            min: 0,
                            style: { textAlign: 'center' }
                        }}
                        onChange={(e) => setUserFormData({ ...user, facebook: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <Facebook />
								</IconButton>
							</>
						}}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        label="Site web"
                        value={userFormData?.website}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={(e) => setUserFormData({ ...user, website: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <Portrait />
								</IconButton>
							</>
						}}
                    />
                </Grid>
                <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
                    <TextField
                        type="text"
                        fullWidth
                        label="Instagram"
                        value={userFormData?.instagram}
                        inputProps={{
                            min: 0,
                            style: { textAlign: 'center' }
                        }}
                        onChange={(e) => setUserFormData({ ...user, instagram: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <Instagram />
								</IconButton>
							</>
						}}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        label="Twitter"
                        value={userFormData?.twitter}
                        inputProps={{ style: { textAlign: 'center' } }}
                        onChange={(e) => setUserFormData({ ...user, twitter: e.target.value })}
                        InputProps={{
							endAdornment: <>
								<IconButton disableRipple>                                    
                                    <Twitter />
								</IconButton>
							</>
						}}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default EditSomeLinkSection