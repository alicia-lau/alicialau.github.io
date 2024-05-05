import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
            {/* Logo or Brand */}
            <div className='flex items-center'>
                <a href="home" className="py-5 px-2 text-blue-200 hover:text-blue-400">
                <img src={`${process.env.PUBLIC_URL}/alicia-favicon-light.svg`} alt="Logo" className="h-8 w-8" />
                </a>
            </div>

            {/* Primary Nav Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 hover:bg-gray-700">Home</a>
              <a href="#about" className="py-5 px-3 hover:bg-gray-700">About</a>
              <a href="#projects" className="py-5 px-3 hover:bg-gray-700">Projects</a>
              {/* More nav items */}
            </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
            <button onClick={toggle} className="mobile-menu-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* SVG for menu icon */}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? '' : 'hidden'} md:hidden`}>
        <a href="home" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="about" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        <a href="projects" className="block py-2 px-4 text-sm hover:bg-gray-700">Projects</a>
        {/* More mobile nav items */}
      </div>
    </nav>
  );
}

export default Navbar;