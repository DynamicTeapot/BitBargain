var items = require('./dummyItems.js');


/**
 * @name search
 * @desc Given a Request req and a Result res, perform a search and retrun it to res. 
 * @param {Request} req - A Request object.
 * @param {Result} res - A Result object. 
 * @return {undefined}
 */
var search = function(req, res) {
  console.log(`There was a query: '${req.params.q}'`);    // DEBUG
  if(!req.params || !req.params.q) {
    res.status(400).send('Must specify a search query.');
  } else {
    res.json(items);
  }
};


module.exports = search;

