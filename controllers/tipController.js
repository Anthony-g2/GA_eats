var db = require('../models');

//GET /api/restaurants/:restaurantId/tips
function index(req, res){
  // send back all tips for a restaurant selected by id as JSON
  db.Restaurant.findById(req.params.restaurantId, function(err, foundRestaurant) {
    res.json(foundRestaurant.tips);
  });
}
// POST '/api/restaurants/:restaurantId/tips'
function create(req, res) {
  // create a tip based on request body and send it back as JSON
  db.Restaurant.findById(req.params.tipId, function(err, foundRestaurant) {

    // dangerous – in a real app, we'd validate the incoming data
    var newTip = new db.Tip(req.body);

    foundRestaurant.tips.push(newTip);
    foundRestaurant.save(function(err, savedRestaurant) {
      // responding with tip in JSON
      // some APIs may respond with parent obj as well (e.g. foundRestaurant)
      res.json(newTip);
    });
  });
}
//DELETE '/api/restaurants/:restaurantId/tips/:tipId'
function destroy(req, res){
  //delete a specific tip by id from a  specific restaurant by id
  db.Restaurant.findById(req.params.tipId, function(err, foundRestaurant) {
    console.log(foundRestaurant);
    // we've got the tip, now find the tip within it
    var correctTip = foundRestaurant.tips.id(req.params.tipId);
    if (correctTip) {
      correctTip.remove();
      // resave the tip now that the tip is gone
      foundRestaurant.save(function(err, saved) {
        console.log('REMOVED ', correctTip.name, 'FROM ', saved.tips);
        res.json(correctTip);
      });
    } else {
      res.send(404);
    }
  });
}

module.exports = {
  index: index,
  create: create,
  destroy: destroy,
};
