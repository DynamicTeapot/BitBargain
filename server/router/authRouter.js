const router = require('express').Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const configPassport = require('../controllers/strategies');
const exSess = require('express-session');

configPassport(passport);
passport.serializeUser((user, done) => {
  // This should reference user email
  console.log(user);
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // db.findbyId({where: {email: obj.email}})
  console.log(obj);
  done(null, obj);
});


router
  .use(exSess({ secret: 'keyboard cat', name: 'bit.sid', resave: true, saveUninitialized: true }))
  .use(passport.initialize())
  .use(passport.session())
  .get('/auth/failedLogin', authController.fail)
  .get('/auth/login/local', passport.authenticate('local', { failureRedirect: '/auth/failedLogin' }), authController.local.login)
  .post('/auth/signup/local', authController.local.signup, passport.authenticate('local'))
  .get('/auth/login/coinbase', passport.authenticate('coinbase'))
  .get('/auth/login/coinbase/callback', passport.authenticate('coinbase', { failureRedirect: '/login' }), authController.coinbase.login);


module.exports = router;
