$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});


// back内のaタグがクリックされ時の処理。
// $('#back a').on('click',function(event){
  // イベント発生時に行われる処理
// });

// $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);

// 「scrollTop:0」の指定は、「最上部に移動する」の意味。
// 「800」は0.8秒の時間指定。

// event.preventDefault(); は、aタグの機能を無効にするメソッド。

// $('body, html').animate({
//     scrollTop:0
//   }, 800)
//   event.preventDefault();
// });