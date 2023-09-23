import Image from "next/image"
import Header from "./Header"

// Images
import I1 from '../public/social/1.jpg'
import I2 from '../public/social/2.jpg'
import I3 from '../public/social/3.jpg'
import I4 from '../public/social/4.jpg'
import I5 from '../public/social/5.jpg'
import I6 from '../public/social/6.jpg'
import I7 from '../public/social/7.jpg'
import I8 from '../public/social/8.jpg'
import I9 from '../public/social/9.jpg'
import I10 from '../public/social/10.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const SocialPost = () => {
    const social = [
        { img: I1, },
        { img: I2, },
        { img: I3, },
        { img: I4, },
        { img: I5, },
        { img: I6, },
        { img: I7, },
        { img: I8, },
        { img: I9, },
        { img: I10, }
    ]
    return (
        <div className="sm:mt-32 mt-14 mb-10">
            <Header title="INSTA GALLERY" text="Follow us on Insta" />
            <div className="flex flex-wrap justify-center items-center sm:gap-3 gap-5">
                {social.map((s, i) => {
                    return (
                        <div className="sm:w-[255px] w-full relative before:absolute before:w-full before:h-full group hover:before:bg-black/40 before:z-10 transition-all duration-700 overflow-hidden cursor-pointer" key={i}>
                            <div className="absolute w-full h-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-75 flex justify-center items-center text-5xl text-white"><FontAwesomeIcon icon={faInstagram} /></div>
                            <Image src={s.img} alt="instaPost1" className="w-full rounded-sm group-hover:scale-125 transition-all duration-700" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SocialPost
