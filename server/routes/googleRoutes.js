// routes/auth.js
const express = require('express');
const passport = require('passport');
const googleRouter = express.Router();

// Start Google login
googleRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback URL
googleRouter.get('/google/callback', passport.authenticate('google', {successRedirect: `${process.env.VITE_API_URL}/dashboard`, failureRedirect: `${process.env.VITE_API_URL}/register`,}));

// Logout
googleRouter.get('/', (req, res) => {req.logout(() => { res.redirect(`${process.env.VITE_API_URL}`);});});

// Current user
googleRouter.get('/user', (req, res) => {res.send(req.user);});

module.exports = googleRouter;
