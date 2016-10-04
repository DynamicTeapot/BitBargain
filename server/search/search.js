// const items = require('./dummyItems.js');
const es = require('./elasticSearch');
const db = require('../db/model');


/**
 * @name search
 * @desc Given a Request req and a Result res, perform a search and retrun it to res.
 * @param {Request} req - A Request object.
 * @param {Result} res - A Result object.
 * @return {undefined}
 */
function search(req, res) {
  if (!req.params || !req.params.q) {
    res.status(400).send('Must specify a search query.');
  } else if (req.params.cat && req.params.cat.trim() !== '') {
    es.searchItems(req.params.q)
      .then((r) => {
        const final = [];

        r.forEach((item) => {
          final.push(item._id);
        });

        db.items.getByIds(final).then(f => res.json(f));
      })
      .catch((e) => {
        console.error(e);
        res.status(400).send('Could not complete request.');
      });
  } else {
    es.searchItems(req.params.q)
      .then((r) => {
        const final = [];

        r.forEach((item) => {
          final.push(item._id);
        });

        db.items.getByIds(final).then(f => {
          res.json(f)});
      })
      .catch((e) => {
        console.error(e);
        res.status(400).send('Could not complete request.');
      });
  }
}


module.exports = search;
