$(function () {
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
    $(".make-burger").on("click", function () {
        const id = $(this).data("id");
        console.log(id);
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: {eaten: false}
        }).then(function() {
            location.reload();
        });
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const burgerName = $("#burger-name").val().trim();
        $.ajax("/api/burgers/", {
            method: "POST",
            data: {burger_name: burgerName}
        }).then(function() {
            location.reload();
        })
    })

});