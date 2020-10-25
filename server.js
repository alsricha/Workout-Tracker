const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const compression = require('compression');

// Create express server
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger('dev'));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// compress all responses
app.use(compression());

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If deployed on heroku, use the deployed database. Otherwise use the local workout database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/workout';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require('./routes/api'));
app.use(require('./routes/view'));

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  
  console.log(`App Listening on: http://localhost:${PORT}`);
});