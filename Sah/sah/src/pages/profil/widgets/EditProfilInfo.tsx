import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../features/counter/counterSlice'

const EditProfilInfo = () => {

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <Grid>
        <TextField
          type="number"
          value={count}
          inputProps={{
            min: 0,
            style: { textAlign: 'center' }
          }}
        >

        </TextField>
        <Box
          p={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <Button variant="contained"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
          <Button variant="contained"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </Box>
      </Grid>
    </>
  )
}

export default EditProfilInfo

