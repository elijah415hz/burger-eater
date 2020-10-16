// Require express
var express = require("express");
var app = express();

// Set port for local and deployed
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main", helpers: {
    plusOne: function (value, options) { // Helper function to add 1 to @index to number burgers
      return parseInt(value) + 1;
    }
  }
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start listening
app.listen(PORT, function () {
  // Log (server-side) when server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
