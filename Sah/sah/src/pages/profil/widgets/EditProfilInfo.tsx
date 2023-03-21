import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch , useAppSelector } from '../../../app/hooks'
import { updateUser, selectUser } from '../../../features/user/userReducer'

const EditProfilInfo = () => {

  const user = useAppSelector((state) => state.user?.value)
  const dispatch = useAppDispatch()

  console.log({user});
  

  return (
    <>
      <Grid>
        <TextField
          type="text"
          value={user?.lastName}
          inputProps={{
            min: 0,
            style: { textAlign: 'center' }
          }}
          onChange={(e) => dispatch(updateUser({ ...user, lastName: e.target.value }))}
        >

        </TextField>
      </Grid>
    </>
  )
}

export default EditProfilInfo

