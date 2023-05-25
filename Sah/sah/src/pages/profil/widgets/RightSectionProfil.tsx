import { Email, Phone } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SectionItem from './SectionItem'
import SomeLinkSection from './section/SomeLinkSection'
import GenericDialog from '../../../components/dialog/GenericDialog'
import EditContact from './EditContact'
import { useAppSelector } from '../../../app/hooks'
import BtnEdit from './section/BtnEdit'
import { useLocation } from 'react-router-dom'

const RightSectionProfil = () => {

    const location = useLocation();
    const user = useAppSelector((state) => state.user?.value)
    const onEdit = location.pathname.includes("myprofil");
    const [openEditProfil, setOpenEditProfil] = React.useState(false)

    return (
        <>
            <SectionItem title=" Localisation et déplacement">
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <Email color="primary" />
                    <Typography>
                        {user?.email}
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} py={1}>
                    <Phone color="primary" />
                    <Typography>
                        {user?.phone}
                    </Typography>
                </Box>

                <BtnEdit onClick={setOpenEditProfil} />
                
            </SectionItem>

            <SomeLinkSection />

            {/* GenericDialog */}

            <GenericDialog
                open={openEditProfil}
                title="Modifier vos contacts"
                confirmText={
                    <Button variant="contained">
                        Modifier
                    </Button>
                }
                cancelText="Annuler"
                maxWidth="md"
                onClose={() => setOpenEditProfil(false)}
            >
                <EditContact />
            </GenericDialog>
        </>
    )
}

export default RightSectionProfil