
let point = 0;
let question = "This is a song for everybody who needs love."

/**
 keyイベントのハンドラ
 */

function keyup(event) {

  // let typedKey = event.key; // 入力されたキーを表す文字列

  let output = document.querySelector("#output2");
  output = output.value
  let pointElement = document.querySelector("#point");

  pointer = document.getElementById("#output2").value.length

  if (pointer == question.length) {
    TF = 1
  }


  // output.textContent = typedKey;
  // if (output[point] != question[point]) {
  //   point = point + 1;
  // }
  // // point <= question.length
  // pointElement.textContent = point;


}

/*
文字自動文字表示部分
*/


function autoWriting(index) {
  let toShow = question.slice(0, index);  //slice配列から一部を取り出して新しい配列を作る。0からindexまで
  // 以下は適切に直してください
  console.log(toShow);
  let element = document.querySelector("#question2");
  element.textContent = toShow;
}

var TF = 0;

function autoWritingLoop(maxCount, i, time, TF) { //1秒ごとに文字を自動表示
  if (i <= maxCount) {
    autoWriting(i);
    setTimeout(function () { autoWritingLoop(maxCount, ++i, time, TF) }, time);  //1000ミリ秒
  }

  else if (maxCount < i) {
    if (TF == 0) {
      alert("finish!");
    }
    else {
      alert("you win! yahoooooo!");
    }
  }
}

function start(time) {
  let questionElement = document.querySelector("#question");
  questionElement.textContent = question;
  let maxCount = question.length;
  i = 0;
  autoWritingLoop(maxCount, i, time)
}


//autoWritingLoop(文字数, 0)


function main() {
  document.body.addEventListener("keyup", keyup); // body要素で起きるキーイベントのハンドラを設定
  document.body.focus(); // body要素にキーボードフォーカスを移動

  let questionElement = document.querySelector("#question");
  questionElement.textContent = question;
  // autoWritingLoop(question.length, 0);
}



window.addEventListener("load", main);　//これがあると全部をロード(読み込んだ)した後に動く






