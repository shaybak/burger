// Make sure we wait to attach our handlers until the DOM is fully loaded.


$(function() {
    $(".change").on("click", function(event) {
        console.log("HI.");
        var id = $(this).data("id");
        var newDev = $(this).data("newdev");
        var newDevState = {
            devoured: newDev
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevState
        }).then(
            function() {
                console.log("changed devoured state to ", newDevState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new-burger-input").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});