const express = require("express");
// Grab router to add routes to
const router = express.Router()
// require models
const burger = require("../models/burger")
// Get route for homepage
router.get("/", function(req, res) {
    burger.all(function(data) {
        const burgersObj = {
            burgers: data
        };
        // Handlebars needs an object with a single key of burgers
        res.render("index", burgersObj)
    });
});
// Send back all burgers
router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
        res.json(data)
    });
});
// Create a new entry in the database
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "eaten"], [req.body.burger_name, false], function (result) {
        res.json({id: result.insertId});
    });
});
// Edit an entry in the database
router.put("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
    burger.update({eaten: req.body.eaten}, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});
// Remove an entry from the database **Not currently used by the front end, but allows for manual editing of the database via postman**
router.delete("/api/burgers/:id", function (req, res) {
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
})

// Export router with all routes above bound
module.exports = router;

