import { Box, Divider, Typography } from '@mui/material'
import SectionItem from '../SectionItem'
import { CalendarMonth, CalendarMonthOutlined, WorkOutline } from '@mui/icons-material'
import moment from 'moment'

const Experiences = () => {
    return (
        <SectionItem title='Experiences' >
            <ExperienceItem
                society='Telma Madagascar'
                titleWork='React Developer'
                startDate={moment().format("DD/MM/YYYY")}
            />

            <Box py={2}>
                <Divider variant="fullWidth" />
            </Box>


            <ExperienceItem
                society='ISA Solutions'
                titleWork='React Developer'
                startDate={moment().format("DD/MM/YYYY")}
                endDate={moment().format("DD/MM/YYYY")}
            />

        </SectionItem>
    )
}

export default Experiences

const ExperienceItem = ({ society, titleWork, startDate, other, endDate }: PropsExperienceItem) => {
    return (
        <>
            <Box>
                <Typography variant='h5' component="div" display="flex" alignItems="center" gap={1}>
                    <WorkOutline /> {society}
                </Typography>
                <Typography fontWeight={500} component="span" display="flex" alignItems="center" gap={1}>
                    {titleWork}
                    <Typography component="span" display="flex" alignItems="center" gap={1}>
                        {startDate
                            ? <><CalendarMonthOutlined /> {startDate}</>
                            : <></>}
                        {endDate
                            ? <> - {endDate}</>
                            : <> - Now</>}
                    </Typography>
                </Typography>
                {other}
            </Box>
        </>
    )
}

type PropsExperienceItem = {
    society?: string,
    titleWork?: string,
    startDate?: string,
    other?: React.ReactNode
    endDate?: string
}