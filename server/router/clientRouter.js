const router = require('express').Router();
const itemController = require('../controllers/itemController');
// const userController = require('../controllers/userController');
const search = require('../search/search.js');
const passport = require('passport');

// General Routes for nothing specific

router
  .get('/items/categories', itemController.getCategories)
  .get('/items/:id', itemController.getItem)
  .post('/items/:id/buy', passport.authenticate('coinbase', {failureRedirect: '/login'}), itemController.buyItem)
  .post('/items/sell', passport.authenticate('coinbase', {failureRedirect: '/login'}), itemController.sell)
  .get('/items/:id/shipped', itemController.shippedItem)
  .put('/items/:id/update', itemController.updateItem)
  .delete('/items/:id', itemController.deleteItem)
  .get('/disputes', itemController.getDisputes)
  .post('/disputes', itemController.resolveDisputes);

// Search routes

router
  .get('/api/search/:q/:cat?', search);

module.exports = router;
