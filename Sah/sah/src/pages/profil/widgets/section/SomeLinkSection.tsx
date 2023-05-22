import React, { useState } from 'react'
import SectionItem from '../SectionItem'
import { Box, Button, Typography } from '@mui/material'
import IconAndText from '../../../../components/atom/IconAndText'
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'
import EditSomeLinkSection from './EditSomeLinkSection'
import GenericDialog from '../../../../components/dialog/GenericDialog'
import { useLocation } from 'react-router-dom'
import BtnEdit from './BtnEdit'

const SomeLinkSection = () => {
    const [openEditProfil, setOpenEditProfil] = useState(false);
    const location = useLocation();
    const onEdit = location.pathname.includes("myprofil");

    return (
        <>
            <SectionItem title='Liens Extra'>
                {/* Logo et lien Github */}
                <IconAndText
                    icon={<GitHub />}
                    name="Github"
                    variant='h6'
                    href='https://github.com/ansaroll'
                />
                {/* Logo et lien LinkedIn */}
                <IconAndText
                    icon={<LinkedIn color='info' />}
                    name="LinkedIn"
                    variant='h6'
                    href='https://www.linkedin.com/in/sahobisoa-rolland-andrianiaina-317b77181/'
                />
                {/* Logo et lien Facebook */}
                <IconAndText
                    icon={<Facebook color='info' />}
                    name="Facebook"
                    variant='h6'
                    href='https://www.facebook.com/ansaroll.sa/'
                />

                <BtnEdit onClick={setOpenEditProfil} />

            </SectionItem>

            <GenericDialog
                open={openEditProfil}
                title="Modifier vos liens extra"
                confirmText={
                    <Button variant="contained">
                        Modifier
                    </Button>
                }
                cancelText="Annuler"
                maxWidth="md"
                onClose={() => setOpenEditProfil(false)}
            >
                <EditSomeLinkSection />
            </GenericDialog>
        </>
    )
}

export default SomeLinkSection