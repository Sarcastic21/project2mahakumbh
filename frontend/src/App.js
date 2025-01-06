import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BookingPage } from "./pages/BookingPage";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext"; // Custom hook for authentication
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./context/AuthContext";
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </Router>
    </ErrorBoundary>
  );
}

function AppContent() {
  const { user, loading } = useAuth();

  // Show loading spinner until loading is complete
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show alert for unauthenticated users trying to access protected pages
  const ProtectedRoute = ({ element }) => {
    if (!user) {
      alert("You need to log in to access this page.");
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Dashboard is protected, only accessible if user is logged in */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />

        {/* Protected Routes */}
        <Route
          path="/events"
          element={<ProtectedRoute element={<EventsPage />} />}
        />
        <Route
          path="/booking"
          element={<ProtectedRoute element={<BookingPage />} />}
        />

        {/* Public Routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;
