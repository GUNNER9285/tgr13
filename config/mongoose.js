var config = require('./config');
var mongoose = require('mongoose');

module.exports = function () {
    mongoose.set('debug', config.debug);
    //var db = mongoose.connect(config.mongoUri);
    //var db = mongoose.connect('mongodb://tgr13:silpakorn13@ds235775.mlab.com:35775/heroku_jm7p5fsc');
    var db = mongoose.connect('mongodb://heroku_wjq5hw7f:qa1p9074squ4fkeo5utqd26tr5@ds153593.mlab.com:53593/heroku_wjq5hw7f');
    require('../app/models/user.model');
    require('../app/models/exam.model');
    return db;
}