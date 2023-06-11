import { Box } from '@mui/material'
import React from 'react'

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