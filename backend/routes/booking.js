import express from 'express';
import Booking from '../models/Booking.js';  // Import the Booking model
import { verifyToken } from '../middlewares/authMiddleware.js';  // Assuming the file extension is .js

const router = express.Router();

// Create a new booking
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, phoneNumber, accommodationType, checkIn, adults, children, bookingPackage, price } = req.body;

    // Validate required fields
    if (!name || !phoneNumber || !accommodationType || !checkIn || !adults) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create a new booking and associate it with the user ID from the token
    const booking = new Booking({
      ...req.body,
      user: req.user.id, // The user ID extracted from the decoded JWT token
    });

    await booking.save(); // Save the booking to the database
    res.status(201).json({ message: 'Booking created successfully', booking }); // Send success response
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking', error: err.message }); // Send error response
  }
});

// Get user bookings
router.get('/get-bookings', verifyToken, async (req, res) => {
  try {
    // Fetch the user ID from the token (decoded)
    const userId = req.user.id; // req.user.id will be populated by verifyToken middleware

    // Find the bookings for the authenticated user
    const bookings = await Booking.find({ user: userId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }

    // Send the bookings in the response
    res.json(bookings); // Adjust this based on how your data is structured
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch booking details.' });
  }
});


export default router;
