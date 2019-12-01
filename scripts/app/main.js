let isNavbarOpen = false;
function navClick() {
    if(isNavbarOpen){
        $("#navfull").css("height", "0");
        $(".navbar-expander").removeClass("open");
    }
    else{
        $("#navfull").css("height", "100vh");
        $(".navbar-expander").addClass("open");
    }
    isNavbarOpen=!isNavbarOpen;

 
}
// let isFooterExpanded = false;
// function toggleFooter(){
//     if (isFooterExpanded){
//         $("#footer").css("visibility","hidden");
//     }
//     else{
//         $("#footer").css("visibility","visible");
//     }
// }

$(document).ready(function () {
    $('.featured-slick-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    $(document).ready(function () {
        $('.carousel-mode').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
        });
    });

    $(document).ready(function () {
        $('.places-card-slider').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots:true
        });
    });

 
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

    


    $('.recommendations-slick-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        // dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });
});
