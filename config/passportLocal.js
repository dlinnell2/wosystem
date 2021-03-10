const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('../models');

passport.serializeUser((user, done) =>
    done(null, user.id)
);

passport.deserializeUser((id, done) =>
    db.User.findById(id)
    .then((user) =>
        done(null, user)
    )
);

passport.use(new Strategy({passReqToCallback:true}, function(req, username, password, done){
    db.User.findOne({email: username})
    .then((user) => {
        console.log(user)
    })
}))