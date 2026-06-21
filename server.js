const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// --- ROUTES ---
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);


 const trackingRoutes = require('./routes/trackingRoutes');
 app.use('/api/track', trackingRoutes);


// Basic Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'Courier System API is running smoothly' });
});

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error.message);
  });