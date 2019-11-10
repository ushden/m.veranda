$(function(){
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    
    $('.menu__active').click(function(e){
        e.preventDefault ();
        $('.menu_active').removeAttr('href');
        $('.menu__active').toggleClass('menu__click');
        $('.menu').toggleClass('menu__show')
    });  
});