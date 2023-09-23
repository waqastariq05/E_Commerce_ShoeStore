'use client'

import { usePathname } from "next/navigation"

const BannerHeader = (props) => {
    const pathname = usePathname();
    return (
        <div className="banner sm:h-[65vh] h-full sm:py-0 py-10 flex flex-col justify-center items-center">
            <h2 className="text-white sm:text-5xl text-4xl text font-bold capitalize mb-5">{props.title}</h2>
            <div className="flex gap-3 items-center">
                <span className="text-base capitalize font-medium text-white">home</span>
                <span className="text-base capitalize font-medium text-white">&gt;</span>
                <span className="text-base capitalize font-medium text-white">{pathname.includes("_") ? pathname.replace("_", " ").split('/shop/') : pathname.split('/')}</span>
            </div>
        </div>
    )
}

export default BannerHeader
