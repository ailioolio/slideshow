$(document).ready(function () {
  var random = Math.floor(Math.random() * $('.slide').length);
  var firstMove = (-300) * random;
  $('.slide').eq(random).addClass('js-active');
  $('#slides').css('left', firstMove);
  $('.index-btn').eq(random).addClass('js-active-btn');
  if (random == 0) {
    $('.prev-btn').hide();
  } else if (random == $('.slide').length - 1) {
    $('.next-btn').hide();
  }
});


$(function () {
  function ChangeBtn() {
    $('.change-btn').show();
    var slideIndex = $('.slide').index($('.js-active'));
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }

    var move = (-300) * slideIndex;
    $('#slides').animate({
      'left': move
    }, 500);


    $('.js-active-btn').removeClass('js-active-btn');
    $('.index-btn').eq(slideIndex).addClass('js-active-btn');
  }



  $('.change-btn').on('click', function () {
    var $displaySlide = $('.js-active');
    $('.js-active').removeClass('js-active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('js-active');
    } else {
      $displaySlide.prev().addClass('js-active');
    }


    ChangeBtn();

  });


  $('.index-btn').click(function () {
    $('.js-active').removeClass('js-active');
    var clickIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickIndex).addClass('js-active');


    ChangeBtn();

  });


  // $(window).keyup(function (e) {
  //   var $displaySlide = $('.js-active');
  //   if (e.keyCode == 39) {

  //     $displaySlide.next().addClass('js-active');
  //   } else if (e.keyCode == 37) {

  //     $displaySlide.prev().addClass('js-active');
  //   }

  //   ChangeBtn();
  // });

});
