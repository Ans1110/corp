import React from 'react'
import Hero from '@/app/components/Hero'
import reliabilityImage from '@public/reliability.jpeg'
import { reliabilityMetadata } from '@/app/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = reliabilityMetadata

const page = () => {
    return (
        <Hero title="Reliability" image={reliabilityImage} />
    )
}

export default page