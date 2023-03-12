import { Box, Typography } from '@mui/material'

const SectionItem = ({title , children}:PropsSectionItem) => {
    return (
        <Box sx={{ border: "1px solid #010101", borderRadius: "10px", p: 4, m: 1 }}>
            <Typography variant="h5" mb={1}>
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default SectionItem

type PropsSectionItem = {
    title: string,
    children: React.ReactNode
}