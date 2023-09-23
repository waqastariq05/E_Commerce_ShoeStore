'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Header from "./Header";

const NewArrival = ({ products }) => {
    const handleNext = () => {
        let proBox = document.querySelector(".proBox")
        let width = 280;
        proBox.scrollLeft = proBox.scrollLeft + width;
    }

    const handlePrev = () => {
        let proBox = document.querySelector(".proBox")
        let width = 280;
        proBox.scrollLeft = proBox.scrollLeft - width;
    }

    return (
        <div className="sm:mt-32 mt-24">
            <Header title="TRENDING NOW" text="OVER 2000+ ITEMS AVAILABLE IN STORE" />
            <div className="flex md:flex-nowrap flex-wrap justify-start items-center md:h-[60vh] h-full md:px-10 sm:px-5 px-0">
                <div className=" bg-[#19c868] flex flex-col justify-center md:mx-0 mx-auto items-center h-full md:py-0 py-10 px-5 md:w-[280px] w-full">
                    <h2 className="lg:text-4xl md:text-2xl sm:text-4xl text-4xl font-bold text-white mb-5">New Arrivals</h2>
                    <div className="flex justify-center gap-2 items-center">
                        <button onClick={handlePrev}><FontAwesomeIcon icon={faChevronLeft} className="text-white border-2 border-white lg:py-3 md:py-2 py-3 lg:px-4 md:px-3 px-4 hover:bg-white hover:text-[#19c868] transition-all duration-300" /></button>
                        <button onClick={handleNext}><FontAwesomeIcon icon={faChevronRight} className="text-white border-2 border-white lg:py-3 md:py-2 py-3 lg:px-4 md:px-3 px-4 hover:bg-white hover:text-[#19c868] transition-all duration-300" /></button>
                    </div>
                </div>
                <div className="flex justify-start items-center proBox overflow-x-hidden scroll-smooth md:w-[75%] w-full">
                    {products.data && products.data.slice(0, 6).reverse().map((product, i) => {
                        return (
                            <div key={i}>
                                <Card product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewArrival
