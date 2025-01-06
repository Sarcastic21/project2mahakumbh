    const express = require('express');
    const Booking = require('../models/Booking_');
    const { verifyToken } = require('../middlewares/authMiddleware'); // Import your verifyToken middleware

    const router = express.Router();

    // Get booking details for the logged-in user
    router.get('/get-booking', verifyToken, async (req, res) => {
    try {
        // Find the booking of the user using the user ID from the decoded token
        const booking = await Booking.findOne({ user: req.user._id }).populate('user', 'name email'); // Populate the user details as needed

        if (!booking) {
        return res.status(404).json({ message: 'No booking found for this user.' });
        }

        res.json(booking); // Send the booking details back
    } catch (error) {
        res.status(500).json({ message: 'Error fetching booking details', error });
    }
    });

    module.exports = router;
