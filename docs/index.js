let point = 0;
let question = "Hello"

/**
 keyイベントのハンドラ
 */

function keyup(event){
  let typedKey = event.key; // 入力されたキーを表す文字列
  let output = document.querySelector("#output");
//  let pointElement = document.querySelector("#point");
  output.textContent = typedKey;
  if(typedKey == question[point]){
    point = point + 1;
  }
//  pointElement.textContent = point;
}

/*
文字自動文字表示部分
*/

function autoWriting(index) { 
  let toShow = question.slice(0, index);  //slice配列から一部を取り出して新しい配列を作る。0からindexまで
  // 以下は適切に直してください
  console.log(toShow);
  let element = document.querySelector("#question");
  element.textContent = toShow;
}

function autoWritingLoop(maxCount, i) { //1秒ごとに文字を自動表示
  if (i <= maxCount) {
    autoWriting(i);
    setTimeout(function() {autoWritingLoop(maxCount, ++i)}, 1000);  //1000ミリ秒
  }
}
//autoWritingLoop(文字数, 0)


function main(){
  document.body.addEventListener("keyup", keyup); // body要素で起きるキーイベントのハンドラを設定
  document.body.focus(); // body要素にキーボードフォーカスを移動
  
  let questionElement = document.querySelector("#question");
  questionElement.textContent = question;
  autoWritingLoop(question.length, 0);
}


window.addEventListener("load", main);

/*

function update(event) {
  let output = document.querySelector("#dest");
  let input = event.target;
  output.value = input.value;
}

function enableInput() {
  let input = document.querySelector("#source");
  input.addEventListener("keyup", update);
}

function reset() {
  let input = document.querySelector("#source");
  let output = document.querySelector("#dest");
  input.value = "";
  output.value = "";
}

function enableResetButton() {
  let button = document.querySelector("button");
  button.addEventListener("click", reset);
}

function main() {
  
    enableResetButton();
  
    enableInput();
  
};
*/

