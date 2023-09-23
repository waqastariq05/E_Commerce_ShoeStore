import BannerHeader from '@/components/BannerHeader'
import ViewCart from '@/components/ViewCart'
import React from 'react'

const page = () => {
    return (
        <div>
            <BannerHeader title="SHOPPING CART" />
            <div className="container mx-auto md:px-10 px-5">
                <ViewCart />
            </div>
        </div>
    )
}

export default page
