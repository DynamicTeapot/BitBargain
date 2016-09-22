var router = require('express').Router();
var itemController = require('../controllers/itemController');
var userController = require('../controllers/userController');

router.get('/items/categories', itemController.getCategories);
router.get('/items/:id');

//req.params.id

module.exports = router;