var db = require('../models')

// GET /api/restaurants
function index(req, res) {
  // send back all restaurants as JSON
  db.Restaurant.find(), function(err, allRestaurants){
    res.json(allRestaurants);
  }
}

// POST /api/restaurants
function create(req, res) {
  // create an restaurant based on request body and send it back as JSON
}

// GET /api/restaurants/:restaurantId
function show(req, res) {
  // find one restaurant by id and send it back as JSON
  db.Restaurant.findById(req.params.restaurantId, function( err, foundRestaurant){
    if(err){console.log("Something didn't work, error:", err);}
    res.json(foundRestaurant);
  })
}

// DELETE /api/restaurants/:restaurantId
function destroy(req, res) {
  // find one restaurant by id, delete it, and send it back as JSON
  db.Director.findByIdAndRemove(req.params.restaurantId, function(err, restaurant){
    if(err){console.log('There has been an error:', err)}
    console.log('Deleting:', restaurant)
  })
}

// PUT or PATCH /api/restaurants/:restaurantId
function update(req, res) {
  // find one restaurant by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
};
