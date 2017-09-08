

$(document).ready(function() {
  console.log('app.js loaded!');

//   $.ajax({
//     method: 'GET',
//     url: '/api/restaurants',
//     json: true
//   });
//   .then(function(restaurants){
//     for(let i=0;i<restaurants.length;i++){
//       $('#restaurants').append(renderRestaurant(restaurants[i]));
//     }
//     $('#').submit(function(event){
//       event.preventDefault();
//       var cereal = $(this).serialize();
//       console.log(cereal);
//       $.ajax({
//         method: 'POST',
//         url:'#',
//         data: cereal,
//       })
//       .then(function(data){
//         $('#results').append(renderRestaurant(data));
//       })
//     })
//   })
// })

//Functionality of the domain

$('.create').on('submit', function(e) {
  e.preventDefault();
  var formData = $(this).serialize();
  console.log('formData', formData);
    $.post('/api/restaurants',formData, function(restaurant) {
      console.log('restaurant after POST', restaurant);
    });

})
});
// function renderRestaurant(restaurant) {
//   console.log('rendering restaurant:', restaurant);
//   return (`<div class="jumbotron resShow">
//                 <img class="imgRest" src="https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F14%2Ff0f9c1fd-615f-42fe-aa62-3ded5a49d228.jpg" alt="restaurant">
//                 <ul>
//                   <li>${restaurant.name}</li>
//                   <li>${restaurant.address}</li>
//                   <li>${restaurant.typeOfFood}</li>
//                 </ul>
//               </div>`)
//
// }
