const db = require('../db/model');
const coinbase = require('coinbase');
var s3 = require('s3');

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
          "to": "julianknodt@gmail.com",
          "amount": /*(Number(product[0].price))*/ 0,
          "currency": "USD",
          "description": "Purchasing: " + product[0].title
        };
        console.log(Object.getOwnPropertyNames(client));
        client.getAccounts({}, (err, data) => {
          data[0].transferMoney(args, function(err, txn) {
            console.log(err, txn);
          });
        });
          // Need to find the user's accounts first, and then transfer money from them
          // account.requestMoney(args, function(err, txn) {
          //   console.log('my txn id is: ' + txn.id);
          // });

      });
    })
  },
  sellItem(req, res) {
    console.log(req.body);
    console.log('this was called');
    db.items.create(req.body)
    .then((product) => {
      db.items.getById(product[0])
      .then((result) => {
        console.log('Product is ', result[0]);
        res.json(result[0]);
      });

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
    res.send('deleteItem');
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







