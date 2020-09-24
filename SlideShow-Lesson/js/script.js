// オプションを指定してSkipprの実行

// スライドショーの変化（"fade" or "slide"）

// 変化にかかる時間（ミリ秒）

// easingの種類、変化の仕方のような物

// ナビゲーションの形（"block" or "bubble"）

// 子要素の種類（"div" or "img"）

// ナビゲーション矢印の表示（trueで表示）

// スライドショーの自動再生（falseで自動再生なし）

// 自動再生時のスライド切替間隔（ミリ秒）

// キーボードの矢印キーによるスライド送りの設定（trueで有効）

// 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す


$('.theTarget').skippr({
  transition : 'fade',
  speed : 1000,
  easing : 'easeOutQuart',
  navType : 'block',
  childrenElementType : 'div',
  arrows : true,
  autoPlay : true,
  autoPlayDuration : 5000,
  keyboardOnAlways : true,
  hidePrevious : false
});


// $(".theTarget").skippr({
//   transition : 'fade',
//   speed : 1000,
//   easing : 'easeOutQuart',
//   navType : 'block',
//   childrenElementType : 'div',
//   arrows : true,
//   autoPlay : false,
//   autoPlayDuration : 5000,
//   keyboardOnAlways : true,
//   hidePrevious : false
// });


// オプションを指定してSkipprの実行
// $(".theTarget").skippr({
//   // スライドショーの変化（"fade" or "slide"）
//   transition : 'fade',
//   // 変化にかかる時間（ミリ秒）
//   speed : 1000,
//   // easingの種類、変化の仕方のような物
//   easing : 'easeOutQuart',
//   // ナビゲーションの形（"block" or "bubble"）
//   navType : 'block',
//   // 子要素の種類（"div" or "img"）
//   childrenElementType : 'div',
//   // ナビゲーション矢印の表示（trueで表示）
//   arrows : true,
//   // スライドショーの自動再生（falseで自動再生なし）
//   autoPlay : false,
//   // 自動再生時のスライド切替間隔（ミリ秒）
//   autoPlayDuration : 5000,
//   // キーボードの矢印キーによるスライド送りの設定（trueで有効）
//   keyboardOnAlways : true,
//   // 1枚目のスライド表示時に戻る矢印を表示するかどうか [false]:矢印を隠さない [true]:矢印を隠す
//   hidePrevious : false
// });