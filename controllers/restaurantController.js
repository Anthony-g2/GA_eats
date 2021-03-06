var db = require('../models')

var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  apiKey: 'AIzaSyDVMk-QXI6cqgt6DLMG0NNW-1uF_X78sjY',
}

var geocoder = NodeGeocoder(options);

function index(req, res) {
  // send back all restaurants as JSON
  db.Restaurant.find({}, function(err, allRestaurants){
    res.json(allRestaurants);
  });
}

// POST /api/restaurants
function create(req, res) {
  // create an restaurant based on request body and send it back as JSON

  var tagsFormatted = req.body.tags.split(',').map(function(item) { return item.trim(); } );
  req.body.tags = tagsFormatted || req.body.tags;
  geocoder.geocode(req.body.address, function(err, response) {


    db.Restaurant.create({
      name: req.body.name,
      latitude: response[0].latitude,
      longitude: response[0].longitude,
      address: response[0].formattedAddress,
      price: req.body.price,
      typeOfFood: req.body.typeOfFood,
      parking: req.body.parking || "No",
      servesAlcohol: req.body.servesAlcohol || "No",
      lateNight: req.body.lateNight || "No",
      tags: req.body.tags,

    }, function(err, createdRestaurant) {
      res.send(createdRestaurant);
    });

  })
}

// GET /api/restaurants/:restaurantId
function show(req, res) {
  // find one restaurant by id and send it back as JSON
  db.Restaurant.findById(req.params.restaurantId, function( err, foundRestaurant){
    if(err){console.log("Something didn't work, error:", err);}
    res.json(foundRestaurant);
  });
}

// DELETE /api/restaurants/:restaurantId
function destroy(req, res) {
  // find one restaurant by id, delete it, and send it back as JSON
  db.Restaurant.findByIdAndRemove(req.params.restaurantId, function(err, restaurant){
    if(err){console.log('There has been an error:', err)}
    console.log('Deleting:', restaurant)
  });
}

// PUT or PATCH /api/restaurants/:restaurantId
function update(req, res) {
  // find one restaurant by id, update it based on request body, and send it back as JSON
  db.Restaurant.findById(req.params.id, function(err, foundRestaurant) {
    if (err) { console.log('restaurantController.update error', err); }
    foundRestaurant.name = req.body.name;
    foundRestaurant.address = req.body.address;
    foundRestaurant.typeOfFood = req.body.typeOfFood;
    foundRestaurant.price = req.body.price;
    foundRestaurant.parking = req.body.parking;
    foundRestaurant.servesAlcohol = req.body.servesAlcohol;
    foundRestaurant.lateNight = req.body.lateNight;
    foundRestaurant.tags = req.body.tags;

    foundRestaurant.save(function(err, savedRestaurant) {
      if (err) { console.log('saving altered restaurant failed'); }
      res.json(savedRestaurant);
    });
  });
}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
};
