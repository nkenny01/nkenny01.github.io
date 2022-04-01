$(document).ready(function() {
    $('.next').on('click', function() {
        var currentImg = $('.activeimg');
        var nextImg = currentImg.next();
        var caption = nextImg.attr('alt');

        if(nextImg.length) {
            currentImg.removeClass('activeimg').css('z-index', -10);
            nextImg.addClass('activeimg').css('z-index', 10);
            $('#caption').text(caption);
        }
    });


    $('.prev').on('click', function() {
        var currentImg = $('.activeimg');
        var prevImg = currentImg.prev();
        var caption = prevImg.attr('alt');

        if(prevImg.length) {
            currentImg.removeClass('activeimg').css('z-index', -10);
            prevImg.addClass('activeimg').css('z-index', 10);
            $('#caption').text(caption);
        }
    });

});