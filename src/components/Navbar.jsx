import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Blog</h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/posts" className="hover:text-blue-400 transition">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
