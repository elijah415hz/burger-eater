$(function() {
    $(".eat-burger").on("click", function(event) {
    const id = $(this).data("id")
    console.log(id)
    $.ajax("/api/burgers/" + id, {
        method: "PUT",
        data: {eaten: true}
    }).then(function() {
        location.reload();
    })

});

});