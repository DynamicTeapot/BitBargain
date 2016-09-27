const router = require('express').Router();
const itemController = require('../controllers/itemController');
const userController = require('../controllers/userController');
const search = require('../search/search.js');
const passport = require('passport');

//General Routes for nothing specific

router
  .get('/items/categories', itemController.getCategories)
  .get('/items/:id', itemController.getItem)
  .post('/items/:id/buy', itemController.buyItem, userController.updateUser)
  .post('/items/:id/sell', itemController.soldItem, userController.updateUser)
  .get('/items/:id/shipped', itemController.shippedItem)
  .put('/items/:id/update', itemController.updateItem)
  .delete('/items/:id', itemController.deleteItem, userController.updateUser);

//Search routes

router
  .get('/api/search/:q/:cat?', search);

//Routes that need coinbase authentication

router
  .get('/sell', passport.authenticate('coinbase', {failureRedirect: '/login'}));



module.exports = router;
