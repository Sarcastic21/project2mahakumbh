import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';  // Adjusted the import path to use .js extension
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET ||
  "b017efd34a7ee993bdea34db845ce9a0e0d6e0ad4c0af51d6bff56fc3ffd892e";

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with user data and token
    res.status(201).json({
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the password matches the one stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token without 'role' in the payload
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    // Return the token, user email, and a success message
    res.status(200).json({
      token,
      user: { email: user.email, id: user._id }, // You can include more user details here as needed
      message: "Login successful"
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
});

export default router;  // Changed to ES module export