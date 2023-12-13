// src/components/Products.js
import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
      <h2>All Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
          {/* Display additional product information here */}
        </div>
      ))}
    </div>
  );
};

export default Products;
