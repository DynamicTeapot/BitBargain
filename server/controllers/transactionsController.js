const db = require('../db/model');

module.exports = {
  findUserRole(req, res) {
    db.users.getByEmail(req.params.email)
    .then(user => Promise.all([user[0], db.transactions.getByItemId(req.params.id)]))
    .then((result) => {
      console.log(result);
      if (result[1].length > 0) {
        if (result[1].user_id === result[0].id) {
          res.json({ role: 'user' });
        }
        if (result[1].seller_id === result[0].id) {
          res.json({ role: 'seller' });
        }
      } else {
        res.json({ role: 'guest' });
      }
    });
  }
};
