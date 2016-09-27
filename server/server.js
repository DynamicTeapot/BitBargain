const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const clientRouter = require('./router/clientRouter');
const authRouter = require('./router/authRouter');
const passport = require('passport');

const port = 9009 || process.env.PORT;
const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/auth', authRouter);
app.use(express.static('client'));
app.use('/', clientRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

