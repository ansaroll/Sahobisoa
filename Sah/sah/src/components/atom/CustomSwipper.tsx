import { Box, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'

const CustomSwipper = (props:SwiperProps) => {
    return (
        <Box>
                <Swiper
                    spaceBetween={50}
                    {...props}
                >
                    {props.children}
                </Swiper>
        </Box>
    )
}

export default CustomSwipper