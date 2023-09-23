'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from '../Redux/Slice/cartSlice'
import Link from 'next/link'

const ViewCart = () => {
    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(cartAction.removeFromCart(id))
    }

    if (cartItems.products.length === 0) {
        return (
            <div className='mt-20 bg-yellow-100 py-3 px-5 rounded'>
                <h2 className='text-lg font-semibold text-black capitalize'>It appears that your cart is currently empty.</h2>
            </div>
        )
    }

    return (
        <div className='mt-20'>
            <div className='w-full overflow-x-auto'>
                <table class="lg:table-fixed w-full">
                    <thead>
                        <tr>
                            <th className='border-2 border-slate-600 py-3 px-5 text-sm uppercase text-left w-[60%]'>Product</th>
                            <th className='border-2 border-slate-600 py-3 px-5 text-sm uppercase text-left'>Price</th>
                            <th className='border-2 border-slate-600 py-3 px-4 text-sm uppercase lg:text-center text-left'>Quantity</th>
                            <th className='border-2 border-slate-600 py-3 px-5 text-sm uppercase text-right'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.products.map((item) => {
                            return (
                                <tr key={item.id} className='border-2 border-slate-600'>
                                    <td className='flex justify-start items-center gap-5 pl-5'>
                                        <div className='w-[200px]'>
                                            <img src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt='product1' className='w-full' />
                                        </div>
                                        <div className='flex flex-col items-start justify-center w-full'>
                                            <h2 className='lg:text-base md:text-sm sm:text-base text-sm font-semibold capitalize mb-2'>{item.attributes.name}</h2>
                                            <div className='flex items-center gap-3 mb-5'>
                                                <div className="flex items-center">
                                                    <span className="mr-3 text-black font-semibold text-sm">Color:</span>
                                                    <button className="border-2 border-gray-300 rounded-full w-5 h-5 mr-1 p-1 focus:outline-none" style={{ background: item.color }}></button>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="mr-3 text-black font-semibold text-sm">Size:</span>
                                                    <p className="text-sm font-medium text-gray-600">{item.size}</p>
                                                </div>
                                            </div>
                                            <button className='text-sm font-semibold rounded text-black uppercase border border-black py-1 px-2 hover:bg-black hover:text-white cursor-pointer transition-all duration-300' onClick={() => handleRemove(item.id)}>Remove</button>
                                        </div>
                                    </td>
                                    <td className='px-4 text-base font-semibold'>${item.attributes.price.toString().includes(".") ? (item.attributes.price) : (item.attributes.price) + ".00"}</td>
                                    <td className='px-4'>
                                        <div className='flex border py-3 rounded'>
                                            <button className='px-4 text-lg text-black font-semibold' disabled={item.quantity === 1} onClick={() => dispatch(cartAction.decreaseProductQty(item.id))}>−</button>
                                            <input type="text" value={item.quantity} className='lg:w-full w-[50px] text-center focus:outline-none' />
                                            <button className='px-4 text-lg text-black font-semibold' onClick={() => dispatch(cartAction.increaseProductQty(item.id))}>+</button>
                                        </div>
                                    </td>
                                    <td className='px-4 text-right text-base font-semibold'>
                                        ${(item.attributes.price * item.quantity).toString().includes(".") ? (item.attributes.price * item.quantity).toFixed(2) : (item.attributes.price * item.quantity) + ".00"}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            </div>
            <div className=''>
                <div className='flex justify-between items-center border-b-2 border-slate-600 py-3 px-5'>
                    <h2 className='text-lg font-semibold text-black uppercase'>Total</h2>
                    <h2 className='text-lg font-semibold text-[var(--text-green)]'>${cartItems.products.map(item => item.attributes.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2)}</h2>
                </div>
                <div className='flex sm:flex-row flex-col gap-3 justify-between items-center sm:mt-5 mt-7 sm:px-5'>
                    <Link href="\shop" className='sm:w-auto w-full uppercase text-base font-semibold text-black border-2 border-black rounded-md py-[10px] px-6 hover:bg-black hover:text-white transition-all duration-300'>Continue Shopping</Link>
                    <Link href="\checkout" className='btn sm:w-auto w-full'>Proceed to Checkout</Link>
                </div>
            </div>
        </div >
    )
}

export default ViewCart

