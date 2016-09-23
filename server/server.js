const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router/clientRouter');

const port = 9009 || process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('client'));


app.use('/', router);

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

