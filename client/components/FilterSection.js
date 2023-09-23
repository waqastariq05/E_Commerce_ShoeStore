import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Oswald } from "next/font/google"

const oswald = Oswald({
    subsets: ['latin']
})

const FilterSection = (props) => {
    const { categories, setCate, colors, setFilterColor, filterColor, sizes, setFilterSize, filterSize, setFilterPrice, filterPrice, maxPrice, filter, handleFilter } = props

    const handleClick = () => {
        let radio = document.getElementsByClassName("cate");
        for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked == true) {
                radio[i].checked = false;
            }
        }
        let price = document.getElementById("price");
        price.value = 0;

        setCate("");
        setFilterColor("");
        setFilterSize(0)
        setFilterPrice(0)
    }

    return (
        <div className={`md:translate-x-0 ${filter ? "-translate-x-0" : "-translate-x-[100%]"} md:relative fixed top-0 bottom-0 left-0 h-screen w-full sm:w-[50%] md:w-auto md:py-3 py-10 pl-5 md:pl-0 md:h-auto z-30 bg-white flex flex-col pr-5 md:mt-14 gap-10 md:overflow-auto overflow-y-scroll transition-all duration-300`}>
            <div className="md:hidden block w-full text-right text-xl absolute top-2 right-3" onClick={handleFilter}>
                <FontAwesomeIcon icon={faClose} className="" />
            </div>
            {/* ============ Clear Filter ============ */}
            <div className="flex items-center justify-between gap-5">
                <div className="border-l-4 border-black py-3 pl-2">
                    <h2 className={`${oswald.className} text-lg uppercase font-semibold text-black`}>Filter:</h2>
                </div>
                <div className="w-full">
                    <button className="btn" onClick={handleClick}> Clear Filter</button>
                </div>
            </div>
            {/* ============ Categories ============ */}
            <div>
                <div className="flex items-center gap-3 border-l-4 border-black py-1 px-2">
                    <h2 className={`${oswald.className} text-lg uppercase font-semibold text-black`}>Categories</h2>
                    <span className="w-full h-[2px] rounded-sm bg-black/50"></span>
                </div>
                <div className="mx-1">
                    <ul className="list-none mt-5">
                        {categories.data.map((cate, i) => {
                            return (
                                <li className="flex items-center gap-2 text-base text-black font-medium capitalize my-1 py-1" key={i}>
                                    <input type="radio" className="cate" id={cate.attributes.name} name="cate" value={cate.attributes.name} onChange={(e) => setCate(e.target.value)} />
                                    <label htmlFor={cate.attributes.name}>{cate.attributes.name}</label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* ============ Sizes ============ */}
            <div>
                <div className="flex items-center gap-3 border-l-4 border-black py-1 px-2">
                    <h2 className={`${oswald.className} text-lg uppercase font-semibold text-black`}>size</h2>
                    <span className="w-full h-[2px] rounded-sm bg-black/50"></span>
                </div>
                <div className="mx-1">
                    <div className="flex flex-wrap items-center justify-start gap-2 gap-y-3 mt-5">
                        {sizes.data.map((size, i) => {
                            return (
                                <label className={`py-[10px] px-[14px] border-2 hover:border-black transition-all duration-300 cursor-pointer checked:bg-black ${parseInt(filterSize) === size.attributes.sizeNo ? "border-black" : "border-gray-300"}`} key={i} htmlFor={size.attributes.sizeNo}>
                                    <input type="radio" id={size.attributes.sizeNo} value={size.attributes.sizeNo} name="size" className="hidden" onChange={(e) => setFilterSize(e.target.value)} />
                                    <h2 className="text-sm text-black font-medium">{size.attributes.sizeNo}</h2>
                                </label>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* ============ Colors ============ */}
            <div>
                <div className="flex items-center gap-3 border-l-4 border-black py-1 px-2">
                    <h2 className={`${oswald.className} text-lg uppercase font-semibold text-black`}>Color</h2>
                    <span className="w-full h-[2px] rounded-sm bg-black/50"></span>
                </div>
                <div className="mx-1">
                    <div className="flex flex-wrap items-center justify-start gap-3 gap-y-3 mt-5">
                        {colors.data.map((color, i) => {
                            return (
                                <div key={i}>
                                    <input type="radio" id={color.attributes.name} name="color" value={color.attributes.name} onChange={(e) => setFilterColor(e.target.value)} className="hidden" />
                                    <label htmlFor={color.attributes.name} className={`border-2 border-black/80 rounded-full px-[15px] py-[5px] outline hover:outline-black outline-2 outline-offset-2 transition-all duration-300 cursor-pointer ${filterColor === color.attributes.name ? "outline-black" : "outline-transparent"}`} style={{ background: color.attributes.name }}></label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* ============ Prices ============ */}
            <div>
                <div className="flex items-center gap-3 border-l-4 border-black py-1 px-2">
                    <h2 className={`${oswald.className} text-lg uppercase font-semibold text-black`}>Price</h2>
                    <span className="w-full h-[2px] rounded-sm bg-black/50"></span>
                </div>
                <div className="mx-1 mt-5">
                    <label htmlFor="price" className="text-base text-black font-semibold tracking-wider">${filterPrice}</label>
                    <input type="range" id="price" className="w-full h-[12px] mt-2 rounded-lg bg-gray-300 appearance-none cursor-pointer" defaultValue={parseInt(filterPrice)} min="0" max={maxPrice} onChange={(e) => setFilterPrice(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default FilterSection
