function index(req, res){
  res.json({
    name: "GA Eats SF",
    description: "Not Yelp",
    authors: "Jonathan M., Jimmy C., Anthony G.",
  });
}

module.exports = {
  index: index,
}
