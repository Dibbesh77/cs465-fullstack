const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Retrieve all trips
router.get('/trips', tripsController.tripsList);

// Retrieve one trip by its code
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;
