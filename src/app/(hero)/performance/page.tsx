import React from 'react'
import Hero from '@/app/components/Hero'
import performanceImage from '@public/performance.jpeg'
import { performanceMetadata } from '@/app/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = performanceMetadata

const page = () => {
    return (
        <Hero title="Performance" image={performanceImage} />
    )
}

export default page