const router = require('express').Router();
const itemController = require('../controllers/itemController');
// const userController = require('../controllers/userController');
const search = require('../search/search.js');
const passport = require('passport');
const images = require('../controllers/imageController');
const multer = require('multer');


// Multer is middlewhere that makes file upload easy.
const upload = multer({
  dest: `${__dirname}/../../client/public/`,
  limits: {
    fileSize: 1000000,
    files: 10
  }
});

// General Routes for nothing specific

router
  .get('/items/categories', itemController.getCategories)
  .get('/items/:id', itemController.getItem)
  .post('/items/:id/buy', passport.authenticate('coinbase', { failureRedirect: '/login' }), itemController.buyItem)
  .post('/items/sell', itemController.sellItem)
  .get('/items/:id/shipped', itemController.shippedItem)
  .put('/items/:id/update', itemController.updateItem)
  .delete('/items/:id', itemController.deleteItem)
  .get('/disputes', itemController.getDisputes)
  .post('/disputes', itemController.resolveDisputes)
  .post('/disputes/:id', itemController.startDispute)

  // Images Routes
  .post('/images/:id', upload.single('item'), images.addImage)
  .get('images/:id/:number', images.getImage);


// Search routes

router
  .get('/api/search/:q/:cat?', search);

module.exports = router;
