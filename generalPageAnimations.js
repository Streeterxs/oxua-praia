AOS.init();
let lastScroll;
let $navbar = $("#navbar");
let $brandtransparent = $("#brand-transparent");
let $brandwhite = $("#brand-white");
let $searchbar = $("#searchbar");
let $abrirbusca = ".abrirbusca";
let $fecharbusca = ".fecharbusca";
let $listaIconesAtiva;
let isSearchOpen;


$(window).ready(function(){
    var scroll = $(window).scrollTop();
    isSearchOpen = false;
    if(scroll >= 150){
        $listaIconesAtiva = "#listaIconsPretos";
    } else {
        $listaIconesAtiva = "#listaIconsBrancos";
    }
    $(".productValue").each(function(index, value){
        value.innerHTML = value.innerHTML.replace(",", ".");
        let newValue = value.innerHTML * 1.25;
        value.innerHTML = newValue.toFixed(2).replace(".", ",");
    })
})

$(window).scroll(function(e) {
    // add/remove class to navbar when scrolling to hide/show
    var scroll = $(window).scrollTop();
    if ((scroll >= 150)) {
        $listaIconesAtiva = "#listaIconsPretos";
        $('#oxuaNavbar').removeClass("position-absolute");
        $('#oxuaNavbar').addClass("sticky-top");
        $('#oxuaNavbar').addClass("pageStickyNavbarStyles");
        $brandtransparent.hide();
        $brandwhite.show();
        $("#listaIconsBrancos").hide();
        $($listaIconesAtiva).css('display', 'flex');
        $searchbar.css('margin-top',"3rem");
        testIfSearchIsOpenAndReplaceIcons();
        $('#divIsLogged').css('top', '3rem');
        $("#cart").css('marginTop', '3rem');
    } else {
        $listaIconesAtiva = "#listaIconsBrancos";
        $('#oxuaNavbar').removeClass("navbar-fixed-top");
        $('#oxuaNavbar').addClass("position-absolute");
        $('#oxuaNavbar').removeClass("pageStickyNavbarStyles");
        $brandtransparent.show();
        $brandwhite.hide();
        $("#listaIconsPretos").hide();
        $($listaIconesAtiva).css('display', 'flex');
        $searchbar.css('margin-top',"4rem");
        testIfSearchIsOpenAndReplaceIcons();
        $('#divIsLogged').css('top', '4rem');
        $("#cart").css('marginTop', '4rem');
    }

    if ((scroll >= 700)){
        $("#backToTopDiv").fadeIn();
    } else{
        $("#backToTopDiv").fadeOut();
    }

    lastScroll = scroll;
});
  // ADD SLIDEUP ANIMATION TO DROPDOWN-MENU
$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(".cartButton").click(function(){
    $("#cart").toggle();
    $(".table-responsive").fadeToggle();
})

$(".userButton").click(function(){
    $("#divIsLogged").fadeToggle();
})

$(".busca").click(function(){
    $searchbar.fadeToggle();
    isSearchOpen = !isSearchOpen;
    $($listaIconesAtiva +" "+ $abrirbusca).toggle();
    $($listaIconesAtiva + " " + $fecharbusca).toggle();
    $('.input-transparent').val('');
});

function testIfSearchIsOpenAndReplaceIcons(){
    if(isSearchOpen){
        $($listaIconesAtiva +" "+ $abrirbusca).hide();
        $($listaIconesAtiva + " " + $fecharbusca).show();
    } else {
        $($listaIconesAtiva +" "+ $fecharbusca).hide();
        $($listaIconesAtiva + " " + $abrirbusca).show();
    }
}
// back to top button
$('#buttonToTop').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');         
  });