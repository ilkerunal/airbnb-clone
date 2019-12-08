//Commons
import "../assets/sass/main.scss";
import $ from 'jquery';
import "slick-carousel";
import "bootstrap";

const btnTermsContent =
  '<svg viewBox="0 0 18 18"  style="margin-right:12px; height:15px; width:15px; role="presentation" aria-hidden="true" focusable="false  "><path d="m17 9c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8m1 0c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9m-9-5.25c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m0 4.25c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1" fill-rule="evenodd"></path></svg>Terms, Privacy & More';

const btnCloseContent =
  '<svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="margin-right:12px; height: 15px; width: 15px"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>Close';


$(document).ready(function () {
  $(".footer-expander").click( ()=>{
    const footer = $("#footer");
    const footerExpander = $(".footer-expander")[0];
    console.log(footerExpander);
    if (footer.hasClass("closed")) {
      footer.removeClass("closed");
      console.log(1);
      footerExpander.innerHTML = btnCloseContent;
    }
    else {
      console.log(2);
      footer.addClass("closed");
      footerExpander.innerHTML = btnTermsContent;
    }
  }
  );
  $("#navbar-toggler").click( () => {
    const navBar = document.getElementById("navfull");
    if (navBar  && navBar.style.height == "100%") {
      navBar.style.height = "0";
    }
    else {
      navBar.style.height = "100%";
    }
  }
  );

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
});



$(window).on("load resize", function() {
  var width = $(document).width();
  if (width > 768) {
    $(".banner-slick-slider").not("slick-initialized").slick("unslick");
    
  } 
  else {
    $(".banner-slick-slider").not("slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      dots: true,
      arrows: true
    });
  }
});

$(document).ready(function() {
  $(window).on("load resize scroll",function () {
    let currentScrollTop = $(this).scrollTop();
    if (currentScrollTop > 700 && $(this).width() > 768) {
      $('#navigation-spy').attr('style',
        'display: block ;');
    }
    else if (currentScrollTop < 700 || $(this).width() < 768) {
      $('#navigation-spy').attr('style', 'display: none');
    }
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
