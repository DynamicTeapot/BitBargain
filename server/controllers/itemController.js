const db = require('../db/model');

module.exports = {
  getCategories(req, res) {
    db.items.getCategories()
    .then(result => res.status(200).send(result));
  },
  getItem(req, res) {
    console.log(req.params.id);
    db.items.getById(req.params.id)
    .then(result => res.status(200).send(result));
    // res.send(req.params.id + " " + 'getItem');
  },
  buyItem(req, res, next) {
    console.log('buyItem');
    db.items.sold(req.params.id)
    .then(() => res.send('buyItem'));
    next();
  },
  soldItem(req, res, next) {
    console.log(req.params.id);
    db.items.sold(req.params.id)
    .then(() => res.send(`${req.params.id} soldItem`));
    next(req, res);
  },
  sellItem(req, res, next) {
    res.send('sellItem');
    next(req, res);
  },
  shippedItem(req, res) {
    res.send('shippedItem');
  },
  updateItem(req, res) {
    res.send('updateItem');
  },
  deleteItem(req, res, next) {
    res.send('deleteItem');
    next();
  }
};
