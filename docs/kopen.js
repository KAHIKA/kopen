/* Goal
1. [1]でコメントになっている部分を、戻し、結果を確認してください
2. [2]でコメントになっている部分を、戻し、結果を確認してください
*/

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

window.addEventListener("load", main);