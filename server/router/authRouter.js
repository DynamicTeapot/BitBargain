const router = require('express').Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const configPassport = require('../controllers/strategies');
const cookieParser = require('cookie-parser');
const exSess = require('express-session');

configPassport(passport);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log(obj);
  done(null, obj);
});


router
  .use(exSess({ secret: 'keyboard cat', name: 'bit.sid', resave: true, saveUninitialized: false , cookie: { secure: true }}))
  .use(passport.initialize())
  .use(passport.session())
  .get('/failedLogin', authController.fail)
  .get('/login/local', passport.authenticate('local', { failureRedirect: '/auth/failedLogin' }), authController.local.login)
  .post('/signup/local', authController.local.signup)
  .get('/login/coinbase', passport.authenticate('coinbase'))
  .get('/login/coinbase/callback', passport.authenticate('coinbase', { failureRedirect: '/login' }), authController.coinbase.login)


module.exports = router;