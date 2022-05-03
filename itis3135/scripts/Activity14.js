let speaker1 = "toobin";
let speaker2 = "sorkin";
let speaker3 = "chua";
let speaker4 = "sampson";


$(document).ready(function() {
	$("#nav_list li").click(function()
    {
        var speaker = $(this).children('a').attr("title");

        if (speaker == speaker1) {
            $.ajax({
                type: "get",
                url: "json_files/toobin.json",
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - " + error);
                },
                dataType: "json",
                success: function(data){
                    $("main").html("");
                    $.each(data, function(){
                        $.each(this, function(key, value){
                            $("main").append($("<h1>" + value.title + "</h1>")),
                            $("main").append($("<h2>" + value.month + "</h2>")),
                            $("main").append($("<h3>" + value.speaker + "</h3>")),
                            $("main").append($("<img src=" + value.image + ">")),
                            $("main").append($("<p>" + value.text + "</p>")
                            );
                        })
                    })
                }
            });
        };


        if (speaker == speaker2) {
            $.ajax({
                type: "get",
                url: "json_files/sorkin.json",
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - " + error);
                },
                dataType: "json",
                success: function(data){
                    $("main").html("");
                    $.each(data, function(){
                        $.each(this, function(key, value){
                                $("main").append($("<h1>" + value.title + "</h1>")),
                                $("main").append($("<h2>" + value.month + "</h2>")),
                                $("main").append($("<h3>" + value.speaker + "</h3>")),
                                $("main").append($("<img src=" + value.image + ">")),
                                $("main").append($("<p>" + value.text + "</p>")
                            );
                        })
                    })
                }
            });
        };


        if (speaker == speaker3) {
            $.ajax({
                type: "get",
                url: "json_files/chua.json",
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - " + error);
                },
                dataType: "json",
                success: function(data){
                    $("main").html("");
                    $.each(data, function(){
                        $.each(this, function(key, value){
                                $("main").append($("<h1>" + value.title + "</h1>")),
                                $("main").append($("<h2>" + value.month + "</h2>")),
                                $("main").append($("<h3>" + value.speaker + "</h3>")),
                                $("main").append($("<img src=" + value.image + ">")),
                                $("main").append($("<p>" + value.text + "</p>")
                            );
                        })
                    })
                }
            });
        };


        if (speaker == speaker4) {
            $.ajax({
                type: "get",
                url: "json_files/sampson.json",
                error: function(xhr, status, error) {
                    alert("Error: " + xhr.status + " - " + error);
                },
                dataType: "json",
                success: function(data){
                    $("main").html("");
                    $.each(data, function(){
                        $.each(this, function(key, value){
                                $("main").append($("<h1>" + value.title + "</h1>")),
                                $("main").append($("<h2>" + value.month + "</h2>")),
                                $("main").append($("<h3>" + value.speaker + "</h3>")),
                                $("main").append($("<img src=" + value.image + ">")),
                                $("main").append($("<p>" + value.text + "</p>")
                            );
                        })
                    })
                }
            });
        };
    });
}); // end ready