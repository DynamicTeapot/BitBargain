const aws = require('aws-sdk');
const db = require('../db/model');


aws.config.region = 'us-west-1';
const s3bucket = new aws.S3({ params: { Bucket: 'bitbargainbucket' } });


/**
 * @name addImage
 * @desc  Given a node Reqest and Response, with the request body containing an image, respond with
 *   a link to the uploaded image.
 * @param {Request} req - An express Request object.
 * @param {Result} res - An express Result object.
 */
function addImage(req, res) {
  // Read the image buffer from the request.
  const buf = new Buffer(req.body.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

  // Payload for AWS.
  const data = {
    Key: `images/${req.body.userId || 'test2'}`,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg'
  };

  s3bucket.putObject(data, (err, response) => {
    if (err) {
      console.error(err);
      res.status(400).send('There was a problem uploading the image.');
    } else {
      res.status(201).send(response.location);
    }
  });
}


module.exports = {
  addImage: addImage
};
