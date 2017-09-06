var mongoose = require ("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/", {useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise

module.exports.Restaurant = require("./restaurant")

module.exports.Tip = require("./tip")
