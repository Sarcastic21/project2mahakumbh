const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('../backend/routes/auth');
const bookingRoutes = require('../backend/routes/booking');
const paymentRoutes = require('../backend/routes/payment');

// Initialize the app
const app = express();

// CORS options


 const allowedOrigins = [
  'https://premiumcity-9xrc.vercel.app/',
  'http://localhost:3000',

];
app.use(cors({
  origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, origin);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],

  credentials: true,
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payment', paymentRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ayush1:Ayush210704@cluster0.in8q5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
