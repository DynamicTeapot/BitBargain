const nodemailer = require('nodemailer');
const secrets = require('../config/secrets');

var poolConfig = 'smtps://user%40gmail.com:pass@smtp.gmail.com/?pool=true';

var poolConfig = {
  pool: true,
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'codebay.sales@gmail.com',
    pass: secrets.emailPass
  }
};
const transporter = nodemailer.createTransport(poolConfig);


module.exports = (email, item) => {
  const mailOptions = {
    from: '<codebay.sales@gmail.com>', // sender address
    to: email, // list of receivers
    subject: 'Thank you 💕', // Subject line
    html: 'Your item has been purchased on BitBargain/codebay!<br/> Please check your profile to confirm transfer of the item. ✓<br/><a class="btn" href="http://bitbargains.online/">Go to BitBargain</a>'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
  });
};
