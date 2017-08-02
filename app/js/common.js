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

});

// Больше кнопки, больше отступы между заголовками. затемнить картинки