$(document).ready(function() {
    $('.drawer').drawer();
  });

  new WOW().init();

  $('.p-header__nav-link').click(function () {

    let header = $(".l-header").outerHeight(); 
    /* let speed = 300; */
    let id = $(this).attr("href");
    let position = $(id).offset().top - header;

    $('body,html').animate({
      scrollTop: position
    }, 300);
    return false;
  });
