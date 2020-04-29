var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput, columnVal) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableInput, columnVal], fucntion(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function(table, y) {
        // var queryString = "INSERT INTO ?? FROM ??"
        // connection.query(queryString, [tableInput, columnVal], fucntion(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        // });
    },

    updateOne: function(x, y) {
        // var queryString = "SELECT * FROM ??"
        // connection.query(queryString, [tableInput, columnVal], fucntion(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        // });
    }

}

module.exports = orm;