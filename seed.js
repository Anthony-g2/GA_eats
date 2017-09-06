var db = require("./models")

var restaurantList = [];
restaurantList.push({
  name: "Curry Up Now",
  addressls: "255 Bush St San Francisco, CA 94104",
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
  addressls: "226 Kearny St San Francisco, CA 94108",
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
  addressls: "380 Bush St Ste 5 International Food Ct San Francisco, CA 94104",
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
  addressls: "220 Bush St San Francisco, CA 94104",
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


db.Restaurant.remove({}, function(err, restaurants){
  db.Restaurant.create(restaurantList, function(err, restaurants){
    if (err) { return console.log('ERROR', err); }
    console.log("all resturants:", restaurants);
    console.log( restaurants.length, "restaurants have been created.");
    process.exit();
  });
});
