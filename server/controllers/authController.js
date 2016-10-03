// const passport = require('passport');
// const jwt = require('jwt-simple');
const db = require('../db/model');
const bcrypt = require('bcrypt');


const strategies = {};

strategies.local = {
  login: (req, res, next) => {
    db.users.getByEmail(req.body.email)
    .then((data) => {
      bcrypt.compare(req.body.password, data[0].password, (err, same) => {
        if (same) {
          next();
        } else {
          res.send(JSON.stringify('Incorrect Username or password'));
        }
      });
    })
    .catch((error) => {
      res.send(JSON.stringify(error.code));
    });
  },
  signup: (req, res, next) => {
    bcrypt.hash(req.body.password, 7, (err, hash) => {
      db.users.create({ email: req.body.email, password: hash })
      .then((data) => {
        next();
      })
      .catch((error) => {
        res.send(JSON.stringify(error.code));
      });
    });
  }
};

strategies.coinbase = {
  login: (req, res) => {
    db.users.getByEmail(req.user.profile.emails[0].value)
    .then((data) => {
      if (data[0]) {
        db.users.updateUser(req.user.profile.emails[0].value, { coinbase_id: req.user.profile.id })
        .then((result) => {
          console.log(result);
          res.redirect('/');
        })
        .catch((err) => {
          console.log(err);
          res.redirect('/');
        });
      } else {
        db.users.create({ username: req.user.profile.displayName, email: req.user.profile.emails[0], coinbase_id: req.user.profile.id })
        .then((result) => {
          console.log(result);
          console.log('User created successfully');
          res.redirect('/');
        })
        .catch((err) => {
          res.redirect('/');
        });
      }
    });
  }
  // Only has login because we assume they can't sign up through coinbase on our site
};

strategies.square = {
  login: (req, res) => {
    db.users.getByEmail(req.user.profile.emails[0].value)
    .then((data) => {
      if (data[0]) {
        db.users.updateUser(req.user.profile.emails[0].value, { square_id: req.user.profile.id })
        .then((result) => {
          console.log(result);
          res.redirect('/');
        })
        .catch((err) => {
          console.log(err);
          res.redirect('/');
        });
      } else {
        db.users.create({ username: req.user.profile.displayName, email: req.user.profile.emails[0], square_id: req.user.profile.id })
        .then((result) => {
          console.log(result);
          console.log('User created successfully');
          res.redirect('/');
        })
        .catch((err) => {
          res.redirect('/');
        });
      }
    });
  }
};

strategies.fail = (req, res) => {
  res.sendStatus(401);
};

strategies.success = (req, res) => {
  res.json(true);
};

strategies.persist = (req, res) => {
  if (req.user) {
    res.json(req.user.user.email);
  } else {
    res.send('');
  }
};

strategies.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};


module.exports = strategies;
