import React from 'react'
import Hero from '@/app/components/Hero'
import aboutImage from '@public/about.jpeg'
import { aboutMetadata } from '@/app/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = aboutMetadata

const page = () => {
    return (
        <Hero title="About" image={aboutImage} />
    )
}

export default page