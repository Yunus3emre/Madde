const express = require('express');
const {breweries} = require('../controllers/breweries.js')
const authorized = require('../middleware/auth.js')

const router = express.Router();

router.get('/breweries',authorized,breweries);


module.exports = router;