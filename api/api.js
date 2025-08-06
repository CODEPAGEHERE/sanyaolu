require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string - REPLACE WITH YOUR OWN
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('grannyDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for messages
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  avatar: String
});

// Create a model for messages
const Message = mongoose.model('Message', messageSchema);

// Define a schema for love count
const loveCountSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

// Create a model for love count
const LoveCount = mongoose.model('LoveCount', loveCountSchema);

// Route to send a message
app.post('/api/messages', async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.send(message);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to retrieve messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().exec();
    res.send(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to send love
app.post('/api/love', async (req, res) => {
  try {
    let loveCount = await LoveCount.findOne();
    if (!loveCount) {
      loveCount = new LoveCount({ count: 1 });
    } else {
      loveCount.count++;
    }
    await loveCount.save();
    res.send({ count: loveCount.count });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Route to retrieve love count
app.get('/api/love', async (req, res) => {
  try {
    let loveCount = await LoveCount.findOne();
    if (!loveCount) {
      loveCount = new LoveCount({ count: 0 });
      await loveCount.save();
    }
    res.send({ count: loveCount.count });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Export the Express app as a serverless function handler for Vercel
module.exports = app;

// For local development on port 3006
if (process.env.NODE_ENV !== 'production') {
  const port = 3006;
  app.listen(port, () => {
    console.log(`Backend server listening on http://localhost:${port}`);
  });
}