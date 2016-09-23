var Sequelize = require('sequelize');
if(process.env.URL){

} else {
  var url = require('../config/psqlconfig');
}

var sequelize = new Sequelize(url);
console.log(sequelize);