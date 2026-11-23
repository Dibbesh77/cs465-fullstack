// Travel controller: retrieve trip data from the REST API.
const travel = async (req, res) => {
  try {
    const apiURL = `http://127.0.0.1:${process.env.PORT || 3000}/api/trips`;
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const trips = await response.json();

    return res.render('travel', {
      title: 'Travlr Getaways',
      trips: trips
    });
  } catch (err) {
    console.error('Error loading trips from API:', err);

    return res.status(502).render('travel', {
      title: 'Travlr Getaways',
      trips: []
    });
  }
};

module.exports = { travel };
