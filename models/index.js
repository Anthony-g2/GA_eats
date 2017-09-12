var mongoose = require ("mongoose");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/ga-eats", {useMongoClient: true});

mongoose.Promise = global.Promise;  // use native Promise

module.exports.Restaurant = require("./restaurant")
