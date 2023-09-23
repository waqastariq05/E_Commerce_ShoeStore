import { faClose, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../Redux/Slice/cartSlice'
import Link from 'next/link'

const Cart = (props) => {
    const { toggle, handleToggle } = props
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(cartAction.removeFromCart(id))
    }

    return (
        <div className={`fixed right-0 top-0 ${toggle ? "translate-x-[0%] visible opacity-100" : "translate-x-[100%] invisible opacity-0"} bg-white shadow-lg z-30 h-full lg:w-[30%] md:w-[50%] sm:w-[60%] w-full transition-all duration-500`}>
            <div className='flex justify-center items-center border-b border-gray-300'>
                <div className='border-r border-gray-300 py-3 px-4 lg:text-lg md:text-base sm:text-lg text-base cursor-pointer' onClick={handleToggle}><FontAwesomeIcon icon={faClose} /></div>
                <div className='w-full text-center py-2'><h2 className='lg:text-lg md:text-base sm:text-lg text-base  font-semibold text-black'>Shopping Cart</h2></div>
                <div className='border-l border-gray-300 py-2 px-4 lg:text-lg md:text-base sm:text-lg text-base '>{cartItems.products.length}</div>
            </div>
            <div>
                {cartItems.products.length === 0 ? (
                    <div className='flex justify-center items-center flex-col md:h-[93vh] h-[70vh]'>
                        <p className='mb-5 sm:px-0 px-5 md:text-xl text-lg text-black font-semibold capitalize'>Your shopping bag is empty</p>
                        <button className='btn'>go to shop</button>
                    </div>
                ) : (
                    <div className='bg-gray-50 h-[75vh] overflow-y-auto scroll-smooth px-4'>
                        {cartItems.products.map((item) => {
                            return (
                                <div className='flex items-center justify-start gap-5 border-b border-gray-300 sm:py-1 py-2' key={item.id}>
                                    <div className='sm:w-[55%] w-full'>
                                        <img src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt='product1' className='w-full' />
                                    </div>
                                    <div className='flex flex-col items-start justify-center w-full'>
                                        <h2 className='lg:text-base md:text-sm sm:text-base text-sm font-semibold capitalize'>{item.attributes.name}</h2>
                                        <h3 className='lg:text-base md:text-sm sm:text-base text-sm font-semibold'>QTY: <span className='font-medium'>{item.quantity}</span></h3>
                                        <p className='lg:text-sm md:text-xs text-sm font-medium text-[var(--text-green)]'>$ {(item.attributes.price * item.quantity).toString().includes(".") ? (item.attributes.price * item.quantity).toFixed(2) : (item.attributes.price * item.quantity) + ".00"}</p>
                                    </div>
                                    <div className='text-center px-2 hover:text-red-600 cursor-pointer transition-all duration-300'>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => handleRemove(item.id)} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
                <div className='absolute bottom-0 w-full'>
                    <div className='flex justify-between items-center bg-white px-5 py-3'>
                        <p className='text-black font-semibold text-base uppercase'>Total:</p>
                        <h2 className='text-[var(--text-green)] text-lg font-semibold'>$ {cartItems.products.map(item => item.attributes.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2)}</h2>
                    </div>
                    <div className='flex justify-between items-center'>
                        <Link href="/cart" className='sm:text-base text-sm bg-black/80 w-full py-4 text-center text-white font-semibold uppercase hover:bg-[var(--text-green)] hover:text-black hover:font-bold transition-all duration-300' onClick={handleToggle}>view cart</Link>
                        <Link href="/checkout" className='sm:text-base text-sm bg-black w-full py-4 text-center text-white font-semibold uppercase hover:bg-[var(--text-green)] hover:text-black hover:font-bold transition-all duration-300' onClick={handleToggle}>checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
