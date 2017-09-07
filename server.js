// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

/******************
 * HTML Endpoints *
 ******************/

 // Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */
app.get('/api', controllers.api.index);
app.get('/about', controllers.about.index);

app.get('/api/restaurants', controllers.restaurant.index);
app.post('/api/restaurants', controllers.restaurant.create);
app.get('/api/restaurants/:restaurantId', controllers.restaurant.show);
app.put('/api/restaurants/:restaurantId', controllers.restaurant.update);
app.delete('/api/restaurants/:restaurantId', controllers.restaurant.destroy);

app.get('/api/restaurants/:restaurantId/tips', controllers.tip.index);
app.post('/api/restaurants/:restaurantId/tips', controllers.tip.create);
app.delete('/api/restaurants/:restaurantId/tips/:tipId', controllers.tip.destroy);


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
