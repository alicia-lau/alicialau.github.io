import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          {/* Logo and branding */}
          <a href="#" className="text-white text-3xl font-bold">Brand</a>

          {/* Primary Nav Items */}
          <ul className="flex items-center space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Experience & Skills</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Education</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Secondary Nav Items */}
        {/* <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Login</a>
          <a href="#" className="text-gray-300 hover:text-white">Sign Up</a>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
