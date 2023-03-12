import { LocationCity } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const RightSectionProfil = () => {
    return (
        <>
            <Box sx={{ border: "1px solid #010101", borderRadius: "10px", p: 4, m: 1 }}>
                <Typography variant="h5">
                    Localisation et déplacement
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <LocationCity color="info" />
                    <Typography>
                        Antananarivo, Madagascar
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <LocationCity color="info" />
                    <Typography>
                        Antananarivo, Madagascar
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end" pt={2}>
                    <Button variant="contained" >
                        Modifier
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default RightSectionProfil