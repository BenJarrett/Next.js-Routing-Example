// src/components/OnSaleProducts.js
import React from 'react';

const OnSaleProducts = ({ onSaleProducts }) => {
  return (
    <div>
      <h2>On Sale Products</h2>
      {onSaleProducts.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          {/* Display additional product information here */}
        </div>
      ))}
    </div>
  );
};

export default OnSaleProducts;
