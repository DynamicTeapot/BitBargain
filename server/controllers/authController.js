// const passport = require('passport');
// const jwt = require('jwt-simple');
const db = require('../db/model');

const strategies = {};

strategies.local = {
  login: (req, res) => {
    console.log(req.body);
    db.users.getByEmail(req.body.email)
    .then((err, data) => {
      console.log(err, data);
      res.send(JSON.stringify('O K'));
    });
  },
  signup: (req, res) => {
    db.users.create()
    .then((err, data) => {
      console.log(err, data);
      res.send(req.body);
    });
  }
};

strategies.coinbase = {
  login: (req, res) => {
    db.users.create({ username: req.user.profile.displayName, email: req.user.profile.emails[0], coinbase_id: req.user.profile.id });
    res.redirect('/');
  }
  // Only has login because we assume they can't sign up through coinbase on our site
};

strategies.fail = (req, res) => {
  res.sendStatus(401);
};


module.exports = strategies;
