// components/NavMenu.js
import React from 'react';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className="flex">
      <Link href="/">
        <span className="text-white p-2">Home</span>
      </Link>
      <Link href="/dashboard">
        <span className="text-white p-2">Dashboard</span>
      </Link>
      {/* Add more menu items as needed */}
    </nav>
  );
};

export default NavMenu;
