import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">Hamburger NavBar</div>
        <button
          className="lg:hidden block"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-white h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="mt-4 lg:flex lg:mt-0">
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <a href="#" className="block lg:inline-block lg:mb-2 text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li className="lg:mr-6 mb-2 lg:mb-0">
            <a href="#" className="block lg:inline-block lg:mb-2 text-gray-300 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block lg:inline-block text-gray-300 hover:text-white">
              Services
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;