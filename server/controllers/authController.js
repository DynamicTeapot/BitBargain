// const passport = require('passport');
// const jwt = require('jwt-simple');
const db = require('../db/model');
const bcrypt = require('bcrypt');


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
  signup: (req, res, next) => {
    bcrypt.hash(req.query.password, 5, (err, hash) => {
      db.users.create({ email: req.query.email, password: hash })
      .then((data) => {
        console.log(data);
        res.send(JSON.stringify('O K'));
      });
    });
  }
};

strategies.coinbase = {
  login: (req, res) => {
    db.users.getByEmail(req.user.profile.emails[0])
    .then((data) => {
      db.users.create({ username: req.user.profile.displayName, email: req.user.profile.emails[0], coinbase_id: req.user.profile.id });
      res.redirect('/');
    });
  }
  // Only has login because we assume they can't sign up through coinbase on our site
};

strategies.fail = (req, res) => {
  res.sendStatus(401);
};


module.exports = strategies;
