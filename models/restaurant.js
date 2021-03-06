var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Tip = require('./tip')

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
  tips: [Tip.schema],
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
