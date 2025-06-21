// config/passport.js
const passport = require('passport');
const { Register } = require('../models');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                const username = email.split('@')[0];

                let user = await Register.findOne({ googleId: profile.id });
                if (!user) {
                    user = await Register.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email,
                        username,
                        password: bcrypt.hashSync('google_auth_dummy', 10),
                        photo: profile.photos[0].value,
                    });
                }
                done(null, user);
            } catch (err) {
                done(err, false);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await Register.findById(id);
    done(null, user);
});
