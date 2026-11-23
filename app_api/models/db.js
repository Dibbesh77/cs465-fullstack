const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI ||
  'mongodb://127.0.0.1:27017/travlr';

// Monitor database connection events.
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to Travlr database');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Connect to MongoDB.
const connect = async () => {
  try {
    await mongoose.connect(dbURI, {
      serverSelectionTimeoutMS: 5000
    });
  } catch (err) {
    console.error('MongoDB initial connection failed:', err.message);
  }
};

// Close the connection gracefully.
const gracefulShutdown = async (message) => {
  try {
    await mongoose.connection.close();
    console.log(`MongoDB connection closed: ${message}`);
  } catch (err) {
    console.error('MongoDB shutdown error:', err);
  }
};

process.once('SIGINT', async () => {
  await gracefulShutdown('Application termination');
  process.exit(0);
});

process.once('SIGTERM', async () => {
  await gracefulShutdown('Application shutdown');
  process.exit(0);
});

connect();

// Register the Trip model.
require('./travlr');

module.exports = mongoose;
