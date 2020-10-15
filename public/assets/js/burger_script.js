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
    

});