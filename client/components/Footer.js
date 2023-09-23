import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Oswald } from "next/font/google"

const oswald = Oswald({
    subsets: ['cyrillic'],
})

import {
    faArrowRight
} from '@fortawesome/free-solid-svg-icons'

import {
    faFacebookF,
    faPinterestP,
    faInstagram,
    faTwitter,
    faVimeoV
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="bg-black mt-20">
            <div className="md:py-16 pt-16 border-b-2">
                <div className="container mx-auto md:px-10 px-5">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-5">
                        <div className="md:w-auto w-full border-b-2 md:border-b-0 md:pb-0 pb-5">
                            <h2 className={`text-white lg:text-2xl md:text-xl text-2xl font-semibold uppercase mb-5 ${oswald.className}`}>Company</h2>
                            <ul>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">About Us</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Contact</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Store Locations</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Careers</li>
                            </ul>
                        </div>
                        <div className="w-full text-center mx-auto border-b-2 md:border-b-0 md:py-0 py-5">
                            <h2 className={`text-white lg:text-2xl md:text-xl text-2xl font-semibold uppercase mb-3 ${oswald.className}`}>SIGN UP NOW & GET 10% OFF</h2>
                            <p className=" text-white lg:text-sm md:text-xs text-sm mb-8">Be the first to know about our new arrivals and exclusive offers.</p>
                            <div className="flex relative lg:mx-40 sm:mx-10 mx-5 mb-5">
                                <input type="text" className="lg:py-4 md:py-3 sm:py-4 py-3 lg:px-6 md:px-5 sm:px-6 px-4 rounded-[34px] w-full focus-visible:outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-500" placeholder="Your Email Address" />
                                <button className="absolute top-[2px] right-[5px] lg:py-3 md:py-2 sm:py-3 py-[10px] lg:px-[18px] md:px-[15px] sm:px-[18px] px-[15px] lg:text-lg text-base bg-white rounded-3xl hover:bg-[var(--text-green)] transition-all duration-300"><FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="flex justify-center items-center gap-4">
                                <a href="#" className="p-1 text-white text-lg hover:text-[var(--text-green)] transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#" className="p-1 text-white text-lg hover:text-[var(--text-green)] transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faPinterestP} /></a>
                                <a href="#" className="p-1 text-white text-lg hover:text-[var(--text-green)] transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" className="p-1 text-white text-lg hover:text-[var(--text-green)] transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="#" className="p-1 text-white text-lg hover:text-[var(--text-green)] transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faVimeoV} /></a>
                            </div>
                        </div>
                        <div className="md:text-right md:py-0 py-5 md:w-auto w-full">
                            <h2 className={`text-white lg:text-2xl md:text-xl text-2xl font-semibold uppercase mb-5 ${oswald.className}`}>help</h2>
                            <ul>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Order tracking</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">FAQ's</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Privacy Policy</li>
                                <li className="text-white cursor-pointer lg:text-base md:text-sm text-base font-medium my-2 hover:text-[var(--text-green)] transition-all duration-300">Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto md:px-10 px-5 py-10">
                <div className="flex md:flex-nowrap flex-wrap items-center justify-center md:gap-2 gap-5">
                    <div className="flex items-center gap-5">
                        <p className="text-white text-sm font-medium">Privacy Policy</p>
                        <p className="text-white text-sm font-medium">Terms & Conditions</p>
                    </div>
                    <div className="flex justify-center mx-auto">
                        <img src="//bisuth-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1657683547" alt="icons" />
                    </div>
                    <p className="text-white text-sm font-medium">©Copyright 2023 ©. All right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
