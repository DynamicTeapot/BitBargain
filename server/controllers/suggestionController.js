const db = require('../db/model');


// TODO: Make recommendations work for everyone. Maybe just give whoever is logged in
//   trending things or something.
// TODO: Is this going to be a security threat or something? Are we checking everything
//   to make sure it's from the correct user?


/**
 * @name getRecent
 * @desc Given a request and response, send the user recommendations.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express responde object.
 */
function getRecent(req, res) {
  if (req.user && req.user.user && req.user.user.id) {
    db.track_user.getRecent(req.user.user.id)
      .then(rows => res.json(rows))
      .catch((e) => {
        res.json({});
        console.error(e);
      });
  } else {
    res.status(400).send('A user must be logged in to get suggestions');
  }
}


/**
 * @name getSuggestions
 * @desc Given a request and response, send the user recommendations.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express responde object.
 */
function getSuggestions(req, res) {
  if (req.user && req.user.user && req.user.user.id) {
    db.track_user.getSimilar(req.user.user.id)
      .then(rows => res.json(rows))
      .catch((e) => {
        res.json({});
        console.error(e);
      });
  } else {
    res.status(400).send('A user must be logged in to get suggestions');
  }
}


module.exports = {
  getRecent: getRecent,
  getSuggestions: getSuggestions
};
