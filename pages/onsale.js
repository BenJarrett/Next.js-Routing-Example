// pages/onsale.js
import React from 'react';
import Navbar from '../src/components/Navbar';
import OnSaleProducts from '../src/components/OnSaleProducts';

const OnSale = () => {
  // Assuming on sale products data comes from an API or context
  const onSaleProducts = [
    { id: 1, name: 'Product X', price: 40 },
    { id: 2, name: 'Product Y', price: 60 },
    // Add more on sale products as needed
  ];

  return (
    <div>
      <Navbar />
      <OnSaleProducts onSaleProducts={onSaleProducts} />
    </div>
  );
};

export default OnSale;
