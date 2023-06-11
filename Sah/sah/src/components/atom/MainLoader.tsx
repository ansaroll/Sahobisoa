import { Work } from '@mui/icons-material'
import { Box, LinearProgress } from '@mui/material'
import IconAndText from './IconAndText'
import 'animate.css';

const MainLoader = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: '80vh' }}
                display="flex" justifyContent="center" alignItems="center"
            >
                <Box>

                    <IconAndText 
                        icon={<Work  sx={{ fontSize:"80px" }}/>}
                        name="MYC"
                        variant='h1'
                    />
                    <Box px={1.5}>
                        <LinearProgress color="primary" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainLoader