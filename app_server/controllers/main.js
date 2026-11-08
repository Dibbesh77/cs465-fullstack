// Module Two main-page controller. The static home page is served from public/.
// This controller also provides an MVC fallback when the index static file is absent.
const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
};

module.exports = { index };
