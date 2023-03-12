import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomSwipper from '../../../components/atom/CustomSwipper'
import { SwiperSlide } from 'swiper/react'
import WeandYouItem from './WeanYouItem'

const AboutSection = () => {
    return (
        <Box>
            <Typography variant='h2' textAlign="center">
                My Carear et vous c'est quoi ?
            </Typography>

            <Grid container py={6} spacing={2}>
                {
                    aboutsWeAnYous.map((about, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4}>
                                <WeandYouItem
                                    title={about.title}
                                    description={about.description}
                                    image={about.image}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default AboutSection

const aboutsWeAnYous = [
    {
        title: 'Trouver des projets',
        description: 'Les projets sont des missions qui peuvent être de courte ou longue durée.',
        image: './assets/profil/projet.jpg',
    },
    {
        title: 'Trouver des clients',
        description: 'Les clients sont des personnes qui ont besoin de vos services.',
        image: './assets/profil/clients.jpg',
    },
    {
        title: 'Trouver des partenaires',
        description: 'Vos partenaires sont des personnes qui peuvent vous aider à réaliser vos projets.',
        image: './assets/profil/partenaires.jpg',
    },
    {
        title: 'Trouver des collaborateurs',
        description: 'Les collaborateurs sont des personnes qui peuvent vous aider à réaliser vos projets.',
        image: './assets/profil/collaborateurs.jpg',
    },
    {
        title: 'Trouver des employeurs',
        description: 'Les employeurs sont des personnes qui peuvent vous embaucher pour réaliser leurs projets.',
        image: './assets/profil/employeur.jpg',
    },
    {
        title: 'Trouver des employés',
        description: 'Les employés sont des personnes qui peuvent travailler pour vous.',
        image: './assets/profil/employe.jpg',
    },
]