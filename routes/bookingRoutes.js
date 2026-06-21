const express = require('express');
const router = express.Router();
const { 
  createBooking, 
  getMyBookings, 
  getAllBookings, 
  updateBookingStatus 
} = require('../controllers/bookingController');


const { protect, adminOnly } = require('../middleware/authMiddleware');

router.post('/', protect, createBooking);
router.get('/my-bookings', protect, getMyBookings);

router.get('/admin/all', protect, adminOnly, getAllBookings);
router.patch('/admin/:id/status', protect, adminOnly, updateBookingStatus);

module.exports = router;