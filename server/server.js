var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router/clientRouter.js');
var app = express();

app.use(morgan('dev'));


var port = 9009 || process.env.PORT;

app.use('/', router);

// app.get('/', function(req, res){
//   res.send('Hello world');
// });

app.listen(port, function() {
  console.log(`app is listening on ${port}`);
});