import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faHeart, faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { cartAction } from '../Redux/Slice/cartSlice'

const Product = (props) => {
    const { products, cate, filterColor, filterSize, filterPrice } = props
    const dispatch = useDispatch()

    const filterProducts = () => {
        let filterProducts = products.data;

        if (cate !== "") {
            filterProducts = filterProducts.filter(
                (pro) => pro.attributes.category.data.attributes.name === cate
            );
        }

        if (filterColor !== "") {
            filterProducts = filterProducts.filter(
                (pro) => pro.attributes.colors.data.some((color) => color.attributes.name === filterColor)
            );
        }

        if (filterSize !== 0) {
            filterProducts = filterProducts.filter(
                (pro) => pro.attributes.sizes.data.some((size) => size.attributes.sizeNo === parseInt(filterSize))
            );
        }

        if (filterPrice !== 0) {
            filterProducts = filterProducts.filter(
                (pro) => pro.attributes.price >= filterPrice
            );
        }

        return filterProducts;
    };

    const handleCart = (data, quantity, color, size) => {
        dispatch(cartAction.addToCart({ ...data, quantity, color, size }))
    }

    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-center md:mt-14 mt-5">
            {filterProducts().length === 0 ? (
                <h2 className='mt-2 ml-5 text-xl font-semibold text-black'>No Products Found...</h2>
            ) : filterProducts().map((product, i) => {
                return (
                    <div className="px-4 py-4 w-full group cursor-pointer border border-gray-300 rounded-sm" key={i}>
                        <div className="relative rounded overflow-hidden">
                            <img src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`} alt={product.attributes.name + "1"} className="object-cover object-center max-w-full h-auto  opacity-100 group-hover:opacity-0 transition-all duration-300" />
                            <img src={`http://localhost:1337${product.attributes.images.data[1].attributes.url}`} alt={product.attributes.name + "2"} className="object-cover object-center max-w-full h-auto  absolute top-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className='relative mt-5'>
                            <div className='flex items-center justify-between gap-2 mb-4'>
                                <h2 className='w-[50%] text-sm font-semibold text-black'>{product.attributes.name}</h2>
                                <div className=''>
                                    <span className={`text-xs mx-[1px] ${product.attributes.rating >= 1 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`text-xs mx-[1px] ${product.attributes.rating >= 2 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`text-xs mx-[1px] ${product.attributes.rating >= 3 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`text-xs mx-[1px] ${product.attributes.rating >= 4 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                    <span className={`text-xs mx-[1px] ${product.attributes.rating >= 5 ? "text-yellow-500" : "text-gray-300"}`}><FontAwesomeIcon icon={faStar} /></span>
                                </div>
                            </div>
                            <p className='text-base text-black font-bold'>${product.attributes.price.toString().includes(".") ? product.attributes.price : product.attributes.price + ".00"}</p>
                            <div className='absolute right-0 -bottom-2 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center gap-2 items-center'>
                                <span className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300' onClick={() => handleCart(product, 1, product.attributes.colors.data[0].attributes.name, product.attributes.sizes.data[0].attributes.sizeNo)}><FontAwesomeIcon icon={faShoppingBag} /></span>
                                <span className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300'><FontAwesomeIcon icon={faHeart} /></span>
                                <Link href={`shop/${product.attributes.slug}`} className='bg-slate-200 rounded-sm p-2 px-3 text-sm text-black hover:bg-[var(--text-green)] transition-all duration-300'><FontAwesomeIcon icon={faEye} /></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Product
