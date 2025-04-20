import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-violet-600">
          Senior Connect
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-black-700">
          <Link to="/" className="hover:text-black-600 transition">Home</Link>
          <Link to="/clubs" className="hover:text-black-600 transition">Clubs</Link>
          <Link to="/events" className="hover:text-black-600 transition">Events</Link>
          <Link
            to="/profile"
            className="ml-4 bg-violet-500 text-white px-5 py-1.5 rounded-full border border-violet-700 hover:bg-violet-600 transition"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
