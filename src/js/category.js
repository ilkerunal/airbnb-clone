//places-card-slick
$(document).ready(function () {
    $('.slick-xxl').each(function () {
        let slickCarouselUnit = $(this);
        slickCarouselUnit.slick({
            dots: true,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    });
});