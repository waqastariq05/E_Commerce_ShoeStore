import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import Deals from "@/components/Deals";
import GallerySection from "@/components/GallerySection";
import NewArrival from "@/components/NewArrival";
import Slider from "@/components/Slider";
import SocialPost from "@/components/SocialPost";

// ====================== Fetch Products ====================
async function FetchProducts() {
  let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
  const response = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
  return response.json();
}

export default async function Home() {
  const products = await FetchProducts();

  return (
    <div>
      <Slider />
      <div className="container mx-auto md:px-10 px-5">
        <GallerySection />
        <Deals />
        <NewArrival products={products} />
      </div>
      <Banner />
      <div className="container mx-auto md:px-10 px-5">
        <BlogSection />
      </div>
      <div className="sm:mx-2 mx-5">
        <SocialPost />
      </div>
    </div>
  )
}
