API_KEY = "d8c1c3eef32eb149ca4cb38a7e0c7767";

$(function(){
  $('#btn').on('click',function(){
    $.ajax({
      // 入力された都市名でWebAPIに天気情報をリクエスト
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#city-name').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
      //通信成功
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data){
      alert('通信に失敗しました。');
    });
  });
});

// // （API_KEY には、"取得したAPIキー" を記述）
// API_KEY = "d8c1c3eef32eb149ca4cb38a7e0c7767";

// $(function(){
//   $('#btn').on('click', function() {
//     // 入力された都市名でWebAPIに天気情報をリクエスト
//     $.ajax({
//       url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
//       dataType : 'jsonp',
//     }).done(function (data){
//       //通信成功
//       // 位置
//       $('#place').text(data.name);
//       // 最高気温
//       $('#temp_max').text(data.main.temp_max);
//       // 最低気温
//       $('#temp_min').text(data.main.temp_min);
//       //湿度
//       $('#humidity').text(data.main.humidity);
//       //風速
//       $('#speed').text(data.wind.speed);
//       // 天気
//       $('#weather').text(data.weather[0].main);
//       // 天気アイコン
//       $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
//       $('img').attr("alt",data.weather[0].main);    }).fail(function (data) {
//       //通信失敗
//     });
//   });
// });

// ---------------------------------------------
// ajax処理の内容
// ---------------------------------------------

// $.ajax()はAjaxを実装するメソッド。 JavaScriptを使って、非同期にサーバー間での通信を行う。
// .valはHTMLのvalue属性を取得するメソッド。

// dataTypeでは、レスポンスとして取得したいデータの型を指定する。
// 今回はJSONを取得したいので、dataType :'jsonp'と記述。



// ---------------------------------------------
// 通信成功時の処理の記述内容
// ---------------------------------------------

// .done()は通信に成功した場合、.fail()は失敗した場合に記述するメソッド。
// 「通信に成功する」とは、今回はWeb APIが正常に呼び出せたことを指す。
// 引数内に取得した結果が入る。(data)


// .textメソッドは、$('#id名').text(JSONから欲しい値)の形で指定すると、
// 指定したidのテキストを、JSONから受け取った値に変換できる。
// 例えば（temp_max）を取得したい場合は、data.main.temp_maxというように
// "data.JSONのオブジェクト名.プロパティ名"で取得することができる”

// $(要素名).attr(属性名,値);と指定すると、img要素にsrc属性とalt属性が追加することができる。
// これにより天気のアイコンを取得し表示することができるようになる。
// アイコンを取得するURLは、http://openweathermap.org/img/w/"アイコン名".pngとなる。



// ---------------------------------------------
// 通信失敗時の処理の記述内容
// ---------------------------------------------

// alert('通信に失敗しました')のみ