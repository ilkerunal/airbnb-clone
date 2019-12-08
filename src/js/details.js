
$(window).on("load resize", function () {
    var width = $(document).width();

    if (width > 768) {
        $('.hygge-slick-slider').not('slick-initialized').slick('unslick');
    } else {
        $('.hygge-slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 300,
            dots: true,
            arrows: true,
        });
    }
});


//detail banner slick
$(document).ready(function () {
    $('.carousel-mode').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    });
});