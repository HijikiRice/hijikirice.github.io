/* whileの練習
console.log("a")

let i = 0;
while(i < 1){
  console.log("くりかえし" +i)
  i ++;
}
*/

/*
let num = 1;
while(true){
  num = num * 2;
  if(num >= 10000){break;
  }
}
console.log(`num: ${num}`)
 */

let num = 0;
while(num < 100){
  num++;
  if(num % 3 != 0){
    continue;
  }
  console.log((`num: ${num}は3の倍数`));
}