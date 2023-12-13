// src/components/UserProfile.js
import React from 'react';

const UserProfile = () => {
  // Assuming user data comes from an API or context
  const user = {
    name: 'John Doe',
    age: 25,
    // Add more user information as needed
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      {/* Display additional user information here */}
    </div>
  );
};

export default UserProfile;
