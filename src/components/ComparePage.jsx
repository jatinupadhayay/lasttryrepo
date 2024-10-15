import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ComparePage = ({products, name}) => {
  return (
    <div className='p-2'>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 p-4">
          {products.sort((a,b) => a.price - b.price).map((product, i) => (
            i > 0 && products[i].name === products[i-1].name ? '' :  <div key={product.name} className={`product-card text-sm flex ${i === 0 ? 'bg-green-100' : ''}`}>
            <img src={'/iphone.jpg'} width={220} className='p-4 rounded-md' alt={product.name} />
            <div className='text-left p-4'>
            <h3 className='font-bold text-xl'>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>Platform: {product.platform_id}</p>
            <p>Price: <span className='text-green-500'> ₹{product.price}</span></p>
            <button className='border-2  text-red-300 mt-4 border-red-300 px-4 py-2 my-2 rounded-md w-full'> Add To Wishlist</button>
            <button className='bg-green-500 px-4 text-white py-2 rounded-md w-full'>Buy Now</button>
            </div>
          </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ComparePage;
