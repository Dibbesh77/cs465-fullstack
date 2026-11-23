const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET /api/trips - retrieve all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).lean();

    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(trips);
  } catch (err) {
    console.error('Error retrieving trips:', err);
    return res.status(500).json({ message: 'Database error' });
  }
};

// GET /api/trips/:tripCode - retrieve one trip
const tripsFindByCode = async (req, res) => {
  const tripCode = req.params.tripCode;

  if (!tripCode) {
    return res.status(400).json({ message: 'Trip code is required' });
  }

  try {
    const trip = await Trip.findOne({ code: tripCode }).lean();

    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    console.error('Error retrieving trip:', err);
    return res.status(500).json({ message: 'Database error' });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
