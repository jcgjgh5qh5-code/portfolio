//------上に戻るボタン-------//
$(function() {
  // 変数にクラスを入れる
  var btn = $('.link-top-btn');
  
  //スクロールしてページトップから500に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 500) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});

//------ハンバーガーメニュー------//
$(function() {
    let bar = $('.burger-btn');
    //ハンバーガーボタンを押すと
    bar.on('click',function(){
      //ハンバーガーボタン開く閉じるの入れ替え　
      bar.toggleClass('close');
      //ナビゲーションの開閉
      $('.bar_nav-wrapper').toggleClass('slide-in');
      $('body').toggleClass('noscroll');
      //ナビの背景（押すとナビが閉まる）を出し入れ
      $(".nav_bg").toggleClass("open");
  });

  //ナビ表示時　ナビの外をクリックしたら閉じる
  $(".nav_bg").on("click", function(){
    $(this).toggleClass("open");
    bar.toggleClass("close");
    $(".bar_nav-wrapper").toggleClass("slide-in");
  });
  //ボタンが.close(×になってる) もしくはスクロールが500px以上ならボタンを表示
  $(window).on("scroll",function(){
    if(bar.hasClass("close") || $(window).scrollTop() > 500) {
      bar.addClass("active");
    }else{
      //そうでなかったら（ボタンがスクロール位置が500px以下、）ボタンを非表示
      bar.removeClass("active");
    }
  });//$(window).on("scroll,function(){の括弧
});//$(function の括弧

/*
$(function() {
  // 変数にクラスを入れる
  var bar = $('.burger-btn');

  /* closeクラスが入っていない場合(xボタンを非表示にしたくない)、
  スクロールしてページトップから500に達したらボタンを表示 */
  /*if($('.burger-btn').hasClass('.close')){
    bar.addClass('active')
  ;}else{
    $(window).on('load scroll', function(){
      if($(this).scrollTop() > 500) {
        bar.addClass('active');
      }else{
        bar.removeClass('active');
      }
    });//function, onメソッドの閉じタグ
  };//if($('.burger-btn').not('.close')){の閉じタグ

  //closeのクラスを持っていた場合、（スクロール位置関係なく）active(見える状態)のクラスを付与
  if($('.burger-btn').hasClass('close')){
    bar.addClass('active');
  };
  


});//functionの閉じタグ*/



//----------筆記体のYamamotoChihiro scrollしたら表示----------//

const target = document.querySelector('.signature-target');

window.addEventListener('scroll', function () {
  const rect = target.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.95;

  if (rect.top < triggerPoint) {
    target.classList.add('signature-animate');
  }
});



//------web design, graphic design の見出しの横に伸びる線-------//

$(function() {
//画面の高さを取得し変数heightに入れる
var height = $(window).height();

  $(window).on('load resize',function(){
//画面idのあるところの高さを取得し、
    var baroffWd = $("#barOffsetWd").offset().top;
    var baroffGd = $("#barOffsetGd").offset().top;

   
    $(window).on('load scroll', function(){
      var swd = $('.yoko-stroke-wd');
      var sgd = $('.yoko-stroke-gd');
      if($(this).scrollTop() > baroffWd -height/2) {
        swd.addClass('yoko-stroke-100per-wd');
      }
      if($(this).scrollTop() > baroffGd -height/2) {
        sgd.addClass('yoko-stroke-100per-gd');
      }

    });
        // 変数にクラスを入れる
      });
  //スクロールしてページトップから5200に達したら表示
  
});

/*------ プロフィール --------*/
ScrollReveal().reveal('.myname',{
  duration: 1000,
  viewFactor: 0,
  reset: false,
  easing:'ease-in-out',
  origin:'top',
});
ScrollReveal().reveal('.birthday',{
  duration: 1000,
  viewFactor: 0,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  delay:200,
});

  /* 趣味　*/
 ScrollReveal().reveal('.hobby-1 h5',{
  duration: 1000,
  viewFactor: 0,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  delay:250
});
ScrollReveal().reveal('.hobby-1 .desc-hobby',{
  duration: 1000,
  viewFactor: 0,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  delay:350,
});
ScrollReveal().reveal('.hobby-2 h5',{
  duration: 1000,
  viewFactor: 0,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  delay:550
});
ScrollReveal().reveal('.hobby-2 .desc-hobby',{
  duration: 1000,
  viewFactor: 0,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  delay:650,
});

/*--------- これまでの歩み　---------*/

ScrollReveal().reveal('.history-item-wrapper-index1',{
  duration: 1000,
  viewFactor: 0,
  distance: '20px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
});
ScrollReveal().reveal('.history-item-wrapper-index2',{
  duration: 1000,
  viewFactor: 0.3,
  distance: '20px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  opacity:0,
  delay:100
});
ScrollReveal().reveal('.history-item-wrapper-index3',{
  duration: 1000,
  viewFactor: 0.3,
  distance: '20px',
  reset: false,
  easing:'ease-in-out',
  origin:'top',
  opacity:0,
  delay:200
});

/*　取り組む姿勢について　*/

ScrollReveal().reveal('.shisei-wrapper-index',{
  duration: 700,
  viewFactor: 0.3,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'bottom',
  opacity:0,
});


ScrollReveal().reveal('.shisei-wrapper-content',{
  duration: 1000,
  viewFactor: 0.3,
  distance: '10px',
  reset: false,
  easing:'ease-in-out',
  origin:'bottom',
  opacity:0,
  delay:200
});

/* ---------- Works ------------- */
ScrollReveal().reveal('.item-reveal-first',{
  duration: 900,
  viewFactor: 0.3,
  distance: '5px',
  reset: false,
  easing:'ease-in-out',
  origin:'bottom',
  opacity:0,
});
ScrollReveal().reveal('.item-reveal-second',{
  duration: 900,
  viewFactor: 0.3,
  distance: '0px',
  reset: false,
  easing:'ease-in-out',
  origin:'bottom',
  opacity:0,
  delay: 250,
});

ScrollReveal().reveal('.item-reveal-rotate',{
  duration: 700,
  viewFactor: 0.3,
  distance: '5px',
  reset: false,
  opacity:1,
  rotate:{ x: 0, y: 0, z: -10 },
  delay: 250,

});

ScrollReveal().reveal('.item-reveal-rotate-reverse',{
  duration: 700,
  viewFactor: 0.3,
  distance: '5px',
  reset: false,
  opacity:1,
  rotate:{ x: 0, y: 0, z: 10 },
  delay: 250,

});

ScrollReveal().reveal('.item-reveal-second-short',{
  duration: 500,
  viewFactor: 0.3,
  distance: '0px',
  reset: false,
  origin:'bottom',
  opacity:0.5,
  delay: 250,
});

/* 「他の作品をご覧になりたい方はお問い合わせを」*/
ScrollReveal().reveal('.moreworks',{
  duration: 1000,
  viewFactor: 0.3,
  distance: '20px',
  reset: false,
  easing:'ease-in',
  origin:'bottom',
  opacity:0,
});
