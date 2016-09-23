var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router/clientRouter.js');
var app = express();

app.use(morgan('dev'));
app.use(express.static('client'));

var port = 9009 || process.env.PORT;

app.use('/', router);


app.listen(port, function() {
  console.log(`app is listening on ${port}`);
});