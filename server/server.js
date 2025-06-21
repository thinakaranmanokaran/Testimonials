const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

require('./config/passport');

const { connectDB } = require('./config');
const { userRouter, globalRouter, adminRouter, googleRouter } = require('./routes');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Session configuration
app.use(
    session({
        secret: 'some-secret-key',
        resave: false,
        saveUninitialized: false,
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', userRouter);
app.use('/api/public', globalRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', googleRouter);


// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
