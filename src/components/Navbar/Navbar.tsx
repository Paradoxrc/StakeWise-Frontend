import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { ButtonOutline } from "../Buttons/Buttons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <nav className="bg-primary px-4 py-3 z-[1000] relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
          <Link to="/" className="text-accent font-saira-stencil text-[30px]">
            STAKEWISE
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {/* Navigation Links */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative flex items-center text-accent hover:text-secondary transition-all duration-300 ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            <i className="fas fa-home mr-2"></i> Home
          </NavLink>
          <NavLink
            to="/politics"
            className={({ isActive }) =>
              `relative flex items-center text-accent hover:text-secondary transition-all duration-300 ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            <i className="fas fa-landmark mr-2"></i> Politics
          </NavLink>
          <NavLink
            to="/sports"
            className={({ isActive }) =>
              `relative flex items-center text-accent hover:text-secondary transition-all duration-300 ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            <i className="fas fa-basketball-ball mr-2"></i> Sports
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              `relative flex items-center text-accent hover:text-secondary transition-all duration-300 ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            <i className="fas fa-calendar-alt mr-2"></i> Upcoming Events
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) =>
              `relative flex items-center text-accent hover:text-secondary transition-all duration-300 ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            <i className="fas fa-chart-line mr-2"></i> Results
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ButtonOutline
            onClick={() => navigate("/login")} // Redirect to login
            className="text-accent border border-secondary hover:text-secondary hover:bg-transparent transition-all duration-300"
          >
            Login
          </ButtonOutline>
          <ButtonOutline
            onClick={() => navigate("/signup")} // Redirect to signup
            className="text-accent bg-transparent border border-secondary px-4 py-2 rounded-lg hover:text-secondary hover:bg-transparent transition-all duration-300"
          >
            Sign Up
          </ButtonOutline>
        </div>

        <div className="relative">
          <button
            className="text-accent text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-primary border border-secondary rounded-lg shadow-lg z-[1000]">
              <Link
                to="/signup"
                className="block px-4 py-2 text-accent hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 text-accent hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/politics"
                className="block px-4 py-2 text-accent hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Politics
              </Link>
              <Link
                to="/sports"
                className="block px-4 py-2 text-accent hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Sports
              </Link>
              <Link
                to="/contactus"
                className="block px-4 py-2 text-accent hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Contact
              </Link>
              <div className="flex items-center justify-between px-4 py-2 text-accent">
                <span>Dark Mode</span>
                <button
                  onClick={toggleDarkMode}
                  className={`relative w-12 h-6 bg-gray-300 rounded-full ${
                    isDarkMode ? "bg-secondary" : ""
                  }`}
                >
                  <span
                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      isDarkMode ? "transform translate-x-6" : ""
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
