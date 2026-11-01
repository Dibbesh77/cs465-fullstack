// CS 465 Module One — Express application shell.
// Original Travlr Getaways HTML, CSS and images live in the public folder.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Express Generator's Handlebars setup; we'll build on this in Module Two.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve the supplied mockup HTML, stylesheet and images unchanged as static files.
// public/index.html takes precedence over the fallback route at "/".
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', function (req, res) {
  res.status(200).type('text/plain').send('Travlr Express server is running');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
