const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Use Helmet to secure Express headers
app.use(helmet());

// Use Morgan to log HTTP requests
app.use(morgan('combined'));

module.exports = app;
