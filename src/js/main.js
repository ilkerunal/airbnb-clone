import "../assets/sass/main.scss";
import $ from 'jquery';
import "slick-carousel";
import "bootstrap";
let isNavbarOpen = false;
let isFooterExpanded = false;
function toggleFooter() {
  if (isFooterExpanded) {
    $("#footerTogglerText").html("<p>Terms, Privacy,& More</p>");
    isFooterExpanded = false;
  } else {
    $("#footerTogglerText").html("<p>Close</p>");
    isFooterExpanded = true;
  }
}


// $(window).on("load resize", function() {
//   var width = $(document).width();

//   if (width > 768) {
//     $(".hygge-slick-slider")
//       .not("slick-initialized")
//       .slick("unslick");
//   } else {
//     $(".hygge-slick-slider").slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       infinite: true,
//       speed: 300,
//       dots: true,
//       arrows: true
//     });
//   }
// });
function navClick() {
  if (isNavbarOpen) {
    $("#navfull").css("height", "0");
    $(".navbar-expander").removeClass("open");
  } else {
    $("#navfull").css("height", "100%");
    $(".navbar-expander").addClass("open");
  }
  isNavbarOpen = !isNavbarOpen;
}
$(document).ready(function() {
  $(window).on("load resize scroll",function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > 600 && $(this).width() > 768) {
      $('#navigation-spy').attr('style',
        'display: block ;');
    }
    else if (currentScrollTop < 600 || $(this).width() < 768) {
      $('#navigation-spy').attr('style', 'display: none');
    }
  });

  $(window).on("activate.bs.scrollspy", function() {
    $("#navigation-links .active").css({
      "border-bottom": "3px solid #484848",
      color: "#484848"
    });
    $("#navigation-links .nav-link")
      .not(".active")
      .css({
        border: "none",
        color: "#008489"
      });
  });
  
  $(".featured-slick-slider").slick({
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
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  });


  $('.checkout-hidden').css("display", "none");
  $(window).scroll(function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > 800) {
      $('.checkout-hidden').slideDown(200).css("display", "flex");
    }
    else if (currentScrollTop < 800) {
      $('.checkout-hidden').slideUp(300);
    }
  });

  //places-card-slick
  $(".slick-xxl").each(function() {
    let slickCarouselUnit = $(this);
    slickCarouselUnit.slick({
      dots: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  //detail banner slick
  $(".carousel-mode").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  });

  $(".recommendations-slick-slider").slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    // dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
