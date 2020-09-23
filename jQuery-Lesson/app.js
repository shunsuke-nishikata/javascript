// $(document).ready(function())→jQueryの書き方、jQueryを読み込ませる記述
// 省略記法もある↓
// $(function(){})

// bodyタグのHTMLを'<h1>Hello jQuery!!</h1>'に書き換えなさいという記述

// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });



// box1のクラスが付いたHTMLタグのCSSを変更する記述

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000ff',
    // 'height': '100px'
//   });
// });

// box1に対してslideDown関数を適応

// $(function(){
//   $('.box1').slideDown();
// });

// .showは非表示状態の要素を表示させる関数とついでに背景色を青色に変える記述

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000ff'});
// });

// .hideは表示状態の要素を非表示にする関数

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('.box1').slideDown();
//   $('.box1').css({
//     'background-color': '0000ff',
//     'height': '100px',
//     'width': '200px'
//   });
//   $('.box1').slideUp();
// });

// 入れこの構造を把握して記述すること
// 引数の中にfunction(関数)を入れる事によりslideDownの後にCSSの変更を適応しその後slideUpも実行させている
// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '500px'
//     }).slideUp();
//   });
// });

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '500px'
//     }).slideUp(function(){
//       $('.box1').css({
//         'background-color': '#7fffd4',
//         'width': '200px',
//         'height': '600px'
//       }).slideDown();
//     });
//   });
// });

// イベント、マウスオーバー（要素にカーソルが乗せる事)した時CSSで設定している背景色を変える
// イベント、マウスアウト(要素からカーソルが離れて時)した時にCSSで設定している背景色に変える

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// 気持ち省略して書く
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   }).mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// javascriptにCSSを直接記述せずclassに記述したCSSを引っ張ってきている
// addClass('class名')で対象のHTML要素にクラスを適応させて、removeClass('class名')で対象のHTML要素から適応させていたクラスを取り除く
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// onメソッドを使いクリックした際にaddClassでbox1-extのCSS処理を取得し適応させている
// mouseoutイベントでマウスを要素から外した時にremoveClassでbox1-extのCSSを適応から外す
// $(function(){
//   $('.box1').on("click",function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// 4つのクラスに対してクリックイベント発生時にslideUpのメソッド処理
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// 上記のクリックイベントをthisを用いて記述した場合

// HTMLの記述、cssで各自、色、幅、高さの指定あり
/* <div class="box">
    <div class="box1 bg1"></div>
    <div class="box1 bg2"></div>
    <div class="box1 bg3"></div>
    <div class="box1 bg4"></div>
</div> */

// thisを使用し、box1クラスのクリックされた要素にのみ処理を適応する
// クリックされた要素→this
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });


// ボタンをクリックした際にulタグの直下にある要素、今回はliタグを
// .childrenメソッドで全て取得し別のCSSを適応させている

//  $(function(){
//    $('button').on('click', function(){
//      $('ul').children().css('color', 'red');
//    });
//  });



