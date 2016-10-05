const db = require('../db/model');


/**
 * @name trackUser
 * @desc Track routes where the user has been.
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function trackUser(req, res, next) {
  console.log(req.user);
  next();
}


module.exports = trackUser;
