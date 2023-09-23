import BannerHeader from "@/components/BannerHeader"
import Header from "@/components/Header"
import { faFacebookF, faInstagram, faPinterestP, faTwitter, faVimeoV } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const page = () => {
    return (
        <div>
            <BannerHeader title="Contact us" />
            <div className="container mx-auto md:px-10 px-5">
                <div className="w-full h-[70vh] bg-gray-400 rounded-md overflow-hidden relative mt-20">
                    <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4);" }}></iframe>
                </div>
                <Header title="CONTACT INFORMATION" text="GET IN TOUCH" />
                <div className="flex md:flex-row flex-col justify-between gap-14 mt-14">
                    <div className="w-full flex flex-col">
                        <div className="relative mb-4">
                            <input type="text" name="name" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Name" />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" name="email" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Email" />
                        </div>
                        <div className="relative mb-5">
                            <textarea name="message" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Your Message"></textarea>
                        </div>
                        <div className="lg:w-[50%] sm:w-[70%] w-[100%]">
                            <button className="btn">Submit now</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex items-start justify-start gap-3">
                            <h2 className="text-black font-semibold text-base flex items-center gap-3"><FontAwesomeIcon icon={faLocationDot} className="text-[var(--text-green)]" />Address:</h2>
                            <p className="text-sm text-black font-medium">123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</p>
                        </div>
                        <div className="flex justify-start gap-3">
                            <h2 className="text-black font-semibold text-base flex items-center gap-3"><FontAwesomeIcon icon={faEnvelope} className="text-[var(--text-green)]" />Email:</h2>
                            <p className="text-sm text-black font-medium">support@domain.com</p>
                        </div>
                        <div className="flex justify-start gap-3">
                            <h2 className="text-black font-semibold text-base flex items-center gap-3"><FontAwesomeIcon icon={faPhone} className="text-[var(--text-green)]" />Call Us:</h2>
                            <p className="text-sm text-black font-medium">0123-456-7890</p>
                        </div>
                        <div className="flex justify-start gap-3">
                            <h2 className="text-black font-semibold text-base flex items-center gap-3"><FontAwesomeIcon icon={faStopwatch} className="text-[var(--text-green)]" />Opening time:</h2>
                            <p className="text-sm text-black font-medium">11am to 7pm</p>
                        </div>
                        <div className="flex sm:justify-start justify-center items-center gap-3 sm:mt-10 mt-5">
                            <FontAwesomeIcon icon={faFacebookF} className="py-3 px-4 text-black text-base rounded-sm bg-[var(--text-green)] hover:bg-[#0db22a] transition-all duration-300 cursor-pointer" />
                            <FontAwesomeIcon icon={faPinterestP} className="py-3 px-[14px] text-black text-base rounded-sm bg-[var(--text-green)] hover:bg-[#0db22a] transition-all duration-300 cursor-pointer" />
                            <FontAwesomeIcon icon={faInstagram} className="py-3 px-[13px] text-black text-base rounded-sm bg-[var(--text-green)] hover:bg-[#0db22a] transition-all duration-300 cursor-pointer" />
                            <FontAwesomeIcon icon={faTwitter} className="p-3 text-black text-base rounded-sm bg-[var(--text-green)] hover:bg-[#0db22a] transition-all duration-300 cursor-pointer" />
                            <FontAwesomeIcon icon={faVimeoV} className="py-3 px-[13px] text-black text-base rounded-sm bg-[var(--text-green)] hover:bg-[#0db22a] transition-all duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
