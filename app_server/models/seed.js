const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Trip = require('./travlr');

const dbURI = process.env.MONGODB_URI ||
  'mongodb://127.0.0.1:27017/travlr';

async function seedDatabase() {
  try {
    const filePath = path.join(__dirname, '../data/trips.json');
    const trips = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB');

    // Clear existing sample trips before reloading the seed data.
    await Trip.deleteMany({});

    const insertedTrips = await Trip.insertMany(trips);

    console.log(`Successfully seeded ${insertedTrips.length} trips`);

    for (const trip of insertedTrips) {
      console.log(`${trip.code} | ${trip.name}`);
    }
  } catch (err) {
    console.error('Database seeding failed:', err);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB connection closed');
  }
}

seedDatabase();
