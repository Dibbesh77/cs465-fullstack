// Travel controller: load trip data from JSON and render the Handlebars view.
const trips = require('../data/trips.json');

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travlr Getaways',
    trips: trips
  });
};

module.exports = { travel };
