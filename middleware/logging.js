const express = require('express');
const morgan = require('morgan');

const loggingMiddleware = morgan('combined');


module.exports = loggingMiddleware;