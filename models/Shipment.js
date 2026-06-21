const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking',
      required: true,
    },
    trackingNumber: {
      type: String,
      required: true,
      unique: true, 
    },
    currentStatus: {
      type: String,
      enum: ['Pending', 'Approved', 'In Transit', 'Delivered'],
      default: 'Approved',
    },
    timeline: [
      {
        status: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shipment', shipmentSchema);