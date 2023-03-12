import { LocationCity } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import SectionItem from './SectionItem'
import SkilItem from './SkilItem'
import Experiences from './section/Experiences'

const LeftSectionProfil = () => {
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
                <Typography>
                    {/* Description de la personne en trois phrases */}

                    - Je suis un developpeur web fullstack avec plus
                    de 3 ans d'experience dans le developpement web.
                    J'ai travaillé dans plusieurs entreprises et
                    j'ai pu acquérir des compétences dans plusieurs domaines.
                    Je suis disponible pour travailler dans votre entreprise ou
                    pour des missions freelance.
                </Typography>
            </SectionItem >

            <Experiences />
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