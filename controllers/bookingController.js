const Booking = require('../models/Booking');
const Shipment = require('../models/Shipment');

exports.createBooking = async (req, res) => {
  try {
    const { sender, receiver, package } = req.body;

    const booking = await Booking.create({
      customerId: req.user._id, 
      sender,
      receiver,
      package,
      status: 'Pending',
    });

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create booking', error: error.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ customerId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('customerId', 'name email').sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const bookingId = req.params.id;

    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    if (status === 'Approved') {
      const trackingNumber = `TRK-${Math.floor(100000 + Math.random() * 900000)}`;

      await Shipment.create({
        bookingId: booking._id,
        trackingNumber,
        currentStatus: 'Approved',
        timeline: [
          { status: 'Booking Created', timestamp: booking.createdAt },
          { status: 'Approved by Admin', timestamp: new Date() }
        ]
      });

      booking.trackingNumber = trackingNumber; 
    }

    booking.status = status;
    await booking.save();

    res.status(200).json({ message: `Booking marked as ${status}`, booking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update status', error: error.message });
  }
};