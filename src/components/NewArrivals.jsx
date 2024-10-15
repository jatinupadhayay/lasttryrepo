import React from 'react';

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="new1.jpg" alt="New Product" />
          <h3>New Arrival</h3>
          <p>Price: $200</p>
        </div>
        <div className="product-card">
          <img src="new2.jpg" alt="New Product" />
          <h3>New Arrival</h3>
          <p>Price: $250</p>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
