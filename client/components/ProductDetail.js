'use client'
import { faChevronLeft, faChevronRight, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Jost, Oswald } from 'next/font/google';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { cartAction } from '../Redux/Slice/cartSlice'
import Link from 'next/link';

const jost = Jost({
    subsets: ['latin']
})

const oswald = Oswald({
    subsets: ['latin']
})

const ProductDetail = (props) => {
    const { productBySlug } = props;
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);
    const [chooseColor, setChooseColor] = useState(productBySlug.data[0].attributes.colors.data[0].attributes.name);
    const [chooseSize, setChooseSize] = useState(productBySlug.data[0].attributes.sizes.data[0].attributes.sizeNo);

    const [imageIndex, setImageIndex] = useState(0);
    const handleNext = () => {
        setImageIndex((imageIndex + 1) % productBySlug.data[0].attributes.images.data.length);
    }

    const handlePrev = () => {
        imageIndex === 0 ? setImageIndex(productBySlug.data[0].attributes.images.data.length - 1) : setImageIndex(imageIndex - 1)
    }

    const handleCart = (data, quantity, color, size) => {
        dispatch(cartAction.addToCart({ ...data, quantity, color, size }))
    }

    return (
        <div className="overflow-hidden relative">
            {productBySlug.data.map((product, i) => {
                return (
                    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center" key={i}>
                        {/* Images */}
                        <div className='md:w-1/2 w-full group md:border-b-0 border-b-2 relative'>
                            <button onClick={handlePrev} className='absolute left-0 top-[50%] -translate-y-[50%] '><FontAwesomeIcon icon={faChevronLeft} className="sm:text-xl text-sm text-black bg-gray-300 sm:py-2 py-1 sm:px-3 px-2 rounded opacity-50 group-hover:opacity-100 transition-all duration-300" /></button>
                            <div className='w-full h-full'>
                                <img className="max-w-full h-auto" src={`http://localhost:1337${product.attributes.images.data[imageIndex].attributes.url}`} />
                            </div>
                            <button onClick={handleNext} className='absolute right-0 top-[50%] -translate-y-[50%]'><FontAwesomeIcon icon={faChevronRight} className="sm:text-xl text-sm text-black bg-gray-300 psm:y-2 py-1 sm:px-3 px-2 rounded opacity-50 group-hover:opacity-100 transition-all duration-300" /></button>
                        </div>
                        {/* Body */}
                        <div className="md:w-1/2 w-full md:pl-10 md:py-6 mt-10 md:mt-0">
                            <h2 className="text-sm font-semibold uppercase text-gray-600 tracking-wider mb-1">{product.attributes.category.data.attributes.name}</h2>
                            <div className='flex items-center justify-between mb-2'>
                                <h1 className={`text-black md:text-3xl text-2xl font-semibold ${jost.className}`}>{product.attributes.name}</h1>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-orange-500 hover:bg-gray-300 transition-all duration-300 ml-4">
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                            </div>
                            <div className="flex mb-3">
                                <div className="flex items-center">
                                    <span className={`sm:text-base text-sm sm:mx-[2px] mx-[1px] ${product.attributes.rating >= 1 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`sm:text-base text-sm sm:mx-[2px] mx-[1px] ${product.attributes.rating >= 2 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`sm:text-base text-sm sm:mx-[2px] mx-[1px] ${product.attributes.rating >= 3 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`sm:text-base text-sm sm:mx-[2px] mx-[1px] ${product.attributes.rating >= 4 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`sm:text-base text-sm sm:mx-[2px] mx-[1px] ${product.attributes.rating >= 5 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className="sm:text-base text-sm text-gray-600 font-medium ml-3">{product.attributes.rating} Reviews</span>
                                </div>
                            </div>
                            <p className={`sm:text-3xl text-2xl font-semibold text-black tracking-wider mb-5 ${oswald.className}`}>${typeof (product.attributes.price) === 'number' ? product.attributes.price + ".00" : product.attributes.price}</p>
                            <p className="leading-relaxed text-gray-600 text-sm font-medium">{product.attributes.descreption}</p>
                            <div className="flex sm:flex-row flex-col sm:gap-0 gap-5 mt-7 sm:items-center items-start pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex items-center">
                                    <span className="mr-3 text-black font-semibold text-base">Color:</span>
                                    {product.attributes.colors.data.map((color, i) => {
                                        return (
                                            <button className={`border-2 border-gray-300 rounded-full w-7 h-7 mr-[10px] p-1 outline hover:outline-black outline-2 outline-offset-1 transition-all duration-300 cursor-pointer ${chooseColor === color.attributes.name ? "outline-black" : "outline-transparent"}`} style={{ background: color.attributes.name }} onClick={() => setChooseColor(color.attributes.name)}></button>
                                        )
                                    })}
                                </div>
                                <div className="flex sm:ml-6 items-center">
                                    <span className="mr-3 text-base text-black font-semibold">Size:</span>
                                    <div className="relative">
                                        <select className="rounded border-2 appearance-none border-gray-300 py-2 focus:outline-none focus:border-[var(--text-green)] text-base pl-3 pr-10" onChange={(e) => setChooseSize(e.target.value)}>
                                            {product.attributes.sizes.data.map((size, i) => {
                                                return (
                                                    <option key={i} value={size.attributes.sizeNo}>{size.attributes.sizeNo}</option>
                                                )
                                            })}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="text-base text-black font-semibold">Quantity:</span>
                                <div className="flex items-center mt-3 gap-3">
                                    <div className='flex border py-3 rounded'>
                                        <button className='px-4 text-lg text-black font-semibold' disabled={qty === 1} onClick={() => setQty(qty - 1)}>−</button>
                                        <input type="text" value={qty} className='w-full text-center focus:outline-none' />
                                        <button className='px-4 text-lg text-black font-semibold' onClick={() => setQty(qty + 1)}>+</button>
                                    </div>
                                    <div className='w-full'>
                                        <button className="text-black text-sm py-4 font-semibold bg-gray-200 border-0 w-full focus:outline-none hover:bg-black hover:text-white uppercase transition-all duration-300 rounded" onClick={() => handleCart(product, qty, chooseColor, chooseSize)}>Add to cart</button>
                                    </div>
                                </div>
                                <Link href="\checkout" onClick={() => handleCart(product, qty, chooseColor, chooseSize)}>
                                    <button className='btn mt-2 w-full'>Buy it now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default ProductDetail
