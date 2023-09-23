import React from 'react'
import Header from './Header'
import Image from 'next/image'

import b1 from '../public/blog/1.jpg'
import b2 from '../public/blog/2.jpg'

const BlogSection = () => {
    return (
        <div className="sm:mt-40 mt-32">
            <Header title="BLOG POST" text="LATEST BLOG POST" />
            <div className='flex md:flex-nowrap flex-wrap justify-between items-center md:gap-5 gap-10'>
                <div className='group cursor-pointer'>
                    <Image src={b1} alt='blogPost1' className='w-full' />
                    <div className='py-5 sm:px-5 px-2 text-center'>
                        <h4 className='sm:text-lg text-base uppercase font-semibold text-black/50 mb-1'>News</h4>
                        <h2 className='text-black sm:text-xl text-lg font-semibold mb-7 group-hover:text-green-600 transition-all duration-300'>New shoes in the collection</h2>
                        <div className='relative'>
                            <span className='sm:w-16 w-12 h-1 bg-[var(--text-green)] absolute left-[50%] -translate-x-[50%] -top-4'></span>
                        </div>
                        <p className='text-sm text-black font-medium sm:px-5 px-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, fugiat ullam ipsam molestiae reprehenderit tempora.</p>
                    </div>
                </div>
                <div className='group cursor-pointer'>
                    <Image src={b2} alt='blogPost1' className='w-full' />
                    <div className='py-5 sm:px-5 px-2 text-center'>
                        <h4 className='sm:text-lg text-base uppercase font-semibold text-black/50 mb-1'>News</h4>
                        <h2 className='text-black sm:text-xl text-lg font-semibold mb-7 group-hover:text-green-600 transition-all duration-300'>New shoes in the collection</h2>
                        <div className='relative'>
                            <span className='sm:w-16 w-12 h-1 bg-[var(--text-green)] absolute left-[50%] -translate-x-[50%] -top-4'></span>
                        </div>
                        <p className='text-sm text-black font-medium sm:px-5 px-0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, fugiat ullam ipsam molestiae reprehenderit tempora.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection
