import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Addwishlist = async (user_id, product_id, desired_price) => {
  try {
    const res = await fetch('http://localhost:8000/wishlist/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id, product_id, desired_price }),  // Include desired_price
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const SearchResults = () => {
  const { regex } = useParams(); // Get category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCompare, setShowCompare] = useState(false);
  const [name, setName] = useState('');
  const [desiredPrice, setDesiredPrice] = useState(''); // State to capture desired price
  const [showPriceInput, setShowPriceInput] = useState(false); // State to toggle price input

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setProducts([]);
      try {
        const response = await fetch(`http://localhost:8000/products/${regex}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [regex]);

  const handleAddToWishlist = (product_id) => {
    const user_id = localStorage.getItem('user_id');
    Addwishlist(user_id, product_id, desiredPrice);
    setShowPriceInput(false); // Close price input after adding to wishlist
  };

  const handleWishlistClick = (product_id) => {
    setDesiredPrice(''); // Clear the desired price input
    setShowPriceInput(true); // Show the input for desired price
  };

  return (
    !showCompare ? (
      <div className='p-2'>
        <h2>Showing Results for <span className='text-red-500'>{regex}</span></h2>
        {loading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 p-4">
            {products.sort((a, b) => a.price - b.price).map((product, i) => (
              i > 0 && products[i].name === products[i - 1].name ? '' : (
                <div onClick={() => { setName(product.name); setShowCompare(true); }} key={product.name} className={`product-card text-sm flex`}>
                  <img 
                    src={product.image_url}  // Use product's image URL
                    width={220} 
                    className='p-4 rounded-md' 
                    alt={product.name} 
                  />
                  <div className='text-left p-4'>
                    <h3 className='font-bold text-xl'>{product.name}</h3>
                    <p>{product.brand}</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    ) : (
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.sort((a, b) => a.price - b.price).map((product, i) => (
          <div key={product.name} className={`product-card text-sm flex ${i === 0 ? 'bg-green-100' : ''}`}>
            <img 
              src={product.image_url}  // Use product's image URL
              width={220} 
              className='p-4 rounded-md' 
              alt={product.name} 
            />
            <div className='text-left p-4'>
              <h3 className='font-bold text-xl'>{product.name}</h3>
              <p>{product.brand}</p>
              <p>{product.description}</p>
              <p className='font-bold text-green-500 text-lg'>${product.price}</p>
              <p><span className='font-bold'>Platform:</span> {product.platform_name}</p>

              <a href={product.product_url} target="_blank" rel="noopener noreferrer">
  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4">
    GRAB DEAL
  </button>
</a>

              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleWishlistClick(product.product_id)}
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
          </div>
        ))}
      </div>
    )
  );
};

export default SearchResults;
