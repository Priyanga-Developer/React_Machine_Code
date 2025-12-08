import React from 'react'

const SearchProduct = ({ searchProduct, handleSearch }) => {
  return (
    <div>
        <input type="text" placeholder="Search Product..." value={searchProduct} onChange={(e)=>handleSearch(e)} className="border border-gray-300 rounded-md p-2 w-full mb-4"/>
    </div>
  )
}

export default SearchProduct