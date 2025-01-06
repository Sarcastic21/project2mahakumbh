import jwt from 'jsonwebtoken';

const JWT_SECRET = 'b017efd34a7ee993bdea34db845ce9a0e0d6e0ad4c0af51d6bff56fc3ffd892e'; // Replace with your secret key

const verifyToken = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from 'Bearer <token>'

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    // Attach user ID from token to request object for future use
    req.user = { id: decoded.id }; // Assuming the decoded token contains 'id'
    next();
  });
};

export { verifyToken };