const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string - REPLACE WITH YOUR OWN
const mongoURI = process.env.MONGODB_URI 

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// A simple test route to ensure the API is working
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API is running successfully!' });
});

// We will add more API routes for hugs and comments here later...

// Export the Express app as a serverless function handler for Vercel
module.exports = app;