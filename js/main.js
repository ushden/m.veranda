$(function(){
  // Кнопка меню
  $('.info__btn').magnificPopup({
    type: 'inline'
  });
  // Кнопка на акции
  $('.btn-1').magnificPopup({
    type: 'inline'
  });
  // кнопка на меропр.
  $('.btn-2').magnificPopup({
    type: 'inline'
  });
  // банкеты
  $('.btn-3').magnificPopup({
    type: 'inline'
  });
  // ============================= СЛАЙДЕР =======================================
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left arrow-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right arrow-right"></i>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          cssEase: 'linear'
        }
      },
    ]
  });

  // Слайдер на отзывах 
  $('.rewies__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left reweis__arrow-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right reweis__arrow-right"></i>'
  });

  // Прелоадер
  $(window).on('load', function () {
    $preloader = $('#preloader'),
    $loader = $preloader.find('#anim');
    $loader.fadeOut();
    $preloader.delay(100).fadeOut('slow');
  });
  // появление блоков при прокрутке
  $(window).scroll(function(){
    if ($(this).scrollTop() >= 150) {
      $('.about').addClass('about__show');
    }
    else {
      $('.about').removeClass('about__show');
    }
    if ($(this).scrollTop() >= 500) {
      $('.about').addClass('about__trl');
    }
    else {
      $('.about').removeClass('about__trl');
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
  $('.share_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#share').offset().top }, 1000);
      e.preventDefault();
    });
  $('.menu_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#menu_1').offset().top }, 1000);
      e.preventDefault();
    });
  $('.rewiev_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#rewiev').offset().top }, 1000);
      e.preventDefault();
    });
  $('.map_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#map').offset().top }, 1000);
      e.preventDefault();
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
  // Кнопка на верх
  $(window).scroll(function(){
      if ($(this).scrollTop() > 400) {
          $('.buttonOnTop').addClass('buttonOnTop-show');
      }
      else {
          $('.buttonOnTop').removeClass('buttonOnTop-show');
      }
  }); 
});