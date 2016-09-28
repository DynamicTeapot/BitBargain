const router = require('express').Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const configPassport = require('../controllers/strategies');
const exSess = require('express-session');
const db = require('../db/model.js');

configPassport(passport);
passport.serializeUser((user, done) => {
  // This should reference user email
  console.log('serializeUser');
  if (user.profile  && user.profile.provider === 'coinbase') {
    done(null, {email: user.profile.emails[0].value, accessToken: user.accessToken, refreshToken: user.refreshToken});
  } else {
    done(null, {email: user, accessToken: null, refreshToken: null});
  }
});

passport.deserializeUser((obj, done) => {
  console.log('deserializeUser');
  db.users.getByEmail(obj.value || obj.email)
  .then(user => {
    done(null, {user: user[0], accessToken: obj.accessToken, refreshToken: obj.refreshToken});
  });
});


router
  .use(exSess({ secret: 'keyboard cat', name: 'bit.sid', resave: true, saveUninitialized: true }))
  .use(passport.initialize())
  .use(passport.session())
  .get('/auth/test', (req, res) => {console.log(req.user); res.send(JSON.stringify(req.user))})
  .get('/auth/failedLogin', authController.fail)
  .post('/auth/login/local', authController.local.login, passport.authenticate('local'), authController.success)
  .post('/auth/signup/local', authController.local.signup, passport.authenticate('local'), authController.success)
  .get('/auth/login/coinbase', passport.authenticate('coinbase'))
  .get('/auth/login/coinbase/callback', passport.authenticate('coinbase', { failureRedirect: '/login' }), authController.coinbase.login);


module.exports = router;
