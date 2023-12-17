// Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-gray-100" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" rx="16" fill="currentColor"></rect>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                            fill="black"></path>
            </svg>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/* Add a responsive menu button for small screens */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {/* Add a responsive menu icon, e.g., a hamburger menu */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
