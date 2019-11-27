console.log("FizzBuzz");
function doFizzBuzz(){
  console.log("実行ボタンが押された");
  let i = 1;
  let answer = document.querySelector("#answer");
  let output;

  while(i <= 100){
    if(i % 3 == 0 && i % 5 == 0) {
      answer.innerHTML = answer.innerHTML + "<br>" + "FizzBuzz";
    }else if(i % 3 == 0){
      answer.innerHTML = answer.innerHTML + "<br>" + "Fizz";
    }else if(i % 5 == 0){
      answer.innerHTML = answer.innerHTML + "<br>" + "Buzz";
    }else{
      answer.innerHTML = answer.innerHTML + "<br>" + i;
    }
    i++;
  }
}