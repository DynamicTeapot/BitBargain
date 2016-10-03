const db = require('../db/model');

module.exports = {
  findUserRole(req, res) {
    if(req.isAuthenticated()){
      db.transactions.getByItemId(req.params.id)
      .then((result) => {
        if (result.length) {
          if (result[0].user_id === req.user.user.id) {
            res.json({ role: 'user' });
          }
          if (result[0].seller_id === req.user.user.id) {
            res.json({ role: 'seller' });
          }
        } else {
          res.json({ role: 'guest' });
        }
      });
    } else {
      res.json({ role: 'guest'});
    }
  }
};
