// src/components/AboutCompany.js
import React from 'react';

const AboutCompany = () => {
  // Company information
  const companyInfo = {
    name: 'Example Company',
    description: 'A brief description of the company.',
    // Add more company information as needed
  };

  return (
    <div>
      <h2>About Company</h2>
      <p>Name: {companyInfo.name}</p>
      <p>Description: {companyInfo.description}</p>
      {/* Display additional company information here */}
    </div>
  );
};

export default AboutCompany;
