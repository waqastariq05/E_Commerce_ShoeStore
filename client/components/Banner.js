import React from 'react'
import banner from '../public/banner.jpg'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='bg-gradient-to-tr bg-[#21435c] lg:py-20 py-10 sm:mt-40 mt-24'>
            <div className="container mx-auto md:px-10 px-5">
                <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-0 relative">
                    <div className='w-full md:order-none order-last'>
                        <div className='md:absolute lg:-top-36 md:top-0 relative md:-bottom-0 sm:bottom-32 -bottom-28'>
                            <Image src={banner} alt='banner' className='w-full h-[100vh]' />
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='lg:text-xl md:text-lg text-base font-semibold text-white mb-2'><span className='lg:text-3xl md:text-2xl text-3xl text-[var(--text-green)] font-bold'>LUKMALL MEN</span> RUNNING SNEAKERS JOGGING</h2>
                        <h3 className='lg:text-xl md:text-lg text-base text-white font-semibold mb-2'>WORKOUT ATHLETIC FOOTWEAR</h3>
                        <h3 className='lg:text-xl md:text-lg text-base text-white font-semibold mb-8'>OUTDOOR SPORT SHOE</h3>
                        <p className='lg:text-sm md:text-xs text-sm text-white font-medium mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum massa tellus, at tempor arcu vestibulum vel. Nunc viverra augue at ante lobortis, ultrices aliquam purus bibendum. Suspendisse vitae est metus. Suspendisse varius laoreet ligula, eu dictum ligula bibendum sit amet. Duis nisl est, sagittis id massa id, pharetra vestibulum velit.</p>
                        <button className='btn'>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
