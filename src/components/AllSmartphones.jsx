
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllSmartphones.css'; 

const AllSmartphones = () => {
  con
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/smartphone/scrape');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products', err);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>; // A loading message while data is being fetched
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Brand: {product.brand}</p>
          <p>Platform: {product.platformName}</p>
        </div>
      ))}
    </div>
  );
};

export default AllSmartphones;
