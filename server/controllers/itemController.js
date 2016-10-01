const db = require('../db/model');
const coinbase = require('coinbase');
const sendEmail = require('./send-email');

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
    console.log('here');
    console.log(req.params.id);
    db.items.getById(req.params.id)
    .then((product) => {
      // Product might be an array probably, so need to [0] need to test it out.
      db.transactions.updateTransaction(product[0].id, { buyer_id: req.user.user.id })
      .then(() => {
        db.items.sold(Number(req.params.id));
        console.log('transaction successful, transferring money');
        const client = new coinbase.Client({ accessToken: req.user.accessToken, refreshToken: req.user.refreshToken });
        var args = {
          "name": 'Order for ' + product[0].title,
          "amount": /*(Number(product[0].price))*/ 0.01,
          "metadata": {
            "customer_id": client.id,
            "customer_name": 'test'
          },
          "currency": "USD",
          "type": "order",
          "style": "custom_small",
          "success_url": `http://localhost:9009/items/` + req.params.id + `/confirm`,
          "cancel_url": 'http://localhost:9009/product/' + req.params.id,
          "customer_defined_amount": false,
          "collect_shipping_address": false,
          "description": "Purchasing: " + product[0].title + ' on BitBargain'
        };
        client.createCheckout(args, function(err, checkout) {
          console.log(err, checkout);
          res.json(checkout.embed_code);
        });
      });
    })
  },
  sellItem(req, res) {
    db.items.create(req.body)
    .then(product => {
      db.items.getById(product[0])
      .then(result => {
        res.json(result[0]);
        db.transactions.create({ item_id: result[0]['id'], buyer_id: null, seller_id: req.user.user.id });
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
    res.send('deleteItem');
  },
  boughtConfirmation(req, res) {
    db.transactions.getById(req.params.id)
    .then(tx => {
      db.users.getById(tx[0]['seller_id'])
      .then(seller => {
        //The email of the seller is seller[0]['email'];
        sendEmail(seller[0]['email']);
      });
    });
    res.redirect('/');
  },
  sell(req, res) {
    const client = new coinbase.Client({ accessToken: req.user.accessToken, refreshToken: req.user.refreshToken });
    client.getAccounts({}, (err, accounts) => {
      console.log(accounts);
    });
  },
  getDisputes(req, res) {
    db.transactions.getAllDisputes()
    .then((data) => {
      const rtg = data[Math.floor(Math.random() * data.length)];
      if (rtg) {
        res.json(rtg);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
  },
  startDispute(req, res) {
    db.transactions.updateTransaction(req.body.id, { order_status: 'disputed' })
    .then(result => res.send(result));
  },
  resolveDisputes (req, res) {
    req.body.polarity; // This is a boolean saying whether someone approved it or not. False means to seller, True means to buyer.
    // We should do something with it
    db.transactions.updateTransaction(req.body.id, {});
  }
};







