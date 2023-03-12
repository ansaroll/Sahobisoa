import { Avatar, AvatarGroup, Box, Tooltip, Typography } from '@mui/material'

const SkilItem = ({ skill, recomandations }: PropsSkill) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" px={2}>
            <Typography>
                {skill}
            </Typography>
            <AvatarGroup max={4}
                sx={{
                    "& .MuiAvatar-root": {
                        width: "24px",
                        height: "24px"
                    }
                }}
            >
                {recomandations?.map((item, index) => {
                    return (
                        <Tooltip title={item.name} arrow placement="top">
                            <Avatar alt={item.name} src={item.image} />
                        </Tooltip>
                    )
                })
                }
            </AvatarGroup>
        </Box>
    )
}

export default SkilItem

type PropsSkill = {
    skill?: string,
    recomandations?: Array<{
        name: string,
        image: string
    }>
}