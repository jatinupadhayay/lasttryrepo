import React from 'react';

const FlashSales = () => {
  return (
    <section className="flash-sales">
      <h2>Flash Sales On flipkart</h2>
      <div className="sales-items">
        {/* Example product cards */}
        <div className="product-card">
          <img src="product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Price: $100</p>
        </div>
        <div className="product-card">
          <img src="product2.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Price: $150</p>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
