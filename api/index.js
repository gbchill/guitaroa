// Import necessary packages and modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js'); // Import the User model
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Create an Express application
const app = express();

// Generate a salt for bcrypt and set the JWT secret
const becrypSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fjsklfsfjsalkfjsalkf';

// Set up middleware for parsing JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Enable CORS for the specified origin
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

// Connect to the MongoDB database using the provided URL
mongoose.connect(process.env.MONGO_URL);

// Define a test route to check if the server is running
app.get('/test', (req, res) => {
    res.json('test ok');
});

// Route for user registration
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Create a new user document in the database with hashed password
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, becrypSalt),
        });
        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }
});

// Route for user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        // Check if the provided password matches the hashed password in the database
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            // Generate a JWT token and set it as a cookie
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('Password does not match');
        }
    } else {
        res.json('User not found');
    }
});

// Route to retrieve user profile information
app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        // Verify the JWT token and fetch user data
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});

// Route for user logout, clears the token cookie
app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true);
});

// Start the Express server on port 4000
app.listen(4000);
