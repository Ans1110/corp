import React from 'react'
import Hero from '@/app/components/Hero'
import homeImage from '@public/home.jpeg'
import { homeMetadata } from '@/app/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = homeMetadata

const page = () => {
  return (
    <Hero title="Home" image={homeImage} />
  )
}

export default page