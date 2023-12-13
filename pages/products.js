// pages/products.js
import React from 'react';
import Navbar from '../src/components/Navbar';
import Products from '../src/components/Products';

const ProductsPage = () => {
  // Assuming products data comes from an API or context
  const products = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 75 },
    // Add more products as needed
  ];

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
