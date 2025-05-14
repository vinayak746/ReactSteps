import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-white bg-black shadow-2xl p-4 sticky top-0 z-50 rounded flex-grow-0">
      <div className="flex items-center space-x-4 justify-between mx-auto max-w-7xl">
        <Link to="/" className="font-bold px-5 py-2 text-2xl">
          logo
        </Link>

        <div className=" space-x-4 font-semibold text-lg">
          <Link to="/" className="hover:text-gray-400 ">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
