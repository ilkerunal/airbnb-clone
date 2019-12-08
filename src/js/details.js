
$(window).on("load resize", function () {
    var width = $(document).width();
    if (width > 768) {
        $(".banner-slick-slider")
            .not("slick-initialized")
            .slick("unslick");
    } else {
        $(".banner-slick-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 300,
            dots: true,
            arrows: true
        });
    }
});


$(window).scroll(function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > 800) {
        $('.checkout-hidden').slideDown(200).css("display", "flex");
    }
    else if (currentScrollTop < 800) {
        $('.checkout-hidden').slideUp(300);
    }
});

$(window).on("load resize scroll", function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > 700 && $(this).width() > 768) {
        $('#navigation-spy').attr('style',
            'display: block ;');
    }
    else if (currentScrollTop < 700 || $(this).width() < 768) {
        $('#navigation-spy').attr('style', 'display: none');
    }
});