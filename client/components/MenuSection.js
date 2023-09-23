'use client'
import React, { useEffect, useState } from 'react'
import FilterSection from './FilterSection'
import Product from './Product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSliders } from '@fortawesome/free-solid-svg-icons'

const MenuSection = (props) => {
    const { categories, colors, sizes, products } = props
    const [cate, setCate] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterSize, setFilterSize] = useState(0);
    const [filterPrice, setFilterPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        function maxPriceValue(arr) {
            let maxValue = Number.MIN_VALUE;
            for (let i = 0; i < arr.data.length; i++) {
                if (arr.data[i].attributes.price > maxValue) {
                    maxValue = arr.data[i].attributes.price;
                }
            }
            return maxValue;
        }

        setMaxPrice(maxPriceValue(products));
    }, [products])

    const [filter, setFilter] = useState(false);
    const handleFilter = () => {
        filter ? setFilter(false) : setFilter(true)
    }

    return (
        <div className="container mx-auto">
            <div className="flex md:flex-row flex-col justify-start gap-2 mt-10 md:px-0 px-5">
                <div className="md:w-1/3 w-full">
                    <h2 className="md:hidden block text-lg uppercase font-semibold text-black border-b-2 pb-3" onClick={handleFilter}><FontAwesomeIcon icon={faSliders} className='text-[var(--text-green)] mr-2' /> Filter <FontAwesomeIcon icon={faChevronDown} className='text-sm mb-[2px]' /></h2>
                    <FilterSection colors={colors} setFilterColor={setFilterColor} filterColor={filterColor} categories={categories} setCate={setCate} sizes={sizes} setFilterSize={setFilterSize} filterSize={filterSize} setFilterPrice={setFilterPrice} filterPrice={filterPrice} maxPrice={maxPrice} filter={filter} handleFilter={handleFilter} />
                </div>
                <div className="w-full">
                    <Product products={products} cate={cate} filterColor={filterColor} filterSize={filterSize} filterPrice={filterPrice} />
                </div>
            </div>
        </div>
    )
}

export default MenuSection
