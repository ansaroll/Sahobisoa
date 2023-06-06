import { Grid, TextField } from '@mui/material'
import React from 'react'
import { TUser } from '../../../models/User'
import { useAppSelector } from '../../../app/hooks'

const EditDescription = () => {

    const user = useAppSelector((state) => state.user?.value)
    const [userFormData, setUserFormData] = React.useState<TUser>(user)

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
                    <TextField
                        type="text"
                        fullWidth
                        multiline
                        value={userFormData?.bio}
                        inputProps={{
                            min: 0,
                            style: { textAlign: 'center' }
                        }}
                        onChange={(e) => setUserFormData({ ...user, bio: e.target.value })}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default EditDescription