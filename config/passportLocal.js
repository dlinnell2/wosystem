const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');

passport.serializeUser((user, done) =>
    done(null, user._id)
);

passport.deserializeUser((id, done) =>
    db.User.findById(id)
        .then((user) =>
            done(null, user)
        )
);

passport.use(new Strategy({ passReqToCallback: true }, function (req, username, password, done) {
    db.User.findOne({ email: username }).select("+password")
        .then((user) => {
            bcrypt.compare(password, user.password, function (err, passwordEval) {
                if (err) console.error;
                if (passwordEval) {
                    console.log('password eval was correct');
                    done(null, user);
                    // res.redirect('/landing');
                } else {
                    console.log('password eval was incorrect');
                    // res.redirect('/');
                    done(null, user);
                }
            })
        })
}))