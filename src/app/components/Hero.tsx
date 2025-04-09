import React from 'react'
import Image, { ImageProps } from 'next/image'

type HeroProps = {
    title: string;
    image: ImageProps['src'];
    className?: string;
}

const Hero = ({ title, image, className }: HeroProps) => {
    return (
        <div className={className}>
            <div className='absolute inset-0'>
                <Image src={image} alt="Home" className='w-full h-full object-cover -z-10' />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60'></div>
            </div>
            <div className='flex justify-center pt-48 h-screen '>
                <h1 className='text-white text-6xl font-bold z-10'>{title}</h1>
            </div>
        </div>
    )
}

export default Hero