var mongoose = require ("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/"{useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise

module.exports.Restaurant = require("./Restaurant.js")
module.exports.Tip = require("./Tip.js")
