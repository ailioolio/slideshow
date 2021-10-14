$(function () {
  function ChangeBtn() {
    $('.change-btn').show();
    var slideIndex = $('.slide').index($('.js-active'));
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide();
    }
  }


  $('.change-btn').click(function () {
    var $displaySlide = $('.js-active');
    // $displaySlide.removeClass('active');
    $('.js-active').removeClass('js-active');
    if ($(this).hasClass('next-btn')) {
      // $('.active').next().addClass('active');
      $displaySlide.next().addClass('js-active');
    } else {
      // $('.active').prev().addClass('active');
      $displaySlide.prev().addClass('js-active');
    }

    ChangeBtn();

    //ここも関数に入れてもいいかも
    var slideIndex = $('.slide').index($('.js-active'));
    $('.js-active-btn').removeClass('js-active-btn');
    $('.index-btn').eq(slideIndex).addClass('js-active-btn');

    // ChangeBtn();どちらでも

  });



  $('.index-btn').click(function () {
    $('.js-active').removeClass('js-active');
    var clickIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickIndex).addClass('js-active');



    ChangeBtn();

    //ここも関数に入れてもいいかも
    $('.js-active-btn').removeClass('js-active-btn');
    $('.index-btn').eq(clickIndex).addClass('js-active-btn');

    // ChangeBtn();どちらでも

  });

});






//ボタン押すと消えてしまう → 変数使わないとできない？

//画像スクロールして表示 →slick?? or animate?
//矢印押した場合でも下の番号の色を変える → 画像と数字,対応するindexは同じ


//5日、11日、12日＊２　→　12のあと
