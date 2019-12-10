let answer = document.querySelector("#answer");
let answerHTML = answer.innerHTML;

function userSelectAll() {
  console.log("Allが押された");
  answerHTML = "三郎BOTが押された";
}

function userSelectSaburou() {
  console.log("三郎BOTが押された");
  answerHTML = "三郎BOTが押された";
}

function userSelectJirou() {
  console.log("次郎が押された");
  answerHTML = "次郎BOTが押された";
}

function userSelectTarou() {
  console.log("太郎が押された");
  answerHTML = "太郎BOTが押された";
}