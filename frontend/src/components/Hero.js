import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Hero() {
  const { login, logout, isAuthenticated, user } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      return alert("Email and password are required.");
    }
  
    setIsLoading(true); // Set loading state to true while waiting for the response
  
    try {
      // Make the login request with axios
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const { token, message } = response.data;
  
      // Save the token in localStorage for authentication persistence
      localStorage.setItem("authToken", token);
  
      // Optionally log the success message
      console.log(message);
  
      // Trigger the login state and redirect to the dashboard
      login(token); // `login` is assumed to update the app state with the token
      navigate("/dashboard");
  
      // Close the login modal (optional UI state update)
      setShowLogin(false);
    } catch (err) {
      // Enhanced error handling
      alert(err.response?.data?.error || "Login failed. Please try again.");
      console.error("Login failed:", err);
    } finally {
      setIsLoading(false); // Reset loading state after the request completes
    }
  };
  

  const handleRegister = async () => {
    // Validate input fields
    if (!registerData.name || !registerData.email || !registerData.password) {
      return alert("All fields are required");
    }
  
    // Validate password length
    if (registerData.password.length < 6) {
      return alert("Password must be at least 6 characters long");
    }
  
    // Optional: Validate email format (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(registerData.email)) {
      return alert("Please enter a valid email address");
    }
  
    setIsLoading(true); // Set loading state to true while waiting for the response
  
    try {
      // Make the API request with axios
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        registerData,
        {
          headers: {
            "Content-Type": "application/json",
            // Include the Authorization header only if needed
            ...(localStorage.getItem("authToken") && {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            }),
          },
        }
      );
  
      // Handle successful registration
      console.log("Registration successful:", response.data);
      alert("Registration successful! Please log in.");
      setShowRegister(false); // Close the register modal or navigate to login
    } catch (err) {
      // Handle errors
      console.error("Registration failed:", err.response?.data?.message || "An error occurred");
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setIsLoading(false); // Reset loading state after the request completes
    }
  };
  

  const handleLogout = () => {
    // Perform logout functionality
    logout(); // Assuming `logout` updates the state or performs any necessary cleanup

    // Remove the auth token from localStorage
    localStorage.removeItem("authToken");

    // Redirect the user to the homepage
    navigate("/");
  };
  

  return (
    <div className="relative min-h-screen items-center justify-center flex flex-col text-white bg-cover bg-center bg-no-repeat bg-fixed bg-hero">
  <iframe
    className="absolute inset-0 w-full h-full object-cover"
    src="https://www.youtube.com/embed/Mi-qP3I1fHU?autoplay=1&mute=1&loop=1&playlist=Mi-qP3I1fHU"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  ></iframe>

      <div className="absolute inset-0 bg-black/50" />
      <div className="fixed z-10 top-[100px] w-full overflow-hidden bg-orange-500 text-white bg-opacity-70 text-white">
        <div className="whitespace-nowrap animate-scroll">
          <span className="inline-block px-4 font-bold text-lg">
            Early Bird Offer: Flat 10% Discount (On bookings done 30 days in
            advance)
          </span>
          <span className="inline-block px-4 font-bold text-lg">
            Early Bird Offer: Flat 10% Discount (On bookings done 30 days in
            advance)
          </span>
          <span className="inline-block px-4 font-bold text-lg">
            Early Bird Offer: Flat 10% Discount (On bookings done 30 days in
            advance)
          </span>
          <span className="inline-block px-4 font-bold text-lg">
            Early Bird Offer: Flat 10% Discount (On bookings done 30 days in
            advance)
          </span>
          <span className="inline-block px-4 font-bold text-lg">
            Early Bird Offer: Flat 10% Discount (On bookings done 30 days in
            advance)
          </span>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-32 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12">
          Experience the Divine
          <span className="block text-orange-500">Mahakumbh Mela 2025</span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Join millions of devotees in the world's largest spiritual gathering.
          Let us guide your sacred journey.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-xl">
          <div className="grid md:grid-cols-2 gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  className="bg-orange-600 text-white px-6 py-2 rounded-full border-2 border-orange-600 hover:bg-orange-700 hover:border-orange-700 transition-all duration-300"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
                <button
                  className="bg-transparent text-orange-600 px-6 py-2 rounded-full border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <span>Welcome, {user?.name}!</span>
                </div>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded-full border-2 border-red-600 hover:bg-red-700 hover:border-red-700 transition-all duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <button
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition w-full"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="mt-2 w-full px-6 py-2 rounded border border-orange-600 text-orange-600 hover:bg-orange-50 transition"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Register</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={registerData.name}
              onChange={handleRegisterChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
              onChange={handleRegisterChange}
              className="w-full mb-2 p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <button
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition w-full"
              onClick={handleRegister}
            >
              Register
            </button>
            <button
              className="mt-2 w-full px-6 py-2 rounded border border-orange-600 text-orange-600 hover:bg-orange-50 transition"
              onClick={() => setShowRegister(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
