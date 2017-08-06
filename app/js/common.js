$(document).ready(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('active');
    $(".header__menu").slideToggle("slow");
    $(".header__menu_background").fadeToggle("fast");
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
      $('.header__menu').addClass('scroll_header');
    }
    else {
      $('.header__menu').removeClass('scroll_header');
    }
  });

  $("body").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.block_50.about__text,' +
    '.accomodation .block_50,' +
    '.footer__credit').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 300
  });

  $('.block_50.about__img,' +
    '.footer__contacts').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
  });

  $('.accomodation .block_15').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100
  });

  $('.rooms .block_33:nth-child(1),' +
    ' .rooms .block_33:nth-child(3),' +
    ' .accomodation .block_35').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 200
  });

  $('.rooms .block_33:nth-child(2),' +
    '.bottom').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 200
  });

  $('.service .block_60').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated rotateInUpLeft',
    offset: 100
  });

  $('.service .block_40').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated rotateInUpRight',
    offset: 100
  });

  $('.contact .block_25').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated lightSpeedIn',
    offset: 100
  });

  $('.contact .block_75').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated swing',
    offset: 100
  });

});
