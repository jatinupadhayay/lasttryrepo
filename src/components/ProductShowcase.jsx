import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductShowcase = () => {
  const { categoryName } = useParams(); // Get category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router's navigate hook
  const [showCompare, setShowCompare] = useState(false); // State for showing comparison
  const [selectedProduct, setSelectedProduct] = useState(null); // State to keep track of selected product
  const [desiredPrice, setDesiredPrice] = useState(''); // State to capture desired price
  const [showPriceInput, setShowPriceInput] = useState(false); // State to toggle price input

  useEffect(() => {
    // Fetch products by category from the backend
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/category/${categoryName}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  // Handle product card click
  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product for comparison
    setShowCompare(true); // Show the comparison view
    setShowPriceInput(false); // Close price input if open
  };

  const handleAddToWishlist = (product_id) => {
    const user_id = localStorage.getItem('user_id');
    Addwishlist(user_id, product_id, desiredPrice); // Add to wishlist with desired price
    setShowPriceInput(false); // Close price input after adding to wishlist
    setDesiredPrice(''); // Clear the desired price input
  };

  const handleWishlistClick = () => {
    setShowPriceInput(true); // Show the input for desired price
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Products in {categoryName} Category</h2>

      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleProductClick(product)} // Click event to navigate
            >
              {/* Product Image */}
              <img src={product.image_url} alt={product.name} className="w-full h-auto mb-4" />

              {/* Product Details */}
              <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Brand: <span className="font-semibold">{product.brand}</span></p>
              <p className="text-gray-500 mb-2">{product.description}</p>

              {/* Price and Offer */}
              <p className="text-lg text-green-500 font-bold mb-2">Price: ₹{product.price}</p>

              {/* Best Price Tag */}
              <p className="bg-gray-200 text-gray-700 text-sm font-semibold rounded-md p-2 inline-block mt-2">
                Best price for this product
              </p>
              <a href={product.product_url} target="_blank" rel="noopener noreferrer">
  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4">
    GRAB DEAL
  </button>
</a>
              {/* Wishlist Button */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded mt-4"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering product click
                  handleWishlistClick(); // Show price input for wishlist
                }}
              >
                Add to Wishlist
              </button>

              {showPriceInput && (
                <div className="mt-2">
                  <input
                    type="number"
                    value={desiredPrice}
                    onChange={(e) => setDesiredPrice(e.target.value)} // Update desired price
                    placeholder="Enter desired price"
                    className="border rounded p-1"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded ml-2"
                    onClick={() => handleAddToWishlist(product.product_id)} // Add to wishlist with desired price
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}

      {showCompare && selectedProduct && (
        <div className="comparison-modal">
          <h3>Comparison for: {selectedProduct.name}</h3>
          <p>Price: ₹{selectedProduct.price}</p>
          <p>Brand: {selectedProduct.brand}</p>
          <p>Description: {selectedProduct.description}</p>
          <button onClick={() => setShowCompare(false)}>Close Comparison</button>
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
