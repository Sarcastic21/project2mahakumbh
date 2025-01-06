// models/User.js
const mongoose = require('mongoose');

const booking2= new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  accommodationType: { type: String, required: true },
  checkIn: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true }
});

const Booking2 = mongoose.model('Booking2', booking2);
module.exports = Booking2;
