// Dependencies

// Express NPM
var express = require("express");

// Burger model
var burger = require("../models/burger.js");

// Create router
var router = express.Router();

// Create routes
router.get("/", function(req, res) {

    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    console.log(req.body);

    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });


    // EXAMPLE WITHOUT DEFINING BOOLEAN COLUMN VALUE
    // burger.create(["burger_name"], [req.body.burger_name], function(result) {
    //     res.json({ id: result.insertId });
    // })
});

router.put("/api/burger/:id", function(req, res) {

    console.log(req.body);
    var condition = "item_id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
            devoured: req.body.devoured
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