const express = require('express');
const router = express.Router();

const { 
  getShipmentByTrackingNumber, 
  updateShipmentStatus 
} = require('../controllers/trackingController');


const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/:trackingNumber', getShipmentByTrackingNumber);
router.patch('/admin/:trackingNumber', protect, adminOnly, updateShipmentStatus);

module.exports = router;