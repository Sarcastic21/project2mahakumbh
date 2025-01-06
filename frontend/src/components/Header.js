import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../context/AuthContext"; // Import your authentication context

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, loading } = useAuth(); // Access user state, logout function, and loading state

  // Display a loading spinner while the authentication is being verified
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="text-2xl font-bold text-orange-600 flex items-center "
            onClick={handleLinkClick} // Close the menu when the logo is clicked
          >
            <img src={logo} alt="logo" className="w-[100px] p-0 m-0" />
          </RouterLink>

          <div className="hidden md:flex items-center space-x-8">
            <RouterLink
              to={user ? "/dashboard" : "/"}
              className="text-gray-700 hover:text-orange-600"
            >
              {user ? "Dashboard" : "Home"}
            </RouterLink>
            <RouterLink
              to="/events"
              className="text-gray-700 hover:text-orange-600"
            >
              Events
            </RouterLink>
            <RouterLink
              to="/about"
              className="text-gray-700 hover:text-orange-600"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="text-gray-700 hover:text-orange-600"
            >
              Contact
            </RouterLink>
            <RouterLink
              to="/booking"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Book Now
            </RouterLink>

            {user && (
              <button
                onClick={logout}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Logout
              </button>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <RouterLink
              to="/"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Packages
            </RouterLink>
            <RouterLink
              to="/events"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Events
            </RouterLink>
            <RouterLink
              to="/about"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block py-2 text-gray-700 hover:text-orange-600"
              onClick={handleLinkClick}
            >
              Contact
            </RouterLink>
            <RouterLink
              to="/booking"
              className="block w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition text-center"
              onClick={handleLinkClick}
            >
              Book Now
            </RouterLink>

            {user && (
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false); // Close the menu after logout
                }}
                className="block w-full bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition text-center"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
