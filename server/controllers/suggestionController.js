const db = require('../db/model');


// TODO: Make recommendations work for everyone. Maybe just give whoever is logged in
//   trending things or something.


/**
 * @name getRecent
 * @desc Given a request and response, send the user recommendations.
 * @param {Object} req -
 * @param {Object} res -
 */
function getRecent(req, res) {
  if (req.user && req.user.user && req.user.user.id) {
    db.track_user.getRecent(req.user).then(rows => res.json(rows));
  } else {
    res.status(400).send('A user must be logged in to get suggestions');
  }
}


module.exports.getRecent = getRecent;
