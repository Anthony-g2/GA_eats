var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Tip = require('./tip')

var RestaurantSchema = new Schema({
  name: String,
  adress: String,
  typeOfFood: String,
  price:String,
  parking: Boolean,
  serevesAlcohol: Boolean,
  lateNight: Boolean,
  tags: [String],
  tip: [Tip.schema]
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
