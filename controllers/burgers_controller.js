// Dependencies

// Express NPM
var express = require("express");

// Burger model
var burger = require("../models/burger.js");

// Create router
var router = express.Router();

// Create routes
router.get("/", function(req, res) {

    // res.render("index");

    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    // How to assign boolean value to object without corresponding submisison field?
    burger.create(["name", false], [req.body.burger, req.body.devoured], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
            burger: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});







// Export routes for server.js
module.exports = router;