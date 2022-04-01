$(document).ready(function() {

    $("#navlist img").each(function() {
        var image = new Image();
        image.src = $(this).attr('src');
    });


    $("#navlist img").click(function(event) {


        var source = $(this).attr("src");
        var caption = $(this).attr('alt');

        $("#activeswapimage").fadeOut(1000, function() {
            $("#activeswapimage").attr("src", source).fadeIn(1000);
        }
        );

        $("#caption").fadeOut(1000, function() {
            $("#caption").text(caption).fadeIn(1000);
        }
        );

        event.preventDefault();
    });

    $("li:first-child img").focus();

    


});