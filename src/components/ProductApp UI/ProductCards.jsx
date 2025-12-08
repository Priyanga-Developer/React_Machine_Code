const ProductCards = ({ name, price, category, inStock }) => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-md p-6 mt-5 border border-gray-200 hover:shadow-lg transition">
      
      {/* Product Name */}
      <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">
        {name}
      </h2>

      {/* Price */}
      <p className="text-lg text-gray-700 text-center">
        <span className="font-semibold">Price:</span> ₹{price}
      </p>

      {/* Category */}
      <p className="text-gray-600 text-center mt-2">
        <span className="font-semibold">Category:</span> {category}
      </p>

      {/* Stock Status */}
      <p
        className={`mt-4 text-center font-semibold ${
          inStock ? "text-green-600" : "text-red-600"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCards;
