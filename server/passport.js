var TwitterStrategy = require('passport-twitter').Strategy;
var Twit = require('twit');
// var client = require('./db/redisClient.js');
var User = require('./db/controllers/userController.js');
require('dotenv').config();


module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, { id: user.id, username: user.username });
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    done(null, id); // NOTE: not sure if this is how things should be...
  });

  passport.use(
    new TwitterStrategy({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callbackURL: 'http://127.0.0.1:1337/auth/callback'
      // NOTE you must use 127.0.0.1, not localhost
      // ALSO this must match the callback URL provided on apps.twitter.com settings page
    },

    function(token, tokenSecret, profile, done) {
      User.login(profile, token, tokenSecret)
        .then(() => done(null, profile))
        .catch(err => console.log(err));
    })
  );
};
