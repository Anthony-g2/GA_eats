var db = require("./models")

var restaurantList = [];
restaurantList.push({
  name: "Curry Up Now",
  address: "255 Bush St San Francisco, CA 94104",
  typeOfFood: "Indian",
  price:"$",
  parking: false,
  servesAlcohol: false,
  lateNight: false,
  tags: ["Busy", "Fresh"],
  tips: [
    {
      text:"This place is the shit",
      name:"Anthony",
      date:"Sept. 9th, 2017 ",
    },
    {
      text:"There was curry in my burrito",
      name:"Bill",
      date:"Oct. 18th 2016",
    },
  ],
});

restaurantList.push({
  name: "Sushirrito",
  address: "226 Kearny St San Francisco, CA 94108",
  typeOfFood: "Japanese",
  price: "$$",
  parking: false,
  servesAlcohol: true,
  lateNight: false,
  tags: ["Busy", "Fresh"],
  tips: [
    {
      text:"It's like sushi but bigger",
      name:"Alice",
      date:"Jan. 12th, 2017 ",
    },
    {
      text:"There was sushi in my burrito",
      name:"Bill",
      date:"Oct. 19th 2016",
    },
  ],
});

restaurantList.push({
  name: "Taqueria Estrella",
  address: "380 Bush St Ste 5 International Food Ct San Francisco, CA 94104",
  typeOfFood: "Mexican",
  price:"$",
  parking: false,
  servesAlcohol: false,
  lateNight: false,
  tags: ["Friendly", "Fresh"],
  tips: [
    {
      text:"It all seems really authentic",
      name:"Jack",
      date:"May 23rd, 2017 ",
    },
    {
      text:"There was burrito in my burrito",
      name:"Bill",
      date:"Oct. 20th 2016",
    },
  ],
});

restaurantList.push({
  name: "Lite Bite",
  address: "220 Bush St San Francisco, CA 94104",
  typeOfFood: "Healthy",
  price:"$",
  parking: false,
  servesAlcohol: false,
  lateNight: false,
  tags: ["Friendly", "Fresh"],
  tips: [
    {
      text:"The staff are lovely here and they're genuinely excited to talk about their menu.",
      name:"Jessy",
      date:"Sept. 1st, 2017 ",
    },
    {
      text:"They don't sell burritos",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});

restaurantList.push({
  name: "Pagan Idol",
  address: "375 Bush St San Francisco, CA 94104",
  typeOfFood: "Tiki Bar",
  price:"$$",
  parking: false,
  servesAlcohol: true,
  lateNight: true,
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"They put so much effort into this vibe and they are doing it right!",
      name:"Amanda",
      date:"Aug. 3rd, 2017 ",
    },
    {
      text:"Coundn't get my afternoon burritto so I came here to drown my sorrows, drinks were good!",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});
restaurantList.push({
  name: "City Counter",
  address: "115 Sansome St San Francisco, CA 94104",
  typeOfFood: "Sandwiches",
  price:"$$",
  parking: false,
  servesAlcohol: true,
  lateNight: false,
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"A modern spin on the best diner you've ever been to!",
      name:"Amanda",
      date:"Aug. 27th, 2017 ",
    },
    {
      text:"so excited to try this.  staff seemed nice.  ended up getting the tri tip sandwhich, took the first bite and bit right into this one with the meat being super red and uncooked.",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});
restaurantList.push({
  name: "Katsu House",
  address: "112 Waverly Pl San Francisco, CA 94104",
  typeOfFood: "Sushi Bars",
  price:"$$",
  parking: true,
  servesAlcohol: false,
  lateNight: false,
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"Very well present spot. Love the decoration inside out! The food is very good and tasty. Perfect place to get a mid day snack too. Highly recommend!",
      name:"Amanda",
      date:"Aug. 30th, 2017 ",
    },
    {
      text:"Super fresh food in a neighborhood that desperately needs nutritious, non-oily food. The humble exterior belies the efficient, clean service within.",
      name:"Bill",
      date:"Jul. 26th 2017",
    },
  ],
});


db.Restaurant.remove({}, function(err, restaurants){
  db.Restaurant.create(restaurantList, function(err, restaurants){
    if (err) {
      return console.log('ERROR', err);
    };
    console.log("all resturants:", restaurants);
    console.log( "restaurants have been created.", restaurants.length);
    process.exit();
  });
});
