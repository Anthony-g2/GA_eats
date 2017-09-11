

$(document).ready(function() {
  console.log('app.js loaded!');

//on load get restaurants
  $.ajax ({
    method: "GET",
    url: "/api/restaurants",
    success: loadRestaurants
  })
//create a new restuarnt
  $('.create').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/restaurants',formData, function(restaurant) {
      console.log('restaurant after POST', restaurant);

      $('.create')[0].reset();
      renderRestaurant(restaurant);
    });
    $('.creMod').fadeOut(500);
  });

  //close button closes create form
  $('#closeCreateForm').on('click', function(e) {
    $('.creMod').fadeOut(500);
  });

  // delete a resturant from the list
  $('#results').on('click', '.resButt1', function(e) {
    var id = $(this).closest('.restaurant').data('restaurant-id');
    console.log('id', id);
    console.log('someone wants to delete restaurant id= ', id );
    $(this).closest('.restaurant').fadeOut(500);
    $.ajax({
      url: '/api/restaurants/' + id,
      method: 'DELETE',
      success: function(result){
        $('[data-restaurant-id=' + restaurantId +']')
      },
    });
  });

  $('.optButt').on('click', function(){
    $('.creMod').fadeIn(500);
  });
});
// formating for a restaurant on the page
function renderRestaurant(restaurant) {

  console.log("Rendering Restaurants", restaurant);


  var restaurantHtml = (`<div class="jumbotron resShow restaurant" data-restaurant-id=${ restaurant._id}>
  <img class="imgRest" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F14%2Ff0f9c1fd-615f-42fe-aa62-3ded5a49d228.jpg" alt="restaurant">
  <div style="
  width: 810px;
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
  <div class="col-sm-12 holdThis" style="
  max-width: inherit;
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
  <ul class="inline-list"><span class='col-sm-12'><li>${restaurant.tags}</li></span></ul>
  </div>
  </div>
  </div>
  <button type="button" name="close" class="resButt1 col-sm-2 btn-sm btn-group-sm btn-danger">Delete</button>
  </div>`)
  $('#results').append(restaurantHtml).fadeIn(600);
};


//load restaurant when page is loaded
function loadRestaurants(restaurant) {
  restaurant.forEach(function(restaurant){
    renderRestaurant(restaurant);
  });
};



// tips feature still being built
// return `<div id="tips">
//   <h4>Tips</h4>
//   <p>"${restaurant.tips[x].text}"</p>
//   <p>${restaurant.tips[x].name}. ${restaurant.tips[x].date}</p>
// </div>`;
