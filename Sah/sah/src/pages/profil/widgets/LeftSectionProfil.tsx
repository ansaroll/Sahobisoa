import { Edit, LocationCity } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import SectionItem from './SectionItem'
import SkilItem from './SkilItem'
import Experiences from './section/Experiences'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import GenericDialog from '../../../components/dialog/GenericDialog'
import EditDescription from './EditDescription'
import BtnEdit from './section/BtnEdit'

const LeftSectionProfil = () => {

    const location = useLocation();
    const user = useAppSelector((state) => state.user?.value)
    const onEdit = location.pathname.includes("myprofil");
    const [openEditProfil, setOpenEditProfil] = React.useState(false)

    return (
        <>
            <SectionItem title='Competences' >
                <Grid container spacing={2}>
                    {
                        [1, 2].map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <SkilItem skill='Javascript' recomandations={recomandations.slice(0, 3)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SkilItem skill='ReactJs' recomandations={recomandations} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SkilItem skill='PHP' recomandations={recomandations.slice(0, 2)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SkilItem skill='TypeScript' recomandations={recomandations.slice(2, 3)} />
                                    </Grid>

                                </>
                            )
                        })}
                </Grid>
            </SectionItem>



            <SectionItem title='Moi en quelques mots'>
                <>
                    <Typography>
                        {'- ' + user?.bio}
                    </Typography>
                    
                    <BtnEdit onClick={setOpenEditProfil} />
                </>
            </SectionItem >

            <Experiences />


            {/* GenericDialog */}

            <GenericDialog
                open={openEditProfil}
                title="Modifier votre description pour que les autres utilisateurs vous connaissent mieux"
                confirmText={
                    <Button variant="contained">
                        Modifier
                    </Button>
                }
                cancelText="Annuler"
                maxWidth="md"
                onClose={() => setOpenEditProfil(false)}
            >
                <EditDescription />
            </GenericDialog>
        </>
    )
}

export default LeftSectionProfil

const recomandations = [
    {
        name: 'Tahiana',
        image: './assets/profil/sahprofil.png'
    },
    {
        name: 'Rolland',
        image: './assets/profil/ansaroll.png'
    },
    {
        name: 'Sahobisoa',
        image: './assets/profil/sahprdofil.png'
    },
    {
        name: 'Eric Roger',
        image: './assets/profil/sahprofil.png'
    },
    {
        name: 'Rakoto',
        image: './assets/profil/ansaroll.png'
    }
]