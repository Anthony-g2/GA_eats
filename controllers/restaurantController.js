var db = require('../models')

// GET /api/restaurants
function index(req, res) {
  // send back all restaurants as JSON
  db.Restaurant.find({}, function(err, allRestaurants){
    console.log(allRestaurants)
    res.json(allRestaurants);
  })
}

// POST /api/restaurants
function create(req, res) {
  // create an restaurant based on request body and send it back as JSON
  console.log('body', req.body);

  // split at comma and remove and trailing space
  var tags = req.body.tags.split(',').map(function(item) { return item.trim(); } );
  req.body.tags = tags;

  db.Restaurant.create(req.body, function(err, restaurant) {
    if (err) { console.log('error', err); }
    console.log(restaurant);
    res.json(restaurant);
  });
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
  db.Restaurant.findByIdAndRemove(req.params.restaurantId, function(err, restaurant){
    if(err){console.log('There has been an error:', err)}
    console.log('Deleting:', restaurant)
  })
}

// PUT or PATCH /api/restaurants/:restaurantId
function update(req, res) {
  // find one restaurant by id, update it based on request body,
  // and send it back as JSON
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
