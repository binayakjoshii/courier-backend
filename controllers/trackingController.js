const Shipment = require('../models/Shipment');

// @desc    Get shipment details by tracking number (Public)
// @route   GET /api/track/:trackingNumber
exports.getShipmentByTrackingNumber = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const shipment = await Shipment.findOne({ trackingNumber })
      
      .populate({
        path: 'bookingId',
        select: 'receiver.name package status createdAt',
      });

    if (!shipment) {
      return res.status(404).json({ message: 'Invalid tracking number. Package not found.' });
    }
    res.status(200).json(shipment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update Shipment Status (Admin)
// @route   PATCH /api/track/admin/:trackingNumber
exports.updateShipmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { trackingNumber } = req.params;

    const shipment = await Shipment.findOne({ trackingNumber });
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });

    shipment.currentStatus = status;
    shipment.timeline.push({ status, timestamp: new Date() });
    
    await shipment.save();
    
    res.status(200).json({ message: `Shipment updated to ${status}`, shipment });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update shipment', error: error.message });
  }
};