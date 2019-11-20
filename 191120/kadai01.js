function doLoop() {
  let i = 0;
  let sum =0;
  while(i <= 10000){
    sum = sum + i;
    //50000を超えたとき
    if(sum >= 50000){
      break;
    }
    i++;
    console.log("50000を超えた")
  }

  let answer = document.querySelector("#answer");
  answer.innerHTML = sum;
}