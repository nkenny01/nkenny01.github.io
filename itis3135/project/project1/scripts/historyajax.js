$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json/history.json",
        beforeSend: function() {
            $("#info").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#info").html("");
            $.each(data, function()
                {
                    $.each(this, function(key, value){
                        $("#info").append('<p>' + value.info1 + '</p>');
                        $("#info").append('<p>' + value.info2 + '</p>');
                        $("#info").append('<p>' + value.info3 + '</p>');
                    })
                }
            );
        }
    });
});