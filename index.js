const express = require('express');
const cors = require('cors');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js');
const Breweries = require('./routes/breweries.js');
const logging = require('./middleware/logging.js');



const app = express();
const PORT = 5000;

// Middleware
app.use(logging);
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Routes
app.use('/', Auth); // Example: Use '/register'as the prefix for authentication routes
app.use('/', Breweries); // Example: Use '/breweries' as the prefix for brewery-related routes

// Default route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the API" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// 404 route
app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// Connect to the database
db();

// Start the server
app.listen(process.env.PORT ||PORT, () => {
    console.log("Server listening on port: " + PORT);
});
