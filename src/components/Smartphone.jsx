import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductComparison = () => {
  const [filter, setFilter] = useState({
    price: [641, 177999],
    brand: '',
  });

  const products = [
    {
      id: 1,
      name: 'Apple iPhone 15',
      brand: 'Apple',
      price: 57999,
      discount: '17% Off',
      finalPrice: 57999,
      imageUrl: '/iphone.jpg',
      offers: 4,
      cashback: '+599 Cashback',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 FE 5G',
      brand: 'Samsung',
      price: 29999,
      discount: '63% Off',
      finalPrice: 29399,
      imageUrl: '/iphone.jpg',
      offers: 4,
      cashback: '+600 Cashback',
    },
    {
      id: 3,
      name: 'Samsung Galaxy S23 FE 5G',
      brand: 'Samsung',
      price: 29999,
      discount: '63% Off',
      finalPrice: 29399,
      imageUrl: '/iphone.jpg',
      offers: 4,
      cashback: '+600 Cashback',
    },
    {
      id: 4,
      name: 'Samsung Galaxy S23 FE 5G',
      brand: 'Samsung',
      price: 29999,
      discount: '63% Off',
      finalPrice: 29399,
      imageUrl: '/iphone.jpg',
      offers: 4,
      cashback: '+600 Cashback',
    },
    {
      id: 5,
      name: 'Samsung Galaxy S23 FE 5G',
      brand: 'Samsung',
      price: 29999,
      discount: '63% Off',
      finalPrice: 29399,
      imageUrl: '/iphone.jpg',
      offers: 4,
      cashback: '+600 Cashback',
    },
   
    // Add more products...
  ];

  return (
    <div className="container">
      <div className="row">
        {/* Filter Section */}
        {/* <div className="col-md-3">
          <div className="filter-section">
            <h5>Filter By</h5> */}
            {/* Price Filter */}
            {/* <div className="filter-price">
              <label>Price</label>
              <input
                type="number"
                value={filter.price[0]}
                onChange={(e) =>
                  setFilter({ ...filter, price: [e.target.value, filter.price[1]] })
                }
                className="form-control"
                placeholder="Min Price"
              />
              <input
                type="number"
                value={filter.price[1]}
                onChange={(e) =>
                  setFilter({ ...filter, price: [filter.price[0], e.target.value] })
                }
                className="form-control"
                placeholder="Max Price"
              />
              <button className="btn btn-primary">Go</button>
            </div> */}

            {/* Brand Filter */}
            {/* <div className="filter-brand">
              <label>Brand</label>
              <input
                type="text"
                value={filter.brand}
                onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
                className="form-control"
                placeholder="Search Brand" /> */}
             
              {/* List of brands */}
              {/* <div className="brand-options">
                <label>
                  <input type="checkbox" /> Samsung
                </label>
                <label>
                  <input type="checkbox" /> Apple
                </label> */}
                {/* Add more brands */}
              {/* </div>
            </div>
          </div>
        </div> */}
        {/* Product Cards Section */}
          <div className="flex gap-4 p-4">
            {products.map((product) => (
              <div key={product.id}>
                {/* card */}
                <div className="flex flex-col gap-4 border rounded-lg p-4"> 
                  <img
                    src={product.imageUrl}
                    className="w-24 p-2"
                    alt={product.name}
                  />
                  <div className="card-body text-sm space-y-1">
                    <h5 className="card-title font-bold">{product.name}</h5>
                    <p className="card-text">Brand: {product.brand}</p>
                    <p className="card-text font-bold">
                      <strike className="text-red-500 text-sm">₹{product.price}</strike> ₹{product.finalPrice} ({product.discount})
                    </p>
                    <p className="card-text  text-green-500">{product.cashback}</p>
                    <p className="card-text">Price Compared ({product.offers} Sellers)</p>
                    <a href="#" className="btn btn-primary text-sm w-full py-2">
                      Buy at ₹{product.finalPrice}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};


export default ProductComparison;
