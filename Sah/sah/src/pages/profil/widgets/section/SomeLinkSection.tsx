import React from 'react'
import SectionItem from '../SectionItem'
import { Typography } from '@mui/material'
import IconAndText from '../../../../components/atom/IconAndText'
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material'

const SomeLinkSection = () => {
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
                    icon={<Facebook color='info'/>}
                    name="Facebook"
                    variant='h6'
                    href='https://www.facebook.com/ansaroll.sa/'
                />
            </SectionItem>
        </>
    )
}

export default SomeLinkSection