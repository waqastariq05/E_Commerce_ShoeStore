import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faStar,
    faShoppingBag,
    faHeart,
    faEye
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux'
import { cartAction } from '../Redux/Slice/cartSlice'
import Link from "next/link";

const Card = ({ product }) => {
    const dispatch = useDispatch()

    const handleCart = (data, quantity, color, size) => {
        dispatch(cartAction.addToCart({ ...data, quantity, color, size }))
    }

    return (
        <div className='group cursor-pointer border border-black/20 md:border-l-0 border-l md:border-t border-t-0 p-5 md:h-[60vh] w-[280px] overflow-hidden'>
            <div className='relative text-center overflow-hidden'>
                <img src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt={product.attributes.name + "1"} className='inline-block max-w-full h-auto opacity-100 group-hover:opacity-0 transition-all duration-300' />
                <img src={`http://localhost:1337${product.attributes.images.data[1].attributes.url}`} alt={product.attributes.name + "1"} className='max-w-full h-auto absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300' />
            </div>
            <div className='relative mt-5'>
                <div className='flex items-center justify-between gap-5 mb-4'>
                    <h2 className='text-sm font-semibold text-black'>{product.attributes.name}</h2>
                    <div className="">
                        <span className={`text-xs mx-[1px] ${product.attributes.rating >= 1 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                        <span className={`text-xs mx-[1px] ${product.attributes.rating >= 2 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                        <span className={`text-xs mx-[1px] ${product.attributes.rating >= 3 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                        <span className={`text-xs mx-[1px] ${product.attributes.rating >= 4 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                        <span className={`text-xs mx-[1px] ${product.attributes.rating >= 5 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                    </div>
                </div>
                <p className='text-base text-black font-bold'>${product.attributes.price}</p>
                <div className='absolute right-0 -bottom-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center gap-2 items-center'>
                    <span className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300' onClick={() => handleCart(product, 1, product.attributes.colors.data[0].attributes.name, product.attributes.sizes.data[0].attributes.sizeNo)}><FontAwesomeIcon icon={faShoppingBag} /></span>
                    <span className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300'><FontAwesomeIcon icon={faHeart} /></span>
                    <Link href={`shop/${product.attributes.slug}`} className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300'><FontAwesomeIcon icon={faEye} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Card
