const aws = require('aws-sdk');
const db = require('../db/model');


/**
 * @name addImage
 * @desc  Given a node Reqest and Response, with the request body containing an image, return a link
 *   to the uploaded image.
 * @param {Request} req - An express Request object.
 * @param {Result} res - An express Result object.
 */
function addImage(req, res) {
  console.log('request');
  console.log(req);
  res.send('Hi');
}


/**
 * @name getImage
 * @desc Given a
 * @param {} req -
 * @param {} res -
 * @return {}
 */
function getImage(req, res) {
  res.send('hi');
}

module.exports = {
  getImage: getImage,
  addImage: addImage
};
