$(function(){
    $('.nav__menu-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
      });

    $('.reviewSlider').slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });

    $('.burger').click(function(event){
        event.preventDefault();
        $('.burger').toggleClass('burger__active');
        $('.nav__menu-list').toggleClass('nav__menu-active');
        $('.nav__logo').toggleClass('nav__logo-none');
        $('.header__info').toggleClass('header__info-hidden');
        $('.arrow').toggleClass('arrow__hidden');
    });
    $('.nav__menu-list, .nav__menu-link').click(function(){
        $('.burger').removeClass('burger__active');
        $('.nav__menu-list').removeClass('nav__menu-active');
        $('.nav__logo').removeClass('nav__logo-none');
        $('.header__info').removeClass('header__info-hidden');
        $('.arrow').removeClass('arrow__hidden');
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 30) {
            $('#header__slick').addClass('header__slick-show');
        }
        else {
            $('#header__slick').removeClass('header__slick-show');
        }
    });    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-circle-right arrow__right"></i>',
        prevArrow: '<i class="fas fa-chevron-circle-left arrow__left"></i>'
      });
    
    
});