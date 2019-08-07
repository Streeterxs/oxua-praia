$(document).ready(function(){
    $('.teste').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplayspeed: 3000,
        focusOnSelect: true,
        accessibility: false,
        draggable: true,
        fade: true,
        cssEase: 'linear'
    });

    $('#productsCarrouselSectionSummer').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
});