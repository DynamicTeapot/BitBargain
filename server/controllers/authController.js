var passport = require('passport');

let strategies = {};

strategies.local = {
  login: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  },
  signup: (req, res) => {
    console.log(req.body);
    res.send(req.body);
  }
}

strategies.coinbase = {
  login: (req, res) => {
    console.log(req);
    res.send(req.body);
  }
  //Only has login because we assume they can't sign up through coinbase on our site
}

strategies.fail = (req, res) => {
  res.sendStatus(401);
}


module.exports = strategies;