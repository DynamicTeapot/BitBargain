


/**
 * @name search
 * @desc Given a Request req and a Result res, perform a search and retrun it to res. 
 * @param {Request} req - A Request object.
 * @param {Result} res - A Result object. 
 * @return {undefined}
 */
var search = function(req, res) {
  res.status(200).send('hi');
};


module.exports = search;

