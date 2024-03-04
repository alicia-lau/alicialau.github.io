import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // ... rest of your navbar code

  return (
    <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="text-white text-3xl font-bold">Alicia Lau</Link>
          <ul className="flex items-center space-x-4">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/education" className="text-gray-300 hover:text-white">Education</Link></li>
            <li><Link to="/experience" className="text-gray-300 hover:text-white">Experience</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        {/* ... rest of your navbar code */}
      </div>
    </nav>
  );
}

export default Navbar;
