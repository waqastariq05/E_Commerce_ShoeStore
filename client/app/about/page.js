import Image from "next/image"
import a1 from '../../public/about/1.jpg'
import a2 from '../../public/about/2.jpg'
import BannerHeader from "@/components/BannerHeader"

const page = () => {
    return (
        <div>
            <BannerHeader title="About Us" />
            <div className="container mx-auto md:px-10 px-5">
                <div className="grid items-center md:grid-cols-2 grid-cols-1 gap-10 gap-y-14 mt-20">
                    <div className="w-full">
                        <h2 className="lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-black font-semibold mb-3">Our Story</h2>
                        <p className="lg:text-base md:text-sm sm:text-base text-sm font-semibold text-black/80 relative sm:pl-20 pl-16 before:absolute before:top-[50%] before:-translate-y-[50%] before:left-0 before:sm:w-16 before:w-12 before:h-1 before:rounded-sm before:bg-[var(--text-green)] mb-7">THE HIGH STRESS FAVOUTIRE</p>
                        <p className="lg:text-base md:text-sm sm:text-base text-sm font-medium text-gray-500">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.<br /><br />In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div className="w-full">
                        <Image src={a1} alt="aboutImg1" className="w-full rounded-md" />
                    </div>
                    <div className="w-full md:order-none order-last">
                        <Image src={a2} alt="aboutImg2" className="w-full rounded-md" />
                    </div>
                    <div className="w-full">
                        <h2 className="lg:text-4xl md:text-3xl sm:text-4xl text-3xl text-black font-semibold mb-3">Who We Are ?</h2>
                        <p className="lg:text-base md:text-sm sm:text-base text-sm font-semibold text-black/80 relative sm:pl-20 pl-16 before:absolute before:top-[50%] before:-translate-y-[50%] before:left-0 before:sm:w-16 before:w-12 before:h-1 before:rounded-sm before:bg-[var(--text-green)] mb-7">THE HIGH STRESS FAVOUTIRE</p>
                        <p className="lg:text-base md:text-sm sm:text-base text-sm font-medium text-gray-500">Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Vestibulum volutpat pretium libero. In ut quam vitae odio lacinia tincidunt. Etiam ut purus mattis mauris sodales aliquam. Aenean massa.<br /><br />In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Vivamus consectetuer hendrerit lacus. In hac habitasse platea dictumst. Ut tincidunt tincidunt erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
