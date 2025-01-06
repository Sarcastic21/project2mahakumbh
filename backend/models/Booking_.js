import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  package: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  partialPayment: {
    type: Number,
    default: 0, // Amount paid as a partial payment
  },
  fullPayment: {
    type: Boolean,
    default: false, // Indicates if full payment is completed
  },
  status: {
    type: String,
    default: 'Pending',
  },
}, { timestamps: true });

export default mongoose.model('Booking', BookingSchema);