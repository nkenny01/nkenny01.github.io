$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data, function()
                {
                    $.each(this, function(key, value){
                        $("#faculty").append('<img src="' + value.image + '">');
                        $("#faculty").append('<h2>' + value.full_name + '</h2>');
                        $("#faculty").append('<h3>' + value.department + '</h3>');
                        $("#faculty").append('<p>' + value.bio + '</p>');
                    })
                }
            );
        }
    });
});