'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js';
import { callStripeSession } from '../stripe/index';
import { redirect } from 'next/navigation';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
    const items = useSelector((state) => state.cart)

    async function handleCheckout(formData) {
        const stripe = await stripePromise;
        const createLineItems = items.products.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    images: [`http://localhost:1337${item.attributes.images.data[0].attributes.url}`],
                    name: item.attributes.name,
                },
                unit_amount: parseInt(item.attributes.price * item.quantity) * 100,
            },
            quantity: item.quantity,
        }))

        const data = {
            email: formData.get('email'),
            country: formData.get('country'),
            name: formData.get('fName') + " " + formData.get('lName'),
            address: formData.get('address'),
            city: formData.get('city'),
            code: formData.get('pCode'),
        }
        localStorage.setItem("CheckoutFormData", JSON.stringify(data))
        const res = await callStripeSession(createLineItems)
        localStorage.setItem("stripe", true)
        localStorage.setItem("Product", JSON.stringify(items.products))

        const { error } = await stripe.redirectToCheckout({
            sessionId: res.id
        })
    }

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const isStripe = JSON.parse(localStorage.getItem('stripe'))

        async function createFinalOrder() {
            if (isStripe && params.get('success')) {
                const productData = JSON.parse(localStorage.getItem('Product'))
                const getCheckoutFormData = JSON.parse(localStorage.getItem('CheckoutFormData'))

                const res = await fetch("http://localhost:1337/api/orders", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": process.env.NEXT_PUBLIC_API_TOKEN
                    },
                    body: JSON.stringify({
                        data: {
                            email: getCheckoutFormData.email,
                            name: getCheckoutFormData.name,
                            country: getCheckoutFormData.country,
                            address: getCheckoutFormData.address,
                            state: getCheckoutFormData.city,
                            postalCode: getCheckoutFormData.code,
                            product: productData,
                            paymentMethod: 'Stripe',
                            amount: productData.map(item => item.attributes.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2),
                            isPaid: true,
                            paidAt: new Date(),
                            isProcessing: true,
                        }
                    }),
                });
                const data = await res.json();

                alert('Order placed! You will receive an email confirmation.');
                localStorage.clear()
            }
            if (params.get('canceled')) {
                alert('Order canceled -- continue to shop around and checkout when you’re ready.');
            }
        }
        createFinalOrder()
    }, []);

    if (items.products.length === 0) {
        return (
            <div className='mt-20 bg-yellow-100 py-3 px-5 rounded'>
                <h2 className='text-lg font-semibold text-black capitalize'>It appears that your cart is currently empty.</h2>
            </div>
        )
    }

    return (
        <div className='flex md:flex-row flex-col md:gap-0 gap-5 mt-20'>
            <div className='w-full md:px-10 py-5'>
                <form action={handleCheckout}>
                    <div className='mb-8'>
                        <h2 className='text-lg text-black uppercase font-semibold mb-3'>Contact</h2>
                        <input type="email" name="email" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Email Address" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-lg text-black uppercase font-semibold'>Billing address</h2>
                        <input type="text" name="country" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Country/Region" />
                        <div className='flex gap-3 items-center'>
                            <input type="text" name="fName" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="First Name" />
                            <input type="text" name="lName" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Last Name" />
                        </div>
                        <input type="text" name="address" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Address" />
                        <div className='flex gap-3 items-center'>
                            <input type="text" name="city" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="City" />
                            <input type="text" name="pCode" className="w-full bg-white rounded border-2 border-gray-300 focus:border-[var(--text-green)] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Postal Code" />
                        </div>
                        <div className='sm:text-right mt-5'>
                            <button className='btn sm:w-auto w-full' type='submit'>Continue to payment</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='md:order-none order-first w-full h-auto bg-gray-100 sm:px-10 px-5 py-5 border-l-2 border-slate-300'>
                {items.products.map((item) => {
                    return (
                        <div className='flex justify-between items-center gap-5 border-b-2 py-3 border-slate-300'>
                            <div className='flex items-center gap-4'>
                                <div className='sm:w-[70px] w-[80px] border-2 border-slate-300 p-1 rounded-md relative'>
                                    <img src={`http://localhost:1337${item.attributes.images.data[0].attributes.url}`} alt='product1' className='w-full' />
                                    <span className='absolute -right-2 -top-2 w-5 h-5 flex justify-center items-center text-white text-sm font-semibold bg-gray-400 rounded-full'>{item.quantity}</span>
                                </div>
                                <div>
                                    <h2 className='lg:text-base md:text-sm sm:text-base text-xs font-semibold capitalize mb-2'>{item.attributes.name}</h2>
                                    <p className="sm:text-sm text-xs font-medium text-gray-600">{item.size} Size</p>
                                </div>
                            </div>
                            <div>
                                <p className='sm:text-base text-sm font-medium text-[var(--text-green)]'>${item.attributes.price.toString().includes(".") ? (item.attributes.price * item.quantity) : (item.attributes.price * item.quantity) + ".00"}</p>
                            </div>
                        </div>
                    )
                })}
                <div className='flex justify-between items-center pt-6 px-3'>
                    <h2 className='sm:text-base text-sm font-semibold text-black uppercase'>Total</h2>
                    <h2 className='sm:text-base text-sm font-semibold text-[var(--text-green)]'>USD ${items.products.map(item => item.attributes.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2)}</h2>
                </div>
            </div>
        </div>
    )
}

export default Checkout
