import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white py-4 px-4 md:px-8 flex items-center justify-between relative">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-2">
          <FaShoppingCart className="text-blue-600 text-2xl" />
        </div>
        <h1 className="text-xl font-bold">Electronic Shop</h1>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`
        absolute top-full left-0 w-full bg-blue-600 
        md:static md:flex md:space-x-6 md:w-auto
        ${isMenuOpen ? 'block' : 'hidden'}
      `}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 p-4 md:p-0 md:space-x-8">
          <li className="hover:text-blue-200 cursor-pointer">Home</li>
          <li className="hover:text-blue-200 cursor-pointer">Products</li>
          <li className="hover:text-blue-200 cursor-pointer">Categories</li>
          <li className="hover:text-blue-200 cursor-pointer">Deals</li>
        </ul>
      </nav>

      {/* Search and Cart */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products" 
            className="pl-8 pr-2 py-2 rounded-full text-black w-48 md:w-64"
          />
          <FaSearch className="absolute left-2 top-3 text-gray-500" />
        </div>
        <button className="bg-white text-blue-600 p-2 rounded-full">
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;