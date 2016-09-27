var passport = require('passport');
var jwt = require('jwt-simple');

let strategies = {};

strategies.local = {
  login: (req, res) => {
    res.send(JSON.stringify('O K'));
  },
  signup: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
}

strategies.coinbase = {
  login: (req, res) => {
    console.log(req.session);
    res.session = req.session;
    res.redirect('/login');
  }
  //Only has login because we assume they can't sign up through coinbase on our site
}

strategies.fail = (req, res) => {
  res.sendStatus(401);
}


module.exports = strategies;
