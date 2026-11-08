const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

// Mounted on /travel in the Express application.
router.get('/', ctrlTravel.travel);

module.exports = router;
