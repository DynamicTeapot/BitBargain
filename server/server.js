var express = require('express');

var app = express();
var port = 9009 || process.env.PORT;

app.listen(port, function(){
  console.log(`app is listening on ${port}`);
});