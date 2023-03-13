import { Work } from '@mui/icons-material'
import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import IconAndText from './IconAndText'

const ScreenMessage = ({children}:Props) => {
    return (
        <>
            <Box sx={{ width: '100%', height: '80vh' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                    {children}
            </Box>
        </>
    )
}

export default ScreenMessage

type Props = {
    children?: React.ReactNode
}