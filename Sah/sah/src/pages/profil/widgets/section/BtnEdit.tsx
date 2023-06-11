import { Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';

const BtnEdit = ({onClick}:Props) => {
    
    const location = useLocation();
    const onEdit = location.pathname.includes("myprofil");

    return (
        <>
            {
                onEdit &&
                <Box display="flex" justifyContent="flex-end" pt={1}>
                    <IconButton
                        onClick={() => onClick?.(true)}
                    >
                        <Edit />
                    </IconButton>
                </Box>
            }
        </>
    )
}

export default BtnEdit

type Props = {
    onClick?: (open: boolean) => void
}