import BannerHeader from "@/components/BannerHeader";
import ProductDetail from "@/components/ProductDetail";

// ====================== Fetch Product By Slug ====================
async function fetchProductBySlug(slug) {
    let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
    const response = await fetch(`http://localhost:1337/api/products?filters[slug]=${slug}&populate=*`, { headers: headers })
    return response.json();
}

const page = async ({ params }) => {
    const productBySlug = await fetchProductBySlug(params.slug)
    return (
        <div>
            <BannerHeader title="Shop" />
            <div className="container mx-auto px-5 md:py-24 py-10">
                <ProductDetail productBySlug={productBySlug} />
            </div>
        </div>
    )
}

export default page
