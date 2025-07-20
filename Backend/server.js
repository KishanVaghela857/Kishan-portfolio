// server.js (or backend/server.js)

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB URI
const MONGODB_URI = 'mongodb+srv://kishan:kishan@cluster0.z6t8aid.mongodb.net/Collage?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  textArea: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Route
app.post('/contact', async (req, res) => {
  try {
    const { name, email, textArea } = req.body;
    if (!name || !email || !textArea) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const contact = new Contact({ name, email, textArea });
    await contact.save();
    res.status(201).json({ message: 'Contact saved successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save contact.' });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
