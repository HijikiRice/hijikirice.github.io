/*
function checkYear(){
  let year = document.querySelector("#year");
  let yearNUmber = Number(year.value);
  let answer = document.querySelector("#answer");

  if(yearNumber % 400 == 0){
    answer.innerHTML = "閏年";
  }else if(yearNumber % 100 == 0){
    answer.innerHTML = "平年";
  }else if(yearNumber % 4 == 0){
    answer.innerHTML = "閏年";
  }else{
    answer.innerHTML = "平年";
  }
}
 */
function checkYear() {
  let yearNumber = Number(document.querySelector("#year").value);
  let result;
  // ここにif文を書いて、表示させたい文字列をresultに代入する
  if (yearNumber % 400 == 0) {
    result = "閏年";
  } else if (yearNumber % 100 == 0) {
    result = "平年";
  } else if (yearNumber % 4 == 0) {
    result = "閏年";
  } else {
    result = "平年";
  }
  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = result;
}