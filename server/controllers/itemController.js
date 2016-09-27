const db = require('../db/model');

module.exports = {
  getCategories: function(req, res) {
    res.send('getCategories');
  },
  getItem: function(req, res) {
    var tmp = {
      id: 123,
      title: "Kitchen aid single wall oven",
      desc: "30 inch Kitchen aid single wall oven .(convection oven )  Never been used . Displayed in our model home . ",
      price: "$700",
      post: "2016-09-21  9:05pm",
      location: "$700",
      category: ["appliances", "by owner"],
      images: ['http://25.media.tumblr.com/1ed3f564cd07a5df56d845a49cc46281/tumblr_mg8k8zCiAW1qd7h1xo1_500.gif']
    };

    res.json(tmp);
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
