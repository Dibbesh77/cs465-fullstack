var express = require('express');
var router = express.Router();

// Express normally serves public/index.html directly.
// This fallback proves that Handlebars routing is available for Module Two.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Travlr Getaways' });
});

module.exports = router;
