import express from 'express';
import Booking from '../models/Booking.js';  // Assuming the file extension is .js
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// POST route to create a new booking
router.post('/new-bookings', verifyToken, async (req, res) => {
  try {
    // Extract data from request body
    const {
      name,
      phoneNumber,
      accommodationType,
      checkIn,
      checkOut,
      adults,
      children
    } = req.body;

    // Validate required fields
    if (!name || !phoneNumber || !accommodationType || !checkIn || !checkOut) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate checkIn and checkOut dates
    if (new Date(checkIn) <= new Date()) {
      return res.status(400).json({ message: 'Check-in date must be in the future' });
    }
    if (new Date(checkOut) <= new Date(checkIn)) {
      return res.status(400).json({ message: 'Check-out date must be after check-in' });
    }

    // Validate phone number format (simple example)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number format' });
    }

    // Create a new booking
    const newBooking = new Booking({
      name,
      phoneNumber,
      accommodationType,
      checkIn,
      checkOut,
      adults,
      children
    });

    // Save the new booking to the database
    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error(error);  // Log error for debugging
    res.status(500).json({ message: 'Error creating booking', error: error.message });
  }
});

export default router;