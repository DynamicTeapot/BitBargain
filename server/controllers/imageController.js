const aws = require('aws-sdk');
const db = require('../db/model');


aws.config.region = 'us-west-1';
const s3bucket = new aws.S3({ params: { Bucket: 'bitbargainbucket' } });


/**
 * @name addImage
 * @desc  Given a node Reqest and Response, with the request body containing an image, return a link
 *   to the uploaded image.
 * @param {Request} req - An express Request object.
 * @param {Result} res - An express Result object.
 */
function addImage(req, res) {
  console.log(req.files);
  res.status(201).send('Picture successfully uploaded.');
}


/**
 * @name uploadImageToS3
 * @desc Given a string 'name' representing the desired final name, a string 'path' representing
 *   the path to the image file on the filesystem, upload the image file to S3, and then call the
 *   callback with the result. Note that this is assuming you have your credentials stored in
 *   ~/.aws/credentials.
 * @param {string} name - A name to name the uploaded body.
 * @param {string} path - A path to a file on th filesystem.
 * @param {function} callback - A callback of the form (error, data) to call in the end.
 */
function uploadImageToS3(name, body, callback) {
  const params = { Key: name, Body: body };

  s3bucket.upload(params, callback);

  /*
  The data in the callback on success looks like: {
    ETag: '"f1f4973f36d950929d012419794cc7e5"',
    Location: `https://bitbargainbucket.s3-us-west-1.amazonaws.com/${name}`,
    key: `${name}`,
    Key: `${name}`,
    Bucket: 'bitbargainbucket'
  }
   The location element contains the link.
  */
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
