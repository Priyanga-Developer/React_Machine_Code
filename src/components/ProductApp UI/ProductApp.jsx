import React from 'react'
import ProductCards from './ProductCards'
import SearchProduct from './SearchProduct'
import ProductFilters from './ProductFilters'

//  1. Show product cards
//  2. Search
//  3. Filter by category
//  4. Sort by price (Low→High, High→Low)
//  5. Show only inStock items
//  6. Calculate total price of inStock items
//  7. Responsive list

const ProductApp = () => {
  return (
    <div>
      <SearchProduct/>
      <ProductFilters/>
      <ProductCards/>
    </div>
  )
}

export default ProductApp