const express = require('express');
const Booking = require('../models/Booking');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router();

// Create a new booking
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, phoneNumber, accommodationType, checkIn, adults, children } = req.body;

    // Validate required fields
    if (!name || !phoneNumber || !accommodationType || !checkIn) {
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
router.get('/get-booking', verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    console.log("booking", bookings);
    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user.' });
    }
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings', error: err.message });
  }
});

module.exports = router;