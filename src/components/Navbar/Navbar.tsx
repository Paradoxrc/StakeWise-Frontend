import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-accent px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-bold">STAKEWISE</div>
          <img
            src={logo} // Using the imported logo
            alt="Logo"
            className="ml-2 h-8" // Adjust height as needed
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-secondary flex items-center">
            <i className="fas fa-landmark mr-2"></i> Politics
          </a>
          <a href="#" className="hover:text-secondary flex items-center">
            <i className="fas fa-basketball-ball mr-2"></i> Sports
          </a>
          <a href="#" className="hover:text-secondary flex items-center">
            <i className="fas fa-calendar-alt mr-2"></i> Upcoming Events
          </a>
          <a href="#" className="hover:text-secondary flex items-center">
            <i className="fas fa-chart-line mr-2"></i> Results
          </a>
        </div>

        {/* Login and Sign Up Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-accent hover:text-secondary">Login</button>
          <button className="bg-secondary text-accent px-4 py-2 rounded-md hover:bg-orange-600">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-accent text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block text-accent hover:text-secondary">
            Politics
          </a>
          <a href="#" className="block text-accent hover:text-secondary">
            Sports
          </a>
          <a href="#" className="block text-accent hover:text-secondary">
            Upcoming Events
          </a>
          <a href="#" className="block text-accent hover:text-secondary">
            Results
          </a>
          <button className="block w-full text-left text-accent hover:text-secondary">
            Login
          </button>
          <button className="block w-full text-left bg-secondary text-accent px-4 py-2 rounded-md hover:bg-orange-600">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
