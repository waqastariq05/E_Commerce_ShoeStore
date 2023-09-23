import BannerHeader from '@/components/BannerHeader'
import Checkout from '@/components/Checkout'
import React from 'react'

const page = () => {
    return (
        <div>
            <BannerHeader title="Checkout" />
            <div className="container mx-auto md:px-10 px-5">
                <Checkout />
            </div>
        </div>
    )
}

export default page
