import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductShowcase = () => {
  const { categoryName } = useParams(); // Get category from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      <h2>Products in {categoryName} Category</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length > 0 ? (
        <div className="flex gap-4 p-4 flex-wrap">
          {products.map((product) => (
            <div key={product.name} className="product-card ">
              <img src={product.image_url} alt={product.name} className='w-40 mx-auto m-2 p-2' />
              <h3 className='font-bold text-lg'>{product.name}</h3>
              <p>{product.brand}</p>
              <p>{product.description}</p>
              <p>Price: <span className='font-bold text-green-500'> ₹{product.price}</span></p>
              {/* <p>Offer: {product.offer_start_date} - {product.offer_end_date}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductShowcase;
