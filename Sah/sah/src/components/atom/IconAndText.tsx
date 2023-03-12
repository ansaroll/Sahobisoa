import { SentimentDissatisfied } from '@mui/icons-material'
import { Link, Typography } from '@mui/material'
import React from 'react'

const IconAndText = ({ icon = <SentimentDissatisfied color="primary" />, name = "Lorem ipsum", variant = "h5", href }: PropsIconAndText) => {
    return (
        <>
            {
                !href &&
                <Typography variant={variant} component="div" display="flex" alignItems="center" gap={1}>
                    {icon} {name}
                </Typography>
            }
            {
                href &&
                <Link href={href} target="_blank" className='text-no-underline' title={href}>
                    <Typography variant={variant} component="div" display="flex" alignItems="center" gap={1}>
                        {icon} {name}
                    </Typography>
                </Link>
            }
        </>
    )
}

export default IconAndText

type PropsIconAndText = {
    icon?: React.ReactNode,
    name?: string,
    variant?: 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | undefined,
    href?: string
}