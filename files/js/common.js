$(document).ready(function() {
    $(".delete-confirm").click(function() {
        return confirm("Are you sure you want to delete this?")
    });
});