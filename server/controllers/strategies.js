var secrets = require('../config/secrets');
var LocalStrategy = require('passport-local').Strategy;
var CoinbaseStrategy = require('passport-coinbase').Strategy;

var configure = (passport) => {
  passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
    (username, password, done) => {
      return done(null, username);
    }
  ));

  passport.use(new CoinbaseStrategy({
    clientID: secrets.coinbaseClient,
    clientSecret: secrets.coinbaseSecret,
    callbackURL: "http://localhost:9009/auth/login/coinbase/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile, done);
    done(null, profile);
  }
));
}

module.exports = configure;