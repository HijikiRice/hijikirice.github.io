function checkAge() {
  let userInput = document.querySelector("#age").value;
  let result;

  if((age) < 20 && Number(age) > 0){
    result = "未成年";
  }else if(Number(age) >= 20 && Number(age) < 65){
    result = "成人";
  }else if(Number(age) >= 65){
    result = "高齢者";
  }else if(Number(age) <= 0){
    result = "エラー";
  }

  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}



/*
/記述例

function checkAge() {
  let age = document.querySelector("#age").value;
  let result;
  // ここにif文を書いて、表示させたい文字列をresultに代入する
  if(Number(age) <= 0){
    result = "エラー";
  }else if(Number(age) < 20){
    result = "未成年";
  }else if(Number(age) < 65){
    result = "成人";
  }else{
    result = "高齢者";
  }
  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}
*/