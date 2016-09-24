//const dbController = require('./dbController');

module.exports = {
  getCategories: function(req, res) {
    res.send('getCategories');
  },
  getItem: function(req, res) {
    console.log(req.params.id);
    res.send(req.params.id + " " + 'getItem');
  },
  buyItem: function(req, res, next) {
    console.log('buyItem');
    res.send('buyItem');
    next();
  },
  soldItem: function(req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id + " " + "soldItem");
    next(req, res);
  },
  sellItem: function(req, res, next) {
    res.send('sellItem');
    next(req, res);
  },
  shippedItem: function(req, res) {
    res.send('shippedItem');
  },
  updateItem: function(req, res) {
    res.send('updateItem');
  },
  deleteItem: function(req, res, next) {
    res.send('deleteItem');
    next();
  }
}