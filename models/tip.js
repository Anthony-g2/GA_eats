var mongoose = require('mongoose'),
  Schema = mongoose.Schema;



var TipSchema = new Schema({
  text: String,
  name: String,
  date: String,
});

var Tip = mongoose.model('Tip', TipSchema);

module.exports = Tip;
