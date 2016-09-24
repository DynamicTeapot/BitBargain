const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router/clientRouter');

const port = 9009 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('client'));
app.get('*', function(req, res){
  console.log('Trying to send index');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


app.use('/', router);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

