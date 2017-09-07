var db = require('../models');

//GET /api/restaurants/:restaurantId/tips
function index(req, res){
  // send back all tips for a restaurant selected by id as JSON
}
// POST '/api/restaurants/:restaurantId/tips'
function create(req, res) {
  // create a tip based on request body and send it back as JSON
}
//DELETE '/api/restaurants/:restaurantId/tips/:tipId'
function destroy(req, res){
  //delete a specific tip by id from a  specific restaurant by id
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
};
