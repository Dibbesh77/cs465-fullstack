// Module Two travel controller: render the Travel page through Handlebars.
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways' });
};

module.exports = { travel };
