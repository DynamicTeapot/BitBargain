const db = require('../db/model');
const es = require('../search/elasticSearch');
const coinbase = require('coinbase');

module.exports = {
  getCategories(req, res) {
    db.items.getAllCategories()
    .then(result => res.status(200).send(result));
  },
  getItem(req, res) {
    db.items.getById(req.params.id)
      .then((result) => {
        res.json(result[0]);
      });
  },
  buyItem(req, res) {
    db.items.sold(req.params.id);
    db.items.getById(req.params.id)
    .then((product) => {
      console.log(product);
      // Product might be an array probably, so need to [0] need to test it out.
      res.json(product[0]);
      db.transactions.updateTransaction(product[0].id, { buyer_id: req.user.id })
      .then(() => {
        console.log('transaction successful');
      });
    });
  },
  sellItem(req, res) {
    console.log(req.body);
    console.log('this was called');
    db.items.create(req.body)
    .then((product) => {
      res.json(product);
      db.transactions.create({ item_id: product.id, buyer_id: null, seller_id: req.user.id })
      .then((trans) => {
        console.log(trans);
      });
    });
  },
  shippedItem(req, res) {
    res.send('shippedItem');
  },
  updateItem(req, res) {
    res.send('updateItem');
  },
  deleteItem(req, res) {
    es.deleteItem(req.param.id).catch(e => console.error(e));
    res.send('deleteItem');
  },
  sell(req, res) {
    const client = new coinbase.Client({ apiKey: req.user.accessToken, refreshToken: req.user.refreshToken });
    client.getAccounts({}, (err, accounts) => {
      console.log(accounts);
    });
  },
  getDisputes(req, res) {
    db.transactions.getAllDisputes()
    .then(data => {
      let rtg = data[Math.floor(Math.random()*data.length)];
      if(rtg){
        res.json(rtg);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  },
  startDispute(req, res) {
    db.transactions.updateTransaction(req.body.id, { order_status: 'disputed' })
    .then(result => res.send(result));
  },
  resolveDisputes(req, res) {
    req.body.polarity; // This is a boolean saying whether someone approved it or not. False means to seller, True means to buyer.
    // We should do something with it
    db.transactions.updateTransaction(req.body.id, {});
  }
};

