// const passport = require('passport');
// const jwt = require('jwt-simple');
const db = require('../db/model');
console.log(db);

const strategies = {};

strategies.local = {
  login: (req, res) => {
    res.send(JSON.stringify('O K'));
  },
  signup: (req, res) => {
    res.send(req.body);
  }
};

strategies.coinbase = {
  login: (req, res) => {
    console.log(req.user);
    res.redirect('/');
  }
  // Only has login because we assume they can't sign up through coinbase on our site
};

strategies.fail = (req, res) => {
  res.sendStatus(401);
};


module.exports = strategies;
