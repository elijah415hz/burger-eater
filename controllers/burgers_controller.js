const express = require("express");
const router = express.Router()

const burger = require("../models/burger")

router.get("/", function(req, res) {
    burger.all(function(data) {
        res.json(data)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "eaten"], [req.body.burger_name, false], function (result) {
        res.json({id: result.insertId});
    });
});

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


module.exports = router;

