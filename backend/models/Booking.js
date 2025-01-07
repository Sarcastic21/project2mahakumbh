import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  accommodationType: { type: String, required: true },
  checkIn: { type: String, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  bookingPackage: { type: String, required: true },  // Renamed package to bookingPackage
  price: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  payment: { type: Boolean, default: false },  // Payment status field
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;

