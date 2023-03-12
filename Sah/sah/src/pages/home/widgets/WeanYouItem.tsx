import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const WeandYouItem = (props: PropsWeandYouItem) => {
    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="text.primary">
                    {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {props.description}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default WeandYouItem

type PropsWeandYouItem = {
    title: string,
    description: string
    image: string
}