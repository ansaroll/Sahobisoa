import { Grid, IconButton, TextField } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { TUser } from '../../../models/User'

const EditProfilInfo = () => {

  const user = useAppSelector((state) => state.user?.value)
  const dispatch = useAppDispatch()

  const [userFormData, setUserFormData] = React.useState<TUser>(user)
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
          <TextField
            type="text"
            fullWidth
            value={userFormData?.lastName}
            inputProps={{
              min: 0,
              style: { textAlign: 'center' }
            }}
            onChange={(e) => setUserFormData({ ...user, lastName: e.target.value })}
          />
          <TextField
            type="text"
            fullWidth
            value={userFormData?.firstName}
            inputProps={{ style: { textAlign: 'center' } }}
            onChange={(e) => setUserFormData({ ...user, firstName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            fullWidth
            value={userFormData?.jobTitle}
            inputProps={{ style: { textAlign: 'center' } }}
            onChange={(e) => setUserFormData({ ...user, jobTitle: e.target.value })}
            InputProps={{
              endAdornment: <>
                <IconButton disableRipple>
                  <img src="./assets/gif/avatar.gif" alt="location gif aimated" />
                </IconButton>
              </>
            }}
          />
        </Grid>
        <Grid item xs={12} display="flex" flexDirection="row" gap={2}>
          <TextField
            type="text"
            fullWidth
            label='Rue'
            value={userFormData?.street}
            inputProps={{ style: { textAlign: 'center' } }}
            onChange={(e) => setUserFormData({ ...user, street: e.target.value })}
            InputProps={{
              endAdornment: <>
                <IconButton disableRipple>
                  <img src="./assets/gif/location.gif" alt="location gif aimated" />
                </IconButton>
              </>
            }}
          />
          <TextField
            type="text"
            fullWidth
            label='Ville'
            value={userFormData?.city}
            inputProps={{ style: { textAlign: 'center' } }}
            onChange={(e) => setUserFormData({ ...user, city: e.target.value })}
            InputProps={{
              endAdornment: <>
                <IconButton disableRipple>
                  <img src="./assets/gif/location.gif" alt="location gif aimated" />
                </IconButton>
              </>
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default EditProfilInfo

