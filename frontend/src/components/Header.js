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

  return (
    <header className="fixed w-full bg-white/60 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="text-2xl font-bold text-orange-600 flex items-center "
          >
            <img src={logo} alt="logo" className="w-[100px] p-0 m-0" />
          </RouterLink>

          <div className="hidden md:flex items-center space-x-8">
            {/* Conditionally render "Home" or "Dashboard" */}
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

            {/* Render logout button if user is authenticated */}
            {user && (
              <button
                onClick={logout} // Call the logout function
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
              to="/packages"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              Packages
            </RouterLink>
            <RouterLink
              to="/events"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              Events
            </RouterLink>
            <RouterLink
              to="/about"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              About
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block py-2 text-gray-700 hover:text-orange-600"
            >
              Contact
            </RouterLink>
            <RouterLink
              to="/booking"
              className="block w-full bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition text-center"
            >
              Book Now
            </RouterLink>

            {/* Render logout button if user is authenticated */}
            {user && (
              <button
                onClick={logout}
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
