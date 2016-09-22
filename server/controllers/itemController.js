module.exports = {
  getCategories: function(req, res) {
    res.send('getCategories');
  },
  getItem: function(req, res) {
    console.log(req.params.id);
    res.send(req.params.id, 'getItem');
  },
  buyItem: function(req, res, next) {
    res.send('buyItem');
    next();
  },
  sellItem: function(req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id, "sellItem");
    next();
  }
}