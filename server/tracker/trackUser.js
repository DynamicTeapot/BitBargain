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
  if (req.user && req.user.user && req.user.user.id) {
    const userId = req.user.user.id;
    const itemId = req.params.id;

    db.track_user.addRoute(userId, itemId);
  }
  next();
}


module.exports = trackUser;
