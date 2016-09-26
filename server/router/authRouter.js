const router = require('express').Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const configPassport = require('../controllers/strategies');
configPassport(passport);
passport.serializeUser((user, done) => {
  console.log('HAHA');
  console.log(user);
  done(null, user);
});

passport.deserializeUser((id, done) => {
  console.log(id)
  done(err, 'user');
});


router
  .use(passport.initialize())
  .use(passport.session())
  .get('/failedLogin', authController.fail)
  .post('/login/local', passport.authenticate('local', { failureRedirect: '/auth/failedLogin' }), authController.local.login)
  .post('/signup/local', authController.local.signup)
  .post('/login/coinbase', passport.authenticate('coinbase'))
  .get('/login/coinbase/callback', passport.authenticate('coinbase', { failureRedirect: '/login' }), authController.coinbase.login)


module.exports = router;