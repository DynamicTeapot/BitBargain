const Sequelize = require('sequelize');
let url;
if(process.env.URL){
  url = process.env.URL;
} else {
  url = require('../config/psqlconfig');
}

var sequelize = new Sequelize(url);
console.log(sequelize);