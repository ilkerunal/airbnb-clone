//Category
$(document).ready(function () {
    $(".slick-cards").each(function () {
        let slickCarouselUnit = $(this);
        slickCarouselUnit.slick({
            dots: true,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });

    $(".carousel-mode").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    });
});

