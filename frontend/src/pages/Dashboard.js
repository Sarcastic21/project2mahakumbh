import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.js';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [booking, setBooking] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/', { replace: true });
    } else {
      const apiUrl = process.env.REACT_APP_API_URL || 'https://pandey6backend.vercel.app/api';
  
      fetch(`${apiUrl}/bookings/get-booking`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch booking');
          }
          return response.json();
        })
        .then((data) => {
          setBooking(data);
        })
        .catch((error) => {
          console.error('Error fetching booking details:', error);
        });
    }
  }, [user, navigate]);
  

  const handleBookPackage = () => {
    navigate('/booking');
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  if (!user) {
    return null; // The useEffect will handle redirect
  }

  if (!booking) {
    return (
      <div className="pt-28 container min-h-screen mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="text-blue-700 font-medium">No Bookings Found</div>
          <p className="text-blue-600">You haven't made any bookings yet. Book your first package now!</p>
        </div>
        <button
          onClick={handleBookPackage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <span className="mr-2">📦</span>
          Book a Package
        </button>
      </div>
    );
  }

  return (
    <div className="pt-16 container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="text-gray-500 mt-1">Manage your travel bookings and explore new destinations</p>
        </div>
        <div className="mt-4 md:mt-0 space-x-2">
          <button
            onClick={handleBookPackage}
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center"
          >
            <span className="mr-2">➕</span>
            Book a Package
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
          >
            <span className="mr-2">🚪</span>
            Logout
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Current Package Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <span className="mr-2">📦</span>
              Current Package
            </h2>
            <p className="text-gray-500">Your active travel package details</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">{booking.package}</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <span className="mr-2">💰</span>
                ₹{booking.totalAmount.toLocaleString()}
              </p>
              <p className="flex items-center">
                <span className="mr-2">⏰</span>
                5 Days 4 Nights
              </p>
              <p className="flex items-center">
                <span className="mr-2">📅</span>
                {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Trip Highlights Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Trip Highlights</h2>
            <p className="text-gray-500">Key features of your package</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              All inclusive accommodation
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Guided tours included
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              Airport transfers
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              24/7 travel support
            </li>
          </ul>
        </div>

        {/* Travel Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Travel Status</h2>
            <p className="text-gray-500">Current booking status</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Booking Status</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Payment Status</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Paid
              </span>
            </div>
            <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
