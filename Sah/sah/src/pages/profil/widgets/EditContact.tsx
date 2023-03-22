import { Grid, TextField } from '@mui/material'
import React from 'react'
import { TUser } from '../../../models/User'
import { useAppSelector } from '../../../app/hooks'

const EditContact = () => {

    const user = useAppSelector((state) => state.user?.value)
    const [userFormData, setUserFormData] = React.useState<TUser>(user)

    return (
        <>
            <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
                <TextField
                    type="text"
                    fullWidth
                    value={userFormData?.email}
                    inputProps={{
                        style: { textAlign: 'center' }
                    }}
                    onChange={(e) => setUserFormData({ ...user, email: e.target.value })}
                />
                <TextField
                    type="text"
                    fullWidth
                    value={userFormData?.phone}
                    inputProps={{
                        style: { textAlign: 'center' }
                    }}
                    onChange={(e) => setUserFormData({ ...user, lastName: e.target.value })}
                />
            </Grid>
        </>
    )
}

export default EditContact