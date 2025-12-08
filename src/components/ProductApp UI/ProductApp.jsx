import React, { useEffect, useMemo, useState } from "react";
import ProductCards from "./ProductCards";
import SearchProduct from "./SearchProduct";
import ProductFilters from "./ProductFilters";
import productsData from "../../data/products.json";
import { debounce } from "../../utils";

//  1. Show product cards
//  2. Search
//  3. Filter by category
//  4. Sort by price (Low→High, High→Low)
//  5. Show only inStock items
//  6. Calculate total price of inStock items
//  7. Responsive list

const ProductApp = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  const searchProducts = (value) => {
    setSearchProduct(value);
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };
  const debouncedSearch = useMemo(() => debounce(searchProducts, 500), []);

  const totalInStockPrice = useMemo(() => {
    return products
      .filter((product) => product.inStock)
      .reduce((total, product) => total + product.price, 0);
  }, [products]);

  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
    const filteredProducts = productsData.filter(
      (product) => product.category === e.target.value
    );
    setProducts(filteredProducts);
  };
  const handleSortPrice = (e) => {
    setSortPrice(e.target.value);
    const sortedProducts = [...products].sort((a, b) => {
      return e.target.value === "lowToHigh"
        ? a.price - b.price
        : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  const handleInStockChange = (e) => {
    setOnlyInStock(e.target.checked);
    if (e.target.checked) {
      const inStockProducts = productsData.filter((product) => product.inStock);
      setProducts(inStockProducts);
    } else {
      setProducts(productsData);
    }
  };

  return (
    <div>
      <SearchProduct
        searchProduct={searchProduct}
        handleSearch={handleSearch}
      />
      <ProductFilters
        filterCategory={filterCategory}
        handleFilterCategory={handleFilterCategory}
        sortPrice={sortPrice}
        handleSortPrice={handleSortPrice}
        onlyInStock={onlyInStock}
        handleInStockChange={handleInStockChange}
      />
      <div className="p-4 font-semibold text-lg">
        Total Price of In-Stock Items: ₹{totalInStockPrice}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
        {Array.isArray(products) && products.length > 0 ? (
          <>
            {products.map((item) => (
              <ProductCards
                key={item?.id}
                name={item?.name}
                price={item?.price}
                category={item?.category}
                inStock={item?.inStock}
              />
            ))}
          </>
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default ProductApp;
