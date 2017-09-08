

$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax ({
    method: "GET",
    url: "/api/restaurants",
    success: loadRestaurants
  })
//Functionality of the domain

$('.create').on('submit', function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  console.log('formData', formData);
    $.post('/api/restaurants',formData, function(restaurant) {
      console.log('restaurant after POST', restaurant);
      $('.create')[0].reset();

    });

})

});

function loadRestaurants(restaurant) {
  restaurant.forEach(function(restaurant){
    renderRestaurant(restaurant);
  });
};

function renderRestaurant(restaurant) {
  
  console.log("Rendering Restaurants", restaurant);
  var restaurantHtml = (`<div class="jumbotron resShow">
            <img class="imgRest" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F14%2Ff0f9c1fd-615f-42fe-aa62-3ded5a49d228.jpg" alt="restaurant">
            <div style="
              width: auto;
              height: max-content;
            ">
              <div id='String-Data'>
                <ul>
                  <span id="larger">
                    <li style="
                      margin-left: -10px;
                      margin-bottom: 10px;
                    ">${restaurant.name}</li>
                  </span>
                  <span id="smaller">
                    <li>${restaurant.address}</li>
                    <li><em>${restaurant.typeOfFood}</em></li>
                  </span>
                </ul>
              </div>
              <div class='container' style="
                width: auto;
              ">
              <div id="Boolean-data" class="col-sm-6">
                <h4>Features</h4>
                <span class='col-sm-6'>
                  <p>${restaurant.price} - Price Range</p>
                </span>
                <span class='col-sm-6'>
                  <p>${restaurant.lateNight} - Open Late</p>
                </span>
                <span class='col-sm-6'>
                  <p>${restaurant.parking} - Parking</p>
                </span>
                <span class='col-sm-6'>
                  <p>${restaurant.servesAlcohol} - Serves Alcohol</p>
                </span>
              </div>
              <div id="tags" class="col-sm-6">
                <h4>Tags</h4>
                <ul class="inline-list">
                  <span class='col-sm-3'><li>Fun</li></span>
                  <span class='col-sm-3'><li>Crazy</li></span>
                  <span class='col-sm-3'><li>Lotta love</li></span>
                    <span class='col-sm-3'><li>Fun</li></span>
                    <span class='col-sm-3'><li>Crazy</li></span>
                    <span class='col-sm-3'><li>Lotta love</li></span>
              </div>
            </div>
            <div id="tips">
              <h4>Tips</h4>
              <p>"dont go dey suck"</p>
              <p>Anthony Greenwell. December 4th, 2016</p>
            </div>
            </div>
            <button type="button" name="close" class="resButt1 col-sm-2 btn-sm btn-group-sm btn-danger">Delete</button>
          </div>`)
          $('#results').append(restaurantHtml);
}
