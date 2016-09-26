var secrets = require('../config/secrets');
var LocalStrategy = require('passport-local');
var CoinbaseStrategy = require('passport-coinbase');

var configure = function(passport) {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      return done(null, user);
    }
  ));

//   passport.use(new CoinbaseStrategy.Strategy({
//     clientID: secrets.coinbaseid,
//     clientSecret: secrets.coinbasesecret,
//     callbackURL: "http://127.0.0.1:9009/auth/login/local"
//   },
//   (accessToken, refreshToken, profile, done) => {

//   }
// ));
}

module.exports = configure;