$(function(){
  // Прелоадер
  $(window).on('load', function () {
    $preloader = $('#preloader'),
    $loader = $preloader.find('#anim');
    $loader.fadeOut();
    $preloader.delay(4000).fadeOut('slow');
  });
  // появление блоков при прокрутке
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 350) {
      $('.info__tittle, .info__subtittle').addClass('info_show');
    }
    else {
      $('.info__tittle, .info__subtittle').removeClass('info_show');
    }
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 850) {
      $('.info__list').addClass('info_show');
    }
    else {
      $('.info__list').removeClass('info_show');
    }
  });
  // Прокрутка к якорю
  $('.top_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
      e.preventDefault();
    });
  $('.about_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
      e.preventDefault();
    });
  $('.menu_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#menu_1').offset().top }, 1000);
      e.preventDefault();
    });
  $('.review_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#review').offset().top }, 1000);
      e.preventDefault();
    });
  $('.map_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#map').offset().top }, 1000);
      e.preventDefault();
    });
  $('.header__slick-link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#top').offset().top }, 1000);
      e.preventDefault();
    });
  $('.arrow_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
      e.preventDefault();
    });
  // Слайдер на отзывах
  $('.reviewSlider').slick ({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.sliderNav__item',
      fade: true,
      speed: 500
  });
  $('.sliderNav__item').slick ({
      slidesToShow: 8,
      asNavFor: '.reviewSlider',
      focusOnSelect: true
  });
  // Кнопка меню на моб.
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
  // Верхняя липкая панель
  $(window).scroll(function(){
      if ($(this).scrollTop() > 30) {
          $('#header__slick').addClass('header__slick-show');
      }
      else {
          $('#header__slick').removeClass('header__slick-show');
      }
  });
  // Слайдер на меню 
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
  // Кнопка меню
  // $('.show__menu').click(function(){
  //     alert('Да не готово пока!');
  // });  
});