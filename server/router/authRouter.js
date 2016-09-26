var router = require('express').Router();
var itemController = require('../controllers/itemController');
var userController = require('../controllers/userController');
var passport = require('passport');


router
  .get('/items/categories', itemController.getCategories)
  .get('/items/:id', itemController.getItem)
  .post('/items/:id/buy', itemController.buyItem, userController.updateUser)
  .post('/items/:id/sell', itemController.soldItem, userController.updateUser)
  .get('/items/:id/shipped', itemController.shippedItem)
  .put('/items/:id/update', itemController.updateItem)
  .delete('/items/:id', itemController.deleteItem, userController.updateUser);

//req.params.id

module.exports = router;