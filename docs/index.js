
let point = 0;
let question = "Laughter is timeless. Imagination has no age. And dreams are forever."



let questionlist = ["Laughter is timeless. Imagination has no age. And dreams are forever.", "asdf"]

　function selectQestion(num) {
  question = questionlist[num];
  return question;
}

/**
 keyイベントのハンドラ
 */

function keyup(event) {

  // let typedKey = event.key; // 入力されたキーを表す文字列

  let output = document.querySelector("#output2");
  output = output.value
  let pointElement = document.querySelector("#point");

  pointer = document.getElementById("#output2").value.length
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

function autoWritingLoop(maxCount, i, time) { //1秒ごとに文字を自動表示
  if (i <= maxCount) {
    autoWriting(i);
    setTimeout(function () { autoWritingLoop(maxCount, ++i, time) }, time);  //1000ミリ秒
  }

  else if (maxCount < i) {
      alert("finish!");
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



function go_page(next_page, delet_page) {
  console.log(next_page, delet_page);
  document.getElementById("page2").style.display = "block";
  document.getElementById("page1").scroll.display = "none";
  console.log("hello");
}



function main() {
  document.body.addEventListener("keyup", keyup); // body要素で起きるキーイベントのハンドラを設定
  document.body.focus(); // body要素にキーボードフォーカスを移動

  let questionElement = document.querySelector("#question");
  questionElement.textContent = question;
  // autoWritingLoop(question.length, 0);
}



window.addEventListener("load", main);　//これがあると全部をロード(読み込んだ)した後に動く






