import React, { useState } from 'react';

const ProductComparison = () => {
  // State for managing variant and color selection
  const [variant, setVariant] = useState('128 GB');
  const [color, setColor] = useState('Green');

  // Mock platform data
  const platforms = [
    {
      name: 'Flipkart',
      logo: 'https://via.placeholder.com/50x50', // Replace with actual logo
      sellerPrice: '₹69,999',
      discountedPrice: '₹57,999',
      bestPrice: true
    },
    {
      name: 'Amazon',
      logo: 'https://via.placeholder.com/50x50', // Replace with actual logo
      sellerPrice: '₹79,999',
      discountedPrice: '₹66,900',
      bestPrice: false
    },
    {
      name: 'Croma',
      logo: 'https://via.placeholder.com/50x50', // Replace with actual logo
      sellerPrice: '₹69,999',
      discountedPrice: '₹67,500',
      bestPrice: false
    }
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Product Image and Details */}
      <div className="flex flex-col md:flex-row">
        {/* Product Images */}
        <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3">
          <img src="https://via.placeholder.com/300x400" alt="Product" className="w-full mb-4" />
          <div className="flex space-x-2">
            <img src="https://via.placeholder.com/50x50" alt="Thumbnail 1" className="w-12 h-12 border" />
            <img src="https://via.placeholder.com/50x50" alt="Thumbnail 2" className="w-12 h-12 border" />
            <img src="https://via.placeholder.com/50x50" alt="Thumbnail 3" className="w-12 h-12 border" />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-2/3 md:pl-8">
          <h1 className="text-2xl font-bold mb-4">Apple iPhone 15</h1>

          {/* Variant and Color Selection */}
          <div className="flex space-x-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Choose Variant</label>
              <select 
                value={variant} 
                onChange={(e) => setVariant(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB">512 GB</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Choose Color</label>
              <select 
                value={color} 
                onChange={(e) => setColor(e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="Green">Green</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
              </select>
            </div>
          </div>

          {/* Price Comparison Section */}
          <h2 className="text-lg font-semibold mb-4">Choose the best price and retailer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className={`border rounded-lg p-4 ${platform.bestPrice ? 'border-blue-500' : 'border-gray-300'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <img src={platform.logo} alt={platform.name} className="w-10 h-10" />
                  <span className="text-lg font-medium">{platform.name}</span>
                </div>
                <div className="mb-2 text-gray-500">
                  <span className="line-through">{platform.sellerPrice}</span>
                  <span className="ml-2 text-lg font-bold text-black">{platform.discountedPrice}</span>
                </div>
                {platform.bestPrice && <span className="text-green-500 font-semibold">This is the best price</span>}
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Grab Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="list-disc list-inside">
          <li>Seller: Flipkart</li>
          <li>Brand: Apple</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductComparison;
