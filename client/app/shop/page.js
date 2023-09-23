import BannerHeader from "@/components/BannerHeader"
import MenuSection from "@/components/MenuSection";

// ====================== Fetch Categories ====================
async function FetchCategories() {
    let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
    const response = await fetch("http://localhost:1337/api/categories", { headers: headers })
    return response.json();
}

// ====================== Fetch Colors ====================
async function FetchColors() {
    let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
    const response = await fetch("http://localhost:1337/api/colors", { headers: headers })
    return response.json();
}

// ====================== Fetch Sizes ====================
async function FetchSizes() {
    let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
    const response = await fetch("http://localhost:1337/api/sizes", { headers: headers })
    return response.json();
}

// ====================== Fetch Products ====================
async function FetchProducts() {
    let headers = { Authorization: process.env.NEXT_PUBLIC_API_TOKEN };
    const response = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
    return response.json();
}

const page = async () => {
    const categories = await FetchCategories()
    const colors = await FetchColors()
    const sizes = await FetchSizes()
    const products = await FetchProducts()

    return (
        <div>
            <BannerHeader title="Shop" />
            <MenuSection categories={categories} colors={colors} sizes={sizes} products={products} />
        </div>
    )
}

export default page
