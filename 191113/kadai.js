function checkAge() {
  let userInput = document.querySelector("#age").value;
  let result;
  if(0 < userInput&&userInput < 20){
    result = "未成年";
  }else if(20 <= userInput&&userInput < 65){
    result = "成人";
  }else if(65 <= userInput){
    result = "高齢者";
  }else if(userInput <= 0){
    result = "エラー";
  }
  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}