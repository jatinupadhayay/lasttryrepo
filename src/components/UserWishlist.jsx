import React, { useEffect, useState } from 'react';

// Function to delete a product from the wishlist
const deletewishlistproduct = async (user_id, product_id) => {
  try {
    const res = await fetch('http://localhost:8000/wishlist/delete', {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id, product_id }),  
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await res.json();
    console.log(json);
    return json; 
  } catch (error) {
    console.error('Error deleting data:', error);
    return null;  
  }
};


const handledeleteToWishlist = async (product_id, setWishlist) => {
  const user_id = localStorage.getItem('user_id');
  const result = await deletewishlistproduct(user_id, product_id);

 
  if (result && result.message === "Successfully Deleted from Wishlist") {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.product_id !== product_id)  
    );
  }
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);  

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`http://localhost:8000/wishlist/${localStorage.getItem('user_id')}`);
        const data = await response.json();
        setWishlist(data);  
      } catch (error) {
        console.error('Error fetching wishlist data:', error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold mb-6">Wishlist ({wishlist.length})</h2>

      <div className="grid grid-cols-2 gap-8">
        {wishlist.map((product) => (
          <div key={product.product_id} className="border p-4 rounded-lg shadow-md">
            <div className="relative">
              <img
                src={product.image}
                alt={product.product_name}
                className="p-4 w-220 h-60 object-cover rounded-md mb-4"
              />
             <h3 className='font-bold text-xl'>{product.product_name}</h3>
              
              {/* Cross button to delete product from wishlist */}
              <button
                onClick={() => handledeleteToWishlist(product.product_id, setWishlist)}  // Call delete handler with setWishlist
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="mt-2">
              <p className="text-sm font-semibold">
                Flipkart price: <span className="text-red-500">₹{product.flipkart_price}</span>
              </p>
              <p className="text-sm font-semibold">
                Amazon price: <span className="text-red-500">₹{product.amazon_price}</span>
              </p>
              <p className="text-sm font-semibold">
                Desired Price Range: 
                <span className="text-red-500">
                  ₹{product.desired_price_range_min} - ₹{product.desired_price_range_max}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700">
          Move All To Bag
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
