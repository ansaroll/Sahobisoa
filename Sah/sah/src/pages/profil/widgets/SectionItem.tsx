import { Box, Typography } from '@mui/material'

const SectionItem = ({ title, children }: PropsSectionItem) => {
    return (
        <Box sx={{ border: "1px solid #010101", borderRadius: "10px", p: 4, m: 2 }}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Box ml={1.5} mt={3}>
                {children}
            </Box>
        </Box>
    )
}

export default SectionItem

type PropsSectionItem = {
    title: string,
    children: React.ReactNode
}