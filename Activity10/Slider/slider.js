$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart: true, // Task 2
        minSlides: 1, // Task 4
        maxSlides: 1, // Task 4
        slideWidth: 250,
        slideMargin: 10,
        pause: 3000, // Task 5
        pager: true // Task 6
    });
});
