const db = require('../db/model');
const es = require('../search/elasticSearch');

module.exports = {
  getCategories(req, res) {
    db.items.getCategories()
    .then(result => res.status(200).send(result));
  },
  getItem(req, res) {
    db.items.getById(req.params.id)
      .then((result) => {
        res.json(result[0]);
      });
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
    es.deleteItem(req.params.id).catch(e => console.error(e));
    next();
  }
};
