const secrets = require('../config/secrets');
const LocalStrategy = require('passport-local').Strategy;
const CoinbaseStrategy = require('passport-coinbase').Strategy;
// const client = require('coinbase').Client;

const configure = (passport) => {
  passport.use(new LocalStrategy(
    {
      usernameField: 'email'
    },
    (username, password, done) => {
      console.log('trying to use local Strategy');
      console.log(username, password);
      return done(null, username);
    }
  ));

  passport.use(new CoinbaseStrategy({
    clientID: secrets.coinbaseClient,
    clientSecret: secrets.coinbaseSecret,
    callbackURL: 'http://localhost:9009/auth/login/coinbase/callback',
    scope: ['user']
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, { profile, accessToken, refreshToken });
  }
));
};

module.exports = configure;
