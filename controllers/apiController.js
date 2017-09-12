function index(req, res) {
  res.json({
    message: "Welcome to GA Eats Sf! Here's what you need to know!",
    documentationUrl: "https://github.com/Anthony-g2/GA_eats/blob/master/README.md",
    baseUrl: "https://tranquil-woodland-73750.herokuapp.com/",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints",
      },
      {
        method: "GET",
        path: "/about",
        description: "Find out more more about this project",
      },
      {
        method: "GET",
        path: "/api/restaurants",
        description: "Get a list of all the restaurants in our database",
      },
      {
        method: "POST",
        path: "/api/restaurants",
        description: "Add a restaurant to our database",
      },
      {
        method: "GET",
        path: "/api/restaurants/:restaurantId",
        description: "Find one restaurant by id",
      },
      {
        method: "DELETE",
        path: "/api/restaurants/:restaurantId",
        description: "Remove a single restaurant from the database by id",
      },
      {
        method: "PUT",
        path: "/api/restaurants/:restaurantId",
        description: "Update a restaurant in the database with new data",
      },
      {
        method: "GET",
        path: "/api/restaurants/:restaurantId/tips",
        description: "Get a list of all the tips for a specific restaurant",
      },
      {
        method: "POST",
        path: "/api/restaurants/:restaurantId/tips",
        description: "Add a tip to a specific restaurant",
      },
      {
        method: "DELETE",
        path: "/api/restaurants/:restaurantId/tips/:tipId",
        description: "Delete a specific tip for a specific restaurant",
      },
    ]
  })
}

module.exports = {
  index: index,
}
