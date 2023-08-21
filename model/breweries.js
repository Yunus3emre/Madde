const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    brewery_type: {
        type: String,
        required: true,
        trim: true,
    },
    address_1: String,
    address_2: String,
    address_3: String,
    city: String,
    state_province: String,
    postal_code: String,
    country: String,
    longitude: String,
    latitude: String,
    phone: String,
    website_url: String,
    state: String,
    street: String,
});

module.exports = mongoose.model('Brewery', BrewerySchema);
