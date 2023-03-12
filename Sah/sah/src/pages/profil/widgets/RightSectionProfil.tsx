import { LocationCity } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SectionItem from './SectionItem'
import SomeLinkSection from './section/SomeLinkSection'

const RightSectionProfil = () => {
    return (
        <>
            <SectionItem title=" Localisation et déplacement">
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <LocationCity color="primary" />
                    <Typography>
                        Antananarivo, Madagascar
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <LocationCity color="primary" />
                    <Typography>
                        Antananarivo, Madagascar
                    </Typography>
                </Box>
                {/* <Box display="flex" justifyContent="flex-end" pt={2}>
                    <Button variant="contained" >
                        Modifier
                    </Button>
                </Box> */}
            </SectionItem>

            <SomeLinkSection/>
        </>
    )
}

export default RightSectionProfil