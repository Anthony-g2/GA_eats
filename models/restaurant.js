var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TipSchema = new Schema({
  text: String,
  name: String,
  date: String,
});

var RestaurantSchema = new Schema({
  name: String,
  address: String,
  latitude: Number,
  longitude: Number,
  typeOfFood: String,
  price:String,
  parking: String,
  servesAlcohol: String,
  lateNight: String,
  tags: [String],
  tips: [TipSchema],
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
