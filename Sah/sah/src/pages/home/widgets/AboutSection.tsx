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
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Trouver des clients',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Trouver des partenaires',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Trouver des collaborateurs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Trouver des employeurs',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
    {
        title: 'Trouver des employés',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        image: 'https://picsum.photos/200/300',
    },
]