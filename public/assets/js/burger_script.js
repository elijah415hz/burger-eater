// Wait until page has loaded to run everything within this function
$(function () {
    // Listener for EAT! button
    $(".eat-burger").on("click", function () {
        const id = $(this).data("id");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: { eaten: true }
        }).then(function () {
            location.reload();
        });

    });
    // Listener for MAKE! button
    $(".make-burger").on("click", function () {
        const id = $(this).data("id");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: { eaten: false }
        }).then(function () {
            location.reload();
        });
    });
    // Listener for create burger form
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        const burgerName = $("#burger-name").val().trim();
        $.ajax("/api/burgers/", {
            method: "POST",
            data: { burger_name: burgerName }
        }).then(function () {
            location.reload();
        })
    })
});