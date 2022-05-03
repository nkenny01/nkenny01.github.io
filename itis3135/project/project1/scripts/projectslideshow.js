$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 400,
        captions: true,
        speed: 3000,
        pager: true,
        pagerType: 'short',
        pagerSelector: '#caption'
    });
});
