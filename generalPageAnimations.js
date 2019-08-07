AOS.init();
let lastScroll;
var $navbar = $("#navbar");
var $brandtransparent = $("#brand-transparent");
var $brandwhite = $("#brand-white");
var $searchbar = $("#searchbar");
var $abrirbusca = $("#abrirbusca");
var $fecharbusca = $("#fecharbusca");

$(window).scroll(function(e) {
    console.log("teste scroll")
    console.log(lastScroll);

    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if ((scroll >= 150)) {
        $('#oxuaNavbar').removeClass("position-absolute");
        $('#oxuaNavbar').addClass("sticky-top");
        $('#oxuaNavbar').addClass("pageStickyNavbarStyles");
        $('body').addClass("bodyPaddingForNavbar");
        $brandtransparent.hide();
        $brandwhite.show();
        $searchbar.css('margin-top',"3rem");
    } else {
        $('#oxuaNavbar').removeClass("navbar-fixed-top");
        $('body').removeClass("bodyPaddingForNavbar");
        $('#oxuaNavbar').addClass("position-absolute");
        $('#oxuaNavbar').removeClass("pageStickyNavbarStyles");
        $brandtransparent.show();
        $brandwhite.hide();
        $searchbar.css('margin-top',"4rem");
    }

    lastScroll = scroll;
});

$('.dropdown').on('show.bs.dropdown', function(e){
    $('.dropdown-menu').removeClass('invisible');
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$("#cartButton").click(function(){
    console.log("teste togo");
    $("#cart").toggle();
    $(".table-responsive").fadeToggle();
})

$("#busca").click(function(){
    $searchbar.fadeToggle();
    $abrirbusca.toggle();
    $fecharbusca.toggle();
    $('.input-transparent').val('');
});