/* Goal
1. [1]でコメントになっている部分を、戻し、結果を確認してください
2. [2]でコメントになっている部分を、戻し、結果を確認してください
*/

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
  // output.textContent = typedKey;
  if (output[point] == question[point]) {
    point = point + 1;
  }
  pointElement.textContent = point;
}

function main() {
  document.body.addEventListener("keyup", keyup); // body要素で起きるキーイベントのハンドラを設定
  document.body.focus(); // body要素にキーボードフォーカスを移動

  let questionElement = document.querySelector("#question");
  questionElement.textContent = question;
}

// function enableInput() {
//   let typedKey = document.querySelector("#source");
//   input.addEventListener("keyup", update);

// }

window.addEventListener("load", main);　//これがあると全部をロード(読み込んだ)した後に動く


/*function update(event) {
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

window.addEventListener("load", main);
*/