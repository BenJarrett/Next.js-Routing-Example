// src/components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
