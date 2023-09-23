'use client'
import Image from "next/image"
import s1 from '../public/slider/1.jpg'
import s2 from '../public/slider/2.jpg'
import s3 from '../public/slider/3.jpg'
import { useEffect, useState } from "react"

const Slider = () => {
    const slide = [
        {
            image: s1,
            captionColor: "text-[#a6ef53]",
            captionText: "Tennis Shoes",
        },
        {
            image: s2,
            captionColor: "text-[#ff2556]",
            captionText: "Street Style",
        },
        {
            image: s3,
            captionColor: "text-[#f54d24]",
            captionText: "FootBall Shoes",
        }
    ]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % slide.length);
        }, 5000)
    }, [index]);

    return (
        <div className="md:h-[90vh] h-full">
            <div className="w-full md:h-[90vh] h-full relative slide">
                <Image src={slide[index].image} alt={slide[index].image} className={`w-full h-full object-cover object-center`} />
                <div className="absolute md:top-28 sm:top-10 top-5 lg:left-32 md:left-24 sm:left-16 left-0 sm:mx-0 mx-5">
                    <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl text-white font-bold uppercase sm:mb-3 mb-1">The <span className={slide[index].captionColor}>shoe</span> that adapts to you</h2>
                    <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-3xl text-white font-extrabold uppercase opacity-[0.10]">{slide[index].captionText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Slider
