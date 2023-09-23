'use client'
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Oswald } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPhoneVolume,
    faSearch,
    faUser,
    faHeart,
    faCartShopping,
    faBars,
    faClose,
} from "@fortawesome/free-solid-svg-icons";
import logo from '../public/logo.png'
import Cart from "./Cart";
import { useState } from "react";
import { useSelector } from 'react-redux'

const oswald = Oswald({
    subsets: ['latin'],
})

const Navbar = () => {
    const pathname = usePathname()
    const navLink = [
        {
            name: "home",
            link: "/"
        },
        {
            name: "about us",
            link: "/about"
        },
        {
            name: "shop",
            link: "/shop"
        },
        {
            name: "contact us",
            link: "/contact"
        },
    ]

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        nav ? setNav(false) : setNav(true);
    }

    const cart = useSelector((state) => state.cart)

    return (
        <div className="container mx-auto px-5">
            {/* ============== Topbar ================ */}
            <div className="flex justify-between items-center py-3">
                <div className="hidden md:flex items-center justify-start cursor-pointer group">
                    <FontAwesomeIcon icon={faPhoneVolume} className="bg-[var(--text-green)] p-4 text-base text-black rounded-full mr-3 group-hover:animate-ping" />
                    <span className={`text-black text-base font-semibold ${oswald.className}`}>CALL US : <span className="group-hover:text-green-600 transition-all duration-300">0123-456-7890</span></span>
                </div>
                <div className="md:hidden block text-xl mr-5" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div>
                    <div className="sm:w-44 w-36">
                        <Image src={logo} alt="logo" className="w-full" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                    </div>
                </div>
                <div className="flex items-center justify-end cursor-pointer">
                    <div className="hidden md:block bg-black/5 py-3 px-4 mx-2 rounded-full hover:bg-black/20 transition-all duration-300">
                        <FontAwesomeIcon icon={faSearch} className="text-base text-black" />
                    </div>
                    <div className="hidden md:block bg-black/5 py-3 px-4 mx-2 rounded-full hover:bg-black/20 transition-all duration-300">
                        <FontAwesomeIcon icon={faUser} className="text-base text-black" />
                    </div>
                    <div className="hidden md:block relative bg-black/5 py-3 px-4 mx-2 rounded-full hover:bg-black/20 transition-all duration-300">
                        <FontAwesomeIcon icon={faHeart} className="text-base text-black" />
                        <span className="absolute -top-1 -right-1 bg-[var(--text-green)] rounded-full px-[5px] py-[2px] text-xs font-semibold">0</span>
                    </div>
                    <div className="relative bg-black/5 py-3 px-4 mx-2 rounded-full hover:bg-black/20 transition-all duration-300" onClick={handleToggle}>
                        <FontAwesomeIcon icon={faCartShopping} className="btext-base text-black" />
                        <span className="absolute -top-1 -right-2 bg-black text-[var(--text-green)] rounded-full px-[7px] py-[2px] text-xs font-semibold">{cart.products.length}</span>
                    </div>
                </div>
            </div>

            {/* ============== Navbar ================ */}
            <nav className={`md:relative md:h-auto h-full fixed top-0 left-0 md:translate-x-0 ${nav ? "translate-x-0" : "-translate-x-[100%]"} transition-all duration-500 flex md:flex-row flex-col items-center md:justify-center md:py-2 py-0 z-20 bg-white sm:w-auto w-full`}>
                <div className="md:hidden flex items-center mb-10 w-full">
                    <h2 className="flex items-center gap-2 text-lg bg-black text-white uppercase font-semibold py-3 px-5 w-full" onClick={handleClick}><FontAwesomeIcon icon={faClose} className="text-xl" /> Menu</h2>
                    <h2 className="flex items-center gap-2 text-lg text-black uppercase font-semibold py-3 px-5 w-full"><FontAwesomeIcon icon={faUser} className="text-xl" /> Profile</h2>
                </div>
                {navLink.map((nav, index) => {
                    return (
                        <Link
                            className={`${oswald.className} text-base tracking-wide font-semibold md:p-1 py-3 md:mx-2 px-5 md:w-auto w-full md:border-b-0 border-b uppercase hover:text-black transition-all duration-300 ${nav.link === pathname ? "text-black" : "text-black/60"}`}
                            aria-label={nav.name}
                            href={nav.link}
                            key={index}>
                            {nav.name}
                        </Link>
                    )
                })}
                <div className="absolute bottom-0 py-3 flex md:hidden items-center justify-start cursor-pointer group">
                    <FontAwesomeIcon icon={faPhoneVolume} className="bg-[var(--text-green)] p-4 text-base text-black rounded-full mr-3 group-hover:animate-ping" />
                    <span className={`text-black text-base font-semibold ${oswald.className}`}>CALL US : <span className="group-hover:text-green-600 transition-all duration-300">0123-456-7890</span></span>
                </div>
            </nav>
            <Cart toggle={toggle} handleToggle={handleToggle} />
        </div >
    )
}

export default Navbar
