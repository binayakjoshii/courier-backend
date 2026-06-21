const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sender: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
    },
    receiver: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
    },
    package: {
      type: { type: String, required: true }, 
      weight: { type: Number, required: true },
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    }, 
    trackingNumber: { 
      type: String 
    } 
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);