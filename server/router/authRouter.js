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
  done(null, obj);
});


router
  .use(exSess({ secret: 'keyboard cat', name: 'bit.sid', resave: true, saveUninitialized: true}))
  .use(passport.initialize())
  .use(passport.session())
  .use((req, res, next) => {console.log(req.isAuthenticated()); next();});

router
  .get('/auth/failedLogin', authController.fail)
  .get('/auth/login/local', passport.authenticate('local', { failureRedirect: '/auth/failedLogin' }), authController.local.login)
  .post('/auth/signup/local', (req, res, next)=>{console.log(req.session); next();}, authController.local.signup)
  .get('/auth/login/coinbase', passport.authenticate('coinbase'))
  .get('/auth/login/coinbase/callback', passport.authenticate('coinbase', { failureRedirect: '/login' }), authController.coinbase.login);


module.exports = router;