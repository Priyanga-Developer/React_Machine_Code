import React from 'react'

//  3. Filter by category
//  4. Sort by price (Low→High, High→Low)
//  5. Show only inStock items

const ProductFilters = ({    filterCategory,
        handleFilterCategory,
        sortPrice,
        handleSortPrice,
        onlyInStock,
        handleInStockChange}) => {
  return (
    <div>
        <div>
        {/* Category Filter */}
        <select className="border border-gray-300 rounded-md p-2 mr-4" value={filterCategory} onChange={(e)=>handleFilterCategory(e)}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
        </select>
        {/* Price Sort */}
        <select className="border border-gray-300 rounded-md p-2 mr-4" value={sortPrice} onChange={(e)=>handleSortPrice(e)}>
            <option value="">Sort by Price</option> 
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
        </select>
        {/* In Stock Filter */}
        <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" value={onlyInStock} onChange={(e)=>handleInStockChange(e)}/>
            <span className="ml-2 text-gray-700">Only show In Stock</span>
        </label>
        </div>
    </div>
  )
}

export default ProductFilters