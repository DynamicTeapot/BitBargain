const db = require('../db/model');
const es = require('../search/elasticSearch');
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
    db.items.getById(req.params.id)
    .then((product) => {
      // Product might be an array probably, so need to [0] need to test it out.
      db.transactions.updateTransaction(product[0].id, { buyer_id: req.user.user.id })
      .then(() => {
        db.items.sold(Number(req.params.id));
        const client = new coinbase.Client({ accessToken: req.user.accessToken, refreshToken: req.user.refreshToken });
        const args = {
          name: `Order for ${product[0].title}`,
          amount: /* (Number(product[0].price))*/ 0.01,
          metadata: {
            customer_id: client.id,
            customer_name: 'test'
          },
          currency: 'USD',
          type: 'order',
          style: 'custom_small',
          success_url: `http://${req.headers.host}/items/${req.params.id}/confirm`,
          cancel_url: `http://${req.headers.host}/items/${req.params.id}`,
          customer_defined_amount: false,
          collect_shipping_address: false,
          description: `Purchasing: ${product[0].title} on BitBargain`
        };
        client.createCheckout(args, (err, checkout) => {
          console.log(err, checkout);
          if (err) {
            res.json(`Error buying ${product[0].title}`);
          }
          res.json(checkout.embed_code);
        });
      });
    });
  },
  sellItem(req, res, next) {
    const newItem = req.body;

    const sellerId = (req.user ? req.user.user.id : 39);

    newItem.images = JSON.stringify(newItem.images);
    console.log('Creating new item,', newItem);
    db.items.create(newItem)
    .then(product => {
      db.items.getById(product[0])
      .then((result) => {
        const id = result[0].id;
        const transaction = { item_id: id, buyer_id: null, seller_id: sellerId };
        res.json(result[0]);
        console.log('Creating transaction, ', transaction);
        return db.transactions.create(transaction);
      })
      .catch(e => { console.log('Error getting item, ', e); next(e); });
    })
    .catch(e => { console.log('Error inserting item, ', e); next(e); });
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
  boughtConfirmation(req, res) {
    db.transactions.getById(req.params.id)
    .then((tx) => {
      db.users.getById(tx[0].seller_id)
      .then((seller) => {
        // The email of the seller is seller[0]['email'];
        sendEmail(seller[0].email);
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

  resolveDisputes(req, res) {
    req.body.polarity; // This is a boolean saying whether someone approved it or not. False means to seller, True means to buyer.
    // We should do something with it
    db.transactions.updateTransaction(req.body.id, {});
  }
};

