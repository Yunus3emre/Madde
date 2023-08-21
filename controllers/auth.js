const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_TOKEN = 'yunusemreayan';
const Auth = require('../model/auth');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password should be at least 6 characters' });
        }

        const existingUser = await Auth.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'User Mail already registered' });
        }
        const existingUserMail = await Auth.findOne({ username });

        if (existingUserMail) {
            return res.status(409).json({ message: 'This user name already registered' });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = await Auth.create({
            username,
            email,
            password: passwordHash
        });

        const userToken = jwt.sign({ userId: newUser.id }, SECRET_TOKEN, { expiresIn: '1h' });

        res.status(201).json({
            status: 'OK',
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email
            },
            token: userToken
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during registration', error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Auth.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const userToken = jwt.sign({ userId: user.id }, SECRET_TOKEN, { expiresIn: '1h' });

        res.status(200).json({
            status: 'OK',
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            token: userToken
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
};

module.exports = { register, login };
