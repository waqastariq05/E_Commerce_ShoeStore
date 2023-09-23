'use client'
import Image from "next/image"
import { Oswald } from "next/font/google";
import sho1 from '../public/shoes/1.jpg'
import sho2 from '../public/shoes/2.jpg'
import sho3 from '../public/shoes/3.jpg'

const oswald = Oswald({
    subsets: ['latin'],
})

const GallerySection = () => {
    const galleryPost = [
        {
            img: sho1,
            text: "Men - on | Swiss Performance",
            title: "Running Shoes",
            cutPrice: "$90.00",
            price: "$65.00",
            color: "#1b7f8f"
        },
        {
            img: sho3,
            text: "Asics Gel - Resolution",
            title: "Tennis Shoes",
            cutPrice: "$150.00",
            price: "$95.00",
            color: "#eb4052"
        },
        {
            img: sho2,
            text: "Men - on | Swiss Performance",
            title: "Running Shoes",
            cutPrice: "$70.00",
            price: "$56.00",
            color: "#62a8c7"
        }
    ]
    return (
        <div className="flex md:flex-nowrap flex-wrap justify-between items-center my-20 lg:gap-20 md:gap-14 gap-20 lg:px-10 sm:px-5 px-0">
            {galleryPost.map((post) => {
                return (
                    <div className="border-2 border-black/20 border-dashed rounded-sm p-5 w-full relative group cursor-pointer hover:shadow-xl transition-all duration-300">
                        <Image src={post.img} alt="shoes1" className="lg:w-[70%] md:w-[60%] sm:w-[45%] w-[60%] absolute rotate-3 lg:-right-16 sm:-right-10 right-1 lg:-bottom-14 md:-bottom-10 sm:-bottom-16 -bottom-16" />
                        <h3 className="lg:text-sm md:text-xs text-sm font-bold text-black uppercase mb-2">{post.text}</h3>
                        <h2 className={`lg:text-2xl md:text-xl text-2xl font-semibold text-black uppercase mb-4 ${oswald.className}`}>{post.title}</h2>
                        <div className={`${oswald.className} font-bold flex items-center lg:mb-24 md:mb-16 mb-24`}>
                            <span className="lg:text-xl md:text-base text-xl font-semibold text-black/30 line-through mr-3">{post.cutPrice}</span><span className={`lg:text-3xl md:text-2xl text-3xl font-bold text-[${post.color}]`}>{post.price}</span>
                        </div>
                        <a href="" className={`text-sm text-[var(--text-green)] bg-black rounded-md px-3 py-1 uppercase font-normal tracking-wide ${oswald.className}`}>Shop Now</a>
                    </div>
                )
            })}
        </div>
    )
}

export default GallerySection
