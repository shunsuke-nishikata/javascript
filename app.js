// var max = 100000
// var num = 1
// var count = 0

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だったのは' + count + '回です');

// for (初期値; 条件; 増減値;)

// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// var alertString;
// alertString = addString("World");

// alert(alertString);

// function addString(sac3){
//   var addStr = "Hello" + sac3;
//   return addStr;
// }

// var promptStr = prompt('何か好きな文字を入力してください。')
// alert(promptStr);

// javascriptとジャンケン


// // じゃんけんの手を入力してもらうプロンプト欄を生成
// var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// // グー、チョキ、パー、空のフォームは受け付けないように!=で条件をつける
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "グー") && (user_hand != "null")){
//   alert('グー・チョキ・パーのいずれかを入力してください');
//   user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// }
// // じゃんけんの手をランダムに作成する関数を呼び出す
// var js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// var judge = winLose(user_hand, js_hand)
// // nullではない状態を定義した時は上記のwhile文の条件分岐グー、チョキ、パーのいずれかが入力されている状態になる
// キャンセルを押すかジャンケンをするかの二択になっているので
// if(user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// }else {
//   alert("またチャレンジしてね")
// }


// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   var js_hand_num = Math.floor( Math.random() *3 );

//   if( js_hand_num == 0){
//     js_hand = "グー";
//   }else if(js_hand_num == 1){
//     js_hand = "チョキ"
//   }else if(js_hand_num == 2){
//     js_hand = "パー"
//   }
//   return js_hand
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   var winLoseStr;
//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     }else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     }else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   }else if (user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     }else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     }else if(js == "パー"){
//       winLoseStr ="勝ち"
//     }
//   }else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr ="勝ち";
//     }else if(js == "チョキ"){
//       winLoseStr = "負け";
//     }else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }
//   return winLoseStr;
// }

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

function winLose(user, js){
  var winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}