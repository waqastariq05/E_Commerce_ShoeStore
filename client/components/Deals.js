import Image from 'next/image'
import d1 from '../public/deals/d1.jpg'
import d2 from '../public/deals/d2.jpg'
import d3 from '../public/deals/d3.jpg'
import Header from './Header'

const Deals = () => {
    return (
        <div className='sm:mt-40 mt-32'>
            <Header title="Daily Deals" text="MEGA SEASON SALE UP TO 29% OF" />
            <div className='flex sm:flex-nowrap flex-wrap justify-center items-center sm:gap-8 gap-5'>
                <div className='flex flex-col sm:gap-8 gap-5'>
                    <div className='relative max-w-[100%] overflow-hidden before:absolute before:left-0 before:top-0 before:m-auto before:w-0 before:h-0 before:bg-white/20 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:bg-white/20 hover:after:w-full hover:after:h-full after:transition-all after:duration-500'>
                        <Image src={d1} alt='deal1' className='w-full' />
                    </div>
                    <div className='relative max-w-[100%] overflow-hidden before:absolute before:left-0 before:top-0 before:m-auto before:w-0 before:h-0 before:bg-white/20 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:bg-white/20 hover:after:w-full hover:after:h-full after:transition-all after:duration-500'>
                        <Image src={d3} alt='deal3' className='w-full' />
                    </div>
                </div>
                <div>
                    <div className='relative max-w-[100%] overflow-hidden before:absolute before:left-0 before:top-0 before:m-auto before:w-0 before:h-0 before:bg-white/20 hover:before:w-full hover:before:h-full before:transition-all before:duration-500 after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 after:bg-white/20 hover:after:w-full hover:after:h-full after:transition-all after:duration-500'>
                        <Image src={d2} alt='deal2' className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals
